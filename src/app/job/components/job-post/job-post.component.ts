import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  selector: 'job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

  @Input() job: Job|undefined
  @Output() selectJob: EventEmitter<any> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  sendSelectedJob() {
    this.selectJob.emit(this.job)
  }


}
