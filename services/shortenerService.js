import { uuidv7 } from "uuidv7";
import { randomBytes } from "node:crypto";
import { saveShortCode } from "../models/shortenerModel.js";
import { DuplicateShortCodeError } from "../models/errors.js";

export const generateShortUrl = async (url) => {
  const uuid = uuidv7();
  const NUMER_BYTES = 6;
  const shortRandomCode = randomBytes(NUMER_BYTES).toString('base64url');

  try {
    const { rows } = await saveShortCode({ uuid, url, shortRandomCode });
    return rows[0];
  } catch (e) {
    if (e instanceof DuplicateShortCodeError) {
      return await generateNewCode(url);
    };
    throw new Error(e);
  };
};

const generateNewCode = async (url) => {
  const MAX_ATTEMPTS = 5;
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    const uuid = uuidv7();
    const shortRandomCode = randomBytes(6).toString('base64url');
    try {
      const { rows } = await saveShortCode({ uuid, url, shortRandomCode });
      return rows[0];
    } catch (e) {
      if (!(e instanceof DuplicateShortCodeError)) throw e;
    };
  };

  throw new Error('No se pudo generar un código único.');
};