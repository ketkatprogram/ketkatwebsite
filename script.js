let alertGot = localStorage.getItem("false")
if (alertGot = false) {
    console.log(alertGot)
    alert("WARNING: This website was coded in mobile with 100-80% zoom in mind. It should still work on desktop though.");
    localStorage.setItem("alertGot", true)
}
else {
    console.log(alertGot)
}