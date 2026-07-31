import {
  Leaf,
  Briefcase,
  CloudRain,
  ShieldAlert,
  Landmark,
  GraduationCap,
  Zap,
  Trees,
  LandmarkIcon,
  HeartPulse,
  Building2,
  Users,
  Shield,
  Trophy,
  Cpu,
  RadioTower,
  Plane,
  Bus,
  PawPrint,
  Database
} from "lucide-react";

export const categoryInfo: Record<
  string,
  {
    icon: any;
    description: string;
  }
> = {
  Agriculture: {
    icon: Leaf,
    description:
      "Datasets related to farming, crop production, irrigation, soil health and agricultural development."
  },

  Business: {
    icon: Briefcase,
    description:
      "Business registrations, startups, industries, trade and commercial statistics."
  },

  Climate: {
    icon: CloudRain,
    description:
      "Weather conditions, rainfall, temperature trends and climate monitoring datasets."
  },

  "Disaster Management": {
    icon: ShieldAlert,
    description:
      "Earthquakes, floods, disaster preparedness, emergency response and risk management."
  },

  Economy: {
    icon: Landmark,
    description:
      "Economic indicators including GDP, inflation, employment and market statistics."
  },

  Education: {
    icon: GraduationCap,
    description:
      "Schools, colleges, literacy, examinations and educational performance datasets."
  },

  Energy: {
    icon: Zap,
    description:
      "Electricity generation, renewable energy, fuel consumption and power infrastructure."
  },

  Environment: {
    icon: Trees,
    description:
      "Air quality, forests, biodiversity, pollution control and environmental conservation."
  },

  Finance: {
    icon: LandmarkIcon,
    description:
      "Government budgets, financial reports, public spending and taxation data."
  },

  Healthcare: {
    icon: HeartPulse,
    description:
      "Hospitals, vaccination, diseases, healthcare infrastructure and public health records."
  },

  Infrastructure: {
    icon: Building2,
    description:
      "Roads, bridges, railways, buildings and infrastructure development projects."
  },

  Population: {
    icon: Users,
    description:
      "Population census, demographics, migration and household statistics."
  },

  "Public Safety": {
    icon: Shield,
    description:
      "Crime reports, emergency services, law enforcement and public safety indicators."
  },

  Sports: {
    icon: Trophy,
    description:
      "Sports facilities, athlete participation, tournaments and sporting infrastructure."
  },

  Technology: {
    icon: Cpu,
    description:
      "Digital services, internet usage, AI, software, innovation and technology adoption."
  },

  Telecommunications: {
    icon: RadioTower,
    description:
      "Mobile networks, broadband, telecom subscribers and communication services."
  },

  Tourism: {
    icon: Plane,
    description:
      "Tourist attractions, visitor statistics, hospitality and travel information."
  },

  Transportation: {
    icon: Bus,
    description:
      "Road transport, metro, railways, airports and public transportation statistics."
  },

  Wildlife: {
    icon: PawPrint,
    description:
      "National parks, protected species, wildlife conservation and biodiversity records."
  }
};

export const getCategoryInfo = (category: string) => {
  return (
    categoryInfo[category] || {
      icon: Database,
      description:
        "Explore datasets available under this category."
    }
  );
};