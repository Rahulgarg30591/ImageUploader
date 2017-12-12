// Server Side implementation of POST API of Login with the express object.
export default function attachImageAPI(app) {
    app.post('/api/imageUpload', function(req, res) {
        console.log(req.files);
        console.log(req.body.isImages);
        console.log(req.body.fontType);
        console.log(req.body.headerColor);
        console.log(req.body.backgroudColor);
        console.log(req.body.userColor);
        console.log(req.body.isLight);
    });
}
