import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: any

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get('https://restcountries.com/v2/all?fields=name')
  }
}
