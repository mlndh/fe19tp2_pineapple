import { fiat } from './fiat'
import { hyundai } from './hyundai'
import { audi } from './audi'
import { ford } from './ford'
import { bmw } from './bmw'
import { landrover } from './landrover'
import { mercedesbenz } from './mb'
import { porsche } from './porsche'

const arrAvg = arr => arr.reduce((a, b) => {
    //console.log("a: " + a);
    //console.log("b: " + b);
    return Number(a) + Number(b)
}, 0) / arr.length

export const averagePrices = () => {
    let audi = audi.prices.map(item => item.nybilspris);
    let fiatPrices = fiat.results.map(item => item.nybilspris);
    let fordPrices = ford.results.map(item => item.nybilspris);
    let bmwPrices = bmw.results.map(item => item.nybilspris);
    let mercedesbenzPrices = mercedesbenz.results.map(item => item.nybilspris);
    let landroverPrices = landrover.results.map(item => item.nybilspris);
    let porschePrices = porsche.results.map(item => item.nybilspris);
    let hyundaiPrices = hyundai.results.map(item => item.nybilspris);

    return {
        fiat: arrAvg(fiatPrices), ford: arrAvg(fordPrices), bmw: arrAvg(bmwPrices),
        mercedesbenz: arrAvg(mercedesbenzPrices), landrover: arrAvg(landroverPrices), porsche: arrAvg(porschePrices),
        hyundai: arrAvg(hyundaiPrices), audi: arrAvg(audiPrices)

    }
}