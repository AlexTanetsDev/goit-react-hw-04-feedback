import PropTypes from 'prop-types'
import { StatisticsList } from './Statistics.styled'

export const Statistics = ({good, neutral, bad, positivePercentage, total}) => {
    
    return (
        <>
        <StatisticsList>
                <li>
                    <p>Good: { good }</p>
                </li>
                <li>
                    <p>Neutral: { neutral }</p>
                </li>
                <li>
                    <p>Bad: { bad }</p>
                </li>
                <li>
                    <p>Total: { total }</p>
                </li>
                {!isNaN(positivePercentage) && (
                    <li>
                    <p>Positive: { positivePercentage }%</p>
                    </li>
                )}
            </StatisticsList>
            </>
    )

}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}