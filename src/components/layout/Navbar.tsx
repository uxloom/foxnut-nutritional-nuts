
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/3d2aea68-aa94-4ca9-8734-5faee44db149.png" 
            alt="Foxnut Logo" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'text-base font-medium transition-colors duration-300 relative group',
                location.pathname === item.path
                  ? 'text-brand-500'
                  : 'text-gray-700 hover:text-brand-500'
              )}
            >
              {item.name}
              <span className={cn(
                'absolute left-0 right-0 bottom-0 h-0.5 bg-brand-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
                location.pathname === item.path && 'scale-x-100'
              )} />
            </Link>
          ))}
          <Button className="button-primary">Enquire Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-brand-500 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container-custom flex flex-col space-y-6 py-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'text-xl font-medium transition-colors duration-300 py-2',
                location.pathname === item.path
                  ? 'text-brand-500'
                  : 'text-gray-700 hover:text-brand-500'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className="button-primary mt-4 w-full">Enquire Now</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
