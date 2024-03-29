import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatChipsModule } from "@angular/material/chips";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FlexModule } from "@angular/flex-layout";

@NgModule({
  exports: [
        MatFormFieldModule,
        MatToolbarModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatCardModule,
        FlexModule,
    ]
})
export class AppMaterialModule { }
