"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_swipe_layout_1 = require("nativescript-swipe-layout");
nativescript_angular_1.registerElement('SwipeLayout', function () { return nativescript_swipe_layout_1.SwipeLayout; });
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(page, router) {
        this.router = router;
        this.cards = [{
                img: "https://pixnio.com/free-images/2017/11/30/2017-11-30-18-10-07-1200x800.jpg",
                name: "Batman ",
                age: 15,
                about: "test metest metest metest metest metest metest metest metest metest metest metest metest metest metest metest metest me"
            },
            {
                img: "https://c.pxhere.com/photos/b5/3c/blonde_hair_fashion_girl_hipster_kimono_sandals_sunglasses_woman-1268302.jpg!d",
                name: "is",
                age: 15,
                about: "test me"
            }, {
                img: "https://cdn.pixabay.com/photo/2016/03/27/20/57/sunglasses-1284255_960_720.jpg",
                name: "pretty",
                age: 15,
                about: "test me"
            }, {
                img: "https://c.pxhere.com/photos/4c/8d/photo-1405706.jpg!d",
                name: " cool ",
                age: 15,
                about: "test me"
            }, {
                img: "https://c.pxhere.com/photos/3d/69/woman_portrait_female_lady_sunglass-1397104.jpg!d",
                name: "right",
                age: 15,
                about: "test me"
            }, {
                img: "https://c.pxhere.com/photos/b2/79/photo-180438.jpg!d",
                name: "?",
                age: 15,
                about: "test me"
            }];
        page.actionBarHidden = true;
        this._swipeLayouts = new Array();
        console.log(JSON.stringify(nativescript_swipe_layout_1.ANIMATION_STATE));
        this.swipeLayoutAnimated = 1;
        this.gestureMode = 0;
    }
    DashboardComponent.prototype.swipeLayoutLoaded = function (event) {
        this._swipeLayouts.push(event.object);
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.currentSwipeLayout = this._swipeLayouts[this._swipeLayouts.length - 1];
    };
    DashboardComponent.prototype.swipeLeftCallback = function (swipeLeftEvent) {
        console.log('swipeLeft');
        this.next();
    };
    DashboardComponent.prototype.next = function () {
        this._swipeLayouts.pop();
        this.currentSwipeLayout = this._swipeLayouts[this._swipeLayouts.length - 1];
    };
    DashboardComponent.prototype.swipeRightCallback = function (swipeRightEvent) {
        console.log('swipeRight');
        this.next();
    };
    DashboardComponent.prototype.swipeUpCallback = function (swipeUpEvent) {
        console.log('swipeUp');
        this.next();
    };
    DashboardComponent.prototype.swipeDownCallback = function (swipeDownEvent) {
        console.log('swipeDown');
        this.next();
    };
    DashboardComponent.prototype.goAway = function () {
        var that = this;
        this.currentSwipeLayout.animateSwipeRight().then(function () {
            that.next();
            console.log('swipeLeft done');
        });
    };
    DashboardComponent.prototype.comeHere = function () {
        var that = this;
        this.currentSwipeLayout.animateSwipeLeft().then(function () {
            that.next();
            console.log('swipeRight done');
        });
    };
    DashboardComponent.prototype.super = function () {
        var that = this;
        this.currentSwipeLayout.animateSwipeUp().then(function () {
            that.next();
            console.log("swipeUp done");
        });
    };
    DashboardComponent.prototype.chat = function () {
        this.router.navigate(["chat"]);
    };
    DashboardComponent.prototype.setings = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            templateUrl: "./pages/dashboard/dashboard.html",
            styleUrls: ['pages/dashboard/dashboard.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFFekMsNkRBQXVEO0FBRXZELHVFQVFtQztBQUduQyxzQ0FBZSxDQUFDLGFBQWEsRUFBRSxjQUFNLE9BQUEsdUNBQVcsRUFBWCxDQUFXLENBQUMsQ0FBQztBQVFsRDtJQXdDRSw0QkFBWSxJQUFVLEVBQVUsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFqQ3ZDLFVBQUssR0FBZSxDQUFDO2dCQUN4QixHQUFHLEVBQUUsNEVBQTRFO2dCQUNqRixJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsRUFBRTtnQkFDUCxLQUFLLEVBQUUseUhBQXlIO2FBQ25JO1lBQ0Q7Z0JBQ0ksR0FBRyxFQUFFLGtIQUFrSDtnQkFDdkgsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLFNBQVM7YUFDbkIsRUFBRTtnQkFDQyxHQUFHLEVBQUUsK0VBQStFO2dCQUNwRixJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxLQUFLLEVBQUUsU0FBUzthQUNuQixFQUFFO2dCQUNDLEdBQUcsRUFBRSx1REFBdUQ7Z0JBQzVELElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEtBQUssRUFBRSxTQUFTO2FBQ25CLEVBQUU7Z0JBQ0MsR0FBRyxFQUFFLHFGQUFxRjtnQkFDMUYsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLFNBQVM7YUFDbkIsRUFBRTtnQkFDQyxHQUFHLEVBQUUsc0RBQXNEO2dCQUMzRCxJQUFJLEVBQUUsR0FBRztnQkFDVCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxLQUFLLEVBQUUsU0FBUzthQUNuQixDQUFD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QkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzt5Q0EwQ2tCLFdBQUksRUFBa0IsZUFBTTtPQXhDbkMsa0JBQWtCLENBZ0g5QjtJQUFELHlCQUFDO0NBQUEsQUFoSEQsSUFnSEM7QUFoSFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbmltcG9ydCB7XG4gICAgU3dpcGVMYXlvdXQsXG4gICAgQU5JTUFUSU9OX1NUQVRFLFxuICAgIEdFU1RVUkVfTU9ERSxcbiAgICBTd2lwZUxlZnRFdmVudERhdGEsXG4gICAgU3dpcGVSaWdodEV2ZW50RGF0YSxcbiAgICBTd2lwZVVwRXZlbnREYXRhLFxuICAgIFN3aXBlRG93bkV2ZW50RGF0YVxufSBmcm9tICduYXRpdmVzY3JpcHQtc3dpcGUtbGF5b3V0JztcbmltcG9ydCB7IEFOSU1BVElPTl9QUk9QRVJUSUVTIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uL2tleWZyYW1lLWFuaW1hdGlvblwiO1xuXG5yZWdpc3RlckVsZW1lbnQoJ1N3aXBlTGF5b3V0JywgKCkgPT4gU3dpcGVMYXlvdXQpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGFzaGJvYXJkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sXCIsXG4gIHN0eWxlVXJsczogWydwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfc3dpcGVMYXlvdXRzOiBBcnJheTxTd2lwZUxheW91dD47XG4gIHByaXZhdGUgY3VycmVudFN3aXBlTGF5b3V0OiBTd2lwZUxheW91dDtcbiAgcHVibGljIHN3aXBlTGF5b3V0QW5pbWF0ZWQ6IEFOSU1BVElPTl9TVEFURTtcbiAgcHVibGljIGdlc3R1cmVNb2RlOiBHRVNUVVJFX01PREU7XG5cblxuICBwdWJsaWMgY2FyZHM6IEFycmF5PGFueT4gPSBbe1xuICAgICAgaW1nOiBcImh0dHBzOi8vcGl4bmlvLmNvbS9mcmVlLWltYWdlcy8yMDE3LzExLzMwLzIwMTctMTEtMzAtMTgtMTAtMDctMTIwMHg4MDAuanBnXCIsXG4gICAgICBuYW1lOiBcIkJhdG1hbiBcIixcbiAgICAgIGFnZTogMTUsXG4gICAgICBhYm91dDogXCJ0ZXN0IG1ldGVzdCBtZXRlc3QgbWV0ZXN0IG1ldGVzdCBtZXRlc3QgbWV0ZXN0IG1ldGVzdCBtZXRlc3QgbWV0ZXN0IG1ldGVzdCBtZXRlc3QgbWV0ZXN0IG1ldGVzdCBtZXRlc3QgbWV0ZXN0IG1ldGVzdCBtZVwiXG4gIH0sXG4gIHtcbiAgICAgIGltZzogXCJodHRwczovL2MucHhoZXJlLmNvbS9waG90b3MvYjUvM2MvYmxvbmRlX2hhaXJfZmFzaGlvbl9naXJsX2hpcHN0ZXJfa2ltb25vX3NhbmRhbHNfc3VuZ2xhc3Nlc193b21hbi0xMjY4MzAyLmpwZyFkXCIsXG4gICAgICBuYW1lOiBcImlzXCIsXG4gICAgICBhZ2U6IDE1LFxuICAgICAgYWJvdXQ6IFwidGVzdCBtZVwiXG4gIH0sIHtcbiAgICAgIGltZzogXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAzLzI3LzIwLzU3L3N1bmdsYXNzZXMtMTI4NDI1NV85NjBfNzIwLmpwZ1wiLFxuICAgICAgbmFtZTogXCJwcmV0dHlcIixcbiAgICAgIGFnZTogMTUsXG4gICAgICBhYm91dDogXCJ0ZXN0IG1lXCJcbiAgfSwge1xuICAgICAgaW1nOiBcImh0dHBzOi8vYy5weGhlcmUuY29tL3Bob3Rvcy80Yy84ZC9waG90by0xNDA1NzA2LmpwZyFkXCIsXG4gICAgICBuYW1lOiBcIiBjb29sIFwiLFxuICAgICAgYWdlOiAxNSxcbiAgICAgIGFib3V0OiBcInRlc3QgbWVcIlxuICB9LCB7XG4gICAgICBpbWc6IFwiaHR0cHM6Ly9jLnB4aGVyZS5jb20vcGhvdG9zLzNkLzY5L3dvbWFuX3BvcnRyYWl0X2ZlbWFsZV9sYWR5X3N1bmdsYXNzLTEzOTcxMDQuanBnIWRcIixcbiAgICAgIG5hbWU6IFwicmlnaHRcIixcbiAgICAgIGFnZTogMTUsXG4gICAgICBhYm91dDogXCJ0ZXN0IG1lXCJcbiAgfSwge1xuICAgICAgaW1nOiBcImh0dHBzOi8vYy5weGhlcmUuY29tL3Bob3Rvcy9iMi83OS9waG90by0xODA0MzguanBnIWRcIixcbiAgICAgIG5hbWU6IFwiP1wiLFxuICAgICAgYWdlOiAxNSxcbiAgICAgIGFib3V0OiBcInRlc3QgbWVcIlxuICB9XVxuXG4gIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3N3aXBlTGF5b3V0cyA9IG5ldyBBcnJheSgpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoQU5JTUFUSU9OX1NUQVRFKSk7XG4gICAgICB0aGlzLnN3aXBlTGF5b3V0QW5pbWF0ZWQgPSAxO1xuICAgICAgdGhpcy5nZXN0dXJlTW9kZSA9IDA7XG4gIH1cblxuICBzd2lwZUxheW91dExvYWRlZChldmVudCkge1xuICAgICAgdGhpcy5fc3dpcGVMYXlvdXRzLnB1c2goPFN3aXBlTGF5b3V0PmV2ZW50Lm9iamVjdCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmN1cnJlbnRTd2lwZUxheW91dCA9IHRoaXMuX3N3aXBlTGF5b3V0c1t0aGlzLl9zd2lwZUxheW91dHMubGVuZ3RoIC0gMV07XG4gIH1cblxuXG4gIHN3aXBlTGVmdENhbGxiYWNrKHN3aXBlTGVmdEV2ZW50OiBTd2lwZUxlZnRFdmVudERhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzd2lwZUxlZnQnKTtcbiAgICAgIHRoaXMubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KCkge1xuICAgICAgdGhpcy5fc3dpcGVMYXlvdXRzLnBvcCgpO1xuICAgICAgdGhpcy5jdXJyZW50U3dpcGVMYXlvdXQgPSB0aGlzLl9zd2lwZUxheW91dHNbdGhpcy5fc3dpcGVMYXlvdXRzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgc3dpcGVSaWdodENhbGxiYWNrKHN3aXBlUmlnaHRFdmVudDogU3dpcGVSaWdodEV2ZW50RGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ3N3aXBlUmlnaHQnKTtcbiAgICAgIHRoaXMubmV4dCgpO1xuICB9XG4gIHN3aXBlVXBDYWxsYmFjayhzd2lwZVVwRXZlbnQ6IFN3aXBlVXBFdmVudERhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzd2lwZVVwJyk7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgfVxuICBzd2lwZURvd25DYWxsYmFjayhzd2lwZURvd25FdmVudDogU3dpcGVEb3duRXZlbnREYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3dpcGVEb3duJyk7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgfVxuXG4gIGdvQXdheSgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMuY3VycmVudFN3aXBlTGF5b3V0LmFuaW1hdGVTd2lwZVJpZ2h0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhhdC5uZXh0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N3aXBlTGVmdCBkb25lJyk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgY29tZUhlcmUoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICB0aGlzLmN1cnJlbnRTd2lwZUxheW91dC5hbmltYXRlU3dpcGVMZWZ0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhhdC5uZXh0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N3aXBlUmlnaHQgZG9uZScpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdXBlcigpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMuY3VycmVudFN3aXBlTGF5b3V0LmFuaW1hdGVTd2lwZVVwKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhhdC5uZXh0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzd2lwZVVwIGRvbmVcIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY2hhdFwiXSlcbiAgfVxuXG4gIHNldGluZ3MoKSB7XG5cbiAgfVxufSJdfQ==