var u_name = document.myForm.u_name;
var u_pass = document.myForm.u_pass;

function runMe() {
    if (u_name.value == '') {
        u_name.classList.add('is-invalid');
    } else if (u_name.value) {
        u_name.classList.remove('is-invalid');
        u_name.classList.add('is-valid');
    }
    if (u_pass.value == '') {
        u_pass.classList.add('is-invalid');
    } else if (u_pass.value) {
        u_pass.classList.remove('is-invalid');
        u_pass.classList.add('is-valid');
    }
}