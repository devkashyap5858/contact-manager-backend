import express from 'express'
import { Router } from "express"
const router = Router();
import {getContacts,createContact,getContact,updateContact,deleteContact} from '../controllers/contact.controller.js'
import validateToken from '../middleware/validateToken.handler.js';


router.use(validateToken);

// -----------------------------
// GET all contacts
// URL: GET /api/contacts
// -----------------------------
router.route("/").get(getContacts);

// -----------------------------
// CREATE a new contact
// URL: POST /api/contacts
// -----------------------------
router.route("/").post(createContact);

// -----------------------------
// GET a single contact by ID
// URL: GET /api/contacts/:id
// Example: /api/contacts/123
// -----------------------------
router.route("/:id").get(getContact);

// -----------------------------
// UPDATE a contact by ID
// URL: PUT /api/contacts/:id
// Example: /api/contacts/123
// -----------------------------
router.route("/:id").put(updateContact);

// -----------------------------
// DELETE a contact by ID
// URL: DELETE /api/contacts/:id
// Example: /api/contacts/123
// -----------------------------
router.route("/:id").delete(deleteContact);

export default router;
