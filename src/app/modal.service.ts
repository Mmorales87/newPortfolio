import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModal(title: string, description: string, images: string[], link: string) {
    this.dialog.open(ModalComponent, {
      data: { title, description, images, link },
      panelClass: 'mat-dialog-lg'
    });
  }
}
