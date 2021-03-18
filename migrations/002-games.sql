
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

CREATE TABLE Orders (
  id: INTEGER PRIMARY KEY AUTOINCREMENT,
  userID INTEGER REFERENCES Users(id),
  title TEXT,
  description TEXT
);

INSERT INTO Orders(userID, title, description) values (1, "Nike Air Zoom", "Nice shoes")
INSERT INTO Orders(userID, title, description) values (2, "Adidas Superstars", "Cool shoes")
INSERT INTO Orders(userID, title, description) values (3, "New Balance", "Good shoes")

-- DOWN
DROP TABLE Users;