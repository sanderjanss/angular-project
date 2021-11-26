import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  _bindingName : string = '';


  onReset(){
    this._bindingName = '';
  }


  ngOnInit(): void {
  }

}
