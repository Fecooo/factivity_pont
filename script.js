function add(user, pont) {
    let eddigi = parseInt(document.getElementById(user).innerHTML);
    console.log(eddigi);
    document.getElementById(user).innerHTML = eddigi += pont;
}