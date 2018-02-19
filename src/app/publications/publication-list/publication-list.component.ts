import { Component, OnInit } from '@angular/core';
import {Publication} from '../../model';
import {PublicationService} from '../../publication.service';
import {Observable} from 'rxjs/Observable';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NewPublicationComponent} from "../new-publication/new-publication.component";

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  publications$: Observable<Publication[]>;

  constructor(private publicationService: PublicationService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.publications$ = this.publicationService.getPublications();
  }

  open() {
    this.modalService.open(NewPublicationComponent);
  }

}
