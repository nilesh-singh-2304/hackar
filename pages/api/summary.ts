
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const url = req.body.url

      const options = {
        method: 'GET',
        url: 'https://ai-web-summary.p.rapidapi.com/api/WebSummary',
        params: {
          url: url
        },
        headers: {
          'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
          'x-rapidapi-host': 'ai-web-summary.p.rapidapi.com'
        }
      };
      
          const response = await axios.request(options);
          console.log(response.data);

  res.status(200).json({ success: true , data: response.data});
}
