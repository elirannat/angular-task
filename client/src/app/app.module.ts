import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { MainComponent } from "./layout/main/main.component";
import { RouterModule, Routes } from "@angular/router";
import { HomePageModule } from "./home/home-page.module";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { faBraille } from "@fortawesome/free-solid-svg-icons";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./home/home-page.module").then((m) => m.HomePageModule),
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    HomePageModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
