/* drop it if it exists
otherwise create our database, call it movielist

tell sql to use our recently created db

create our schemas

hardcode in some data to test our db and to help in initial refactor of our frontend and server*/
DROP DATABASE IF EXISTS movielist;
CREATE DATABASE movielist;

use movielist;

CREATE TABLE movies (
  id int AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  watched BOOL DEFAULT 0,
PRIMARY KEY (id)
);

INSERT INTO movies (name)
VALUES ('Big Trouble In Little China');

INSERT INTO movies (name)
VALUES ('Fight Club');

INSERT INTO movies (name)
VALUES ('Die Hard');