import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";


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

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  filteredJobs: Job[] = []
  selectedJob: Job|undefined = undefined

  constructor(private http: HttpClient) {
    this.getAll()
  }

  searchJobOffers(profile: string = '', country: string = '' ) {
    let url = `${environment.baseUrl}/jobOffers/search/advancedSearch`
    let params = `?country=${country}`
    if(profile !== ''){
      params += `&profile=${profile}`
    }
    this.selectedJob = undefined
    this.http.get(url+params).subscribe({
      next: (data: any) => {
        console.log(this.filteredJobs)
        this.filteredJobs = []
        data._embedded.jobOffers.map((job: Job) => {
          this.filteredJobs.push(job)
        })
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getAll(): void {
    this.selectedJob = undefined
    this.http.get(`${environment.baseUrl}/jobOffers?projection=offerDetail`).subscribe({
      next: (data: any) => {
        this.filteredJobs = []
        data._embedded.jobOffers.map((job: Job) => {
          this.filteredJobs.push(job)
        })
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
