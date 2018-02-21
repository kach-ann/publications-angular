import {Component, OnDestroy, OnInit} from '@angular/core';
import {Publication} from '../../model';
import {PublicationService} from '../../publication.service';
import {Observable} from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NewPublicationComponent} from '../new-publication/new-publication.component';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit, OnDestroy {
  publications: Publication[];

  private subscription: Subscription;

  constructor(private publicationService: PublicationService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.publicationService.getPublications().subscribe((publications) => this.publications = publications);
    this.subscription = this.publicationService.newPublications$.subscribe((newPublication) => this.publications.push(newPublication));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  open() {
    this.modalService.open(NewPublicationComponent);
  }

}
