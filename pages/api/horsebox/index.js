import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const { id } = await db.collection('horsebox').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
  } catch (e) {
    res.status(400).end();
  }
}