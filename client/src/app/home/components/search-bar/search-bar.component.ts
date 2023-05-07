import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "app/interfaces/user";
import { Category } from "../../../interfaces/category";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  categories: Array<Category> = [
    { name: "Full name", value: "fullName" },
    { name: "Phone", value: "phoneNumber" },
    { name: "Birthday", value: "birthday" },
  ];
  category: Category = { name: "", value: "" };

  @Input() placeholderText: string =
    "Click the Navigation button to choose a category and then enter the item you are looking for here";
  @Input() array: Array<User> = [];
  @Output() onArrayFiltered = new EventEmitter<Array<User>>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.category = {
      name: this.categories[0].name,
      value: this.categories[0].value,
    };
  }

  onCategoryChange(e: any) {
    const categoryChanged = this.categories.find(
      (category: Category) => category.value === e.target.value
    );
    if (categoryChanged) this.category = categoryChanged;
  }

  onSearch(e: any) {
    const term = e.target.value;
    const search = {
      prop : this.category.value,
      val  : term
    }
    this.http.get("http://127.0.0.1:9191/users/search",{ params : search}).subscribe((users) => {
    this.onArrayFiltered.emit(users as User[]);
    });
  }
}
