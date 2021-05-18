import React, { Component } from "react";
import * as Survey from "survey-react";
import {useRouter} from 'next/router';


// import "survey-react/survey.css";
// import "./index.css";

// Survey.StylesManager.applyTheme("default");

class SurveyComponent1 extends Component {
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
                name:"symptom",
                title: "What is not the symptom of COVID-19?",
                correctAnswer: "Running nose",
                isRequired: true,
                choices: [
                 {
                  value: "Fever ",
                  text: "Fever "
                 },
                 {
                    value: "Dry cough",
                    text: "Dry cough"
                   },
                 {
                  value: "Fatigue",
                  text: "Fatigue"
                 },
                 {
                  value: "Running nose",
                  text: "Running nose"
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
                name: "defence methods",
                title: "What defence methods to covid-19 are not recommended?",
                correctAnswer: "Do exercise regularly",
                isRequired: true,
                choices: [
                 {
                  value: "Physical distancing",
                  text: "Physical distancing"
                 },
                 {
                  value: "Wearing a mask",
                  text: "Wearing a mask"
                 },
                 {
                 value: " Washing hand",
                 text: " Washing hand"
                },
                 {
                  value: "Do exercise regularly",
                  text: "Do exercise regularly"
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
                name: "How long",
                title: "How long does it take to develop symptoms?",
                correctAnswer: "In 2 weeks",
                isRequired: true,
                choices: [
                 {
                  value: "Very soon",
                  text: "Very soon"
                 },
                 {
                  value: "In 2 months",
                  text: "In 2 months"
                 },
                 {
                  value: "In 2 weeks",
                  text: "In 2 weeks"
                 }
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
              expression: "{symptom} = 'Running nose' and {How long} = 'In 2 weeks' and {defence methods} = 'Do exercise regularly'",
              url: "../Result1/four"
             },
             {
              "expression": "{defence methods} <> 'Do exercise regularly' and {How long} = 'In 2 weeks' and {symptom} = 'Running nose'",
              "url": "../Result1/three"
             },
             {
              "expression": "{defence methods} = 'Do exercise regularly' and {How long} <> 'In 2 weeks' and {symptom} = 'Running nose'",
              "url": "../Result1/three"
             },
             {
              "expression": "{defence methods} = 'Do exercise regularly' and {How long} = 'In 2 weeks' and {symptom} <> 'Running nose'",
              "url": "../Result1/three"
             },
             {
              "expression": "{defence methods} <> 'Do exercise regularly' and {How long} <> 'In 2 weeks' and {symptom} = 'Running nose'",
              "url": "../Result1/two"
             },
             {
              "expression": "{defence methods} <> 'Do exercise regularly' and {How long} = 'In 2 weeks' and {symptom} <> 'Running nose'",
              "url": "../Result1/two"
             },
             {
              "expression": "{defence methods} = 'Do exercise regularly' and {How long} <> 'In 2 weeks' and {symptom} <> 'Running nose'",
              "url": "../Result1/two"
             },
             {
              "expression": "{defence methods} <> 'Do exercise regularly' and {How long} <> 'In 2 weeks' and {symptom} <> 'Running nose'",
              "url": "../Result1/two"
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

export default SurveyComponent1;
