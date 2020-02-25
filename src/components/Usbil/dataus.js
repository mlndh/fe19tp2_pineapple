import { fiat } from '../TestGraph/fiat'
import { hyundai } from '../TestGraph/hyundai'
import { audi } from '../Audi/audi'
import { ford } from '../TestGraph/ford'
import { bmw } from '../Bmw/bmw'
import { landrover } from '../TestGraph/landrover'
import { mercedesbenz } from '../TestGraph/mb'
import { porsche } from '../TestGraph/porsche'

const arrAvg = arr => arr.reduce((a, b) => {
    //console.log("a: " + a);
    //console.log("b: " + b);
    return Number(a) + Number(b)
}, 0) / arr.length

export const averagePrices = () => {
    let audiPrices = audi.results.map(item => item.nybilspris);
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