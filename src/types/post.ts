export interface Post {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    section_hero: {
      text: string;
    };
    section_services: {
      service_landing: {
        title: string;
        text: string;
      };
      service_crm: {
        title: string;
        text: string;
      };
      service_website: {
        title: string;
        text: string;
      };
    };
  };
}
