-- Fake data to get us started
--
--
--
INSERT INTO players (id, name, age, position, jersey_number)
VALUES  (1, 'Harvey Smith', 12, 'point guard', '11'),
        (2, 'Janis Joplin', 12, 'point guard', '32'),
        (3, 'Richard Feinstein', 12, 'point guard', '34'),
        (4, 'Toby Smith', 12, 'point guard', '39'),
        (5, 'Malcolm Warner', 12, 'point guard', '77'),
        (6, 'Hector Jones', 12, 'point guard', '23'),
        (7, 'Martin Kim', 12, 'point guard', '88'),
        (8, 'Lowell Robertson', 12, 'point guard', '87'),
        (9, 'Nigel Fairbarns', 12, 'point guard', '26'),
        (10, 'Tom T. Hall', 13, 'guard', '99');
--
--
--
INSERT INTO fees (id, monthly_fee, paid, PlayerID)
VALUES  (1, 30, true, 1),
        (2, 30, false, 2),
        (3, 30, false, 3),
        (4, 30, true, 4),
        (5, 30, true, 5),
        (6, 30, false, 6),
        (7, 30, true, 7),
        (8, 30, true, 8),
        (9, 30, true, 9),
        (10, 30, true, 10);
--
--
--
INSERT INTO venues (id, name, address, city, state, zipcode, field_or_court_number)
VALUES  (1, 'Hillside Park', '133 Hillside Dr', 'Reston', 'VA', '98762', 'field 1'),
        (2, 'Hillside Park', '133 Hillside Dr', 'Reston', 'VA', '98762', 'field 2'),
        (3, 'City Recreation Center', '211 Smith Circle', 'Reston', 'VA', '98762', 'court 2'),
        (4, 'City Recreation Center', '211 Smith Circle', 'Reston', 'VA', '98762', 'court 3'),
        (5, 'Herbert Jones Athletic Center', '444 Herbert Way', 'Reston', 'VA', '98762', 'court 3'),
        (6, 'Herbert Jones Athletic Center', '444 Herbert Way', 'Reston', 'VA', '98762', 'court 4'),
        (7, 'Richard Simmons Memorial Park', '133 Hillside Dr', 'Reston', 'VA', '98762', 'field 3'),
        (8, 'Richard Simmons Memorial Park', '133 Hillside Dr', 'Reston', 'VA', '98762', 'field 4'),
        (9, 'Jennie Dean Park', '333 Four Mile Run', 'Arlington', 'VA', '98762', 'field 3'),
        (10, 'Jennie Dean Park', '333 Four Mile Run', 'Arlington', 'VA', '98762', 'field 4');
--
--
--
INSERT INTO validations (id, username, password)
VALUES  (1, 'coach', 'coachpassword');
--
--
--
INSERT INTO games (id, date_time_of_game, final_score_our_team, final_score_their_team, VenueID)
VALUES  (1, '2017-06-12 18:30:00', 66, 65, 3),
        (10, '2017-09-10 19:00:00', 59, 60, 4);
--
--
--
