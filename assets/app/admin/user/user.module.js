var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReviewComponent } from './review.component';
import { UnAssignAdminComponent } from './unAssignAdmin.component';
import { AssignAdminComponent } from './assignAdmin.component';
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    NgModule({
        declarations: [
            AssignAdminComponent,
            ReviewComponent,
            UnAssignAdminComponent
        ],
        imports: [
            CommonModule,
            SharedModule
        ],
        providers: [UserService]
    })
], UserModule);
export { UserModule };
;
