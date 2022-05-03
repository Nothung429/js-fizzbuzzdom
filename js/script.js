// Obiettivo:scrivi un programma che stampi in console i numeri da 1 a 100
// 1. scrivere la variabile per la creazione della lista 
// 2. scrivere un ciclo che stampi i numeri da 1 a 100
// 3. per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi "Buzz"
// 4. per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
// 5. applicare i numeri o i nomi per i multipli all'elemento html ul
// 6. applicare uno stile diverso per ogni gruppo di numeri (multipli di 3 , multipli di 5 , multipli di 3 e 5 , numeri restanti)
const fizzbuzzList = document.querySelector(".list")
for(let i=1; i<=100; i++) {
    const fizzbuzzNumber = document.createElement("li");
    if (i % 3 === 0 && i % 5 === 0){
        fizzbuzzNumber.classList.add("item" ,"fizzbuzz");
        fizzbuzzNumber.innerText = "FizzBuzz";
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        fizzbuzzNumber.classList.add("item" , "fizz");
        fizzbuzzNumber.innerText = "Fizz";
        console.log("Fizz");
    } else if (i % 5 === 0) {
        fizzbuzzNumber.classList.add("item" , "buzz");
        fizzbuzzNumber.innerText = "Buzz";
        console.log("Buzz");
    } else {
        fizzbuzzNumber.classList.add("item");
        fizzbuzzNumber.innerText = i;
        console.log(i);
    }
    fizzbuzzList.append(fizzbuzzNumber);
}