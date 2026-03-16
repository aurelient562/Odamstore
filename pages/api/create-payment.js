export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.mashapay.com/create-payment', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PAYMENT_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment API error' });
  }
}
