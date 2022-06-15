import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http'
import { SecurityService } from './store/security.service';
import { EffectsModule } from '@ngrx/effects';
import { SecurityEffects } from './store/security.effects';
import { StoreModule } from '@ngrx/store';
import { securityReducer } from './store/security.reducer';
import { UiModule } from '../ui/ui.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {NgxMaskModule, IConfig} from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      {
        path: '',
        redirectTo: 'securities',
        pathMatch: 'full'
      },
      {
        path: 'securities',
        component: ListComponent
      },
      {
        path: 'securities/add',
        component: AddComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    SecurityComponent,
    ListComponent,
    FilterComponent,
    FormComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    NgxMaskModule.forRoot(options),
    CommonModule,
    HttpClientModule,
    UiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('securities', securityReducer),
    EffectsModule.forFeature([
      SecurityEffects
    ])
  ],
  providers: [
    SecurityService
  ]
})
export class SecurityModule { }
