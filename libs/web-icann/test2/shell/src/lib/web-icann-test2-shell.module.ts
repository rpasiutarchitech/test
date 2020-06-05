import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Test2Component, WebIcannTest2Featuretest2Module } from '@icann-test/web-icann/test2/featuretest2';

const routes: Routes = [
  {
    path: '',
    component: Test2Component,
  }
];

@NgModule({
  imports: [CommonModule, WebIcannTest2Featuretest2Module, RouterModule.forChild(routes)],
})
export class WebIcannTest2ShellModule {}
