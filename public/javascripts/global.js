// DOM Ready =============================================================
$(document).ready(function() {
    console.log('O mundo ainda faz sentido');
    //$.ajax({
    //  type: 'POST',
    //  data: 'afjkldsfjflkfjds',
    //  url: '/',
    //  dataType: 'JSON'
    //})
    // Add User button click
    $('#btnVerify').on('click',showUserInfo );
});

//$('#btnVerify').on('click', verify);

function showUserInfo(event) {
  console.log('o mindo');
  $.ajax({
    type: 'POST',
    data: 'afjkldsfjflkfjds',
    url: '/',
    dataType: 'JSON'
  });
};

//funtion verify(event) {
  //console.log('o mundo continua');
  //var word = $('input#inputWord').val()
//  $.ajax({
//    type: 'POST',
//    data: 'afjkldsfjflkfjds',
//    url: '/',
//    dataType: 'JSON'
//  });
//  console.log(word)
//};
