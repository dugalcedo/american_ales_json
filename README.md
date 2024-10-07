# American Ales - JSON data dump

A data dump of various ales brewed in the United States. 

Source (except prices): untappd, 2024/10/07.

The "prices" are not real. They were calculated based on the following data from untappd:

- Beer rating
- Beer rating count
- Brewery rating
- Brewery rating count
- ABV

## Contents

700 pale ales and India pale ales from 232 American breweries.

## Types

```ts
export type Beer = {
    href: string;           // untappd page
    name: string;           
    type: string;           // Beer variety
    brewery_href: string;   // brewery's untappd page
    brewery_name: string;   
    image: string;          // untappd icon
    rating: number;         // untappd rating
    rating_count: number;
    abv: number;            // percent alcohol
    ibu: number;            // international
    images: string[];       // untappd photos
    description: string;    // untappd description
    can_price: number;      // fictional price (see README)
    bottle_price: number;      // fictional price (see README)
}

type Brewery = {
    href: string;           // untappd page
    name: string;           
    type: string;     
    city: string;   
    region: string;         // US State   
    country: string;        // "United States"
    image: string;          // untappd icon
    rating: number;         // untappd rating
    rating_count: number;
    fan_count: number;      // number of untappd users who "liked" the brewery
    images: string[];       // untappd photos
    beer_count: number;    
    description: string;    // untappd description
}

type AmericanAles = {
    beers: Beer[];
    breweries: Brewery[];
}
```