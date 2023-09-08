import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal.service'; 
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
