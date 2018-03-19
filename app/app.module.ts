import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import { CarouselDirective } from "nativescript-ng2-carousel/nativescript-ng2-carousel.directive";
import { LoginComponent } from "./pages/login/login";
import { DashboardComponent } from "./pages/dashboard/dashboard";
import { ChatComponent } from "./pages/chat/chat";

import { registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);


@NgModule({
  declarations: [
    AppComponent,
    CarouselDirective,
    LoginComponent,
    DashboardComponent,
    ChatComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
