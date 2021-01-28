export interface Shows{
     id: number;
     url: string;
     name: string;
     number: number;
     episodeOrder: number;
     premiereDate: Date;
     endDate: Date;
     type: string;
     language: string
     genres: string[];
     status: string;
     runtime: number;
     premiered: string;
     officialSite: string;
     schedule: {
        time: string;
        days: string[];
    },
     rating: {
        average: number;
    };
      weight: number;
      network: {
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
            timezone: string;
        }
    };
     webChannel: {
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
            timezone: string;
        }
    };
     externals: {
        tvrage: number;
        thetvdb: number;
        imdb: string;
    };
     image: {
        medium: string;
        original: string;
    };
     summary: string;
     updated: number;
     _links: {
        self: {
            href: string;
        },
        previousepisode: {
            href: string;
        }
    };
  }

