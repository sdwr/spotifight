import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

	nav = navigator as NavigatorPermissions.NavigatorPermissions;
	clipboardRead: boolean;

	constructor() {  
		this.requestPermission();
	}

	ngOnInit() {
	}

	addFromClipboard() {
		window.navigator.clipboard.readText().then(x => console.log(x))
	}

	requestPermission() {
		this.nav.permissions.query({name:"clipboard-read"})
			.then(status => this.attemptClipboardCopy(status))
			.then(status => this.clipboardRead = status.state === "granted");
	}

	attemptClipboardCopy(status) {
		return window.navigator.clipboard.readText()
			.then(t => status);
	}

}
