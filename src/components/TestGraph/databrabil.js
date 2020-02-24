import { volvo } from './volvo';
import { renault } from './renault'
import { dacia } from './dacia'

const arrAvg = arr => arr.reduce((a, b) => {
    //console.log("a: " + a);
    //console.log("b: " + b);
    return Number(a) + Number(b)
}, 0) / arr.length

export const averagePrices = () => {
    let volvoPrices = volvo.results.map(item => item.nybilspris);
    let renaultPrices = renault.results.map(item => item.nybilspris);
    let daciaPrices = dacia.results.map(item => item.nybilspris);

    return {
        volvo: arrAvg(volvoPrices), renault: arrAvg(renaultPrices),
        dacia: arrAvg(daciaPrices)

    }
}