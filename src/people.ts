export interface Peopless{
  id: number;

   url: string;
    name: string;
    country: {
        name: string;
        code: string;
        timezone: string;
    };
 birthday: string;
deathday: any;
gender: string;
image: {
        medium: string;
        original: string;
    };
_links: {
        self: {
            href: string;
        };
    }
 }

