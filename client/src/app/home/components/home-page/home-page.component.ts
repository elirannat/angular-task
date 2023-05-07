import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Location } from "../../../interfaces/location.interface";
import { User } from "app/interfaces/user";
import { Car } from "app/interfaces/car";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class MainPageComponent implements OnInit {
  usersRowData: Array<User> = [];
  locations: Location[] = [];
  users: Array<User> = [];
  cars: Array<Car> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getInitDataFromDB();
  }

  private getInitDataFromDB() {
    this.getUsers();
    this.getCars();
    this.getLocations();
  }

  private getCars() {
    this.http.get("http://127.0.0.1:9191/cars").subscribe((cars) => {
      this.cars = cars as Car[];
    });
  }

  private getUsers() {
    this.http.get("http://127.0.0.1:9191/users").subscribe((users) => {
      this.usersRowData = users as User[];
      this.users = this.usersRowData;
    });
  }

  private getLocations() {
    this.http.get("http://127.0.0.1:9191/locations").subscribe((locations) => {
      this.locations = locations as Location[];
    });
  }

  onSearch(array: Array<User>) {
    this.users = array;
  }
}
