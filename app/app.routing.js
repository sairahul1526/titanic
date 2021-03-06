"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./pages/login/login");
var dashboard_1 = require("./pages/dashboard/dashboard");
var chat_1 = require("./pages/chat/chat");
exports.routes = [
    { path: "", component: login_1.LoginComponent, pathMatch: "full", },
    { path: "dashboard", component: dashboard_1.DashboardComponent, pathMatch: "full", },
    { path: "chat", component: chat_1.ChatComponent, pathMatch: "full", }
];
exports.navigatableComponents = [
    login_1.LoginComponent,
    dashboard_1.DashboardComponent,
    chat_1.ChatComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFxRDtBQUNyRCx5REFBaUU7QUFDakUsMENBQWtEO0FBRXJDLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0JBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxHQUFHO0lBQzNELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsOEJBQWtCLEVBQUUsU0FBUyxFQUFFLE1BQU0sR0FBRztJQUN4RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sR0FBRztDQUMvRCxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNuQyxzQkFBYztJQUNkLDhCQUFrQjtJQUNsQixvQkFBYTtDQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvY2hhdC9jaGF0XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgcGF0aE1hdGNoOiBcImZ1bGxcIiwgfSxcbiAgeyBwYXRoOiBcImRhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCwgcGF0aE1hdGNoOiBcImZ1bGxcIiwgfSxcbiAgeyBwYXRoOiBcImNoYXRcIiwgY29tcG9uZW50OiBDaGF0Q29tcG9uZW50LCBwYXRoTWF0Y2g6IFwiZnVsbFwiLCB9XG5dO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xuICBMb2dpbkNvbXBvbmVudCxcbiAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICBDaGF0Q29tcG9uZW50XG5dOyJdfQ==