import { Component, Input, OnInit } from '@angular/core';
import { Contato } from "../../../models/contato";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

    @Input() registro!:Contato;

  constructor() { }

  ngOnInit(): void {
  }

}
