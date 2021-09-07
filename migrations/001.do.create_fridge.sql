CREATE TYPE item_type as ENUM ('Fruits', 'Vegetables', 'Meat/Seafood', 'Dairy', 'Miscellaneous');

CREATE TABLE IF NOT EXISTS food (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category item_type NOT NULL
);