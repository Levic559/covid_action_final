import Avatar from '../comps/Spaeker'
import styled from 'styled-components'



export const info = {
    one: {
        head:"Your result:",
        text1:"0/3",
        text2:" You need to study hard.",
        component:<Avatar  src="/R0.svg" width="400"/>,
       
    },
    two: {
        head:"Your result:",
        text1: "1/3 ",
        text2: "You need to study more.",
        component:<Avatar src="/R1.svg" width="400"/>,
        
    },
    three: {
        head:"Your result:",
        text1: "2/3",
        text2: " Good job, Keep Studying!",
        component:<Avatar  src="/R2.svg" width="450"/>,
       
    },
    four: {
        head:"Your result:",
        text1: "3/3 ",
        text2: "Awesome, You do the good job!",
        component:<Avatar src="/R3.svg" width="400"/>,
       
    },
    // five: {
    //     head:"End of Section",
    //     text:"",
    //     component:<Last QuizRoute="../dashboard" />
    // }
   
}