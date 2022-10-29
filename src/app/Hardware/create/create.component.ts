import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { global } from 'src/app/common/global';
import { Hardware } from 'src/app/model/Hardware';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  hardwareModel = new Hardware(global.getIdCount(), 'Test', 1.11, 1);
  constructor(private router: Router, private service: ServiceService) {}

  hardwareAddition = new FormGroup({
    name_component: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(254),
      ])
    ),
    price_component: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('^(?!0,?d)([0-9]{1}[0-9]{0,}(.[0-9]{2}))$'),
      ])
    ),
    stock_component: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(0),
        Validators.pattern('^[1-9]+$'),
      ])
    ),
  });

  ngOnInit(): void {}

  Save(hardware: Hardware) {
    if (this.hardwareAddition.valid) {
      this.service.addHardware(hardware).subscribe((data) => {
        global.increaseIdCount();
        alert('Hardware added to stock successfully');
        this.router.navigate(['show']);
      });
    } else {
      alert('form is invalid');
    }
  }
}
