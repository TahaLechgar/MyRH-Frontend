import {Component, Input, OnInit} from '@angular/core';

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
  selector: 'job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

  @Input() job: Job|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
