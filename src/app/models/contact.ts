import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
            "Invalid email address"],

    },
    message: {
        type: String,
        required: [true, "Message is required."],
    },
})

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;