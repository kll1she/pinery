import { FormsModule } from '@angular/forms';
import { TableModel } from 'src/app/modules/tablemodel';
import { tables } from './../../../../data/table';
import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {
  tables: TableModel[] = tables
  
  tableForm: any = {
    place: '',
    type: '',
    date: '',
    price: '',
    sponsor: '',
    href: '',
  }

  addRow() {
    console.log(this)
    tables.push({
      place: this.tableForm.place,
      type: this.tableForm.type,
      date: this.tableForm.date,
      price: this.tableForm.price,
      sponsor: this.tableForm.sponsor,
      href: this.tableForm.href,
    });

    this.tableForm = {
      place: '',
      type: '',
      date: '',
      price: '',
      sponsor: '',
      href: '',
    }
  }
}
