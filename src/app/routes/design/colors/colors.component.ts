import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

import { DesignColorsService } from './colors.service';
import { MAT_COLORS } from '@shared';

@Component({
  selector: 'app-design-colors',
  templateUrl: './colors.component.html',
  providers: [DesignColorsService],
})
export class DesignColorsComponent implements OnInit {
  colors = [];

  valueAscOrder(a: KeyValue<number, string>, b: KeyValue<number, string>): number {
    return a.value.localeCompare(b.value);
  }

  keyAscOrder(a: KeyValue<number, string>, b: KeyValue<number, string>): number {
    return a.key - b.key;
  }

  constructor(private colorsSrv: DesignColorsService) {}

  ngOnInit() {
    const _colors = MAT_COLORS;
    for (const key of Object.keys(_colors)) {
      this.colors.push({
        key,
        value: _colors[key],
      });
    }
  }

  trackByColor(index: number, color: { key: string; value: {} }): string {
    return color.key;
  }
}
