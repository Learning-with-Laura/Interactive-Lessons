import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,signInAnonymously,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {getFirestore,doc,getDoc,setDoc,onSnapshot,serverTimestamp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
const config={apiKey:'AIzaSyC7y-jx-LMOJyjtbLHuChc3yEGZXlQrtZ8',authDomain:'live-learning-with-laura.firebaseapp.com',projectId:'live-learning-with-laura',storageBucket:'live-learning-with-laura.firebasestorage.app',messagingSenderId:'846701984036',appId:'1:846701984036:web:0447c64aef753c1c1e1bb1'};
const app=initializeApp(config);export const auth=getAuth(app),db=getFirestore(app);
export const teacherEmail='laurademe6@gmail.com';
export function isTeacher(user){return !!(user&&user.email===teacherEmail&&user.emailVerified&&user.providerData.some(p=>p.providerId==='google.com'))}
export {GoogleAuthProvider,signInWithPopup,signOut,signInAnonymously,onAuthStateChanged,doc,getDoc,setDoc,onSnapshot,serverTimestamp};
export const lessonId='daniel_halloween_20261028';
export function studentAnswerRef(uid){return doc(db,'studentAnswers',uid+'__'+lessonId)}
export function lessonRef(){return doc(db,'lessonContent',lessonId)}
export function rosterRef(uid){return doc(db,'studentAccess',uid)}
