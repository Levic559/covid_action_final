import React from 'react';
import QuizOptions from '../comps/QuizOptions'
export default {
  title:"Example/QuizOptions",
  component: <QuizOptions/>
 }
 export const QuizOptionsUnclick = () => <QuizOptions  display="none" />
 export const QuizOptionsClick = () => <QuizOptions />