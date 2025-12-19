'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const PARTICLE_COUNT = 12;
const CURSOR_SIZE = 10;
const PARTICLE_LIFETIME = 30;

export default function GradientCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const smoothRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isActiveRef = useRef(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setMounted(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const isTouchOnlyDevice = () => {
      if (typeof navigator === 'undefined') return false;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const hasMouse = window.matchMedia('(pointer: fine)').matches;
      return hasTouch && !hasMouse;
    };

    if (prefersReducedMotion || isTouchOnlyDevice()) {
      return;
    }

    setIsEnabled(true);
    document.body.style.cursor = 'none';
  }, []);

  useEffect(() => {
    if (!isEnabled || !mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const initCenter = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseRef.current = { x: centerX, y: centerY };
      smoothRef.current = { x: centerX, y: centerY };
    };
    
    initCenter();

    const lerp = (start: number, end: number, factor: number): number => {
      return start + (end - start) * factor;
    };

    const updateMousePosition = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      isActiveRef.current = true;
    };

    const handleMouseLeave = () => {
      isActiveRef.current = false;
    };

    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.5;
      return {
        x: smoothRef.current.x,
        y: smoothRef.current.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: PARTICLE_LIFETIME,
        maxLife: PARTICLE_LIFETIME,
        size: 2 + Math.random() * 3,
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);

      smoothRef.current.x = lerp(smoothRef.current.x, mouseRef.current.x, 0.2);
      smoothRef.current.y = lerp(smoothRef.current.y, mouseRef.current.y, 0.2);

      if (isActiveRef.current) {
        if (particlesRef.current.length < PARTICLE_COUNT) {
          particlesRef.current.push(createParticle());
        }
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        
        const dx = smoothRef.current.x - particle.x;
        const dy = smoothRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const attraction = 0.02;
        particle.vx += dx * attraction;
        particle.vy += dy * attraction;
        
        particle.vx *= 0.92;
        particle.vy *= 0.92;
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life <= 0 || distance > 200) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        const lifeRatio = particle.life / particle.maxLife;
        const opacity = lifeRatio * 0.8;
        const size = particle.size * lifeRatio;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (i > 0) {
          const prevParticle = particlesRef.current[i - 1];
          const lineOpacity = (opacity + (prevParticle.life / prevParticle.maxLife) * 0.8) / 2 * 0.3;
          ctx.save();
          ctx.globalAlpha = lineOpacity;
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(prevParticle.x, prevParticle.y);
          ctx.stroke();
          ctx.restore();
        }
      }

      if (smoothRef.current.x >= 0 && smoothRef.current.y >= 0 && smoothRef.current.x <= width && smoothRef.current.y <= height) {
        ctx.save();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        ctx.beginPath();
        ctx.arc(smoothRef.current.x, smoothRef.current.y, CURSOR_SIZE, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(smoothRef.current.x, smoothRef.current.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (!isActiveRef.current && particlesRef.current.length === 0) {
        particlesRef.current = [];
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      document.body.style.cursor = '';
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isEnabled, mounted]);

  if (!mounted || !isEnabled) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        position: 'fixed',
        top: '0px',
        left: '0px',
      }}
    />
  );
}
