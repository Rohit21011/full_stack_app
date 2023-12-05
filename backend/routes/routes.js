const express = require('express');
const { getUser } = require('../controllers/getUser');
const { createUser } = require('../controllers/createUser');
const { deleteUser } = require('../controllers/deleteUser');
const { searchUser } = require('../controllers/searchUser');
const { updateUser } = require('../controllers/updateUser');
const { filterUser } = require('../controllers/filterUser');
const router = express.Router();

router.get("/",getUser);
router.post('/create',createUser);
router.delete("/:id",deleteUser);
router.post("/search",searchUser);
router.put("/:id",updateUser);
router.post("/filter",filterUser);
module.exports=router; 
