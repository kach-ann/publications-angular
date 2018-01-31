import { Component, OnInit } from '@angular/core';
import {Publication} from '../../model';
import {PublicationService} from '../../publication.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  publications$: Observable<Publication[]>;

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    this.publications$ = this.publicationService.getPublications();
  }

}
