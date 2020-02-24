import { volkswagen } from './volkswagen';
import { seat } from './seat';
import { skoda } from './skoda';
import { audi } from './audi';

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