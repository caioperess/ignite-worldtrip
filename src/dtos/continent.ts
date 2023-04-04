export interface CitiesListDTO {
  title: string;
  country: string;
  thumb: {
    dimensions: { width: number; height: number };
    alt: null;
    copyright: null;
    url: string;
  };
  flag: {
    dimensions: { width: number; height: number };
    alt: null;
    copyright: null;
    url: string;
  };
}

export interface ContinentDTO {
  title: string;
  description: string;
  summary: string;
  slide: {
    dimensions: { width: number; height: number };
    alt: null;
    copyright: null;
    url: string;
  };
  banner: {
    dimensions: { width: number; height: number };
    alt: null;
    copyright: null;
    url: string;
  };
  countries: number;
  languages: number;
  cities: number;
  cities_list: CitiesListDTO[];
}

export interface CitiesListProps {
  title: string;
  country: string;
  thumb: string;
  flag: string;
}

export interface ContinentProps {
  slug: string;
  title: string;
  summary: string;
  slide: string;
  description: string;
  banner: string;
  countries: number;
  languages: number;
  cities: number;
  cities_list: CitiesListProps[];
}
