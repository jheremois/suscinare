import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@shared/material/material.module";
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListAvatarWorkComponent } from './list-avatar-work/list-avatar-work.component';

const components = [
  TooltipComponent,
  ListAvatarWorkComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
