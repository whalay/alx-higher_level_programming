-- create a table id_not_null
-- with a default value for 1d = 1 and name varchar(256)

CREATE TABLE IF NOT EXISTS id_not_null (
	id INT DEFAULT 1,
	name VARCHAR(256) 
);
