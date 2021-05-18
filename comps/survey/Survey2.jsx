import React, { Component } from "react";


import * as Survey from "survey-react";
import {useRouter} from 'next/router';


// import "survey-react/survey.css";
// import "./index.css";

// Survey.StylesManager.applyTheme("default");

class SurveyComponent2 extends Component {
    constructor() {
        super();
        
    }
    render() {
        

        

        const json = {
          
            title: "General Questions",
            completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
            pages: [
             {
              name: "page1",
              elements: [
               {
                type: "html",
                name: "question1",
                html: "You are about to start the quiz with the given information. <br/>You have <b>15</b> seconds for every page and <b>40</b> seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
               }
              ]
             },
             {
              name: "page2",
              elements: [
               {
                type: "radiogroup",
                name:"best treatment",
                title: " Do we have the best treatment for covid-19?",
                correctAnswer: "No",
                isRequired: true,
                choices: [
                 {
                  value: "No",
                  text: "No"
                 },
                 {
                  value: "Yes",
                  text: "Yes"
                 }
                ],
                choicesOrder: "random"
               }
              ]
             },
             {
              name: "page3",
              elements: [
               {
                type: "radiogroup",
                name: "best test",
                title: "What the best test for covid-19 currently?",
                correctAnswer: "PCR",
                isRequired: true,
                choices: [
                 {
                  value: "PCR",
                  text: "PCR"
                 },
                 {
                  value: "CPU",
                  text: "CPU"
                 },
                 {
                  value: "RCMP",
                  text: "RCMP "
                 }
                ],
                choicesOrder: "random"
               }
              ]
             },
             {
              name: "page4",
              "elements": [
               {
                type: "radiogroup",
                name: "we have",
                title: "What should we do if we have covid-19 symptoms?",
                correctAnswer: "Stay at home",
                isRequired: true,
                choices: [
                 {
                  value: "Stay at home",
                  text: "Stay at home"
                 },
                 {
                  value: "Say goodbye to the world",
                  text: "Say goodbye to the world"
                 },
                 {
                  value: "Go to church",
                  text: "Go to church"
                 },
                 {
                    value: "Post it on Facebook",
                    text: "Post it on Facebook"
                   },
                ],
                choicesOrder: "random"
               }
              ],
              maxTimeToFinish: 15
             }
            ],
            triggers: [
             {
              type: "complete"
             }
            ],
            calculatedValues: [
             {
              name: "var1"
             }
            ],
            // navigateToUrl: "../GQ2",
            navigateToUrlOnCondition: [
             {
              expression: "{best treatment} = 'No' and {best test} = 'PCR' and {we have} = 'Stay at home'",
              url: "../Result2/four"
             },
             {
              "expression": "{best treatment} <> 'No' and {best test} = 'PCR' and {we have} = 'Stay at home'",
              "url": "../Result2/three"
             },
             {
              "expression": "{best treatment} = 'No' and {best test} <> 'PCR' and {we have} = 'Stay at home'",
              "url": "../Result2/three"
             },
             {
              "expression": "{best treatment} = 'No' and {best test} = 'PCR' and {we have} <> 'Stay at home'",
              "url": "../Result2/three"
            },
             {
              "expression": "{best treatment} <> 'No' and {best test} <> 'PCR' and {we have} = 'Stay at home'",
              "url": "../Result2/two"
             },
             {
              "expression": "{best treatment} <> 'No' and {best test} = 'PCR' and {we have} <> 'Stay at home'",
              "url": "../Result2/two"
             },
             {
              "expression": "{best treatment} = 'No' and {best test} <> 'PCR' and {we have} <> 'Stay at home'",
              "url": "../Result2/two"
             },
             {
              "expression": "{best treatment} <> 'No' and {best test} <> 'PCR' and {we have} <> 'Start at home'",
              "url": "../Result2/one"
             },
            ],
            showProgressBar: "bottom",
            startSurveyText: "Start Quiz",
            firstPageIsStarted: true,
            maxTimeToFinish: 40,
            maxTimeToFinishPage: 15,
            showTimerPanel: "top"
           
};


const survey = new Survey.Model(json);


        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent2;
