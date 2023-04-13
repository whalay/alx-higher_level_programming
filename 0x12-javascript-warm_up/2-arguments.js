#!/usr/bin/node
const args = process.argv.length;

if (args=== 0){
	console.log('No Argument');
} else if (args === 1){
	console.log('Argument Found');
} else{
	console.log('Arguments Found');
}
