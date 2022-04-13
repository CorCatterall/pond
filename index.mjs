import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const startBalance = stdlib.parseCurrency(100);
const accAPond = await stdlib.newTestAccount(startBalance);

const startPond = await getBalance(accAPond);
const availPond = stdlib.formatCurrency(startBalance) / 2;

const accBob = await stdlib.newTestAccount(startBalance / 2);
const startBob = await getBalance(accBob);
const ctcAPond = accAPond.contract(backend);
const ctcBob = accBob.contract(backend, ctcAPond.getInfo());

const fishVal = [];
const remVal = [];
let i = 0;
do {
  fishVal.push (Math.floor(Math.random() * availPond  ));
  remVal.push (availPond - fishVal[i]);
  console.log(`The pool value is ${startPond}. Available is ${availPond}. The fish value is ${fishVal[i]}.
  Remaining is ${remVal[i]}. Bob has ${startBob}.`);
  i += 1;
} while (i < 5);
await Promise.all([
  ctcAPond.participants.APond({
    pool: stdlib.parseCurrency(availPond),
    bait: stdlib.parseCurrency(1),
    fish: stdlib.parseCurrency(fishVal[i-1]),
    rem: stdlib.parseCurrency(remVal[i-1]) 
  }),
  ctcBob.p.Bob({
    buy: (amt) => console.log(`Bob bought ${stdlib.formatCurrency(amt)} bait`),
    hooked: (amt) => console.log(`Bob hooked a ${stdlib.formatCurrency(amt)}-size fish`),
  }),

 
]);
const nowPond = await getBalance(accAPond);
const nowBob = await getBalance(accBob);
console.log(`Now Bob has ${nowBob}. The pond now has ${nowPond}`);
