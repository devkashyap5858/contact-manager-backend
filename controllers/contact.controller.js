import AsyncHandler from "express-async-handler";
import { Contact } from "../models/contact.model.js";
//@dis Get all contact
//@route Get /api/contacts
//@access private


const getContacts = AsyncHandler(async(req, res) => {
  const contacts = await Contact.find({user_id:req.user.id});
  res.status(200).json(contacts);
});


//@dis Create new contact
//@route Post /api/contacts
//@access private


const createContact = AsyncHandler(async(req, res) => {
  console.log("the request body :",req.body);
  const {name,email,phone} = req.body;
  if (!name || !email|| !phone) {
    res.status(400);
    throw new Error ("All fields are ")
  }
  const contact = await Contact.create({
    name : name,
    email : email,
    phone : phone,
    user_id : req.user.id
  });
  res.status(201).json(contact);
});


//@dis Get contact
//@route Get /api/contacts/:id
//@access private


const getContact = AsyncHandler(async (req, res) => {
  const singleContact = await Contact.findById(req.params.id)
  if(!singleContact){
    res.status(404);
    throw new Error("Contact not found !")
  }
  res.status(200).json(singleContact);
});

//@dis Update contact
//@route put /api/contacts/:id
//@access private


const updateContact = AsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }

  // Check if contact belongs to logged-in user
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("Not authorized to update this contact!");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});


//@dis Delete contact
//@route Delete /api/contacts/:id
//@access private


const deleteContact = AsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(400);
    throw new Error("Contact not found!");
  }

  await contact.deleteOne(); // delete contact from DB

  res.status(200).json({
    message: "Contact deleted successfully",
    deletedContact: contact
  });
});



export {getContacts ,createContact,getContact ,updateContact,deleteContact}

