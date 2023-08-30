const sequelize = require('../models/text'); 
const Text = require('../models/text'); 

sequelize.sync().then(async () => {
    console.log('text table created successfully!');

    try {
        const createdText = await Text.create({
            text: "hello world !",
        });
        console.log('Created record: ', createdText);
        
        const allTexts = await Text.findAll();
        console.log('All records: ', allTexts);
    } catch (error) {
        console.error('Error:', error.message);
    }
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

