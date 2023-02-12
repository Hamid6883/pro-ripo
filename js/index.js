// stap 01:add click hendeler with the submit btn
document.getElementById('butten-id').addEventListener('click',function(){
    // stape 02: get the email in the input fild
  const emailvalu = document.getElementById('email-id');
//  stapes3:allays remember now use .valu
    const email = emailvalu.value;
    //  get the users password
    const passwordfild =document.getElementById('user-password');
    const password = passwordfild.value;
    console.log(password);

    if (email==='sik6883@gmail.com' && password==='1234') {
        window.location.href='http://127.0.0.1:5500/doc.html';
    }
    else {
        console.log('get out');
    }

})

