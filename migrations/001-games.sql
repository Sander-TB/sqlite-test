
-- UP

CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  age INTEGER
);

INSERT INTO Users (username, age) values ('sander', 23);
INSERT INTO Users (username, age) values ('Nora', 21);
INSERT INTO Users (username, age) values ('William', 21);
INSERT INTO Users (username, age) values ('Billie', 21);
INSERT INTO Users (username, age) values ('Helene', 21);


-- DOWN
DROP TABLE Users;