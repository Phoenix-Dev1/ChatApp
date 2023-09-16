import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDKckXeXlxdxKqoAQND6KfuZOQGsTvXawM',
  authDomain: 'chat-525dc.firebaseapp.com',
  projectId: 'chat-525dc',
  storageBucket: 'chat-525dc.appspot.com',
  messagingSenderId: '923422556830',
  appId: '1:923422556830:web:651255d7b3c3866d82b18f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
