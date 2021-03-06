import { Component } from '@angular/core';

@Component(
{
	selector : 'app-server', 
	templateUrl:'./server.component.html',
	styleUrls: ['server.component.css'],
})



export class ServerComponent {
	allowNewServer = false;
	serverCreationStatus='No server was created';
	serverId : number =10;
	serverStatus: string = 'offline';
	serverName='Testserver';
	serverCreated = false;
	ustatus='No username created';
	uname='subbu';
	allowUname = false;

	getServerstatus(){
		return this.serverStatus;
	}

	constructor()
	{

	setTimeout(()=>{
		this.allowNewServer=true
	},200);

	}ngOnInit(){
	
	}

	onCreateServer(){
		this.serverCreated=true;
		this.serverCreationStatus=this.serverName+' !!! Server was created';
	}

	onCreateUname(){
		this.ustatus=this.uname;
	}

	onUpdateServerName(event : Event)
	{
	    this.serverName=(<HTMLInputElement>event.target).value;
	}
}




















