# Ionic 4 - To-Do App with Firebase 5
[How to Create a Simple Ionic 4 App with Firebase 5 and AngularFire](https://youtu.be/H20l9ofyR54)

<img src="" width="500"/>

Features:
> Loader
> Timestamp of entries
> Firebase's Firestore

## App Configuration
ionic start appName blank --type=angular
npm install firebase angularfire2
ng g page pages/todoDetails
ng g service services/todo

## Set up Firebase on account:
At app.module.ts, import
	import { AngularFireModule } from 'angularfire2';
	import { environment } from '../environments/environment';
	import { AngularFirestoreModule } from 'angularfire2/firestore';
	
	AngularFireModule.initializeApp(environment.firebase),
    	AngularFireModule

At app-routing.module.ts, add
	{ path: 'todoDetails/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' }
