import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Import Router here

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Add RouterLink and RouterOutlet
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  router = inject(Router); // Inject the Router service

  logOff() {
    this.router.navigateByUrl('login'); // Navigate to the login page
  }
}