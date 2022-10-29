import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hardware } from '../model/Hardware';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  Url = 'http://localhost:8080/api/hardware';

  getHardware() {
    return this.http.get<Hardware[]>(this.Url + '/hardware_list');
  }

  addHardware(hardware: Hardware) {
    return this.http.post<Hardware>(this.Url + '/add_hardware', hardware);
  }

  getHardwareId(id: number) {
    return this.http.get<Hardware>(this.Url + '/edit/' + id);
  }

  updateHardware(hardware: Hardware) {
    return this.http.put<Hardware>(this.Url + '/' + hardware.id, hardware);
  }

  deleteHardware(hardware: Hardware) {
    return this.http.delete<Hardware>(this.Url + '/' + hardware.id);
  }
}
