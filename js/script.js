// event pada saat link di klik 
$('.page-scroll').on('click' , function(e){

    // ambil isi href    
    var tujuan = $(this).attr('href');
    
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    
    console.log(elemenTujuan.offset())
    // pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    });

   e.preventDefault();

});