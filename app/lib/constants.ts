import { Feature, Testimonial, NavItem, BusinessInfo } from '@/app/types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'InnovateTech Solutions',
  tagline: 'Transforming Ideas into Digital Excellence',
  description: 'We deliver cutting-edge solutions that drive business growth and innovation. Our team of experts combines creativity with technical excellence to bring your vision to life.',
  email: 'hello@innovatetech.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Street, Tech City, TC 12345',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Scalable Architecture',
    description: 'Built with modern technologies that grow with your business needs.',
    icon: '🚀',
  },
  {
    id: '2',
    title: 'Performance Optimized',
    description: 'Lightning-fast load times and smooth user experiences guaranteed.',
    icon: '⚡',
  },
  {
    id: '3',
    title: 'Security First',
    description: 'Enterprise-grade security measures to protect your data and users.',
    icon: '🔒',
  },
  {
    id: '4',
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our dedicated support team.',
    icon: '💬',
  },
  {
    id: '5',
    title: 'Custom Solutions',
    description: 'Tailored to your specific requirements and business objectives.',
    icon: '🎨',
  },
  {
    id: '6',
    title: 'Analytics & Insights',
    description: 'Comprehensive data analytics to drive informed decision-making.',
    icon: '📊',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'InnovateTech transformed our digital presence. Their expertise and attention to detail exceeded all expectations.',
    avatar: '👩‍💼',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Global Solutions',
    content: 'The best investment we made. The platform is fast, reliable, and beautifully designed. Highly recommended!',
    avatar: '👨‍💻',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateHub',
    content: 'Working with InnovateTech was seamless. They understood our vision and delivered beyond our expectations.',
    avatar: '👩‍🎨',
  },
];

