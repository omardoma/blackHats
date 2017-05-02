var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
var BusinessRegisterService = (function () {
    function BusinessRegisterService(http) {
        this.http = http;
    }
    BusinessRegisterService.prototype.signUp = function (business) {
        //Creates a JSON Object with the business passed to it, to use as a body for the post route 
        var body = JSON.stringify(business);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        //Adds a header to indicate that the body is a JSON object to pass to the apply post route 
        return this.http.post('http://localhost:8080/api/business/apply', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return BusinessRegisterService;
}());
BusinessRegisterService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], BusinessRegisterService);
export { BusinessRegisterService };
