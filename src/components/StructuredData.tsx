import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'breadcrumb';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    let structuredData: any = {};

    switch (type) {
      case 'organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Probbity Tech",
          "url": "https://probbity.com",
          "logo": "https://probbity.com/probbity-logo.png",
          "description": "Leading software development company specializing in custom web applications, mobile app development, and business solutions.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ifite",
            "addressLocality": "Awka",
            "addressRegion": "Anambra",
            "addressCountry": "NG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+234-815-666-9858",
            "contactType": "Customer Service",
            "email": "hello@probbity.com",
            "availableLanguage": ["English"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/probbity",
            "https://twitter.com/probbity"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
          },
          "knowsAbout": [
            "Web Development",
            "Mobile App Development",
            "Custom Software Development",
            "SaaS Development",
            "Enterprise Software Solutions"
          ]
        };
        break;

      case 'website':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Probbity Tech",
          "url": "https://probbity.com",
          "description": "Leading software development company specializing in custom web applications, mobile app development, and business solutions.",
          "publisher": {
            "@type": "Organization",
            "name": "Probbity Tech"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://probbity.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
        break;

      case 'service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Software Development",
          "provider": {
            "@type": "Organization",
            "name": "Probbity Tech",
            "url": "https://probbity.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Web Application Development",
                  "description": "Full-stack web applications with modern frameworks and scalable architecture"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "Cross-platform mobile applications for iOS and Android"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SaaS Platform Development",
                  "description": "End-to-end SaaS development with subscription management and multi-tenancy"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "MVP Development",
                  "description": "Rapid prototyping and MVP development for startups"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Enterprise Software Solutions",
                  "description": "Custom business applications and workflow automation"
                }
              }
            ]
          }
        };
        break;

      case 'breadcrumb':
        structuredData = data || {};
        break;
    }

    // Create or update script tag
    const scriptId = `structured-data-${type}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;
