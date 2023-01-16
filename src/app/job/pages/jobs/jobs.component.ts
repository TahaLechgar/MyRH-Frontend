import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {JobService} from "../../services";
import {SearchService} from "../../../shared";

type Job = {
  country:string,
  description:string,
  jobType:string,
  profile:string,
  salary:string,
  salaryType:string,
  state:string,
  company: Company
}

type Company = {
  email: string,
  foundationDate: string,
  logo: string,
  name: string,
  sentAt: string,
  size: string,
  verificationCode: string,
  verified: string
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  name: string = ''
  jobs: Job[] = []
  selectedJob: Job = this.jobs[0]

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedJob = this.searchService.filteredJobs[0]
    }, 1000)
  }

  selectJob(job: Job) {
    this.selectedJob = job
  }

}
