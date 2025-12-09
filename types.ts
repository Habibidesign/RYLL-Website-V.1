
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Deck {
  id: string;
  title: string;
  description: string;
  color: string; // Fallback color
  gradient?: string; // Tailwind gradient classes
  questions: string[];
  questionCount?: number;
  isComingSoon?: boolean;
}
