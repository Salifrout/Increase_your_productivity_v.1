import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkdayComponent } from './workday/workday.component';
import { WorkdaydRoutingModule } from './workday-routing.module';


@NgModule({
  declarations: [
    WorkdayComponent
  ],
  imports: [
    SharedModule,
    WorkdaydRoutingModule
  ]
})
export class WorkdayModule { }
