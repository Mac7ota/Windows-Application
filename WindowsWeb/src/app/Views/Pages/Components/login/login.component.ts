import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('ContainerLogin', { static: false }) ContainerLogin!: ElementRef;
  @ViewChild('Hora', { static: false }) Hora!: ElementRef;
  @ViewChild('Data', { static: false }) Data!: ElementRef;

  constructor(private renderer : Renderer2) { }

  ngAfterViewInit(): void {
    let data = new Date();

      console.log(this.ContainerLogin);
      this.ContainerLogin.nativeElement.style.backgroundImage = `url('assets/Img/Backgrounds/0${Math.floor(Math.random() * 4) + 1}.jpg')`;

      this.renderer.listen('body', 'keydown', this.onKeydown.bind(this));

      this.Hora.nativeElement.innerHTML = data.getHours() + ":" + data.getMinutes();

      this.Data.nativeElement.innerHTML = `${data.toLocaleString('en-US', { weekday: 'long' })}, ${data.toLocaleString('en-US', { month: 'long' })} ${data.getFullYear().toString().slice(-2)}`;
  }

  onKeydown(event: KeyboardEvent) {
    let divs = this.ContainerLogin.nativeElement.querySelectorAll('div');
    if (event.key === "Enter") {
      for(let i = 0; i < divs.length - 1; i++) {
        console.log(divs[i]);
        divs[i].classList.remove('Visible');
      }
      divs[2].classList.add('Visible');
    }
    else if (event.key === "Escape") {
      for(let i = 0; i < divs.length - 1; i++) {
        console.log(divs[i]);
        divs[i].classList.add('Visible');
      }
      divs[2].classList.remove('Visible');
    }
  }
}
