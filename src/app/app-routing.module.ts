import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {TransactionListComponent} from "./transaction/transaction-list/transaction-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {faChartPie, faCompass, faMoneyBillTransfer, faSliders, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {PreferencesComponent} from "./preferences/preferences.component";
import {LoginPageComponent} from "./login-page/login-page/login-page.component";


export type MenuRoute = Route & {
  label: string;
  icon: IconDefinition;
}

export const nonMenuRoutes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent
  }
]

export const menuRoutes: MenuRoute[] = [

  {
    label: 'Dashboard',
    path: 'dashboard',
    component: DashboardComponent,
    icon: faCompass
  },
  {
    label: 'Transactions',
    path: 'transactions',
    component: TransactionListComponent,
    icon: faMoneyBillTransfer
  },
  {
    label: 'Statistics',
    path: 'statistics',
    component: StatisticsComponent,
    icon: faChartPie
  },
  {
    label: 'Preferences',
    path: 'preferences',
    component: PreferencesComponent,
    icon: faSliders
  }
];

const defaultRoute: Route = {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}

@NgModule({
  imports: [RouterModule.forRoot([defaultRoute, ...menuRoutes, ...nonMenuRoutes])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
