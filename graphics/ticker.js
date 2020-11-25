const snippets = [
	"Klo 14 pieru tulee varren kanssa",
	"Huh, kello on vasta 12 ja 100 gecs soi niin kovaa!",
	"Mitenhän jos tähän jättää paljon tyhjää?"
  ];

  var snippetContainer = "";
  for (var i = 0; i < snippets.length; i++) {
	snippetContainer += '<div class="ticker-item">• • • ';
	snippetContainer += snippets[i];
	snippetContainer += ' • • •&nbsp;&nbsp;&nbsp;';
	snippetContainer += '</div>';
  }
  //write tickers to page
  const chyron = document.querySelector(".ticker");
  chyron.innerHTML = snippetContainer;

  //get length in characters of all snippets
  const snipJoin = snippets.join();
  characterLength = snipJoin.length;

  //set length of animation in ms to length of all snippet characters
  //multiplied by multiplier (150)
  chyron.style.animation = "" + (characterLength * 150) + "ms ticker linear infinite";
  // console.log(chiron.innerHTML);
