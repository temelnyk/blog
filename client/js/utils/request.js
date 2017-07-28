const JSON_REGEXP = /application\/json/;


/**
 * @param {String} method               one of "get", "post", "put", "delete" (case-insensitive)
 * @param {String} url
 * @param {Object|File} [data={}]       data to pass for "POST" or "PUT"
 * @param {String} [fieldName='file']   field name if `data instanceOf File`
 */
function request(method, url, data = {}, fieldName = 'file') {
    method = method.toUpperCase();

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }

            if (xhr.status === 200 || xhr.status === 304) {
                const contentType = xhr.getResponseHeader('Content-Type');
                if (JSON_REGEXP.test(contentType)) {
                    try {
                        const parsed = JSON.parse(xhr.responseText);
                        if (parsed.error) {
                            reject(parsed);
                        } else {
                            resolve(parsed);
                        }
                    } catch (e) {
                        console.error(`Response from "${url}" is unparsable as JSON`, xhr.responseText);
                        reject(null);
                    }
                } else {
                    resolve(xhr.responseText);
                }
            } else {
                reject({
                    error: true,
                    status: xhr.status,
                    response: xhr.response && xhr.response.text || xhr.responseText
                });
            }
        };

        xhr.open(method, url, true);
        let body = null;

        if (method === "POST" || method === "PUT") {
            const isFile = data && data.constructor === File;

            if (isFile) {
                body = new FormData();
                body.append(fieldName, data, data.name);
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                try {
                    body = JSON.stringify(data);
                } catch (e) {
                    console.error(`Cannot serialize provided data`, data);
                    body = '{}';
                }
            }

        }

        xhr.send(body);
    });
}


function get(url) {
    return request('get', url);
}


function post(url, data, fieldName) {
    return request('post', url, data, fieldName);
}


function put(url, data, fieldName) {
    return request('put', url, data, fieldName);
}


function del(url) {
    return request('delete', url);
}


export {
    request,
    get,
    post,
    put,
    del
};
