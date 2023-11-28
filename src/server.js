const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 5000;

const main = async () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log(`
      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓    
      ┃       DATABASE CONNECTED 🎉     ┃        
      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
      `);

    app.listen(port, () => {
      console.log(`🏃‍♂️ App Running On:  ${port}`);
    });
  } catch (error) {
    console.log("⚠️ Connection Error: ", error);
  }
};

main();
