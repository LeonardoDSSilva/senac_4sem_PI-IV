import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { NavComponent } from "./shared/nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, NavComponent]
})
export class AppComponent {
  title = 'raleka';
}
