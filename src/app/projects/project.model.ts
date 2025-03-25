export interface Project {
    name: string,
    description: string,
    link: string,
    logo: string,
    detailedDescription: string[],
    images?: string[]; // New optional array for project images
  }