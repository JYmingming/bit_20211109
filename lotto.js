let arrLotto = [];


let i = 0
while(true) {
    let num = Math.random()*45+1

    const index =arrLotto.indexOf(num.toFixed(0))
    if(index>=0){
        continue
    }
    arrLotto.push(num.toFixed(0))

    if(arrLotto.length===6){
        break
    }
}

console.log(arrLotto)
