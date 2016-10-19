$('#btnVerify').on('click', verify);

funtion verify(event){
  var word = $('input#inputWord').val()
  $.ajax({
    type: 'POST',
    data: word,
    url: '/',
    dataType: 'JSON'
  })
  console.log(word)
}
