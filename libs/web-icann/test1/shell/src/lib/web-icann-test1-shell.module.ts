import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component, WebIcannTest1Featuretest1Module } from '@icann-test/web-icann/test1/featuretest1';

const routes: Routes = [
  {
    path: '',
    component: Test1Component,
  }
];

@NgModule({
  imports: [CommonModule, WebIcannTest1Featuretest1Module, RouterModule.forChild(routes)],
})
export class WebIcannTest1ShellModule {}
