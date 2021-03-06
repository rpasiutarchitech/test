import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib24Container1Component } from './containers/lib24-container1/lib24-container1.component';
import { Lib24Container2Component } from './containers/lib24-container2/lib24-container2.component';
import { Lib24ParentContainerComponent } from './containers/lib24-parent-container/lib24-parent-container.component';
import { Lib24Container3Component } from './containers/lib24-container3/lib24-container3.component';
import { Lib24Container4Component } from './containers/lib24-container4/lib24-container4.component';
import { Lib24Container5Component } from './containers/lib24-container5/lib24-container5.component';
import { Lib24Container6Component } from './containers/lib24-container6/lib24-container6.component';
import { Lib24Container7Component } from './containers/lib24-container7/lib24-container7.component';
import { Lib24Container8Component } from './containers/lib24-container8/lib24-container8.component';
import { Lib24Container9Component } from './containers/lib24-container9/lib24-container9.component';
import { Lib24Container10Component } from './containers/lib24-container10/lib24-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib24Component1Component } from './components/lib24-component1/lib24-component1.component';
import { ArchitechSharedLibModule } from '@icann-test/architech/shared-lib';

const routes: Routes = [
  {
    path: '',
    component: Lib24ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib24Container1Component,
      },
      {
        path: 'container2',
        component: Lib24Container2Component,
      },
      {
        path: 'container3',
        component: Lib24Container3Component,
      },
      {
        path: 'container4',
        component: Lib24Container4Component,
      },
      {
        path: 'container5',
        component: Lib24Container5Component,
      },
      {
        path: 'container6',
        component: Lib24Container6Component,
      },
      {
        path: 'container7',
        component: Lib24Container7Component,
      },
      {
        path: 'container8',
        component: Lib24Container8Component,
      },
      {
        path: 'container9',
        component: Lib24Container9Component,
      },
      {
        path: 'container10',
        component: Lib24Container10Component,
      },
      {
        path: '',
        redirectTo: 'container1',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'container1'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArchitechSharedLibModule, MatIconModule, MatDividerModule, MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule],
  declarations: [Lib24Container1Component, Lib24Container2Component, Lib24ParentContainerComponent, Lib24Container3Component, Lib24Container4Component, Lib24Container5Component, Lib24Container6Component, Lib24Container7Component, Lib24Container8Component, Lib24Container9Component, Lib24Container10Component, Lib24Component1Component]
})
export class ArchitechLib24Module {}
