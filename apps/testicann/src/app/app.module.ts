import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'lib1',
    loadChildren: () => import('@icann-test/architech/lib1').then(m => m.ArchitechLib1Module)
  },
  {
    path: 'lib2',
    loadChildren: () => import('@icann-test/architech/lib2').then(m => m.ArchitechLib2Module)
  },
  {
    path: 'lib3',
    loadChildren: () => import('@icann-test/architech/lib3').then(m => m.ArchitechLib3Module)
  },
  {
    path: 'lib4',
    loadChildren: () => import('@icann-test/architech/lib4').then(m => m.ArchitechLib4Module)
  },
  {
    path: 'lib5',
    loadChildren: () => import('@icann-test/architech/lib5').then(m => m.ArchitechLib5Module)
  },
  {
    path: 'lib6',
    loadChildren: () => import('@icann-test/architech/lib6').then(m => m.ArchitechLib6Module)
  },
  {
    path: 'lib7',
    loadChildren: () => import('@icann-test/architech/lib7').then(m => m.ArchitechLib7Module)
  },
  {
    path: 'lib8',
    loadChildren: () => import('@icann-test/architech/lib8').then(m => m.ArchitechLib8Module)
  },
  {
    path: 'lib9',
    loadChildren: () => import('@icann-test/architech/lib9').then(m => m.ArchitechLib9Module)
  }

  // {
  //   path: 'data-protection',
  //   loadChildren: () => import('@icann-test/web-icann/data-protection/shell').then(m => m.WebIcannDataProtectionShellModule)
  // },
  // {
  //   path: 'accountability',
  //   loadChildren: () => import('@icann-test/web-icann/accountability-mechanisms/shell').then(m => m.WebIcannAccountabilityMechanismsShellModule)
  // },
  // {
  //   path: 'test1',
  //   loadChildren: () => import('@icann-test/web-icann/test1/shell').then(m => m.WebIcannTest1ShellModule)
  // },
  // {
  //   path: 'test2',
  //   loadChildren: () => import('@icann-test/web-icann/test2/shell').then(m => m.WebIcannTest2ShellModule)
  // },
  // {
  //   path: 'test3',
  //   loadChildren: () => import('@icann-test/web-icann/test3/shell').then(m => m.WebIcannTest3ShellModule)
  // },
  // {
  //   path: 'test4',
  //   loadChildren: () => import('@icann-test/web-icann/test4/shell').then(m => m.WebIcannTest4ShellModule)
  // },
  // {
  //   path: 'test10',
  //   loadChildren: () => import('@icann-test/web-icann/test10/featuretest10').then(m => m.WebIcannTest10Featuretest10Module)
  // },
  // {
  //   path: '',
  //   redirectTo: 'data-protection',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'data-protection'
  // }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
