import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {JobService} from "../../services";

type Job = {
  country:string,
  description:string,
  jobType:string,
  profile:string,
  salary:string,
  salaryType:string,
  state:string
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  name: string = ''
  jobs: Job[] = []

  constructor(private http: HttpClient,
              private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getAll().subscribe({
      next: (data) => {
        console.log(data)
        data._embedded.jobOffers.map((job: Job) => {
          this.jobs.push(job)
        })
      }
    })
  }

}
