function updateRatingValue(value) {
  document.getElementById("rating-value").innerText = value;
}

function updateRatingValue2(value) {
  document.getElementById("rating-value2").innerText = value;
}

function updateRatingValue(value, elementId) {
  document.getElementById(elementId).innerText = value;
}

document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const responsesTable = document
      .getElementById("responsesTable")
      .getElementsByTagName("tbody")[0];

    const newRow = responsesTable.insertRow();

    newRow.insertCell(0).innerText = formData.get("name");
    newRow.insertCell(1).innerText = "Pending";
    newRow.insertCell(2).innerText = `${formData.get(
      "meeting-date"
    )} ${formData.get("meeting-time")}`;

    const actionCell = newRow.insertCell(3);
    const approveButton = document.createElement("button");
    approveButton.innerText = "Approve";
    approveButton.addEventListener("click", function () {
      newRow.cells[1].innerText = "Approved";
    });

    const rejectButton = document.createElement("button");
    rejectButton.innerText = "Reject";
    rejectButton.addEventListener("click", function () {
      newRow.cells[1].innerText = "Rejected";
    });

    actionCell.appendChild(approveButton);
    actionCell.appendChild(rejectButton);

    this.reset();
  });
