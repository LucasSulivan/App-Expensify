import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MASSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase , googleAuthProvider, database as default };


/* database.ref('expenses').on('child_changed',(snapshot)=>{
  console.log(snapshot.key,snapshot.val())
}); */

/* database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 3829472
});
database.ref('expenses').push({
  description: 'Phone bill',
  note: '',
  amount: 5900,
  createdAt: 39827489
});
database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 37894628
});
 */
/* database.ref('expenses').on('value',(snapshot)=>{
  const expenses = []
  snapshot.forEach((childSnapshot)=>{
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
}) */



 

/* database.ref().set({
  name: 'Lucas Sulivan',
  age: 24,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  locations: {
    city: 'New York',
    country: 'United States'
  }
}).then(()=>{
  console.log('Data is Saved')
}).catch((e)=>{
  console.log('Error in firebase',e)
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'locations/city': 'Seattle'
});


 */



