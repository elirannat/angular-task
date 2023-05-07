export class Location {
  locationLatLng  : string;
  carNumber       : string;
  dateTime        : string;
  img             : string;
  name            : string;

  constructor(
    locationLatLng  : string,
    carNumber       : string,
    dateTime        : string,
    img             : string,
    name            : string
  ) {
    this.locationLatLng = locationLatLng;
    this.carNumber = carNumber;
    this.dateTime = dateTime;
    this.img = img;
    this.name = name;
  }
}
