import { Component, OnInit } from '@angular/core';
import {ColorService} from "src/app/services/colors.service"

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],

})
export class AddressComponent implements OnInit {

public styles = {
    backgroundColor: 'green'
}

// private colorService : ColorService;
  constructor(private colorService: ColorService) {
    // this.colorService = colorService;
   }

  ngOnInit(): void {
    // const colorService = new ColorService();
    this.styles.backgroundColor = this.colorService.getRandomColor();

  }

}
