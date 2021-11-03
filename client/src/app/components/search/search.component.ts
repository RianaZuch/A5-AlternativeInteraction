import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    //TODO: call search function in spotifyService and parse response
    // console.log(this.searchString)
    // console.log(this.searchCategory)
    // console.log(this.searchCategories)

    // this.resources = this.spotifyService.searchFor(this.searchCategory,this.searchString);
    // console.log(this.spotifyService.searchFor(this.searchCategory,this.searchString));
    let response = this.spotifyService.searchFor(this.searchCategory,this.searchString);
    for (let a in response){
      console.log(a)  //returns __zone_symbol__state and __zone_symbol__value
    }

    response.then(data => console.log(data));//console.log(data)returns array of ArtistData
    response.then(data => {
      console.log(data.length) //20
      console.log(data) //array of ArtistData
      console.log(data[2].name); //name of the third artist
      for(let x = 0; x < data.length; x++){ //seems like I can't do for (let..in..), instead, for(let x=0....) works
        console.log(data[x]); //each ArtiistData in the data 
      }
    })
  }
  
}
