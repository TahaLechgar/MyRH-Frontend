import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/core';
import {SearchService} from "../../services";

@Component({
  selector: 'job-search-bar',
  templateUrl: './job-search-bar.component.html',
  styleUrls: ['./job-search-bar.component.css']
})
export class JobSearchBarComponent implements OnInit {

  countries :string[] = []
  selectedCountry: string = 'Afghanistan'
  searchText: string = ''

  constructor(private countryService: CountryService,
              private searchService: SearchService) { }

  ngOnInit(): void {

    type Country = {
      name: string,
      independant: boolean
    }

    this.countryService.getCountries().subscribe({
      next: (country: Country | any) => {
        this.countries = country.map((country: Country) => country.name)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  displayCountry(value: string) {
    console.log('previous : ',this.selectedCountry);
    console.log('current : ', value);
  }

  search() {
    this.searchService.searchJobOffers(this.searchText, this.selectedCountry)
  }

}
