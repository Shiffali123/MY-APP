// LOGIN SYSTEM
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "agent" && pass === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMessage").textContent = "Invalid login.";
    }
}

function logout() {
    window.location.href = "index.html";
}

// NAVIGATION
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// UPLOAD + DEMO RECON
function uploadFile() {
    const fileInput = document.getElementById("fileUpload");

    if (fileInput.files.length === 0) {
        document.getElementById("uploadStatus").textContent = "Select a file first.";
        return;
    }

    document.getElementById("uploadStatus").textContent = "File uploaded successfully.";

    // Demo reconciliation numbers
    document.getElementById("sales").textContent = "34,770";
    document.getElementById("purchases").textContent = "19,649";
    document.getElementById("profit").textContent = "36.82%";

    addAlert("High MUMD detected.");
    addAlert("Unchecked delivery marked as 0.");
}

function addAlert(message) {
    const alertList = document.getElementById("alertList");
    const li = document.createElement("li");
    li.textContent = message;
    alertList.appendChild(li);
}
