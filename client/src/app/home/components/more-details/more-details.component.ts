import { Component, Input } from "@angular/core";
import { Car } from "app/interfaces/car";
import { User } from "app/interfaces/user";
import { Location } from "../../../interfaces/location.model";

@Component({
  selector: "app-more-details",
  templateUrl: "./more-details.component.html",
  styleUrls: ["./more-details.component.css"],
})
export class MoreDetailsComponent {
  @Input() selectedUser: User | undefined;
  @Input() decodedImg: String = "";
  @Input() newlocations: Location[] = [];
  @Input() newCars: Array<Car> = [];
}
