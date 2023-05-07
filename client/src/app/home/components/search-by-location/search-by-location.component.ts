import { Component, Input } from "@angular/core";
import { Car } from "app/interfaces/car";
import { User } from "app/interfaces/user";
import { Location } from "../../../interfaces/location.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "search-by-location",
  templateUrl: "./search-by-location.component.html",
  styleUrls: ["./search-by-location.component.css"],
})
export class SearchByLocationComponent {
  locations: Location[] = [];
  selectedLocationCarNumber: string = '';
  locationCar: Car | undefined;
  locationCarOwner: User | undefined;
  selectedLocation: Location | undefined;

  @Input() users: Array<User> = [];
  @Input() cars: Array<Car> = [];
  @Input() set LocData(value: Location[]) {
    if (value.length) {
      this.locations = value;
      this.selectedLocationCarNumber = this.locations[0].carNumber;
      this.locChanged();
    }
  }
  constructor(private http: HttpClient) {}

  locChanged() {
    const search = {
      carNum : this.selectedLocationCarNumber
    }
    this.http.get("http://127.0.0.1:9191/locations/searchByLoc",{ params : search}).subscribe((locationData :any) => {
      if(locationData){
        this.selectedLocation = locationData.location as Location
        this.locationCar = locationData.car as Car
        this.locationCarOwner = locationData.user as User

      }
    });
  }
}
