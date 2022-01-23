"use strict";
const { db, waitingClient } = require("../server/db");


const dummyWaitingUsers = [
  {
    firstName: 'Mary',
    lastName: 'Jane',
    email: 'MaryJane@gmail.com',
    aboutYou: 'I am A very Beautiful Plant Tree',
    firstCat: false,
    otherPets: 'gold fish, camel',
    city: 'Brooklyn',
    state: 'New York',
    fB: 'klin333',
    iG: 'klin333',
    gender: 'female',
    ears: 'straight',
    color: 'grey',
    mif: 'must be cute',
  },
  {
    firstName: 'John',
    lastName: 'Brown',
    email: 'JohnBrown@yahoo.com',
    aboutYou: 'I love long walks on the beach and watching the sunset',
    firstCat: true,
    otherPets: '',
    city: 'High Point',
    state: 'North Carolina',
    fB: 'klin333',
    iG: 'klin333',
    gender: 'male',
    ears: 'fold',
    color: 'white',
    mif: 'I need a strong, working, cat',
  },
  {
    firstName: 'Anatoly',
    lastName: 'Tsinker',
    email: 'anatoly.tsinker13@gmail.com',
    aboutYou: 'Im a Wizard',
    firstCat: false,
    otherPets: 'none',
    city: 'Effort',
    state: 'Pennsylvania',
    fB: 'none',
    iG: 'none',
    gender: 'female',
    ears: 'fold',
    color: 'orange',
    mif: 'Like an astronaut in the ocean',
  }
]

async function uploadDummyWaitingUsers() {
  await Promise.all(dummyWaitingUsers.map(client => (waitingClient.create(client))))
  console.log("seeding dummy Waiting list users...")
}


async function clearDB() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("Clearing Database...");
  console.log("Matching Models...")
}

async function runSeed() {
  console.log("Attempting to Seed");
  try {
    await clearDB();
    //  run seed function here
    await uploadDummyWaitingUsers();
    //  end seed functions
    console.log("Success!")
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = runSeed;
