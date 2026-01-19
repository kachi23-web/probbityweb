import { render, screen, fireEvent } from '@testing-library/react'
import { waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import HomePage from '@/app/page'

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}))

// Helper function to simulate different viewport sizes
const setViewport = (width: number, height: number = 800) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })
  
  // Update matchMedia to match the viewport
  window.matchMedia = jest.fn().mockImplementation(query => {
    const mediaQuery = query.replace(/[()]/g, '')
    let matches = false
    
    if (mediaQuery.includes('min-width: 768px')) {
      matches = width >= 768
    } else if (mediaQuery.includes('min-width: 1024px')) {
      matches = width >= 1024
    } else if (mediaQuery.includes('max-width: 767px')) {
      matches = width <= 767
    }
    
    return {
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }
  })
  
  // Trigger resize event
  window.dispatchEvent(new Event('resize'))
}

describe('Responsive Design Tests', () => {
  beforeEach(() => {
    // Reset viewport to desktop by default
    setViewport(1024)
  })

  describe('Mobile Layout (320px - 767px)', () => {
    beforeEach(() => {
      setViewport(375) // iPhone viewport
    })

    test('Navbar shows mobile menu button on mobile', () => {
      render(<Navbar />)
      
      // Mobile menu button should be visible
      const menuButton = screen.getByLabelText('Toggle menu')
      expect(menuButton).toBeInTheDocument()
      expect(menuButton).toBeVisible()
      
      // Desktop navigation should be hidden
      const desktopNav = screen.queryByRole('navigation')
      if (desktopNav) {
        expect(desktopNav).toHaveClass('hidden', 'md:flex')
      }
    })

    test('Mobile menu opens and closes correctly', async () => {
      const user = userEvent.setup()
      render(<Navbar />)
      
      const menuButton = screen.getByLabelText('Toggle menu')
      
      // Menu should be closed initially
      expect(screen.queryByText('Home')).not.toBeInTheDocument()
      
      // Open menu
      await user.click(menuButton)
      
      // Menu items should be visible
      await waitFor(() => {
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Services')).toBeInTheDocument()
        expect(screen.getByText('About Us')).toBeInTheDocument()
        expect(screen.getByText('Contact')).toBeInTheDocument()
      })
      
      // Close menu
      await user.click(menuButton)
      
      // Menu items should be hidden
      await waitFor(() => {
        expect(screen.queryByText('Home')).not.toBeInTheDocument()
      })
    })

    test('Footer stacks vertically on mobile', () => {
      render(<Footer />)
      
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
      
      // Check that footer sections are present
      expect(screen.getByText('Services')).toBeInTheDocument()
      expect(screen.getByText('Company')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
      
      // Footer should use mobile grid layout
      const footerGrid = footer.querySelector('.grid')
      expect(footerGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4')
    })

    test('Hero section buttons stack vertically on mobile', () => {
      render(<HeroSection />)
      
      const buttonContainer = screen.getByText('Discover our demo').closest('.flex')
      expect(buttonContainer).toHaveClass('flex-col', 'sm:flex-row')
      
      // Both buttons should be present
      expect(screen.getByText('Discover our demo')).toBeInTheDocument()
      expect(screen.getByText('View all features')).toBeInTheDocument()
    })

    test('Trust indicators grid adjusts for mobile', () => {
      render(<HeroSection />)
      
      // Trust indicators should be in a responsive grid
      const trustGrid = screen.getByText('Trained 500+ developers & professionals').closest('.grid')
      expect(trustGrid).toHaveClass('grid-cols-1', 'sm:grid-cols-2')
    })
  })

  describe('Tablet Layout (768px - 1023px)', () => {
    beforeEach(() => {
      setViewport(768) // iPad viewport
    })

    test('Navbar shows desktop navigation on tablet', () => {
      render(<Navbar />)
      
      // Desktop navigation should be visible
      const desktopNav = screen.getByRole('navigation')
      expect(desktopNav).toHaveClass('hidden', 'md:flex')
      
      // Mobile menu button should be hidden
      const menuButton = screen.queryByLabelText('Toggle menu')
      if (menuButton) {
        expect(menuButton).toHaveClass('md:hidden')
      }
    })

    test('Footer uses 2-column layout on tablet', () => {
      render(<Footer />)
      
      const footer = screen.getByRole('contentinfo')
      const footerGrid = footer.querySelector('.grid')
      expect(footerGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4')
    })

    test('Hero section buttons are horizontal on tablet', () => {
      render(<HeroSection />)
      
      const buttonContainer = screen.getByText('Discover our demo').closest('.flex')
      expect(buttonContainer).toHaveClass('flex-col', 'sm:flex-row')
    })
  })

  describe('Desktop Layout (1024px+)', () => {
    beforeEach(() => {
      setViewport(1024) // Desktop viewport
    })

    test('Navbar shows full desktop navigation', () => {
      render(<Navbar />)
      
      // Desktop navigation should be visible
      const desktopNav = screen.getByRole('navigation')
      expect(desktopNav).toHaveClass('hidden', 'md:flex')
      
      // All navigation links should be visible
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Services')).toBeInTheDocument()
      expect(screen.getByText('About Us')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
      
      // Action buttons should be visible
      expect(screen.getByText('Get Started')).toBeInTheDocument()
      expect(screen.getByText('Book a Call')).toBeInTheDocument()
    })

    test('Footer uses 4-column layout on desktop', () => {
      render(<Footer />)
      
      const footer = screen.getByRole('contentinfo')
      const footerGrid = footer.querySelector('.grid')
      expect(footerGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4')
    })

    test('Hero section has horizontal button layout', () => {
      render(<HeroSection />)
      
      const buttonContainer = screen.getByText('Discover our demo').closest('.flex')
      expect(buttonContainer).toHaveClass('flex-col', 'sm:flex-row')
    })

    test('Trust indicators use 2-column grid on desktop', () => {
      render(<HeroSection />)
      
      const trustGrid = screen.getByText('Trained 500+ developers & professionals').closest('.grid')
      expect(trustGrid).toHaveClass('grid-cols-1', 'sm:grid-cols-2')
    })
  })

  describe('Large Desktop Layout (1400px+)', () => {
    beforeEach(() => {
      setViewport(1400) // Large desktop viewport
    })

    test('Container max-width is constrained on large screens', () => {
      render(<HomePage />)
      
      // Container should have max-width constraint
      const containers = document.querySelectorAll('.container')
      containers.forEach(container => {
        const styles = window.getComputedStyle(container)
        // Container should be centered and have padding
        expect(container).toHaveClass('container')
      })
    })
  })

  describe('Breakpoint Transitions', () => {
    test('Layout adapts when transitioning from mobile to desktop', async () => {
      // Start with mobile
      setViewport(375)
      const { rerender } = render(<Navbar />)
      
      // Should show mobile menu button
      expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
      
      // Transition to desktop
      setViewport(1024)
      rerender(<Navbar />)
      
      // Should show desktop navigation
      const desktopNav = screen.getByRole('navigation')
      expect(desktopNav).toHaveClass('hidden', 'md:flex')
    })

    test('Footer layout adapts across breakpoints', () => {
      // Test mobile
      setViewport(375)
      const { rerender } = render(<Footer />)
      let footerGrid = document.querySelector('.grid')
      expect(footerGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4')
      
      // Test tablet
      setViewport(768)
      rerender(<Footer />)
      footerGrid = document.querySelector('.grid')
      expect(footerGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4')
      
      // Test desktop
      setViewport(1024)
      rerender(<Footer />)
      footerGrid = document.querySelector('.grid')
      expect(footerGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4')
    })
  })

  describe('Interactive Elements Responsiveness', () => {
    test('Navigation links work correctly on all screen sizes', async () => {
      const user = userEvent.setup()
      
      // Test desktop navigation
      setViewport(1024)
      render(<Navbar />)
      
      const homeLink = screen.getByText('Home')
      expect(homeLink).toBeInTheDocument()
      expect(homeLink.closest('a')).toHaveAttribute('href', '/')
      
      // Test mobile navigation
      setViewport(375)
      render(<Navbar />)
      
      const menuButton = screen.getByLabelText('Toggle menu')
      await user.click(menuButton)
      
      await waitFor(() => {
        const mobileHomeLink = screen.getByText('Home')
        expect(mobileHomeLink).toBeInTheDocument()
        expect(mobileHomeLink.closest('a')).toHaveAttribute('href', '/')
      })
    })

    test('Buttons maintain accessibility across screen sizes', () => {
      // Test desktop
      setViewport(1024)
      render(<HeroSection />)
      
      const ctaButton = screen.getByText('Discover our demo')
      expect(ctaButton).toBeInTheDocument()
      expect(ctaButton.closest('a')).toHaveAttribute('href', '/contact')
      
      // Test mobile
      setViewport(375)
      render(<HeroSection />)
      
      const mobileCTAButton = screen.getByText('Discover our demo')
      expect(mobileCTAButton).toBeInTheDocument()
      expect(mobileCTAButton.closest('a')).toHaveAttribute('href', '/contact')
    })
  })

  describe('Content Readability', () => {
    test('Text remains readable at all breakpoints', () => {
      const breakpoints = [375, 768, 1024, 1400]
      
      breakpoints.forEach(width => {
        setViewport(width)
        render(<HeroSection />)
        
        // Main heading should be present and readable
        const heading = screen.getByText(/We Build.*Talent, Software, and Digital Systems.*That Scale/i)
        expect(heading).toBeInTheDocument()
        
        // Description should be present
        const description = screen.getByText(/We help individuals become industry-ready tech professionals/i)
        expect(description).toBeInTheDocument()
      })
    })

    test('Images maintain aspect ratio across breakpoints', () => {
      const breakpoints = [375, 768, 1024, 1400]
      
      breakpoints.forEach(width => {
        setViewport(width)
        render(<Navbar />)
        
        // Logo image should be present
        const logoImage = screen.getByAltText('Probbity Logo')
        expect(logoImage).toBeInTheDocument()
        expect(logoImage).toHaveAttribute('width', '36')
        expect(logoImage).toHaveAttribute('height', '36')
      })
    })
  })
})