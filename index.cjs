const { createServer } = require("http");
const { pid } = process;
const server = createServer((req, res) => {
    console.log(`Handling request from ${pid}`);
    res.end(`Hello Wheel The World\n`);
});
server.listen(process.env.PORT || 8080, () => console.log(`Started at ${pid}`));
