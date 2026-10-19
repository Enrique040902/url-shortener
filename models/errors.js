export const DUPLICATE_SHORT_CODE = {
  code: "23505",
  constraint: "urls_short_code_key"
};

export const isDuplicateShortCode = (err) =>
  err.code === DUPLICATE_SHORT_CODE.code &&
  err.constraint === DUPLICATE_SHORT_CODE.constraint;

export class DuplicateShortCodeError extends Error {
  constructor(message) {
    super(message);
    this.name = "DuplicateShortCodeError";
  }
}