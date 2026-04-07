CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255)
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DOUBLE,
    location VARCHAR(50),
    time VARCHAR(50),
    result VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id)
);