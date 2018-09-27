import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';


  employeeList =[
    {id:1,salary:100000, name:"Suresh this is the name you know, what is the meaning of Prema",domain:"DB", project:"WM",doj:new Date(15,1,2017)},
    {id:2,salary:50000,  name:"Ramesh the Son of sardar. ",domain:"UI", project:"WM The Waste recycling application",doj:new Date(20,2,2013)},
    {id:3,salary:20000,  name:"Ganesh",domain:"Angular", project:"MR",doj:new Date(30,3,2014)},
    {id:4,salary:70000,  name:"Mahesh",domain:"Node", project:"SAP",doj:new Date(5,4,2017)},
    {id:5,salary:60000,  name:"Yogesh",domain:"Java", project:"Amway",doj:new Date(10,5,2018)},
    {id:6,salary:70440,  name:"Naresh",domain:"Admin", project:"RMG",doj:new Date(6,6,2015)},
    {id:7,salary:66000,  name:"Mogesh",domain:"IT", project:"RMZ",doj:new Date(9,7,2016)},
    {id:8,salary:32000,  name:"Lokesh",domain:"HR", project:"RMZ",doj:new Date(21,8,2010)},
  ]
}
