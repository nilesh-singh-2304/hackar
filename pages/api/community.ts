// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import post from "@/model/post";

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
        const title = req.body.title
        const content = req.body.content
        const imgurl = req.body.imgurl
        const date = req.body.date
        const link1 = req.body.link1
        const link2 = req.body.link2

        let p = new post({
                    title: title,
                    content: content,
                    imgurl: imgurl,
                    date: date,
                    link1: link1,
                    link2: link2
                })
        await p.save();

        res.status(200).json({ success: true });
    }

    if(req.method == 'GET'){
        const posts = await post.find();
        res.status(200).json({ success: true , data: posts});
    }
  
}
