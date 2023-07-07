function generateNumber() {
    const min = Math.ceil(document.querySelector(".inputmin").value)
    const max = Math.floor(document.querySelector(".inputmax").value)

    if (min >= max) {
        alert("o valor mínimo tem que ser MENOR que o valor máximo!!!")
    }
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        const resultInput = document.querySelector(".result-input")

        resultInput.value = result


    }


}



