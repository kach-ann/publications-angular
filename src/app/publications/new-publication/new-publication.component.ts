import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Publication} from '../../model';
import {PublicationService} from '../../publication.service';

@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css']
})
export class NewPublicationComponent implements OnInit {
  publication: Publication = {};

  constructor(public activeModal: NgbActiveModal,
              private  publicationService: PublicationService) {}

  ngOnInit() {
  }

  savePublication() {
    this.publicationService.savePublication(this.publication)
      .subscribe((result) => this.activeModal.close());
  }
}
