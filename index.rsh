'reach 0.1';
'use strict';

export const main = Reach.App(() => {
  const A = Participant('APond', {
    pool: UInt,
    bait: UInt,
    fish: UInt, 
    rem: UInt, 
  });
  const B = Participant('Bob', {
    buy: Fun([UInt], Null),
    hooked: Fun([UInt], Null),
    wantit: Bool,
  });
  init();

  A.only(() => {
    const bait = declassify(interact.bait);
    const pool = declassify(interact.pool);
 });
  A.publish(bait); 
  commit();
  A.publish(pool);
  commit();

  B.only(() => {
    interact.buy(bait); });
    B.pay(bait);
    commit();

  A.only(() => {
    const fish = declassify(interact.fish);

  });
    A.publish(fish);


    commit();

  
  B.only(() => {  
    interact.hooked(fish); });
 
  A.pay(fish);
  transfer(bait).to(A);
  transfer(fish).to(B);
  commit();
  exit();
})