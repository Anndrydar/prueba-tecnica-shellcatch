import { Component, OnInit } from '@angular/core';
import { ServicioUserRandomService } from 'src/app/servicios/servicio-user-random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
users: any = [];
selectedUserIndex: number | null = null;
contentType: string = '';


  constructor(private servicio: ServicioUserRandomService){}
  ngOnInit(): void {
  this.verusers();
}


verusers(){
this.servicio.verusers().subscribe(
  res => {
    this.users = res;
  }
)
}

actualizaruser(){
  window.location.reload();
}


showContent(index: number, type: string) {
  if (this.selectedUserIndex === index && this.contentType === type) {
    this.selectedUserIndex = null;
  } else {
    this.selectedUserIndex = index; 
    this.contentType = type; 
  }
}

}
