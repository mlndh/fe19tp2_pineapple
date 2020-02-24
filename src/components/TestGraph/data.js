import { volvo } from './volvo';
import { audi } from '../Audi/audi';
import { skoda } from './skoda';
import { volkswagen } from './volkswagen';
import { seat } from './seat';
import { renault } from './renault';
import { dacia } from './dacia';
import { fiat } from './fiat';
import { ford } from './ford';
import { bmw } from './bmw';
import { mercedesbenz } from './mb';
import { landrover } from './landrover';
import { porsche } from './porsche';
import { hyundai } from './hyundai'







const arrAvg = arr => arr.reduce((a, b) => {
    //console.log("a: " + a);
    //console.log("b: " + b);
    return Number(a) + Number(b)
}, 0) / arr.length

export const averagePrices = () => {
    let audiPrices = audi.results.map(item => item.nybilspris);
    let volvoPrices = volvo.results.map(item => item.nybilspris);
    let skodaPrices = skoda.results.map(item => item.nybilspris);
    let volkswagenPrices = volkswagen.results.map(item => item.nybilspris);
    let seatPrices = seat.results.map(item => item.nybilspris);
    let renaultPrices = renault.results.map(item => item.nybilspris);
    let daciaPrices = dacia.results.map(item => item.nybilspris);
    let fiatPrices = fiat.results.map(item => item.nybilspris);
    let fordPrices = ford.results.map(item => item.nybilspris);
    let bmwPrices = bmw.results.map(item => item.nybilspris);
    let mercedesbenzPrices = mercedesbenz.results.map(item => item.nybilspris);
    let landroverPrices = landrover.results.map(item => item.nybilspris);
    let porschePrices = porsche.results.map(item => item.nybilspris);
    let hyundaiPrices = hyundai.results.map(item => item.nybilspris);









    return {
        audi: arrAvg(audiPrices), volvo: arrAvg(volvoPrices), skoda: arrAvg(skodaPrices),
        volkswagen: arrAvg(volkswagenPrices), seat: arrAvg(seatPrices), renault: arrAvg(renaultPrices),
        dacia: arrAvg(daciaPrices), fiat: arrAvg(fiatPrices), ford: arrAvg(fordPrices), bmw: arrAvg(bmwPrices),
        mercedesbenz: arrAvg(mercedesbenzPrices), landrover: arrAvg(landroverPrices), porsche: arrAvg(porschePrices),
        hyundai: arrAvg(hyundaiPrices)

    }
}

/* export const unique = [...new Set(mixed.results.map(item => item.marke))];
 */
/*
{audi: 340000, volvo: 105000}
{2019: 2944334, 2018: 3489384, 2017: 98249284}
*/


