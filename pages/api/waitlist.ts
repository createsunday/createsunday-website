import type { NextApiRequest, NextApiResponse } from 'next'

type Output = {
  status: "success" | "error"
  message?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Output>) => {  
  const body = JSON.parse(req.body);
  const email = body.email;
  const endpoint = process.env.WAITLIST_ENDPOINT || '';
  
  if (!email) {
    res.status(400).json({ status: 'error', message: 'email is required' })
  }

  if (!endpoint) {
    res.status(500).json({ status: 'error', message: 'waitlist endpoint is not configured' })
  }
  
  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        email 
      })
    })
    res.status(200).json({ status: 'success' })
  } catch (err) {  
    res.status(500).json({ status: 'error' })
  }
}

export default handler