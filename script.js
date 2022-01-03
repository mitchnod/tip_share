function calculate(amount, tip, people){
    var amount = document.getElementById("amount").value;
    var tip = document.getElementById("tip").value;
    var people = document.getElementById("people").value;

    answer = (tip/100 * amount)/people;
    answer = answer.toFixed(2)
    document.getElementById("answer").innerText = `You owe $${answer} each.`
}