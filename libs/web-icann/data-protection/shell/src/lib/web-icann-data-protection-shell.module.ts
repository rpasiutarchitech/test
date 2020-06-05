import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DataProtectionComponent,
  WebIcannDataProtectionFeatureDataProtectionModule
} from '@icann-test/web-icann/data-protection/feature-data-protection';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DataProtectionComponent,
  }
];

@NgModule({
  imports: [CommonModule, WebIcannDataProtectionFeatureDataProtectionModule, RouterModule.forChild(routes)],
})
export class WebIcannDataProtectionShellModule {}
