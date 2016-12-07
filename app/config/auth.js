import Firebase from 'firebase'

export const config = {
 apiKey: "AIzaSyBbTLdmv0d3KCoyq1E-8PQw0A8P4p9VQJU",
    authDomain: "socialworksreactfirebase.firebaseapp.com",
    databaseURL: "https://socialworksreactfirebase.firebaseio.com"
}

Firebase.initializeApp(config)

export const ref = Firebase.database().ref()
export const firebaseAuth = Firebase.auth
