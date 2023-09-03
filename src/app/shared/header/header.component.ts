import { DOCUMENT } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, Inject } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbarToggle') navbarToggle!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit() {
        // Burger Menu
        const burgerMenu = () => {
          this.navbarToggle.nativeElement.addEventListener('click', (event: Event) => {
            event.preventDefault();
            this.dropdownMenu.nativeElement.classList.toggle('show');
          });
    
          // Close the dropdown when a menu item is clicked
          const menuItems = this.document.querySelectorAll('.nav-item');
          menuItems.forEach((item) => {
            item.addEventListener('click', () => {
              this.dropdownMenu.nativeElement.classList.remove('show');
            });
          });
        }
    
        burgerMenu();
      }
}