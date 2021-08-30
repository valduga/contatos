import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/models/contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

    contatos:Contato[] = [
        {nome: "Paulo",
        email: "paulo.valduga@hotmail.com",
        telefones: ['2221-1111', '2222-2222']},

        {nome: "Pedro",
        email: "pedro.valduga@hotmail.com",
        telefones: ['3331-1111', '7722-2222']},

        {nome: "Pablo",
        email: "pablo.valduga@hotmail.com",
        telefones: ['4441-1111', '6622-2222']},

        {nome: "Paola",
        email: "paola.valduga@hotmail.com",
        telefones: ['5551-1111', '5522-2222']},

        {nome: "Paula",
        email: "paula.valduga@hotmail.com",
        telefones: ['7751-1111', '5588-2222']}
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
