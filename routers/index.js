const express = require('express');
const path = require('path');
const utilNode = require('util');




class Routers {

    constructor() {


        this.router = express.Router();
        this.express = express();
        this.rootDir = path.dirname(__dirname);//.substr(0, path.dirname(__dirname).lastIndexOf('\\'))
        this.viewPath = this.rootDir + '\\view';
        //this.routePath = path.dirname(__dirname)
        this.scriptPath = this.rootDir + '\\view\\Assets\\Scripts';
        this.path = path;
        this.init();
       // this.helper = require('../Common/Utility');


    }


    init() {



        this.router.post('/login', async (req, res, next) => {

            let result = await system.ExecuteStoreProcedureSelect('SPS_Login', req.body);

            if (!util.isNullOrEmpty(result)) {

                result = JSON.parse(result)[0];

                if (JSON.parse(req.body).IsReg) {
                    global.EncryptMaping.push({ Decrypt: result.CompanyID, Encrypt: util.Encrypt(item.CompanyID.toString()) });
                }



                if (result.UserType === 1 /*CompanyManager*/ || result.UserType === 5/*SysAdmin*/) {
                    result.Modules = await system.ExecuteStoreProcedureSelect('SPS_GetUserTypeAuthorization', '{ "UserTypeID": ' + result.UserType.toString() + '}');

                }
                else {

                    result.Modules = await system.ExecuteStoreProcedureSelect('SPS_SystemUserAuthorization',
                        utilNode.format('{ "CompanyID": %s, "UserID":  %s}', result.CompanyID.toString(), result.ID.toString()));

                }

                result.CompanyID = util.Encrypt(result.CompanyID.toString());
                result = JSON.stringify(result);
                res.send(result);
            }
            else
                res.send('');

        });

        this.router.get('/', (req, res, next) => {

            if (req.originalUrl === '/') {
                let path = this.viewPath;//+ '\\index.html'
                console.log(req.baseUrl);
                console.log(req.originalUrl);
                console.log(req.url)
                console.log(path)
                res.sendFile('index.html', { root: path });
            }
            //next();
        });

        this.router.post('/Select', async (req, res, next) => {


            //let body = decodeURIComponent(req.body)
            let params = JSON.parse(req.body);// body.split('&')
            let spName = params.spName;// params[0].split('=')[1]
            let parametersJson = params.parametersJson;//params[1].split('=')[1]
            parametersJson = JSON.parse(parametersJson);
            params.CompanyID = util.Decrypt(params.CompanyID);
            util.setValueProperty(parametersJson, 'CompanyID', parseInt(params.CompanyID))
            parametersJson = JSON.stringify(parametersJson);
            spName = Decrypt(spName);

            try {
                let result = await system.ExecuteStoreProcedureSelect(spName, parametersJson);
                res.send(result);
            }
            catch (err) {

                console.log(err);
                res.send('Error_' + err.message);

            }
        });

        this.router.post('/Update', async (req, res, next) => {


            //let body = decodeURIComponent(req.body)
            let params = JSON.parse(req.body);// body.split('&')
            let spName = params.spName;// params[0].split('=')[1]
            let parametersJson = params.parametersJson;//params[1].split('=')[1]
            let isID = params.isID;
            let spMode = Decrypt(params.spMode);
            let isResult = params.isResult;
            parametersJson = JSON.parse(parametersJson);
            params.CompanyID = util.Decrypt(params.CompanyID);
            util.setValueProperty(parametersJson, 'CompanyID', parseInt(params.CompanyID))
            //parametersJson.CompanyID = util.Decrypt(parametersJson.CompanyID);
            parametersJson = JSON.stringify(parametersJson);
            spName = Decrypt(spName);
            //console.log(req.body);
            try {
                let result = await system.ExecuteStoreProcedureUpdate(spName, spMode, isID, isResult, parametersJson);
                res.send(result);
            }
            catch (err) {
                //Erro Log
                console.log(err);
                res.send('Error_' + err.message);

            }
        });
    }

    getRouter() {

        return this.router;
    }
    getExpress() {
        return this.express;
    }
}



module.exports = new Routers();
//module.exports = router
//export default router