import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  //same str used in header.html
  loadedFeature='recipe';

  onNavigate(feature : string )
  {
  	this.loadedFeature=feature;
  }
}
