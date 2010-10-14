require ('./hello_node');
export.hello = function (n) {
	require('sys').puts("hello " + n);
}
