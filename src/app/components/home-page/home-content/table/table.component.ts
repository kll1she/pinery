import { TableModel } from 'src/app/modules/tablemodel';
import { tables } from './../../../../data/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `<div class="container">
              <div class="table-container">
                <table id="table-id">
                  <thead>
                    <tr>
                      <th class="table-header">Место</th>
                      <th class="table-header">Вид отдыха</th>
                      <th class="table-header">Дата</th>
                      <th class="table-header">Цена за человека</th>
                      <th class="table-header">Организатор</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let table of tables; let i = index">
                      <td class="table-item">{{table.place}}</td>
                      <td class="table-item">{{table.type}}</td>
                      <td class="table-item">{{table.date}}</td>
                      <td class="table-item">{{table.price}} рублей</td>
                      <td class="table-item"><a [href]="table.href" class="link" target="_blank">{{table.sponsor}}</a></td>
                      <td *ngIf="admin"><button class="table-button"><img src="assets/img/trash.svg" alt="delete row" (click)="deleteRow(i)"></button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="admin" (click)="enterByAdmin()" *ngIf="!admin">Войти как Администратор</p>
            </div>`,
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tables: TableModel[] = tables;
  deleteRow(i: number) {
    tables.splice(i,1)
  }

  admin: boolean = false

  enterByAdmin() {
    let password = prompt('Введите пароль')
    if(password = 'admin'){
      this.admin = true
    } else {
      this.admin = false
    }
  }
}
