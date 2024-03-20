let loggedIn;

const BingoItemsController = {

    login: (req, res) => {
        const {password, username} = req.body;
        if (password === 'bingo' && username === 'cypress') {
            loggedIn = true;
            return res.status(200).json({ message: 'Successfully logged in.' });
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    },

    logout: (req, res) => {
        loggedIn = false;
        return res.status(200).json({ message: 'Successfully logged out.' });
    },

    getItems: (req, res) => {

        if (!loggedIn) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        return res.json(bingoItems);
    },

    getItemsByCategory: (req, res) => {

        if (!loggedIn) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        return res.json(bingoItems.filter(item => item.category === req.params.category).sort(() => Math.random() - 0.5));
    },

    getItem: (req, res) => {
        const item = bingoItems.find((item) => item.id === parseInt(req.params.id));

        if (!loggedIn) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.json({
            item: item,
        });
    },

    createItem: (req, res) => {
        const { category, text } = req.body;

        if (!loggedIn) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const newItem = {
            id: bingoItems.length + 1,
            category: category,
            text: text,
        };

        bingoItems.push(newItem);

        res.status(201).json({
            item: newItem,
        });
    },

    updateItem: (req, res) => {
        const { category, text } = req.body;

        if (!loggedIn) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const item = bingoItems.find((item) => item.id === parseInt(req.params.id));

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        item.category = category;
        item.text = text;

        res.json({
            category: category,
            text: text,
        });
    },

    deleteItem: (req, res) => {

        if (!loggedIn) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        bingoItems = bingoItems.filter((item) => item.id !== parseInt(req.params.id));

        res.json();
    },
};

module.exports = { BingoItemsController };

const bingoCategory = {
    OFFICE: 'office',
    VACATION: 'vacation'
};

let bingoItems = [
    {
        id: 1,
        category: bingoCategory.OFFICE,
        text: 'Coworker comes in late'
    },
    {
        id: 2,
        category: bingoCategory.OFFICE,
        text: 'A diet is mentioned'
    },
    {
        id: 3,
        category: bingoCategory.OFFICE,
        text: 'A "reply all" email comes in'
    },
    {
        id: 4,
        category: bingoCategory.OFFICE,
        text: 'Meeting starts late'
    },
    {
        id: 5,
        category: bingoCategory.OFFICE,
        text: 'Burnt food in microwave'
    },
    {
        id: 6,
        category: bingoCategory.OFFICE,
        text: 'Smelly lunch'
    },
    {
        id: 7,
        category: bingoCategory.OFFICE,
        text: 'A joke is told'
    },
    {
        id: 8,
        category: bingoCategory.OFFICE,
        text: 'printer issues'
    },
    {
        id: 9,
        category: bingoCategory.OFFICE,
        text: 'Someone forgets to mute'
    },
    {
        id: 10,
        category: bingoCategory.OFFICE,
        text: 'Someone complains it is too hot'
    },
    {
        id: 11,
        category: bingoCategory.OFFICE,
        text: 'Someone complains it is too cold'
    },
    {
        id: 12,
        category: bingoCategory.OFFICE,
        text: 'Kid noises during a meeting'
    },
    {
        id: 13,
        category: bingoCategory.OFFICE,
        text: 'HR Mail'
    },
    {
        id: 14,
        category: bingoCategory.OFFICE,
        text: 'Called by the wrong name'
    },
    {
        id: 15,
        category: bingoCategory.OFFICE,
        text: 'Birthday'
    },
    {
        id: 16,
        category: bingoCategory.OFFICE,
        text: 'Awkward moment in the restroom'
    },
    {
        id: 17,
        category: bingoCategory.OFFICE,
        text: 'Coffee machine needs cleaning'
    },
    {
        id: 18,
        category: bingoCategory.OFFICE,
        text: 'Coffee is out'
    },
    {
        id: 19,
        category: bingoCategory.OFFICE,
        text: 'Someone steals your parking slot'
    },
    {
        id: 20,
        category: bingoCategory.OFFICE,
        text: 'Someone steals your parking slot'
    },
    {
        id: 21,
        category: bingoCategory.OFFICE,
        text: 'Someone steals your parking slot'
    },
    {
        id: 22,
        category: bingoCategory.OFFICE,
        text: 'Someone steals your parking slot'
    },
    {
        id: 23,
        category: bingoCategory.OFFICE,
        text: 'Someone steals your parking slot'
    },
    {
        id: 24,
        category: bingoCategory.OFFICE,
        text: 'Someone steals your parking slot'
    },
    {
        id: 25,
        category: bingoCategory.OFFICE,
        text: 'Someone comments on the weather'
    },
    {
        id: 26,
        category: bingoCategory.VACATION,
        text: 'Reading a book'
    },
    {
        id: 27,
        category: bingoCategory.VACATION,
        text: 'Cannot read the menu'
    },
    {
        id: 28,
        category: bingoCategory.VACATION,
        text: 'Another German tourist'
    },
    {
        id: 29,
        category: bingoCategory.VACATION,
        text: 'Climb up a hill'
    },
    {
        id: 30,
        category: bingoCategory.VACATION,
        text: 'Lay on the beach'
    },
    {
        id: 31,
        category: bingoCategory.VACATION,
        text: 'Get sunburned'
    },
    {
        id: 32,
        category: bingoCategory.VACATION,
        text: 'Lost hotel room key'
    },
    {
        id: 33,
        category: bingoCategory.VACATION,
        text: 'Learned something new'
    },
    {
        id: 34,
        category: bingoCategory.VACATION,
        text: 'Travelled abroad'
    },
    {
        id: 35,
        category: bingoCategory.VACATION,
        text: 'Did sports'
    },
    {
        id: 36,
        category: bingoCategory.VACATION,
        text: 'Binge-watched Netflix'
    },
    {
        id: 37,
        category: bingoCategory.VACATION,
        text: 'Went fishing'
    },
    {
        id: 38,
        category: bingoCategory.VACATION,
        text: 'Gained weight'
    },
    {
        id: 39,
        category: bingoCategory.VACATION,
        text: 'Saw fireworks'
    },
    {
        id: 40,
        category: bingoCategory.VACATION,
        text: 'Visited the family'
    },
    {
        id: 41,
        category: bingoCategory.VACATION,
        text: 'Did something social'
    },
    {
        id: 42,
        category: bingoCategory.VACATION,
        text: 'Ate barbeque'
    },
    {
        id: 43,
        category: bingoCategory.VACATION,
        text: 'Swam at a public pool'
    },
    {
        id: 44,
        category: bingoCategory.VACATION,
        text: 'Had a picnic'
    },
    {
        id: 45,
        category: bingoCategory.VACATION,
        text: 'Played soccer'
    },
    {
        id: 46,
        category: bingoCategory.VACATION,
        text: 'Has broken a bone'
    },
    {
        id: 47,
        category: bingoCategory.VACATION,
        text: 'Drink alcohole'
    },
    {
        id: 48,
        category: bingoCategory.VACATION,
        text: 'Went on a boat'
    },
    {
        id: 49,
        category: bingoCategory.VACATION,
        text: 'Fell in love'
    },
    {
        id: 50,
        category: bingoCategory.VACATION,
        text: 'Learned a new language'
    },
];