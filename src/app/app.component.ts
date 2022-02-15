import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'SR1', content: 'Just a Test' }];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBluePrintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }
}