const http = require('http');
const https = require('https');
const url = require('url');

const server = http.createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    let id = query.included_response_ids; // здесь ваш id

    const options = {
        hostname: 'api.typeform.com',
        path: `/forms/PJ1tgUNv/responses?included_response_ids=${id}`,
        method: 'GET',
        headers: {
            'authorization': 'bearer ' + 'tfp_C1AhRvvVmC45oJ3Th19ckvhtipLFvdukbFde2RmaQ7zi_e52zcqM7DMvc'
        }
    };

    const apiReq = https.request(options, apiRes => {
        let data = '';

        apiRes.on('data', chunk => {
            data += chunk;
        });

        apiRes.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*'); // Добавление заголовка CORS
            res.end(data);
        });
    });

    apiReq.on('error', error => {
        console.error(error);
    });

    apiReq.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
