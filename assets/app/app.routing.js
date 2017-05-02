import { AdminGuard } from './admin/admin.guard';
import { RouterModule } from "@angular/router";
import { LoaderComponent } from './loader.component';
import { AdminComponent } from './admin/admin.component';
import { ADMIN_ROUTES } from './admin/admin.routing';
import { NON_ADMIN_ROUTES } from './nonAdmin.routing';
var APP_ROUTES = [
    { path: 'admin', component: AdminComponent, canActivateChild: [AdminGuard], children: ADMIN_ROUTES },
    { path: '', component: LoaderComponent, children: NON_ADMIN_ROUTES }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
