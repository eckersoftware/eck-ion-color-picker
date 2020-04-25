# eck-ion-color-picker
A simple color picker for Ionic4

## Installation

```bash-black
npm i eck-ionic-color-picker
```

## Usage

### Import into your Module
```typescript
...
import EckColorPickerComponent from 'eck-ionic-color-picker/dist/components/color-picker/eck-color-picker.component';
import { EckIonColorPickerModule } from 'eck-ionic-color-picker';

@NgModule({
  imports: [
    ...
    EckIonColorPickerModule
  ],
  entryComponents: [EckColorPickerComponent]
  ...
})
...
```
### Using at you page
```html
  <eck-color-picker
    id="color" name="color"
    title="Choose a color"
    [colorList]="['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
      '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39',
      '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b']"
    (changeSelectedColor)='onChangeColor($event)'
  ></eck-color-picker>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
