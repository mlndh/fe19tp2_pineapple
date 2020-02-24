import { volkswagen } from '../TestGraph/volkswagen';
import { seat } from '../TestGraph/seat';
import { skoda } from '../TestGraph/skoda';
import { audi } from '../Audi/audi';

const arrAvg = arr => arr.reduce((a, b) => {
    //console.log("a: " + a);
    //console.log("b: " + b);
    return Number(a) + Number(b)
}, 0) / arr.length

export const averagePrices = () => {
    let audiYears = audi.results.map(item => item.tillverkningsar);


    return {
        audi: arrAvg(audiYears)
    }
}

