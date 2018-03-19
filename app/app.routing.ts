import { LoginComponent } from "./pages/login/login";
import { DashboardComponent } from "./pages/dashboard/dashboard";
import { ChatComponent } from "./pages/chat/chat";

export const routes = [
  { path: "", component: LoginComponent, pathMatch: "full", },
  { path: "dashboard", component: DashboardComponent, pathMatch: "full", },
  { path: "chat", component: ChatComponent, pathMatch: "full", }
];

export const navigatableComponents = [
  LoginComponent,
  DashboardComponent,
  ChatComponent
];