var express = require('express');
var router = express.Router();
var {createUser, authUser, logout} = require('../services/usersServices');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth', async function(req, res, next) {
  try {
    const responseObject = await authUser(req.body);
    // console.log(responseObject);
  
    if (responseObject.success && responseObject.token) {
      res.header("x-auth-token", responseObject.token).json({
        success: true,
        token: responseObject.token
      });
    } else {
      res.status(400).json({
        success: false,
        error: responseObject.error
      })
    }

  } catch (error) {
    console.log(error);
  }
});

router.post('/logout', async function(req, res, next) {
  try {
    const responseObject = await logout(req.body.token);
    console.log(req.body);
    if (responseObject.success) {
      res.json(responseObject);
    } else {
      res.status(400).json(responseObject)
    }
  } catch (error) {
    console.log(error);
  }
})

router.post('/create', async function(req, res, next) {
  const responseObject = await createUser(req.body);
  console.log(responseObject);
  if (responseObject.success && responseObject.user) {
    res.header("x-auth-token", responseObject.token).json({
      success: true,
      user: {
        username: responseObject.user.username,
        email: responseObject.user.email
      },
    });
  } else {
    res.status(400).json({
      success: false,
      error: responseObject.error
    });
  }
});

module.exports = router;
