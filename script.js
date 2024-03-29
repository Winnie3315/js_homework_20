function toSort(arr) {
    let sorted = []
    while(arr.length > 0){
        let minNum = arr[0]
        let minIndex = -1
        let index = 0
        for(let itm of arr){
            if (itm < minNum) {
                minNum = itm
                minIndex = index
            }
            index++
        }
        
        sorted.push(minNum)
        arr.splice(minIndex , 1)
    }
    return sorted
}

let nums = [2121,43,434343,54,65,76,7,873,43,2,7865,1,100]
let sorted = toSort(nums)

//2

console.log(sorted);

function getId(length = 8){
    let symbol = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = " "
    for (let i = 0; i < length; i++) {
		result += symbol[Math.floor(Math.random() * symbol.length)];
	}
	
	return result

}
let id = getId()

console.log(id);

//3

function showEmail() {
    first = prompt(`ur name?`).toLowerCase().trim()
    sec = prompt(`surname?`).toLowerCase().trim()
    mail = prompt(`gmail,yandex,yahoo,cookie,icloud,list  и тд`).toLowerCase().trim()

    let email = `${first}${sec}@${mail}.com `
   return email
}


 console.log(showEmail());