import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hardware } from 'src/app/model/Hardware';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  hardwareModel = new Hardware(0, '', 0, 0);

  hardwareUpdate = new FormGroup({
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
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem('id');
    this.service.getHardwareId(Number(id)).subscribe((data) => {
      console.log(data);
      this.hardwareModel = data;
    });
  }

  Update(hardwareModel: Hardware) {
    if (this.hardwareUpdate.valid) {
      this.service.updateHardware(hardwareModel).subscribe((data) => {
        this.hardwareModel = data;
        alert('Update was successfull');
        this.router.navigate(['show']);
      });
    } else {
      alert('form is invalid');
    }
  }
}
