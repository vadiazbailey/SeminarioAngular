import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  open() {
    alert("Inscripción exitosa ");
  }

  constructor() { }

  ngOnInit(): void {
  }

}

