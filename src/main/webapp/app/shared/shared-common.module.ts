import { NgModule } from '@angular/core';

import { JdldemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JdldemoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JdldemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JdldemoSharedCommonModule {}
