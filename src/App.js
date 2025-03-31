import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AboutView from './views/aboutView';
import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import ChallengeView from './views/challengeView';
import ChallengeDetailsView from './views/challenge/challengeDetailsView';
import ChallengeListView from './views/challenge/challengeListView';
import DashboardView from './views/dashboardView';
import PasswordUpdateView from './views/passwordUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import WelcomeView from './views/welcomeView';
import WorkoutView from './views/workoutView';
import WorkoutCreateView from './views/workout/workoutCreateView';
import WorkoutDetailsView from './views/workout/workoutDetailsView';
import WorkoutListView from './views/workout/workoutListView';
import WorkoutUpdateView from './views/workout/workoutUpdateView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="about" element={<AboutView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profiile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/challenge" element={<ChallengeView/>}/>
            <Route exact path="/challenge/details/*">
              <Route path=":id" element={<ChallengeDetailsView/>}/>
            </Route>
            <Route exact path="/challenge/list" element={<ChallengeListView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
            <Route exact path="/workout" element={<WorkoutView/>}/>
            <Route exact path="/workout/create" element={<WorkoutCreateView/>}/>
            <Route exact path="/workout/details/*">
              <Route path=":id" element={<WorkoutDetailsView/>}/>
            </Route>
            <Route exact path="/workout/list" element={<WorkoutListView/>}/>
            <Route exact path="/workout/update/*">
              <Route path=":id" element={<WorkoutUpdateView/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
