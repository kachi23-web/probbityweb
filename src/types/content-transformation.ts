/**
 * Core TypeScript interfaces for the Content Transformation System
 * Based on the design document specifications
 */

export interface Position {
  x: number;
  y: number;
}

export interface GridConfiguration {
  columns: number;
  rows: number;
  gap: number;
}

export interface HeadingStructure {
  level: number; // H1=1, H2=2, H3=3, etc.
  text: string;
  position: Position;
}

export interface CallToAction {
  text: string;
  type: 'primary' | 'secondary';
  position: Position;
  href?: string;
}

export interface ImageReference {
  src: string;
  alt: string;
  position: Position;
  aspectRatio: number;
}

export interface LayoutStructure {
  headingLevels: number[];
  ctaPositions: Position[];
  cardCount: number;
  gridLayout: GridConfiguration;
  paragraphLengths: number[];
}

export interface SectionContent {
  sectionType: string;
  headings: HeadingStructure[];
  paragraphs: string[];
  ctas: CallToAction[];
  images: ImageReference[];
  layoutConstraints: LayoutStructure;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  score: number; // 0-100 quality score
}

export interface TransformedContent {
  originalSection: SectionContent;
  transformedText: string[];
  preservedStructure: LayoutStructure;
  toneValidation: ValidationResult;
  requirementsMapped: string[];
}

export type SectionType = 
  | 'hero'
  | 'about'
  | 'services'
  | 'why-choose-us'
  | 'work-process'
  | 'stats'
  | 'testimonials'
  | 'pricing'
  | 'footer';

export interface TransformationRule {
  pattern: RegExp;
  replacement: string;
  category: 'marketing-to-software' | 'tone-adjustment' | 'terminology';
}