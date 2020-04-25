import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const HTML_TEMPLATE = `
  <ion-card>
    <ion-card-header [ngStyle]="{'background-color':selectedColor, color: 'white'}">
      <div class="header-box">
        {{selectedColor}}
      </div>
    </ion-card-header>
    <ion-card-content class="content-picker">
      <ion-item>
        <ion-label>{{title}}</ion-label>
      </ion-item>
      <ion-grid *ngIf="colorPickerItems !== undefined && colorPickerItems.length > 0"
        class="color-grid">
        <ion-row *ngFor="let collums of colorPickerItems" class="color-row">
          <ion-col *ngFor="let buttonColor of collums" class="color-collum">
            <ion-button size="small" 
              fill="clear" 
              (click)="select(buttonColor);"
              class="color-button">
              <ion-icon name="square" 
                class="color-icon"
                slot="icon-only"
                [ngStyle]="{'color':buttonColor}"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
`;

const CSS_STYLE = `
.header-box {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.color-button {
  padding: 0px;
  margin: 0px;
}

.color-icon {
  padding: 0px;
  margin: 0px;
}

.content-picker {
  width: 100%;
}

.color-grid {
  width: 100%;
}

.color-row {
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
}

.color-collum {
  padding: 0px;
  margin: 0px;
}
`;

@Component({
  selector: 'eck-color-picker',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE],
})
export default class EckColorPickerComponent implements OnInit {
  @Input() public title: string;
  @Input() public colorList: string[];
  @Input() public maxRowItems: number;
  @Output() public changeSelectedColor = new EventEmitter();

  private colorPickerItems: any[] = [];
  private selectedColor:string = "";
  
  constructor() {
    if (this.maxRowItems === undefined) {
      this.maxRowItems = 9999;
    }
  }

  private loadColors() {
    let colorCollums = [];
    if (this.colorList !== undefined) {
      this.colorList.map(color => {
        colorCollums.push(color);

        if (colorCollums.length >= this.maxRowItems) {
          this.colorPickerItems.push(colorCollums);
          colorCollums = [];
        }
      });

      if (colorCollums.length > 0) {
        this.colorPickerItems.push(colorCollums);
      }
    }

    if (this.colorPickerItems.length > 0) {
      this.selectedColor = this.colorPickerItems[0][0];
    }
  }

  private select(color) {
    this.selectedColor = color;
    this.onChangeSelectedColor(color);
  }

  onChangeSelectedColor(color) {
    this.changeSelectedColor.emit(color);
  }

  ngOnInit() {
    this.loadColors();
  }

}
