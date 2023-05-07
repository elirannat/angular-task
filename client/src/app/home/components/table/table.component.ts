import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Car } from "app/interfaces/car";
import { User } from "app/interfaces/user";
import { Location } from "../../../interfaces/location.interface";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent {
  sortProp: string = "";
  sortOrder: number = 1;
  currentPage: number = 1;
  newlocations: Location[] = [];
  decodedImg: String = "";
  newCars: Array<Car> = [];
  selectedUser: User | undefined;
  users: Array<User> = [];

  @Input() cars: Array<Car> = [];
  @Input() set usersData(users :Array<User>){
    if(users){
      this.users = users
      this.currentPage = 1
    }
  }
  @Input() locations: Location[] = [];

  constructor(private _satinizer: DomSanitizer) {}

  orderBy(prop: string) {
    if (this.sortProp === prop) {
      this.sortOrder = -this.sortOrder;
    } else {
      this.sortProp = prop;
      this.sortOrder = 1;
    }
  }

  showDetails(userIndex: string) {
    this.newlocations = [];
    this.selectedUser = this.users.find((user: any) => {
      if (user.userIndex == userIndex) return user;
    });
    const base64String = this.selectedUser?.img.split(",")[1];
    this.decodedImg = this._satinizer.bypassSecurityTrustResourceUrl(
      "data:image/png;base64," + base64String
    ) as string;
    this.newCars = this.cars.filter((car: any) => {
      if (car.userIndex == userIndex) return car;
    });
    this.newCars.forEach((car: Car) => {
      let location = this.locations.find((loc: any) => {
        if (loc.carNumber == car.carNumber) return loc;
      });
      if (location) this.newlocations.push(location);
    });
  }
}
