import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardware } from 'src/app/model/Hardware';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  hardware: Hardware[] = [];
  filteredHardware: Hardware[] = [];
  name: any;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getHardware().subscribe((data) => {
      this.hardware = data;
      this.filteredHardware = this.hardware;
    });
  }

  EditComponent(hardware: Hardware) {
    localStorage.setItem('id', hardware.id.toString());
    this.router.navigate(['edit']);
  }

  DeleteComponent(hardware: Hardware) {
    this.service.deleteHardware(hardware).subscribe((data) => {
      this.hardware = this.hardware.filter((h) => h !== hardware);
    });
    this.service.getHardware().subscribe((data) => {
      this.hardware = data;
      this.filteredHardware = this.hardware;
    });
  }

  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.filteredHardware = this.hardware.filter((res) => {
        return res.name.toLowerCase().match(this.name.toLowerCase());
      });
    }
  }
}
