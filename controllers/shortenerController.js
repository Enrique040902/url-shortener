import { getUrl } from '../models/shortenerModel.js';
import { generateShortUrl } from '../services/shortenerService.js';

export const getLongUrl = async (req, res) => {
  const shortCode = req.params.shortCode;
  const url = await getUrl(shortCode);

  if (!url) res.status(404).send('URL Not Found. Sorry');
  else res.redirect(307, url);
};

export const shortenUrl = async (req, res) => {
  const { body: { url } } = req;

  const result = await generateShortUrl(url);

  res.send(result);
};