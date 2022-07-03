import React from "react";
import Home from "./pages/Home.jsx";
import TestSeries from "./pages/TestSeries.jsx";
import Course from "./pages/Courses.jsx";
import Card3 from "./pages/prd8/test.jsx";
import Card2 from "./pages/prd8/notest.jsx";
import Apkk from "./pages/prd6/unlock.jsx";
import Appk from "./pages/prd6/food.js";
import "./components/prd6/tabs/styles.css";
import "./components/prd8/App.css";
import QuestionsPage from "./pages/prd4/questionsPage";
import SectionPage from "./pages/prd4/sectionPage";
import AboutUs from "./components/global/Footer Writeup/AboutUs.jsx";
import WhyChoose from "./components/global/Footer Writeup/WhyChoose.jsx";
import Privacy from "./components/global/Footer Writeup/Privacy.js";
import TandC from "./components/global/Footer Writeup/TandC.jsx";
import Policies from "./components/global/Footer Writeup/Policies.jsx";
import BookmarksPage from "./pages/prd9/bookmarkPage";
import TopicPage from "./pages/prd9/topicPage";
import CoursePages from "./pages/prd2/link.jsx";
import Email from "./pages/prd5/Email";
import Cards from "./pages/prd5/Card";
import Test from "./pages/prd3/prd3";
import TopicPages from "./pages/prd7/Topic";
import Lectures from "./pages/prd7/Lectures.js";
import Notes from "./pages/prd7/Notes.js";

import Apkk from "./pages/prd6/unlock";
import Appk from "./pages/prd6/food";
import Activity from "./pages/prd6/Activity";
import Home1 from "./components/prd6/Topic/Topic";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Apop() {
  return (
    <Router>

      <div>
        <Routes>
          <Route  path="/food-technology" exact component={Appk}/>
          <Route  path="/unlock" exact component={Apkk}/>
          <Route path="/notes3" element={<Home1/>} /> 
          <Route path="/activity" element={<Activity />} />
     
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/choose" element={<WhyChoose />} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/tandc" exact component={<TandC/>} />
          <Route path="/policy" element={<Policies />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/testseries" exact component={TestSeries} />
          <Route path="/yesky" element={<Card3 />} />
          <Route path="/noky" element={<Card2 />} />
          <Route path="/food-technology" element={<Appk />} />
          <Route path="/unlock" element={<Apkk />} />
          <Route path="/yes" element={<SectionPage />} />
          <Route path="/no" element={<QuestionsPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/email" element={<Email />} />
          <Route path="/topics" element={<TopicPage />} />
          <Route path="/coursePage" element={<CoursePages />} />
          <Route path="/test" element={<Test />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/topic" element={<TopicPages />} />
          <Route path="/lectures/:slug" element={<Lectures />} />
          <Route path="/notes/:slug" element={<Notes />} />
        </Routes>
      </div>

    </Router>
  );
}
