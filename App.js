import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';   
import Login from './Login';
import Menu from './Menu';
import {Registration} from './Registration';
import {Fibonacci, Prime} from './Fibonacci';
import {Footer} from './Footer'
import {MarqueeTest} from './Fibonacci'
import {studentOb} from  './helper';
import {location as loc} from  './helper';
import Counter from  './Counter';
import {PrimeSum}  from './Assignment30_03_2021/Assignments';
import {PassingValueFunction} from './April5/PassingValueFunction';
import {HookUseEffectExample} from './April5/HookUseEffectExample';
import {Calculator} from './Assignment30_03_2021/Assignments';
import {RegistrationComponent} from './Assignment30_03_2021/Assignments';
import {ShowTwice,Todo} from './April5/Assignment05_04_2021/Assignment';
import UserDetails from './April6/UserDetails';
import {ProductNames} from './April6/Assignment/Assignment';
import {ProductNamesInfo} from './April6/Assignment/Assignment';
import {ProductsFullData} from './April6/Assignment/Assignment';
// import UserProfile from './April6/Assignment/UserProfile';
// import {UserRegistration} from './April6/Assignment/UserProfile';
import Response from './April8/Response';
import UserProfile from './April8/UserProfile';
// import {ParentComponent} from './April8/Assignment/HowPropsWork';
// import ShowHideImage from './April8/Assignment/ShowHideImage';
import UserInfo from './April8/Assignment/UserInfo';
import UserInfoDetail from './April8/Assignment/UserInfoDetail';
import Parent from './April10/Assignment/Parent';
import UseStateUseEffect from './April10/Assignment/UseStateUseEffect';
import UseState from './practice/UseState';
import {Route,BrowserRouter,Switch, Link} from 'react-router-dom';
// import Comment from './April14/Comment';
import CarRentalCompany from './April14/Assignment/CarRentalCompany';
import Comment from './April14/Test/Comment'; // test april 14
// import TodoContainer from './April14/Assignment/Todo/TodoContainer';
import Forum from './April15/Assignment/Forum';
import Authors from './April15/Assignment/Authors/Authors';
// import Blogs from './April15/Test/Blogs';
import ClassBasedComponent from './April16/ClassBasedComponent';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import TodoContainer from './April16/Assignment/TodoContainer';
import Blogs from './April16/Assignment/Blogs';
import BlogDetails from './April16/Assignment/BlogDetails';
// import { createBrowserHistory } from 'history';
// import history from './history';
// import Blogs from './April16/Assignment/BlogFunctionalBased/Blogs';
// import BlogDetails from './April16/Assignment/BlogFunctionalBased/BlogDetails';

import Product from './April20/Assignment/Product';
import Hobby from './April20/Assignment/Hobby';
// import HobbyForm from './April20/Assignment/HobbyForm';
import UseRefHook from './April21AdvancedReact/UseRefHook';
import BlogContext from './April21AdvancedReact/BlogContext';
import Refs from './April21AdvancedReact/Practice/Refs';
import ContextComponent from './April21AdvancedReact/Practice/ContextComponent';
import CarouselComponent from './April21AdvancedReact/Assignment/Carousel';
import ExpandableComment from './April21AdvancedReact/Assignment/ExpandableComment';
import UserRegistration from './April21AdvancedReact/Test/UserRegistration';
import Name from './April21AdvancedReact/Test/website/Name';
import About from './April21AdvancedReact/Test/website/About';
import Contact from './April21AdvancedReact/Test/website/Contact';
import Team from './April21AdvancedReact/Test/website/Team';
import InputSubmitComponent from './April21AdvancedReact/Test/InputSubmit/InputSubmitComponent';
// import MemoTest from './April22/MemoTest';

import MemoTest from './practice/MemoTest';
// import WithUseMemo from './April22/WithUseMemo';
// import ParentComponent from './April22/ParentComponent';
// import PhotoGallery from './April22/Test/PhotoGallery';
// import DisqusWebsite from './April22/Assignment/DisqusWebsite';
import MemoTest1 from './practice/MemoTest1';



// import ReduxCounter from './24April2021/ReduxCounter';
// Redux
  // import store from './stores/store';
  // import store from './store/store';
  //this function will run whenever state changes, means whenever the count
  // will be called
  // store.subscribe(function() {
  //   const currentState = store.getState();
  //   console.log("The current count value is: " + currentState.count);
  // })
  //this function will run whenever state changes.


  //we are calling the reducer and passing action as  type: counter/increase  which will run
  //the switch  function of reducer  and increase the count.
  // store.dispatch({type: 'counter/increase'});
  // store.dispatch({type: 'counter/increase'});
  // store.dispatch({type: 'counter/increase'});
  //this one below is going to decrease  the count. 
  // Note: every time the state changes, the above 
  // function in store.subscribe will run
  // store.dispatch({type: 'counter/decrease'});
// Redux

//Redux assignment 24 April
import CounterApplicationRedux from './24April2021/Assignment/CounterApplicationRedux';
//Redux assignment 24 April


export const CompanyNameContext = React.createContext();

function App() {
  const [step,setStep] = useState(1);

  function functioninsideobject() {
    studentOb.sayLocation();
  }

  return (
    <div className="App">
      {/* <input type="number" onChange={(e) => {setStep(parseInt(e.target.value))}} /> */}
      {/* <BrowserRouter>
        
        <a href="/userprofile">Bad link</a> | 
        <Link to="/userprofile">User Profile</Link> | 
        <Link to="/userdetails">User Details</Link><br />
        <Link to="/comment/1">Comment</Link><br />
        
        <Route path="/userdetails">
          <UserDetails />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>

        <Route path="/comment/:id">
          <Comment />
        </Route>
        
      </BrowserRouter> */}
      {/* <br />
      <hr /> */}
      {/* <Login />
      <Menu />
      <Registration />
      <Fibonacci />
      <Prime />
      <MarqueeTest />
      This is the name inside an object: {studentOb.name}
      <br />
      This is the function inside an object: <button onClick={functioninsideobject}>Fxn inside object</button>
      <br />0
      Location: {loc}
      <br />
      <Counter />
      ---------------------------------------------------------------------------<br />
      Assignment: 30 March 2021<br />
      <Calculator />
      <RegistrationComponent />
      <PrimeSum />
      <br />
      <h2>April 5 class:</h2>
      <PassingValueFunction />
      <HookUseEffectExample />
      <br /><br />
      <h2>Assignment April 5 2021:</h2>
      <ShowTwice />
      <Todo />
      April 6 2021<br />
      <UserDetails />
      <Footer /> */}
      {/* <hr /> */}
      {/* first question
      <ProductNames />
      <hr />
      second question<br />
      <ProductNamesInfo />
      <hr />
      <br />
      Third question<br />
      <ProductsFullData />
      <hr />
      Test april 6<br />
      <UserRegistration />
      <UserProfile /> */}
      
      {/* April 8 2021:<br /> */}
      {/* <Response /> */}
      {/* <UserProfile /> */}
      {/* <h2>Assignment April 8 2021:</h2> <br /> */}
      {/* <ParentComponent /> */}
      {/* <hr /> */}
      {/* <ShowHideImage /> */}
      {/* <hr />
      <UserInfo />
      <hr />
      <UserInfoDetail /> */}
      {/* <br /> */}
      {/* Assignment 10 April 2021: <br />
      <Parent /> */}
      {/* <br />
      <hr /> */}
      {/* Question 2:<br /> */}
      {/* <UseStateUseEffect /> */}

      {/* <hr /> */}
      {/* <UseState/> */}
      {/* <hr /> */}
      {/* <h1>14 April 2021 class</h1><br />
      Passing functions as props to the child component.<br />
      (See April 8 UserProfile component)
      <hr /> */}

      {/* <CarRentalCompany /> */}
      {/* <hr /> */}
      {/* <Comment /> */}
      {/* <TodoContainer /> */}
      {/* <Forum /> */}
      
      {/* <hr /> */}
      {/* April 15<br /> */}
      {/* <Authors /> */}

      {/* <Blogs /> */}
      {/* <br /><h2>April 16</h2><br />
      <ClassBasedComponent step={step}/>
      <BrowserRouter>
        <Link to="counter">Counter</Link><br />
        <Route path="/counter">
          <ClassBasedComponent />
        </Route>
      </BrowserRouter> */}
      {/* <br /> */}
      {/* <h2>April 16 Assignment</h2> */}
      {/* <TodoContainer /> */}
      {/* <br /> */}

      <BrowserRouter>
        {/* class based */}
        {/* <Switch> */}
          {/* <Route exact path="/">
            <Blogs />
          </Route>
          <Route exact path="/blogdetails" render={ (props) => {
            return (
              <>
                <BlogDetails {...props}/>
              </>
            )
          }}>
          </Route> */}
          {/* <Route exact path='/blogdetails' render={() => (
            <>
              <BlogDetails />
            </>
          )} />

        </Switch>
        {/* class based */}


        {/* functional based */}


          {/* <Route exact path="/" render={() => { */}
            {/* // return <> <Blogs /> </> */}
          {/* }} /> */}
          {/* <Route exact path='/blogdetails/:id' render={() => ( */}
            <>
              {/* <BlogDetails /> */}
            </>
          {/* )} /> */}


        {/* functional based */}
      </BrowserRouter>





      {/* <Product /> */}
      {/* <Hobby /> */}

      {/* <Hobby /> */}

      {/* April 21 2021<br /> */}
      {/* <hr /> */}
      {/* <UseRefHook /> */}
      <hr />
      {/* <BlogContext /> */}
      {/* <Refs /> */}
      {/* <ContextComponent /> */}
      {/* Assignment: <br /> */}
      {/* <CarouselComponent /> */}
      {/* <ExpandableComment /> */}
      {/* <UserRegistration /> */}



    {/* <CompanyNameContext.Provider value="Zenrays">
      <BrowserRouter>
          <Route exact path="/">
              <Name />
          </Route>
          <Route exact path="/about">
              <About />
          </Route>
          
          <Route exact path="/contact">
              <Contact />
          </Route>

          <Route exact path="/team">
              <Team />
          </Route>
      </BrowserRouter>
    </CompanyNameContext.Provider> */}
    {/* <InputSubmitComponent /> */}
    {/* April 22:<br /> */}
    {/* <MemoTest /> */}
    {/* <MemoTest1 /> */}
    {/* <WithUseMemo /> */}
    {/* <ParentComponent /> */}

    {/* <PhotoGallery /> */}
    {/* <DisqusWebsite /> */}
    {/* <ReduxCounter /> */}

    <CounterApplicationRedux />
    </div>
  );
}

export default App;
