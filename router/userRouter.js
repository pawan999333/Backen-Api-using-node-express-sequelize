const userController=require('../controller/userController')
const middlewareController=require('../config/jwt-middleware')
const router=require('express').Router()


router.post('/addUser', userController.registerUser);
router.post('/loginUser', userController.loginUser);
router.post('/validation', userController.validToken)
router.post('/profile', middlewareController.checkToken, userController.middlewareValidationToken)

router.get('/rawQuery1', userController.rawQuery1);
router.get('/rawQuery2', userController.rawQuery2);

router.get('/rawQuery3', userController.rawQuery3);
router.get('/rawQuery4', userController.rawQuery4);
router.get('/rawQuery5', userController.rawQuery5);
router.get('/rawQuery6', userController.rawQuery6);
router.get('/rawQuery7', userController.rawQuery7);
router.get('/rawQuery8', userController.rawQuery8);
router.put('/rawQuery9', userController.rawQuery9);
router.get('/rawQuery9', userController.rawQuery9);

router.delete('/rawQuery10', userController.rawQuery10);
router.get('/rawQuery11', userController.rawQuery11);
router.get('/rawQuery12', userController.rawQuery12);
router.get('/rawQuery13', userController.rawQuery13);
router.get('/rawQuery14', userController.rawQuery14);
router.get('/rawQuery15', userController.rawQuery15);
router.get('/rawQuery16', userController.rawQuery16);
router.get('/rawQuery17', userController.rawQuery17);

router.get('/rawQuery19', userController.rawQuery19);
router.get('/rawQuery20', userController.rawQuery20);
router.get('/rawQuery21', userController.rawQuery21);
router.get('/rawQuery22', userController.rawQuery22);
router.get('/rawQuery23', userController.rawQuery23);
router.get('/rawQuery24', userController.rawQuery24);
router.get('/rawQuery25', userController.rawQuery25);
router.get('/rawQuery26', userController.rawQuery26);
router.post('/rawQuery26', userController.rawQuery26);


router.get('/rawQuery27', userController.rawQuery27);
router.get('/rawQuery28', userController.rawQuery28);
router.get('/rawQuery29', userController.rawQuery29);
router.get('/rawQuery30',userController.rawQuery30);





























module.exports=router;


