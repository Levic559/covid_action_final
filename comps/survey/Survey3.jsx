import React, { Component } from "react";

import * as Survey from "survey-react";
import {useRouter} from 'next/router';


class SurveyComponent3 extends Component {
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
                name:"prople",
                title: "How many people are allowed in outside gatherings?",
                correctAnswer: "under 10 people",
                isRequired: true,
                choices: [
                 {
                  value: "12 people",
                  text: "12 people"
                 },
                 {
                  value: "6 pepeple",
                  text: "6 pepeple"
                 },
                 {
                    value: "under 10 people",
                    text: "under 10 people"
                   },
                 {
                  value: "can't hold the outside gathering",
                  text: "can't hold the outside gathering"
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
                name: "fine",
                title: "What behaviour may receive a $230 fine in an indoor public setting?",
                correctAnswer: "All of the above",
                isRequired: true,
                choices: [
                 {
                  value: "Don't wear a mask .",
                  text: "Don't wear a mask . "
                  

                 },
                 {
                  value: "Don't comply with the direction of enforcement officers.",
                  text: "Don't comply with the direction of enforcement officers."
                 },
                 {
                  value: "abusive  behaviour in relation to the face coverings order.",
                  text: "abusive  behaviour in relation to the face coverings order."
                 },
                 {
                    value: "All of the above",
                    text: "All of the above"
                   },
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
                name: "areas",
                title: " Which area is not included in dividing areas by the government?",
                correctAnswer: "None of the above",
                isRequired: true,
                choices: [
                 {
                  value: "Lower Mainland and Fraser Valley",
                  text: "Lower Mainland and Fraser Valley"
                 },
                 {
                  value: "Northern/Interior",
                  text: "Northern/Interior"
                 },
                 {
                  value: "Vancouver Island ",
                  text: "Vancouver Island "
                 },
                 {
                    value: "None of the above",
                    text: "None of the above"
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
              expression: "{prople} = 'under 10 people' and {Fine} = 'All of the above' and {areas} = 'None of the above'",
              url: "../Result1/four"
             },
             {
              "expression": "{areas} <> 'None of the above' and {Fine} = 'All of the above' and {prople} = 'under 10 people'",
              "url": "../Result1/three"
             },
             {
              "expression": "{areas} = 'None of the above' and {Fine} <> 'All of the above' and {prople} = 'under 10 people'",
              "url": "../Result1/three"
             },
             {
              "expression": "{areas} = 'None of the above' and {Fine} = 'All of the above' and {prople} <> 'under 10 people'",
              "url": "../Result1/three"
             },
             {
              "expression": "{areas} <> 'None of the above' and {Fine} <> 'All of the above' and {prople} = 'under 10 people'",
              "url": "../Result1/two"
             },
             {
              "expression": "{areas} <> 'None of the above' and {Fine} = 'All of the above' and {prople} <> 'under 10 people'",
              "url": "../GQ3R1"
             },
             {
              "expression": "{areas} = 'None of the above' and {Fine} <> 'All of the above' and {prople} <> 'under 10 people'",
              "url": "../Result1/two"
             },
             {
              "expression": "{areas} <> 'None of the above' and {Fine} <> 'All of the above' and {prople} <> 'under 10 people'",
              "url": "../Result1/one"
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

export default SurveyComponent3;
