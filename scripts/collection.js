var buildCollectionItemTemplate = function() {
<<<<<<< HEAD
  var template =
}
=======
     var template =
>>>>>>> checkpoint-19-jquery-next-previous-buttons
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/01.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> The Colors </a>'
   + '      <br/>'
   + '      <a href="album.html"> Pablo Picasso </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;
   return $(template);
 };
<<<<<<< HEAD
   $(window).onload = function() {
=======
   $(window).load(function() {
>>>>>>> checkpoint-19-jquery-next-previous-buttons
    // #1
    var $collectionContainer = $('.album-covers');
    // #2
    $collectionContainer.empty();

    // #3
    for (var i = 0; i < 12; i++) {
<<<<<<< HEAD
var $newThumbnail = buildCollectionItemTemplate();
$collectionContainer.append($newThumbnail);
    }

=======
      var $newThumbnail = buildCollectionItemTemplate();
      $collectionContainer.append($newThumbnail);

    }
>>>>>>> checkpoint-19-jquery-next-previous-buttons
  });
