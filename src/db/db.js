
import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

function connect() {
  // Connecting to the database
  console.log(MONGO_URI, 'in here ==================>');
  mongoose
    .connect(`${MONGO_URI}`, {})
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
}

export default connect;



