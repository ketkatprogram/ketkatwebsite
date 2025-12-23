let alertGot = localStorage.getItem("alertGot", "")
if (alertGot == null) {
    console.log(alertGot)
    alert("WARNING: This website was coded in mobile with 100-80% zoom in mind. If theres any errors you found, please reach out to me.");
    localStorage.setItem("alertGot", true)
}
else {
    console.log(alertGot)
}