// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import course from "@/model/course";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    
        await mongoose.connect(process.env.MONGO_URI)
    console.log(req.body)

    if(req.method == 'POST'){
        const name = req.body.name
        const price = req.body.price
        const reference = req.body.reference
        const launch = req.body.launch
        const imgurl = req.body.imgurl
        const video = req.body.video

        let p = new course({
                    name: name,
                    price: price,
                    reference: reference,
                    launch: launch,
                    imgurl: imgurl,
                    video: video
                })
        await p.save();

        res.status(200).json({ success: true });
    }

    if(req.method == 'GET'){
        const posts = await course.find();
        res.status(200).json({ success: true , data: posts});
    }
  
}
