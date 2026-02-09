import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({ 
  title = "Probbity Tech - Software Development Company | Custom Web & Mobile Apps",
  description = "Leading software development company specializing in custom web applications, mobile app development, and business solutions. Expert developers for startups and enterprises in Nigeria and globally.",
  keywords = "website development company, custom web application development, mobile app development company, business website developers, software development company for startups, web development Nigeria, custom software solutions, enterprise software development",
  ogImage = "/probbity-logo.png",
  canonical
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://probbity.com";
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Probbity Tech');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Probbity Tech', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

  }, [title, description, keywords, ogImage, currentUrl]);

  return null;
};

export default SEO;
