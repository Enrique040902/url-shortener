import db from '../db/connection.js';
import { DuplicateShortCodeError, isDuplicateShortCode } from './errors.js';

export const getUrl = async (shortCode) => {
  const query = `SELECT long_url FROM urls WHERE short_code = $1`;
  const { rows } = await db.query(query, [shortCode]);
  return rows[0]?.long_url ?? null;
};

export const saveShortCode = async (input) => {
  const { uuid, url, shortRandomCode } = input;
  const query = `INSERT INTO urls (id, long_url, short_code) VALUES ($1, $2, $3) RETURNING short_code`;

  try {
    return await db.query(query, [uuid, url, shortRandomCode]);
  } catch (e) {
    if (isDuplicateShortCode(e)) throw new DuplicateShortCodeError('The code already exists');
    else throw new Error(e);
  }
}