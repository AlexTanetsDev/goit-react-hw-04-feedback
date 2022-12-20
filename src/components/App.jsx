import React, {useState} from "react";
import { GlobalStyles } from "./GlobalStyles";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  
const options = ['good', 'neutral', 'bad'];
 
 const hendleFeedback = (evt) => {
    const targetId = evt.currentTarget.id;
    switch (targetId) {
      case 'good':
        setGood(prevState => {
          return prevState + 1 
        })
        break;
    
      case 'neutral':
        setNeutral(prevState => {
          return prevState + 1 
        })
        break;
      
      case 'bad':
        setBad(prevState => {
          return prevState + 1 
        })
        break;
      default:
        throw new Error(console.log('Error'));
       
    }
  
  };

 const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round(good * 100 / total);
  };


  
    return (

      <>
        < GlobalStyles />
        
        <Section title = {'Please leave feedback'}>
           <FeedbackOptions options={options} onLeaveFeedback={hendleFeedback} />
        </Section>
       
        
        <Section title={'Statistics'} >
          {countTotalFeedback() !== 0
            ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />)
            :(<Notification message="There is no feedback"></Notification>)}
        </Section>
         
       
      </>
      
    )
};

