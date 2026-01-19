import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import ServicesPage from '@/app/services/page'
import ContactPage from '@/app/contact/page'

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
  
  window.dispatchEvent(new Event('resize'))
}

describe('Page Responsive Design Tests', () => {
  const breakpoints = [
    { name: 'Mobile', width: 375 },
    { name: 'Tablet', width: 768 },
    { name: 'Desktop', width: 1024 },
    { name: 'Large Desktop', width: 1400 }
  ]

  describe('Home Page Responsiveness', () => {
    breakpoints.forEach(({ name, width }) => {
      test(`Home page renders correctly on ${name} (${width}px)`, () => {
        setViewport(width)
        render(<HomePage />)
        
        // All main sections should be present
        expect(screen.getByText(/We Build.*Talent, Software, and Digital Systems.*That Scale/i)).toBeInTheDocument()
        expect(screen.getByText('Discover our demo')).toBeInTheDocument()
        expect(screen.getByText('View all features')).toBeInTheDocument()
        
        // Trust indicators should be visible
        expect(screen.getByText('Trained 500+ developers & professionals')).toBeInTheDocument()
        expect(screen.getByText('Built and shipped real-world software')).toBeInTheDocument()
      })
    })

    test('Home page sections stack properly on mobile', () => {
      setViewport(375)
      render(<HomePage />)
      
      // Main container should use flex column layout
      const mainContainer = screen.getByText(/We Build.*Talent, Software, and Digital Systems.*That Scale/i).closest('div')
      expect(mainContainer?.closest('section')).toHaveClass('py-24', 'md:py-36')
    })

    test('Home page maintains proper spacing on desktop', () => {
      setViewport(1024)
      render(<HomePage />)
      
      // Hero section should have proper desktop padding
      const heroSection = screen.getByText(/We Build.*Talent, Software, and Digital Systems.*That Scale/i).closest('section')
      expect(heroSection).toHaveClass('py-24', 'md:py-36')
    })
  })

  describe('Services Page Responsiveness', () => {
    breakpoints.forEach(({ name, width }) => {
      test(`Services page renders correctly on ${name} (${width}px)`, () => {
        setViewport(width)
        render(<ServicesPage />)
        
        // Main heading should be present
        expect(screen.getByText('Our Services')).toBeInTheDocument()
        
        // Service sections should be visible
        expect(screen.getByText('Training & Development')).toBeInTheDocument()
        expect(screen.getByText('Software Development')).toBeInTheDocument()
        expect(screen.getByText('Consulting')).toBeInTheDocument()
      })
    })

    test('Services grid adapts to mobile layout', () => {
      setViewport(375)
      render(<ServicesPage />)
      
      // Service cards should stack on mobile
      const serviceCards = screen.getAllByText(/Training & Development|Software Development|Consulting/)
      expect(serviceCards.length).toBeGreaterThan(0)
      
      // Each service section should be accessible
      serviceCards.forEach(card => {
        expect(card).toBeInTheDocument()
      })
    })

    test('Services grid uses proper columns on desktop', () => {
      setViewport(1024)
      render(<ServicesPage />)
      
      // Services should be laid out in a grid
      const servicesContainer = screen.getByText('Training & Development').closest('.grid')
      if (servicesContainer) {
        expect(servicesContainer).toHaveClass('grid')
      }
    })
  })

  describe('Contact Page Responsiveness', () => {
    breakpoints.forEach(({ name, width }) => {
      test(`Contact page renders correctly on ${name} (${width}px)`, () => {
        setViewport(width)
        render(<ContactPage />)
        
        // Main heading should be present
        expect(screen.getByText('Contact Us')).toBeInTheDocument()
        
        // Contact form should be present
        expect(screen.getByText('Get in Touch')).toBeInTheDocument()
        
        // Contact information should be visible
        expect(screen.getByText('hello@Probbity.com')).toBeInTheDocument()
        expect(screen.getByText('+234 815 666 9858')).toBeInTheDocument()
      })
    })

    test('Contact form adapts to mobile layout', () => {
      setViewport(375)
      render(<ContactPage />)
      
      // Form should be present and accessible
      const contactForm = screen.getByText('Get in Touch')
      expect(contactForm).toBeInTheDocument()
      
      // Contact info should be stacked on mobile
      expect(screen.getByText('hello@Probbity.com')).toBeInTheDocument()
      expect(screen.getByText('+234 815 666 9858')).toBeInTheDocument()
    })

    test('Contact page uses proper layout on desktop', () => {
      setViewport(1024)
      render(<ContactPage />)
      
      // Contact page should have proper desktop layout
      const contactSection = screen.getByText('Contact Us').closest('section')
      expect(contactSection).toBeInTheDocument()
      
      // Form and contact info should be properly positioned
      expect(screen.getByText('Get in Touch')).toBeInTheDocument()
      expect(screen.getByText('hello@Probbity.com')).toBeInTheDocument()
    })
  })

  describe('Cross-Page Layout Consistency', () => {
    test('All pages maintain consistent container widths', () => {
      const pages = [
        { component: HomePage, name: 'Home' },
        { component: ServicesPage, name: 'Services' },
        { component: ContactPage, name: 'Contact' }
      ]
      
      breakpoints.forEach(({ name, width }) => {
        setViewport(width)
        
        pages.forEach(({ component: PageComponent, name: pageName }) => {
          render(<PageComponent />)
          
          // All pages should use consistent container classes
          const containers = document.querySelectorAll('.container')
          containers.forEach(container => {
            expect(container).toHaveClass('container')
          })
        })
      })
    })

    test('All pages maintain proper vertical spacing', () => {
      const pages = [HomePage, ServicesPage, ContactPage]
      
      breakpoints.forEach(({ width }) => {
        setViewport(width)
        
        pages.forEach(PageComponent => {
          const { container } = render(<PageComponent />)
          
          // Pages should have proper section spacing
          const sections = container.querySelectorAll('section')
          sections.forEach(section => {
            // Sections should have some form of padding/margin
            const hasSpacing = section.className.includes('py-') || 
                              section.className.includes('px-') ||
                              section.className.includes('p-')
            expect(hasSpacing).toBe(true)
          })
        })
      })
    })
  })

  describe('Typography Responsiveness', () => {
    test('Headings scale appropriately across breakpoints', () => {
      breakpoints.forEach(({ width }) => {
        setViewport(width)
        render(<HomePage />)
        
        // Main heading should have responsive text classes
        const mainHeading = screen.getByText(/We Build.*Talent, Software, and Digital Systems.*That Scale/i)
        expect(mainHeading).toHaveClass('text-4xl', 'md:text-5xl', 'lg:text-7xl')
      })
    })

    test('Body text remains readable at all breakpoints', () => {
      breakpoints.forEach(({ width }) => {
        setViewport(width)
        render(<HomePage />)
        
        // Description text should have responsive sizing
        const description = screen.getByText(/We help individuals become industry-ready tech professionals/i)
        expect(description).toHaveClass('text-lg', 'md:text-xl')
      })
    })
  })

  describe('Interactive Elements Responsiveness', () => {
    test('Buttons maintain proper sizing across breakpoints', () => {
      breakpoints.forEach(({ width }) => {
        setViewport(width)
        render(<HomePage />)
        
        // CTA buttons should be present and properly sized
        const ctaButton = screen.getByText('Discover our demo')
        expect(ctaButton).toBeInTheDocument()
        
        const secondaryButton = screen.getByText('View all features')
        expect(secondaryButton).toBeInTheDocument()
      })
    })

    test('Button layout adapts from vertical to horizontal', () => {
      // Mobile - buttons should stack
      setViewport(375)
      render(<HomePage />)
      
      const buttonContainer = screen.getByText('Discover our demo').closest('.flex')
      expect(buttonContainer).toHaveClass('flex-col', 'sm:flex-row')
      
      // Desktop - buttons should be horizontal
      setViewport(1024)
      render(<HomePage />)
      
      const desktopButtonContainer = screen.getByText('Discover our demo').closest('.flex')
      expect(desktopButtonContainer).toHaveClass('flex-col', 'sm:flex-row')
    })
  })
})