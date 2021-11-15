
-- (Re)create the table

DROP TABLE IF EXISTS Scores;
CREATE TABLE Scores (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date VARCHAR(20) NOT NULL,
    score INT NOT NULL,
    challenges completed VARCHAR(20) NOT NULL
);

-- Insert some test data

INSERT INTO Scores (date, score, challenges completed)
VALUES
    ('Monday 15th November', 215, 'Some');