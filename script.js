let total = 0;

function addExpense() {
    const desc = document.getElementById("desc").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (!desc || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${desc} - ₹${amount}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = function () {
        total -= amount;
        document.getElementById("total").textContent = total;
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("expenseList").appendChild(li);

    total += amount;
    document.getElementById("total").textContent = total;

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}