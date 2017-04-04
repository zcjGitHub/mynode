require('../module/jquery-1.7.2.min.js');
console.log('aaa')
console.log($('h1'))

$.ajax({
    type: "POST",
    url: "/getReSULT",
    dataType: 'JSON',
    contentType: "application/json",
    data: JSON.stringify({a1:111,b1:222}),
    success: function(data){
        console.log(data);      
    }
});