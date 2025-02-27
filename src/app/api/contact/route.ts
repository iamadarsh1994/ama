import connectDB from "../../../lib/mongodb";
import Contact from "../../models/contact";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req: NextRequest){
    const { email, message } = 
    await req.json()
    try {
        await connectDB()
        await Contact.create({ email, message })
        return NextResponse.json({
            msg: ["Message Sent Successfully"],
            success: true,
        })
    } catch (error) {
        if(error instanceof mongoose.Error.ValidationError) {
            let errorList = []
            for (let e in error.errors){
                errorList.push(error.errors[e].message)
            }
            console.log(errorList)
            return NextResponse.json({
                msg: errorList
            }) 
        }else{
            return NextResponse.json({msg: ["Unable to send message"]

            })
        }
        }
    }
