'use strict';

let request = require("request");
// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '52e29f1455084b34b88987eab957e0b7';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westus.api.cognitive.microsoft.com/face/v1.0';
const personGroupId = "bobabot";

function verifyFace(img) {
    return new Promise(function (resolve) {
        detectFace(img).then( (value) => {
            if (value.length !== 1) {
                resolve(null);
            }
            const body = {
                "largePersonGroupId": personGroupId,
                "faceIds": [
                    value[0].faceId
                ],
                "maxNumOfCandidatesReturned": 1,
                "confidenceThreshold": 0.7
            };
            const options = {
                uri: uriBase + "/identify",
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key' : subscriptionKey
                }
            };
            request.post(options, (error, response, body) => {
                if (error) {
                    console.log('Error: ', error);
                    return;
                }
                let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
                console.log(jsonResponse);
                resolve(body);
            });
        });

    });
}

function detectFace(img) {
    const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': ''
    };
    const options = {
        uri: uriBase + "/detect",
        qs: params,
        body: '{"url": ' + '"' + img + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    };
    return new Promise(function (resolve) {
        request.post(options, (error, response, body) => {
            if (error) {
                console.log('Error: ', error);
                return;
            }
            let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
            console.log(jsonResponse);
            resolve(JSON.parse(body));
        });
    });
}

function createPerson(img, name) {
    const options = {
        uri: uriBase + "/largepersongroups/" + personGroupId + "/persons",
        body: '{"name": "' + name + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    };
    return new Promise(function (resolve, reject) {
        request.post(options, (error, response, body) => {
            if (error) {
                console.log('Error: ', error);
                reject();
            }
            let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
            console.log(jsonResponse);
            resolve(JSON.parse(body));
        })
    }).then((value) => {
        addFace(img, value.personId).then( () => {
            retrain();
        });
    });
}

function addFace(img, id) {
    const options = {
        uri: uriBase + "/largepersongroups/" + personGroupId + "/persons/" + id + "/persistedfaces",
        body: '{"url": "' + img + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    };
    return new Promise((resolve, reject) => {
        request.post(options, (error, response, body) => {
            if (error) {
                console.log('Error: ', error);
                reject();
            }
            let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
            console.log(jsonResponse);
            resolve();
        });
    });
}

function retrain() {
    const options = {
        uri: uriBase + "/largepersongroups/" + personGroupId + "/train",
        body: '',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    };
    request.post(options, (error, response, body) => {
        if (error) {
            console.log('Error: ', error);
        }
    });
}
//detectFace("https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/28/15/gettyimages-686971844.jpg?w968");
// verifyFace("https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/28/15/gettyimages-686971844.jpg?w968");
 createPerson("https://upload.wikimedia.org/wikipedia/commons/0/0e/Roger_Stone_crop.jpg", "abc");