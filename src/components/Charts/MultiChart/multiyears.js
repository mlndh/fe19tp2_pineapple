import { Audiyears } from '../audi';
import { bmwyears } from '../bmw';
import { citroenyears } from '../citroen';
import { daciayears } from '../dacia';
import { fiatyears } from '../fiat';
import { fordyears } from '../ford';
import { hyundaiyears } from '../hyundai';
import { hondayears } from '../honda';
import { jaguaryears } from '../jaguar';
import { kiayears } from '../kia';
import { ldyears } from '../landrover';
import { mazdayears } from '../mazda';
import { mbyears } from '../mercedes';
import { nissanyears } from '../nissan';
import { opelyears } from '../opel';
import { porscheyears } from '../porsche';
import { renaultyears } from '../renault';
import { seatyears } from '../seat';
import { skodayears } from '../skoda';
import { vsyears } from '../volkswagen';
import { volvoyears } from '../volvo';


export const multi = {
    Audi: Audiyears.results,
    Bmw: bmwyears.results,
    Citroën: citroenyears.results,
    Dacia: daciayears.results,
    Fiat: fiatyears.results,
    Ford: fordyears.results,
    Hyundai: hyundaiyears.results,
    Honda: hondayears.results,
    Jaguar: jaguaryears.results,
    KIA: kiayears.results,
    Landrover: ldyears.results,
    Mazda: mazdayears.results,
    MercedesBenz: mbyears.results,
    Nissan: nissanyears.results,
    Opel: opelyears.results,
    Porsche: porscheyears.results,
    Renault: renaultyears.results,
    Seat: seatyears.results,
    Skoda: skodayears.results,
    Volkswagen: vsyears.results,
    Volvo: volvoyears.results,

}


const arrAvg = arr => arr.reduce((a, b) => {

    return Number(a) + Number(b)
}, 0) / arr.length

export const averagePrices = (brand) => {
    if (!brand) {
        console.log("Must provide brand");
        return;
    }
    let brand2018Prices = multi[brand].filter(item => (item.tillverkningsar === "2018")).map(item => item.nybilspris);
    let brand2019Prices = multi[brand].filter(item => (item.tillverkningsar === "2019")).map(item => item.nybilspris);
    let brand2020Prices = multi[brand].filter(item => (item.tillverkningsar === "2020")).map(item => item.nybilspris);
    console.log("2018 length: " + brand2018Prices.length)
    console.log("2019 length: " + brand2019Prices.length)
    console.log("2020 length: " + brand2020Prices.length)

    return {
        2018: arrAvg(brand2018Prices), 2019: arrAvg(brand2019Prices),
        2020: arrAvg(brand2020Prices)
    }
}

export const getBrands = () => Object.keys(multi) // ["bmw", "dacia", osv]