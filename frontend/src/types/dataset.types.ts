export interface Dataset {
  _id: string;
  title: string;
  description: string;
  category: string;
  organization: string;
  tags: string[];
  year: number;
  featured: boolean;
}