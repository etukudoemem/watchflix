"use client"

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  authDomain: "watchflix-4305e.firebaseapp.com",
  projectId: "watchflix-4305e",
  storageBucket: "watchflix-4305e.firebasestorage.app",
  messagingSenderId: "780931536755",
  appId: "1:780931536755:web:30562b11e7bcabe7ba5706",
  measurementId: "G-ZQTMX8M06E"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);