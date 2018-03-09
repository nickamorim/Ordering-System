$('#parent-list > li > a').on('click', function(){
  alert(this.innerHTML);
  $.ajax({
    method: "GET",
    url: "http://localhost:5000/main#" + this.innerHTML,
    crossDomain: true
  })
  .done(function( msg ) {
    console.log( "Data Saved: " + msg );
  });
});