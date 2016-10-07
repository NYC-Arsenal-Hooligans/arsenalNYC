DROP TABLE IF EXISTS saved_events;
DROP TABLE IF EXISTS members;

CREATE TABLE members (
  user_id SERIAL unique PRIMARY KEY ,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  email TEXT NOT NULL,
  password_digest TEXT NOT NULL DEFAULT 'temp123',
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zipcode INT NOT NULL,
  member_id INT NOT NULL DEFAULT 00000,
  active BOOLEAN NOT NULL DEFAULT false,
  user_created TIMESTAMP NOT NULL DEFAULT now()
);


CREATE INDEX ON members(fname);
CREATE INDEX ON members(email);

CREATE TABLE saved_events (
  saved_id SERIAL PRIMARY KEY,
  user_reference INTEGER REFERENCES members(user_id),
  title TEXT NOT NULL,
  image_link TEXT,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL
);
