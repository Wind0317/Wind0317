/*
1.颜一鸣现在有1头母牛，母牛在长成4岁的时候生一头小母牛(3岁长成4岁的时候立即生一头小母牛)，
以后每年都生头小母牛，每头母牛在16岁的时候就会死亡（由9岁长到10岁的时候就生一头小母牛，然后这头老母牛立即死亡）
请问在20年以后颜一鸣一共有多少头母牛？
*/

function getCow(year){
    if(year<=3){
        return 1;
    }else if(year<10){
        return getCow(year-3)+getCow(year-1);
    }else{
        return getCow(year-1);
    }
}
console.log(getCow(20));