//@ts-check

export let connecting = () => displayStatus('statusConnecting');
export let connected = () => {
	displayStatus('statusConnected');
	$('#cardLogin').show();
}
export let logined = username => {
	displayStatus('statusLogined');
	$('#txtUsername').text(username);
	
	$('#cardLogin').hide();
	$('#cardInput').show();
}
export let broken = reason => {
	displayStatus('statusBroken');
	$('#txtBrokenReason').text(reason);

	$('#cardLogin').hide();
	$('#cardInput').hide();
}

function displayStatus(id) {
	$('.card-status').hide()
		.filter(`#${id}`).show();
}