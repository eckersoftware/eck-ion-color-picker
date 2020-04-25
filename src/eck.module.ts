import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EckProvider } from './providers/eck-provider';
import ColorPickerComponent from './components/color-picker/color-picker.component';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
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
export class EckModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EckModule,
            providers: [EckProvider]
        };
    }
}