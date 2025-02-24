export interface Course {
    id: String;
    name: String;
    description: String;
    duration: String;
    coordinates: {
        lat: Number;
        lng: Number;
      };
}