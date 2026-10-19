-- SQLBook: Code
DROP TABLE IF EXISTS urls;
CREATE TABLE urls(
  id UUID PRIMARY KEY,
  long_url TEXT NOT NULL,
  short_code TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expiration_date TIMESTAMPTZ DEFAULT NULL,

  CONSTRAINT urls_short_code_key UNIQUE (short_code)
);