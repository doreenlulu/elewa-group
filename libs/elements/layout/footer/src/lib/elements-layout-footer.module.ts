import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutModule } from '@elewa-group/elements/layout';


@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class ElementsLayoutFooterModule {}
