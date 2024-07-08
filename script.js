const cell = document.querySelectorAll(".cell")

let stat = true
let tictak
cell.forEach((ele) => {
    ele.addEventListener('click', () => {
        console.log('click');
        if(ele.textContent = ' '){
            if(stat){
                tictak = 'x'
                stat= false
                console.log('stat true');
            }else{
                tictak = 'o'
                stat= true
                console.log('stat false');
            }
            ele.textContent = tictak
        }
    })
})