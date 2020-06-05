import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccountabilityIndexComponent,
  WebIcannAccountabilityMechanismsFeatureAccountabilityIndexModule
} from '@icann-test/web-icann/accountability-mechanisms/feature-accountability-index';
import {
  AnnualReportsComponent,
  WebIcannAccountabilityMechanismsFeatureAnnualReportsModule
} from '@icann-test/web-icann/accountability-mechanisms/feature-annual-reports';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AccountabilityIndexComponent,
  },
  {
    path: 'reports',
    component: AnnualReportsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    WebIcannAccountabilityMechanismsFeatureAccountabilityIndexModule,
    WebIcannAccountabilityMechanismsFeatureAnnualReportsModule,
    RouterModule.forChild(routes),
  ],
})
export class WebIcannAccountabilityMechanismsShellModule {}
