export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { topic, difficulty, noque } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "x-ai/grok-4.1-fast:free",
        messages: [
          {
            role: "user",
            content: `
Generate JSON only.
topic: ${topic}
difficulty: ${difficulty}
questions: ${noque}

Output:
{
  "topic":"",
  "difficulty":"",
  "questions":[
    {
      "question":"",
      "options":["","","",""],
      "answer":""
    }
  ]
}
`
          }
        ]
      })
    });

    const data = await response.json();
    console.log(data)
    let raw = data.choices[0].message.content;

    raw = raw.replace(/```json|```/g, "").trim();
    const jsonText = raw.substring(raw.indexOf("{"), raw.lastIndexOf("}") + 1);

    const parsed = JSON.parse(jsonText);

    return res.status(200).json(parsed);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
