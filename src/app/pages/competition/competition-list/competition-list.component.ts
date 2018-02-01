import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../../services/competition.service";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  competitions: any[];

  constructor(private competitionService: CompetitionService) {
  }

  ngOnInit() {
    this.competitionService.getCompetitions()
      .subscribe(response => {
        console.log(response);
      });
  }

}
