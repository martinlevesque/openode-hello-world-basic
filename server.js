#!/usr/bin/env node

const http = require("http");

const server = http.createServer(function (req, res) {
	console.log(`out normal...`);
	console.error(`out error...`);
	res.end("Hello pretty opeNode World! headers = " + JSON.stringify(req.headers, null, 4));
})

server.listen(80, (err) => {
	if ( ! err) {
		console.log(`server is listening on 80`)
	}
})
