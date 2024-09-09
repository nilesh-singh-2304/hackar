
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { NextResponse , NextRequest } from 'next/server';
import { NextApiRequest } from 'next';
export const runtime = 'experimental-edge';
const genAI = new GoogleGenerativeAI( 'AIzaSyBI7KcvPHHc21XCsUEKkLCB4NVc0XQD2gA');

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(message => message.role === 'user' || message.role === 'assistant')
    .map(message => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    })),
});

export default async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  console.log(messages)

  const geminiStream = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream(buildGoogleGenAIPrompt(messages));

  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(geminiStream);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}