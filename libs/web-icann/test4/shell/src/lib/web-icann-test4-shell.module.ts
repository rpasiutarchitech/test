import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Test4Component, WebIcannTest4Featuretest4Module } from '@icann-test/web-icann/test4/featuretest4';

const routes: Routes = [
  {
    path: '',
    component: Test4Component,
  }
];
@NgModule({
  imports: [CommonModule, WebIcannTest4Featuretest4Module, RouterModule.forChild(routes)],
})
export class WebIcannTest4ShellModule {}
