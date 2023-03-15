-- create a database uniqie_id
-- an INT attribute with default value 1 and must be unique
-- a name attributte VARCHAR(256)

CREATE TABLE IF NOT EXISTS unique_id (
	id INT DEFAULT 1 UNIQUE,
	name VARCHAR(256)
);
