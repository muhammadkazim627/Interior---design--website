export interface Project {
  id: string;
  title: string;
  category: string;
  descriptor: string;
  image: string;
  year: string;
  area: string;
  scope: string;
  details: string;
  materials: string[];
  clientType: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  fullNarrative: string;
  deliverables: string[];
  icon: 'Compass' | 'Building2' | 'Lightbulb' | 'Sofa';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface MaterialDetail {
  name: string;
  origin: string;
  texture: string;
  usage: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  location: string;
  projectType: string;
  year: string;
}

export interface Statistic {
  value: string;
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface DriveAttachedFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  webViewLink?: string;
  iconLink?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  approxBudget: string;
  startDate: string;
  message: string;
  attachedDriveFiles: DriveAttachedFile[];
}
