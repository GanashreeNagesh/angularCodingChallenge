import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  public icons = ['alphin', 'calendar', 'comments', 'likes'];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  /**
   * Registers the custom icons so they can be used with
   * Angular Material.
   */
  init(): void {
    this.icons.forEach((iconName: string) => {
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `../../assets/icons/${iconName}.svg`
        )
      );
    });
  }
}
