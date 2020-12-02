// tslint:disable-next-line: no-namespace
export namespace TypeModels {
    export interface IDataResponse{
      temp_celsius: number;
    }
    export interface Main{
      temp: number;
    }

    export interface Result {
        name: string;
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        homeworld: string;
        films: string[];
        species: string[];
        vehicles: string[];
        starships: string[];
        created: Date;
        edited: Date;
        url: string;
      }

    export interface StarWarsApiResponse {
        count: number;
        next: string;
        previous: string;
        results: Result[];
      }

}

export default TypeModels;
