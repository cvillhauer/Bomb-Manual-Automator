import { Component } from '@angular/core';

import { Wire } from '../../src/app/wire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public wires: Wire[] = [];

  constructor()
  {
    this.wires.push(new Wire(this.wires.length + 1));
    this.wires.push(new Wire(this.wires.length + 1));
    this.wires.push(new Wire(this.wires.length + 1));
  }

  addPanel(): void
  {
    for(let wire of this.wires)
    {
      wire.status = "resolved";
    }
    this.wires.push(new Wire(this.wires.length + 1));
    this.wires.push(new Wire(this.wires.length + 1));
    this.wires.push(new Wire(this.wires.length + 1));
  }

  solve(): void
  {
    let redCount: number = 0;
    let blueCount: number = 0;
    let blackCount: number = 0;
    let redCuts: number[] = [];
    let blueCuts: number[] = [];
    let blackCuts: number[] = [];

    for (let wire of this.wires)
    {
      if(wire.color == "red")
      {
        redCuts = [];
        redCount++;
        if(wire.connection == "a")
        {
          redCuts = [3, 4, 6, 7, 8];
        }
        else if(wire.connection == "b")
        {
          redCuts = [2, 5, 7, 8, 9];
        }
        else if(wire.connection == "c")
        {
          redCuts = [1, 4, 6, 7];
        }
        if(redCuts.indexOf(redCount) != -1)
        {
          wire.cut = true;
        }
      }
      else if (wire.color == "blue")
      {
        blueCuts = [];
        blueCount++;
        if(wire.connection == "a")
        {
          blueCuts = [2, 4, 8, 9];
        }
        else if(wire.connection == "b")
        {
          blueCuts = [1, 3, 5, 6];
        }
        else if(wire.connection == "c")
        {
          blueCuts = [2, 6, 7, 8];
        }
        if(blueCuts.indexOf(blueCount) != -1)
        {
          wire.cut = true;
        }
      }
      else if (wire.color == "black")
      {
        blackCuts = [];
        blackCount++;
        if(wire.connection == "a")
        {
          blackCuts = [1, 2, 4, 7];
        }
        else if(wire.connection == "b")
        {
          blackCuts = [1, 3, 5, 6, 7];
        }
        else if(wire.connection == "c")
        {
          blackCuts = [1, 2, 4, 6, 8, 9];
        }
        if(blackCuts.indexOf(blackCount) != -1)
        {
          wire.cut = true;
        }
      }
      if(wire.status == "active")
      {
        wire.status = "solved";
      }
    }
  }

}
