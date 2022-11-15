import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsViewComponent } from './details-view.component';

@NgModule({
  declarations: [DetailsViewComponent],
  imports: [CommonModule],
  exports: [DetailsViewComponent]
})
export class DetailsViewModule {}
