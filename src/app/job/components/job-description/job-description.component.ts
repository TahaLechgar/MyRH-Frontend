import { Component, OnInit, Input } from '@angular/core';


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
  selector: 'job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  @Input() job: Job|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
