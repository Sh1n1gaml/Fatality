emailjs.init("nAPcSF-F7jwj4kfYE");
function send() {
    var date={
        name: document.getElementById("name").value,
        familia: document.getElementById("familia").value,
        email: document.getElementById("email").value,
        coment:document.getElementById("coment").value
    };
    emailjs.send("service_ybkh0jz", "template_ulp4gsi", date)
    .then(function(otvet) {
        alert("запрос отправлен")
        document.getElementById("formular").reset();
    },
    function(error){
        alert("ой, похоже произошла ошибка")
    })
}