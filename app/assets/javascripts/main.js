$(document).ready(function() {
 sub_btn();

});

function sub_btn(){
  $('#sub_form').on('ajax:success', function (e){
    e.preventDefault()
    console.log('Whaaaaattttt?!?!')
  })
  
}