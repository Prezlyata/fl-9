const userLogin = prompt('user login');
const time = new Date().getHours();

if(userLogin === '' || userLogin === null){
    alert('Canceled');
} else if(userLogin.length < 4 ){
    alert('input length less than 4 symbols');
} else if(userLogin !== 'User'){
    alert('I don’t know you');
} else {
    const userPassword = prompt('user password');
    if (userPassword === '' ){
        alert('Canceled');
    } else if(userPassword !== 'SuperUser'){
        alert('Wrong password');
    } else{
        if (time < 20 ){
            alert('Good day');
        } else {
            alert('Good evening');
        }
    }
}

