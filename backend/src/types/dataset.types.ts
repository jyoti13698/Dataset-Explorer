export interface IResource {
  name: string;
  format: string;
  url: string;
  size?: string;
}

export interface IDataset {
  title: string;
  slug: string;
  description: string;

  category: string;

  organization: string;

  tags: string[];

  resources: IResource[];

  license: string;

  updateFrequency: string;

  downloads: number;

  views: number;

  featured: boolean;

  status: "active" | "inactive";
}