/**
 * Content Validation Utility for Final Consistency Check
 * Validates transformed content against requirements 1.4, 2.5, 3.4
 */

export interface ValidationResult {
  passed: boolean;
  issues: string[];
  section: string;
}

export interface ContentValidationReport {
  overallPassed: boolean;
  sectionResults: ValidationResult[];
  summary: {
    totalSections: number;
    passedSections: number;
    failedSections: number;
    criticalIssues: string[];
  };
}

// Marketing terminology that should be eliminated
const MARKETING_TERMS = [
  'campaign', 'campaigns', 'boost', 'engagement', 'leads', 'conversion',
  'roi', 'ctr', 'impressions', 'reach', 'targeting', 'audience segmentation',
  'brand awareness', 'viral', 'trending', 'buzz', 'hype', 'game-changer',
  'revolutionary', 'cutting-edge', 'next-level', 'world-class', 'premium',
  'exclusive', 'limited time', 'act now', 'don\'t miss out', 'amazing',
  'incredible', 'unbelievable', 'fantastic', 'awesome', 'epic'
];

// Required software company focus areas
const SOFTWARE_FOCUS_AREAS = [
  'training', 'career development', 'software development', 'consulting',
  'digital transformation', 'ai', 'devops', 'scalable systems', 'branding',
  'digital products', 'backend', 'frontend', 'fullstack', 'cloud',
  'architecture', 'engineering', 'mentorship', 'technical'
];

// Required target audiences
const TARGET_AUDIENCES = [
  'individuals', 'career switchers', 'developers', 'tech professionals',
  'startups', 'founders', 'smes', 'enterprises', 'institutions', 'organizations'
];

// Software-focused CTAs
const SOFTWARE_CTAS = [
  'start your tech journey', 'build your product with us', 
  'talk to a solutions engineer', 'explore training programs',
  'start your software journey', 'discuss your project'
];

/**
 * Validates tone consistency and technical accuracy
 */
export function validateToneConsistency(content: string, sectionName: string): ValidationResult {
  const issues: string[] = [];
  const lowerContent = content.toLowerCase();

  // Check for marketing buzzwords
  const foundMarketingTerms = MARKETING_TERMS.filter(term => 
    lowerContent.includes(term.toLowerCase())
  );
  
  if (foundMarketingTerms.length > 0) {
    issues.push(`Marketing terminology found: ${foundMarketingTerms.join(', ')}`);
  }

  // Check for professional, technical tone indicators
  const technicalIndicators = [
    'software', 'development', 'engineering', 'architecture', 'scalable',
    'systems', 'technical', 'production', 'deployment', 'infrastructure'
  ];
  
  const foundTechnicalTerms = technicalIndicators.filter(term =>
    lowerContent.includes(term)
  ).length;

  // Different requirements for different sections
  const minTechnicalTerms = sectionName === 'Header' || sectionName === 'Footer' ? 1 : 2;
  
  if (foundTechnicalTerms < minTechnicalTerms) {
    issues.push('Insufficient technical terminology for software company positioning');
  }

  // Check for Africa-rooted, global-standard messaging (not required for navigation)
  if (sectionName !== 'Header') {
    const trustIndicators = ['experience', 'expertise', 'proven', 'delivered', 'scalable'];
    const foundTrustIndicators = trustIndicators.filter(term =>
      lowerContent.includes(term)
    ).length;

    if (foundTrustIndicators < 1) {
      issues.push('Missing trust-building language');
    }
  }

  return {
    passed: issues.length === 0,
    issues,
    section: sectionName
  };
}

/**
 * Validates software company positioning completeness
 */
export function validateSoftwarePositioning(content: string, sectionName: string): ValidationResult {
  const issues: string[] = [];
  const lowerContent = content.toLowerCase();

  // Check for software company focus areas
  const foundFocusAreas = SOFTWARE_FOCUS_AREAS.filter(area =>
    lowerContent.includes(area.toLowerCase())
  );

  // Different requirements for different sections
  const minFocusAreas = sectionName === 'Header' || sectionName === 'Footer' ? 1 : 3;
  
  if (foundFocusAreas.length < minFocusAreas) {
    issues.push(`Insufficient software focus areas coverage. Found: ${foundFocusAreas.join(', ')}`);
  }

  // Check for target audience representation (for relevant sections)
  if (sectionName === 'Hero' || sectionName === 'About' || sectionName === 'Services') {
    const foundAudiences = TARGET_AUDIENCES.filter(audience =>
      lowerContent.includes(audience.toLowerCase())
    );

    if (foundAudiences.length < 2) {
      issues.push(`Insufficient target audience representation. Found: ${foundAudiences.join(', ')}`);
    }
  }

  return {
    passed: issues.length === 0,
    issues,
    section: sectionName
  };
}

/**
 * Validates CTA transformation to software-focused messaging
 */
export function validateCTATransformation(content: string, sectionName: string): ValidationResult {
  const issues: string[] = [];
  const lowerContent = content.toLowerCase();

  // Check for software-focused CTAs
  const foundSoftwareCTAs = SOFTWARE_CTAS.filter(cta =>
    lowerContent.includes(cta.toLowerCase())
  );

  // Check for old marketing CTAs that should be eliminated
  const marketingCTAs = [
    'run campaigns', 'boost engagement', 'get more leads', 'increase conversions',
    'grow your audience', 'maximize roi', 'drive traffic'
  ];

  const foundMarketingCTAs = marketingCTAs.filter(cta =>
    lowerContent.includes(cta.toLowerCase())
  );

  if (foundMarketingCTAs.length > 0) {
    issues.push(`Marketing CTAs still present: ${foundMarketingCTAs.join(', ')}`);
  }

  // For sections that should have CTAs, ensure they're software-focused
  const ctaSections = ['Hero', 'Services', 'Pricing', 'Header', 'Footer'];
  if (ctaSections.includes(sectionName) && foundSoftwareCTAs.length === 0) {
    issues.push('No software-focused CTAs found in section that should have them');
  }

  return {
    passed: issues.length === 0,
    issues,
    section: sectionName
  };
}

/**
 * Validates layout preservation (structural elements)
 */
export function validateLayoutPreservation(
  originalStructure: Record<string, unknown>, 
  transformedContent: string, 
  sectionName: string
): ValidationResult {
  const issues: string[] = [];

  // This is a simplified check - in a real implementation, you'd compare
  // actual DOM structures or component props
  
  // Check for presence of key structural elements based on section
  const structuralChecks: Record<string, string[]> = {
    'Hero': ['h1', 'button', 'section'],
    'About': ['h2', 'progress', 'stats'],
    'Services': ['grid', 'card', 'image'],
    'Testimonials': ['rating', 'avatar', 'navigation'],
    'Pricing': ['price', 'features', 'button'],
    'WorkProcess': ['step', 'number', 'description']
  };

  const requiredElements = structuralChecks[sectionName] || [];
  const lowerContent = transformedContent.toLowerCase();

  requiredElements.forEach(element => {
    if (!lowerContent.includes(element)) {
      issues.push(`Missing structural element: ${element}`);
    }
  });

  return {
    passed: issues.length === 0,
    issues,
    section: sectionName
  };
}

/**
 * Comprehensive content validation
 */
export function validateContentConsistency(
  sections: Array<{ name: string; content: string; originalStructure?: Record<string, unknown> }>
): ContentValidationReport {
  const sectionResults: ValidationResult[] = [];

  sections.forEach(({ name, content, originalStructure }) => {
    // Tone consistency validation (Requirement 1.4, 2.5, 3.4)
    const toneResult = validateToneConsistency(content, name);
    if (!toneResult.passed) {
      sectionResults.push(toneResult);
    }

    // Software positioning validation (Requirement 2.5)
    const positioningResult = validateSoftwarePositioning(content, name);
    if (!positioningResult.passed) {
      sectionResults.push(positioningResult);
    }

    // CTA transformation validation (Requirement 3.4)
    const ctaResult = validateCTATransformation(content, name);
    if (!ctaResult.passed) {
      sectionResults.push(ctaResult);
    }

    // Layout preservation validation (Requirement 1.4)
    if (originalStructure) {
      const layoutResult = validateLayoutPreservation(originalStructure, content, name);
      if (!layoutResult.passed) {
        sectionResults.push(layoutResult);
      }
    }
  });

  const failedSections = sectionResults.filter(r => !r.passed);
  const criticalIssues = sectionResults
    .flatMap(r => r.issues)
    .filter(issue => 
      issue.includes('Marketing terminology') || 
      issue.includes('Marketing CTAs') ||
      issue.includes('Insufficient software focus')
    );

  return {
    overallPassed: sectionResults.every(r => r.passed),
    sectionResults,
    summary: {
      totalSections: sections.length,
      passedSections: sections.length - failedSections.length,
      failedSections: failedSections.length,
      criticalIssues
    }
  };
}