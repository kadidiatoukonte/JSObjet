var user_username = prompt('Enter your first name :');
var user_name = prompt('Enter your name :');
var user_country_of_residence = prompt('Enter your country of residence :');
var array_country = ['france', 'allemagne', 'espagne', 'belgique', 'italie'];
var user_age = prompt('Enter your age :');
var user_means_of_payment = prompt('Enter your payment method')
var array_payment = ['visa', 'mastercard', 'paypal'];
if (user_age >= 18) {
  if ('(user_country_of_residence != array_country) and (user_means_of_payment == array_payment)'){
    console.log('Welcome' + ' to ' +  user_country_of_residence + ','  + ' you are authorized to access this site.');
    var user = new Object();
    user.username = console.log(user_username);
    user.name = console.log(user_name);
    user.country_of_residence = console.log(user_country_of_residence.toUpperCase());
    user.age = console.log(user_age + ' ans');
    user.means_of_payment = console.log('Your payment method is : ' + user_means_of_payment.toUpperCase());
  }else {
    console.log('Authorized access, but unauthorized country or payment method');
  }
}
else {
  console.log('You are a minor, unauthorized access');
}
