import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Test3Component, WebIcannTest3Featuretest3Module } from '@icann-test/web-icann/test3/featuretest3';

const routes: Routes = [
  {
    path: '',
    component: Test3Component,
  }
];

@NgModule({
  imports: [CommonModule, WebIcannTest3Featuretest3Module, RouterModule.forChild(routes)],
})
export class WebIcannTest3ShellModule {}
