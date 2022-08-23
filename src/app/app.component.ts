import { Component } from '@angular/core';

@Component({
  selector: 'net-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix-clone';

  onSubmit(params:{[key:string]:any}) :void {
    console.log(params);
  }
  
}
