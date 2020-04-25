import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EckProvider } from './providers/eck-provider';
import ColorPickerComponent from './components/color-picker/eck-color-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        ColorPickerComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        ColorPickerComponent
    ]
})
export class EckIonColorPickerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EckIonColorPickerModule,
            providers: [EckProvider]
        };
    }
}