const list = document.querySelector(".list")
for(let i=1; i<=100; i++) {
    const element = document.createElement("li");
    if (i % 3 === 0 && i % 5 === 0){
        element.classList.add("item" ,"fizzbuzz");
        element.innerText = "FizzBuzz";
        list.append(element);
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        element.classList.add("item" , "fizz");
        element.innerText = "Fizz";
        list.append(element);
        console.log("Fizz");
    } else if (i % 5 === 0) {
        element.classList.add("item" , "buzz");
        element.innerText = "Buzz";
        list.append(element);
        console.log("Buzz");
    } else {
        element.classList.add("item");
        element.innerText = i;
        list.append(element);
        console.log(i);
    }
}