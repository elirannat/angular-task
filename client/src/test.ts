// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import "zone.js/testing";
import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import "./app/app.component.spec";
import "./app/home/components/home-page/home-page.component.spec";
import "./app/pipe/orderby.pipe.spec";
import "./app/home/components/search-bar/search-bar.component.spec";
import "./layout/footer/footer.component.spec";
import "./layout/header/header.component.spec";
import "./layout/main/main.component.spec";

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const context = require.context("./", true, /\.spec\.ts$/);
// And load the modules.
context.keys().forEach(context);
