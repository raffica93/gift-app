import { Injectable } from '@angular/core';
import { GiftsComponent } from './gifts.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gift, SearchResponse } from './interfaccia/gift.interface';

const apiKey: string = "E5I0tPCdShm92Gh9jZr1YAKiF6JNrzp7"
const serviceUrl: string = "https://api.giphy.com/v1/gifs/search"
@Injectable({ providedIn: 'root' })
export class GiftsService {

    private _tagsHistory: string[] = []

    public gifList: Gift[] = []

    private organizeHistory(tag: string): void {
    
        // tutto minuscolo cosi li confronto 
        tag = tag.toLowerCase()
        if (tag.length === 0) return;

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag)
        }

        if (this._tagsHistory.length >= 10) {
            this._tagsHistory.pop()
        }

       
    }

    constructor(private http: HttpClient) {
        this.loadLocal()
        
     }

    get tagsHistory(): string[] {
        return [...this._tagsHistory]
    }


    searchTagObservable(tag: string): void {
        this.organizeHistory(tag)
        this._tagsHistory.unshift(tag)
        this.saveLocal()

        const params = new HttpParams()
            .set('api_key', apiKey)
            .set('q', tag)
            .set('limit', '10')


        this.http.get<SearchResponse>(serviceUrl, { params })
            .subscribe((resp) =>

                this.gifList = resp.data)
    }

    private saveLocal(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory))
        console.log(this._tagsHistory)
    }
    private loadLocal(): void {
        if(!localStorage.getItem('history')) return;
        this._tagsHistory =JSON.parse(localStorage.getItem('history')!)
        if(this._tagsHistory.length===0) return;
        this.searchTagObservable(this._tagsHistory[0])
    }
}




// // come si fa di solito in js con le promise
//    async searchTagPromise(tag: string): Promise<void> {
//         this.organizeHistory(tag)
//         this._tagsHistory.unshift(tag)

//         fetch('https://api.giphy.com/v1/gifs/search?api_key=E5I0tPCdShm92Gh9jZr1YAKiF6JNrzp7&q=valorant&limit=10')
//         .then(res => res.json())
//         .then(data=>console.log(data))
//     