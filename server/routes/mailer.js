const router = require('express').Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const {google} = require('googleapis'); 
const CLIENT_ID = '763221924654-7626aacd10ls1fv61n990v0uddlb0046.apps.googleusercontent.com'; 
const CLIENT_SECRET = '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'; 
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'; 
const REFRESH_TOEKN = '1//04mYK8pdOTIMCCgYIARAAGAQSNwF-L9IrUPVuTFXf9Ny-mhAdfT-xc8s461_rqy6w4AIKgGNASQ9lTO_GzIKh3l73JHWge3-QIK8'; 
router.use(bodyParser.json()); 
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOEKN 
}); 

router.post('/', async (req, res) => {
    try {
        console.log(req); 
        const accessToken = await oAuth2Client.getAccessToken(); 
        const transport = nodemailer.createTransport({
            service:'gmail', 
            auth: {
                type: 'OAuth2', 
                user: 'promoterssend@gmail.com', 
                clientId: CLIENT_ID, 
                clientSecret: CLIENT_SECRET, 
                refreshToken: REFRESH_TOEKN, 
                accessToken: accessToken 
            }
        }); 
        const mailOptions = {
            from: 'Promoters-intl <promoterssend@gmail.com>' ,
            to: 'promotersreceive@gmail.com', 
            subject: 'contact-email', 
            text: `
                name: ${req.body.name}\n
                phone: ${req.body.phone}\n
                email: ${req.body.email}\n 
                question:${req.body.question}\n 
                requirements:${req.body.requirements}\n 
            `
        }
        const result = await transport.sendMail(mailOptions); 
        console.log('email is sent..', result); 
        res.status(200).json('recieved form data'); 
    } catch(err) {
        console.log(err); 
        res.status(500).json('something went wrong'); 
    }
}); 

module.exports = router;  