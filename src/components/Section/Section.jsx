import PropTypes from 'prop-types'
import { SectionWrapper } from './Section.styled'

export const Section = ({children, title}) => {
    return (
        <SectionWrapper>
            <h2>{ title }</h2>
            {children}
        </SectionWrapper>
    
    )
}


Section.propTypes = {
    title: PropTypes.string,
}