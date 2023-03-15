-- creates the database hbtn_0d_usa and the table states
-- states description:
--	id INT unique, auto generated, can’t be null and is a primary key
	-- name VARCHAR(256) can’t be null
-- If the database hbtn_0d_usa already exists, your script should not fail
-- If the table states already exists, your script should not fail

CREATE A DATABASE IF NOT EXISTS hbtn_0d_usa;
USE hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS cities (
	id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
	state_id INT NOT NULL,
	name VARCHAR(256) NOT NULL,
	FOREIGN KEY(state_id) REFERENCES hbtn_0d_usa.states(id)
);
