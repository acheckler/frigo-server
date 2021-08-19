CREATE TYPE item_type as ENUM ('fruit', 'vegetable', 'meat/seafood', 'dairy', 'misc');

CREATE TABLE IF NOT EXISTS food (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category item_type NOT NULL
)