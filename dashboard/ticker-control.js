const itemInput = document.getElementById('item');

function add () {
	const item = itemInput.value;
	nodecg.sendMessage('addtoTicker', item);
}

function destroy () {
	nodecg.sendMessage('emptyArray');
}

function hide () {
	nodecg.sendMessage('hideTicker');
}

function show () {
	nodecg.sendMessage('showTicker');
}
