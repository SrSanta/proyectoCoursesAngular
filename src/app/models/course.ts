export interface Course {
    id: string;
    name: string;
    description: string;
    duration: string;
    coordinates: {
        lat: number;
        lng: number;
      };
}