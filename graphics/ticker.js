import {gsap} from '../node_modules/gsap/index.js';

const tl = gsap.timeline();
let snippets = [];
let isDestroyed = false;

nodecg.listenFor('emptyArray',() => {
	const ticker = document.querySelector(".ticker");
	snippets = [];
	ticker.innerHTML = "";
	const tickerWrap = document.querySelector(".ticker-wrap");
	tickerWrap.style["opacity"] = "0";
	isDestroyed = true;
})

nodecg.listenFor('addtoTicker', (item) => {
	const tickerWrap = document.querySelector(".ticker-wrap");
	isDestroyed = false;
	if (snippets < 2 || tickerWrap.style["opacity"] == 0) {
		tl.from([tickerWrap], .5, {opacity: 0});
		tl.to([tickerWrap], .5, {opacity: 1});
	}
	snippets.push(item);

  let snippetContainer = "";
  for (let i = 0; i < snippets.length; i++) {
	snippetContainer += '<div class="ticker-item">';
	snippetContainer += snippets[i];
	snippetContainer += ' &nbsp;&nbsp;&nbsp;';
	snippetContainer += '</div>';
  }
  //write tickers to page
  const ticker = document.querySelector(".ticker");
  ticker.innerHTML = snippetContainer;

  //get length in characters of all snippets
  const snipJoin = snippets.join();
  let characterLength = snipJoin.length;

  //set length of animation in ms to length of all snippet characters
  //multiplied by multiplier (150)
  ticker.style.animation = "" + (characterLength * 250) + "ms ticker linear infinite";
  // console.log(chiron.innerHTML);
  })

  nodecg.listenFor('hideTicker', () => {
	const tickerWrap = document.querySelector(".ticker-wrap");
	if (tickerWrap.style["opacity"] == 1) {
		tl.from([tickerWrap], .5, {opacity: 1});
		tl.to([tickerWrap], .5, {opacity: 0});
	}
  })

  nodecg.listenFor('showTicker', () => {
	const tickerWrap = document.querySelector(".ticker-wrap");
	if (tickerWrap.style["opacity"] == 0 && !isDestroyed){
		tl.from([tickerWrap], .5, {opacity: 0});
		tl.to([tickerWrap], .5, {opacity: 1});
	}
  })
