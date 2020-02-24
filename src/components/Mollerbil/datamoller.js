import { volkswagen } from '../TestGraph/volkswagen';
import { seat } from '../TestGraph/seat';
import { skoda } from '../TestGraph/skoda';
import { audi } from '../TestGraph/audi';

const arrAvg = arr => arr.reduce((a, b) => {
    //console.log("a: " + a);
    //console.log("b: " + b);
    return Number(a) + Number(b)
}, 0) / arr.length

export const averagePrices = () => {
    let audiPrices = audi.results.map(item => item.nybilspris);
    let skodaPrices = skoda.results.map(item => item.nybilspris);
    let volkswagenPrices = volkswagen.results.map(item => item.nybilspris);
    let seatPrices = seat.results.map(item => item.nybilspris);

    return {
        audi: arrAvg(audiPrices), skoda: arrAvg(skodaPrices),
        volkswagen: arrAvg(volkswagenPrices), seat: arrAvg(seatPrices),
    }
}

