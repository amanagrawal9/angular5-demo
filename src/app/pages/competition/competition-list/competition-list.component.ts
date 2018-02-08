import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../../services/competition.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  competitions: any[] = [];

  constructor(private router: Router, private competitionService: CompetitionService) {
  }

  ngOnInit() {
    this.competitions = this.competitionService.getCompetitions();
  }

  createCompetition() {
    this.router.navigateByUrl('/competition-create');
  }

}
