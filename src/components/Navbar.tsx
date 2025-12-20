export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 md:px-12 lg:px-16">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-black">Octhrix</h1>
        </div>

        {/* Navigation Links - Centered */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-6 md:flex lg:gap-8">
          <a href="#process" className="text-sm font-medium text-black transition-colors hover:text-gray-600">
            Our Process
          </a>
          <a href="#case-study" className="text-sm font-medium text-black transition-colors hover:text-gray-600">
            Case Study
          </a>
          <a href="#services" className="text-sm font-medium text-black transition-colors hover:text-gray-600">
            Our Services
          </a>
          <a href="#about" className="text-sm font-medium text-black transition-colors hover:text-gray-600">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-black transition-colors hover:text-gray-600">
            Contact
          </a>
        </div>

        {/* Right Side - Retainer Plan & Get Quote Button */}
        <div className="flex items-center gap-6">
          <span className="hidden text-sm font-medium text-black lg:inline-block">
            Retainer Plan
          </span>
          <button className="rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

