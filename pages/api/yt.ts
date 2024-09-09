
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const query = req.body.query

    const options = {
        method: 'POST',
        url: 'https://yt-api5.p.rapidapi.com/search',
        headers: {
          'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
          'x-rapidapi-host': 'yt-api5.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          q: query,
          limit: 10
        }
      };
      
      
          const response = await axios.request(options);
          

  res.status(200).json({ success: true , data: response.data});
}