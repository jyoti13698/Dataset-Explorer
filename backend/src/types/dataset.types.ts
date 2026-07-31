export interface Resource {
  name: string;
  format: string;
  url: string;
  size: string;
}
export interface Dataset {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  organization: string;
  source: string;
  geography: string;
  year: number;
  tags: string[];
  resources: Resource[];
  license: string;
  updateFrequency: string;
  downloads: number;
  views: number;
  featured: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}