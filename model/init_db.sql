
-- (Re)create the table

DROP DATABASE IF EXISTS CargoConnect;
CREATE DATABASE CargoConnect;
USE CargoConnect;

DROP TABLE IF EXISTS Scores;
CREATE TABLE Scores (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date VARCHAR(20) NOT NULL,
    score INT NOT NULL,
    challenges VARCHAR(20) NOT NULL
);

-- Insert some test data

INSERT INTO Scores (date, score, challenges)
VALUES
    ('Monday 15th November', 200, 'Some'),
    ('Monday 15th November', 215, 'More'),
    ('Monday 15th November', 190, 'Fewer');