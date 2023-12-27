import JSONHandler from '../../handlers/JSONHandler';

export default function handleRequest(req, res) {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Welcome to main page');
            break;
        case '/post':
            JSONHandler(req, res);
    }
}