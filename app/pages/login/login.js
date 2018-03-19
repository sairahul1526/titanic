"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router) {
        var _this = this;
        this.router = router;
        this.images = [];
        this.loggedIn = true;
        page.actionBarHidden = true;
        this.images = [
            { title: '', url: '~/images/fashion-3212158_960_720.jpg' },
            { title: '', url: '~/images/adult-1836445_960_720.jpg' },
            { title: '', url: '~/images/girl-410334_960_720.jpg' },
        ];
        firebase.getCurrentUser()
            .then(function (user) { return _this.router.navigate(["dashboard"], { clearHistory: true }); })
            .catch(function (error) { return _this.loggedIn = false; });
    }
    LoginComponent.prototype.login = function () {
        var self = this;
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            facebookOptions: {
                scope: ['public_profile', 'email', 'user_birthday']
            }
        }).then(function (result) {
            JSON.stringify(result);
            console.dir(result);
            self.router.navigate(["dashboard"]);
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "./pages/login/login.html",
            styleUrls: ['pages/login/login.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBNkI7QUFHN0Isc0RBQTREO0FBRTVELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBT3pEO0lBS0Usd0JBQVksSUFBVSxFQUFVLE1BQXdCO1FBQXhELGlCQVVDO1FBVitCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBSHhELFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBR2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsc0NBQXNDLEVBQUU7WUFDMUQsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxvQ0FBb0MsRUFBRTtZQUN4RCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFO1NBQ3ZELENBQUM7UUFDRixRQUFRLENBQUMsY0FBYyxFQUFFO2FBQ3hCLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBekQsQ0FBeUQsQ0FBQzthQUN2RSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDO2FBQ3BEO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLE1BQU07WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFqQ1UsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQU1rQixXQUFJLEVBQWtCLHlCQUFnQjtPQUw3QyxjQUFjLENBa0MxQjtJQUFELHFCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIlxuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibG9naW5cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogWydwYWdlcy9sb2dpbi9sb2dpbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG5cbiAgaW1hZ2VzID0gW107XG4gIGxvZ2dlZEluID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmltYWdlcyA9IFtcbiAgICAgIHsgdGl0bGU6ICcnLCB1cmw6ICd+L2ltYWdlcy9mYXNoaW9uLTMyMTIxNThfOTYwXzcyMC5qcGcnIH0sXG4gICAgICB7IHRpdGxlOiAnJywgdXJsOiAnfi9pbWFnZXMvYWR1bHQtMTgzNjQ0NV85NjBfNzIwLmpwZycgfSxcbiAgICAgIHsgdGl0bGU6ICcnLCB1cmw6ICd+L2ltYWdlcy9naXJsLTQxMDMzNF85NjBfNzIwLmpwZycgfSxcbiAgICBdO1xuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKClcbiAgICAudGhlbih1c2VyID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImRhc2hib2FyZFwiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pKVxuICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmxvZ2dlZEluID0gZmFsc2UpO1xuICB9XG4gIGxvZ2luKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcbiAgICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XG4gICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnLCAndXNlcl9iaXJ0aGRheSddXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlc3VsdCk7XG4gICAgICAgICAgICBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbXCJkYXNoYm9hcmRcIl0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICApO1xuICB9XG59XG4iXX0=