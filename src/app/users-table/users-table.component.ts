import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Iuser } from '../user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator! :MatPaginator
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'city'];
  dataSource: any;
  mydatasource: any;
  constructor(public services:UsersService) { }

  ngOnInit(){
    this.services.getUsers().subscribe(data=>{
      this.dataSource = new MatTableDataSource<Iuser>(data);
      this.dataSource.paginator = this.paginator;
      this.mydatasource.sort = this.applyFilter;
    })
  }
   findUserByName(name:HTMLInputElement){
    this.applyFilter(name.value);
  }
  applyFilter(filterValue:String){
    this.mydatasource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
