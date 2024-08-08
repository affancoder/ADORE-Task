function updateRatingValue(value) {
  document.getElementById("rating-value").innerText = value;
}

function updateRatingValue2(value) {
  document.getElementById("rating-value2").innerText = value;
}

function updateRatingValue(value, elementId) {
  document.getElementById(elementId).innerText = value;
}

document.addEventListener("DOMContentLoaded", function () {
  const responsesBody = document.getElementById("responsesBody");
  const searchBox = document.getElementById("searchBox");
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popupClose");
  const popupContent = document.getElementById("popupContent");
  const overlay = document.getElementById("overlay");

  const applications = [
    {
      name: "John Doe",
      email: "john@example.com",
      contact: "1234567890",
      whatsapp: "1234567890",
      city: "New York",
      state: "NY",
      country: "USA",
      language: "English",
      fluency: "Fluent",
      writing: "Excellent",
      intro: "Passionate about volunteering.",
      source: "Internet",
      motivation: "Helping others.",
      "meeting-date": "2024-08-10",
      "meeting-time": "10:00 AM",
      platform: "Zoom",
      meetingRound: 1,
      remarks: "Good communication skills",
      status: "Pending",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "0987654321",
      whatsapp: "0987654321",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      language: "Spanish",
      fluency: "Intermediate",
      writing: "Good",
      intro: "Experienced volunteer.",
      source: "Referral",
      motivation: "Community service.",
      "meeting-date": "2024-08-11",
      "meeting-time": "2:00 PM",
      platform: "Google Meet",
      meetingRound: 2,
      remarks: "Very enthusiastic",
      status: "Pending",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "5551234567",
      whatsapp: "5551234567",
      city: "Chicago",
      state: "IL",
      country: "USA",
      language: "French",
      fluency: "Advanced",
      writing: "Excellent",
      intro: "Dedicated to social work.",
      source: "Social Media",
      motivation: "Making a difference.",
      "meeting-date": "2024-08-12",
      "meeting-time": "11:00 AM",
      platform: "Microsoft Teams",
      meetingRound: 1,
      remarks: "Great leadership qualities",
      status: "Pending",
    },
    {
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "5559876543",
      whatsapp: "5559876543",
      city: "Houston",
      state: "TX",
      country: "USA",
      language: "German",
      fluency: "Basic",
      writing: "Fair",
      intro: "Volunteering enthusiast.",
      source: "Friend",
      motivation: "Giving back to society.",
      "meeting-date": "2024-08-13",
      "meeting-time": "3:00 PM",
      platform: "Zoom",
      meetingRound: 3,
      remarks: "Needs improvement in technical skills",
      status: "Pending",
    },
    {
      name: "Charlie Davis",
      email: "charlie@example.com",
      contact: "5556543210",
      whatsapp: "5556543210",
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      language: "Chinese",
      fluency: "Fluent",
      writing: "Excellent",
      intro: "Passionate about helping.",
      source: "Newsletter",
      motivation: "Community engagement.",
      "meeting-date": "2024-08-14",
      "meeting-time": "1:00 PM",
      platform: "Google Meet",
      meetingRound: 2,
      remarks: "Very organized and efficient",
      status: "Pending",
    },
    {
      name: "David Evans",
      email: "david@example.com",
      contact: "5553210987",
      whatsapp: "5553210987",
      city: "Philadelphia",
      state: "PA",
      country: "USA",
      language: "Japanese",
      fluency: "Intermediate",
      writing: "Good",
      intro: "Committed to volunteering.",
      source: "Advertisement",
      motivation: "Improving lives.",
      "meeting-date": "2024-08-15",
      "meeting-time": "4:00 PM",
      platform: "Microsoft Teams",
      meetingRound: 1,
      remarks: "Excellent problem-solving skills",
      status: "Pending",
    },
  ];

  localStorage.setItem("applications", JSON.stringify(applications));
  let filteredApplications = applications;
  let currentPage = 1;
  const rowsPerPage = 10;

  function displayTable(applications, page = 1) {
    responsesBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedApplications = applications.slice(start, end);

    paginatedApplications.forEach((application, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><a href="#" class="name-link" data-index="${index}">${
        application.name
      }</a></td>
        <td>${application["meeting-date"]} ${application["meeting-time"]}</td>
        <td><a href="https://us06web.zoom.us/j/7300060335?pwd=aVVBSlViS2xBZDdkLzlDdUwzSERRdz09" class="meeting-link">${
          application.platform
        }</a></td>
        <td>${application.meetingRound || "N/A"}</td>
        <td>${application.remarks || "N/A"}</td>
        <td id="status-${index}">${application.status || "Pending"}</td>
        <td>
          <button onclick="updateStatus(${index}, 'Approved')">Approve</button>
          <button onclick="updateStatus(${index}, 'Disapproved')">Disapprove</button>
        </td>
      `;
      responsesBody.appendChild(row);
    });

    pageInfo.innerText = `Page ${page} of ${Math.ceil(
      applications.length / rowsPerPage
    )}`;
  }

  function showPopup(index) {
    const application = filteredApplications[index];
    popupContent.innerHTML = `
      <p><strong>Name:</strong> ${application.name}</p>
      <p><strong>Email:</strong> ${application.email}</p>
      <p><strong>Contact Number:</strong> ${application.contact}</p>
      <p><strong>WhatsApp Number:</strong> ${application.whatsapp}</p>
      <p><strong>City:</strong> ${application.city}</p>
      <p><strong>State:</strong> ${application.state}</p>
      <p><strong>Country:</strong> ${application.country}</p>
      <p><strong>Language:</strong> ${application.language}</p>
      <p><strong>Fluency:</strong> ${application.fluency}</p>
      <p><strong>Writing:</strong> ${application.writing}</p>
      <p><strong>Introduction:</strong> ${application.intro}</p>
      <p><strong>Source:</strong> ${application.source}</p>
      <p><strong>Motivation:</strong> ${application.motivation}</p>
      <p><strong>Meeting Time:</strong> ${application["meeting-time"]}</p>
      <p><strong>Meeting Date:</strong> ${application["meeting-date"]}</p>
      <p><strong>Platform:</strong> ${application.platform}</p>
      <p><strong>Meeting Round:</strong> ${
        application.meetingRound || "N/A"
      }</p>
      <p><strong>Remarks:</strong> ${application.remarks || "N/A"}</p>
      <p><strong>Status:</strong> ${application.status || "Pending"}</p>
    `;
    popup.classList.add("active");
    overlay.classList.add("active");
  }

  searchBox.addEventListener("input", function () {
    const searchTerm = searchBox.value.toLowerCase();
    filteredApplications = applications.filter((application) =>
      application.name.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    displayTable(filteredApplications, currentPage);
  });

  prevPageBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      displayTable(filteredApplications, currentPage);
    }
  });

  nextPageBtn.addEventListener("click", function () {
    if (currentPage < Math.ceil(filteredApplications.length / rowsPerPage)) {
      currentPage++;
      displayTable(filteredApplications, currentPage);
    }
  });

  responsesBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("name-link")) {
      const index = event.target.getAttribute("data-index");
      showPopup(index);
    }
  });

  popupClose.addEventListener("click", function () {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  window.updateStatus = function (index, status) {
    const actualIndex = (currentPage - 1) * rowsPerPage + index;
    applications[actualIndex].status = status;
    localStorage.setItem("applications", JSON.stringify(applications));
    displayTable(filteredApplications, currentPage);
  };

  displayTable(filteredApplications, currentPage);
});

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
