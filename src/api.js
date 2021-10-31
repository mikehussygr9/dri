const express = require('express');
const serverless = require('serverless-http');
const requestIp = require('request-ip');
const ipInfo = require("ipinfo");
const router=express.Router();

const app = express();
router.get('/',(req, res) =>{

    const clientIp = requestIp.getClientIp(req);
    const ipp=clientIp.toString();
    //const geo = geoip.lookup(ipg);
    ipInfo(ipp,(err, cLoc) => {
        //res.send(cLoc.country)
        if (cLoc.country==="IN")
            {
                res.redirect('https://www.google.com');
            }
        else
            {
                res.redirect("https://www.dropbox.com/s/z9jktzd4rmca4yc/data.txt?dl=1");
            }        
        //console.log(cLoc.country);*/
    });

});
app.use('/.ne',router);
module.exports.handler=serverless(app);
