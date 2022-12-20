import PropTypes, { func } from 'prop-types';
import { arrayOf } from 'prop-types';
import { FeedbackList } from './FeeddbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
        <>
            <FeedbackList>
                {options.map((option) => {
                    return (
                           <li key={option}>
                            <button type='button' id={option} onClick={onLeaveFeedback}>{ option}</button>
                </li>
                   )
               })}
            
            </FeedbackList>
    </>
)

}

FeedbackOptions.propTypes = {
    options: arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: func,
}