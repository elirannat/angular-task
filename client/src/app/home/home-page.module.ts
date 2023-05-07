import { NgModule } from "@angular/core";
import { MainPageComponent } from "./components/home-page/home-page.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { TableComponent } from "./components/table/table.component";
import { SearchByLocationComponent } from "./components/search-by-location/search-by-location.component";
import { MoreDetailsComponent } from "./components/more-details/more-details.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxPaginationModule } from "ngx-pagination";
import { OrderByPipe } from "app/pipe/orderby.pipe";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [
    MainPageComponent,
    SearchBarComponent,
    TableComponent,
    SearchByLocationComponent,
    MoreDetailsComponent,
    OrderByPipe,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class HomePageModule {}
