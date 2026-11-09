
function login() {
    alert("GalaxyVerse olamiga xush kelibsiz! 🚀");
}

function start() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

function showVideo() {
    alert("GalaxyVerse videosi tez orada qo'shiladi!");
}

function sendMessage() {
    let name = document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Iltimos, ismingizni kiriting!");
    } else {
        alert("Rahmat, " + name + "! Xabaringiz qabul qilindi.");
        document.getElementById("name").value = "";
    }
}
