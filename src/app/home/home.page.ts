import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-enterprise/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private emailComposer: EmailComposer) {}

  ngOnInit() {
    this.emailComposer.isAvailable().then(
      () => { console.log('Email composer available'); },
      (error) => { console.log('Error, email composer unavailable: ' + error); }
    );
  }

  composeButtonClicked() {

    const email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
    };

    this.emailComposer.open(email);
  }

}
