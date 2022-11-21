import { defaultTo, isArray } from 'lodash'
import { forwardRef, isValidElement } from 'react'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import components from "./components";

// @ts-ignore
const Component = forwardRef(({ as }, ref) => {
    if (isValidElement(as)) return as
    // @ts-ignore
    if (isArray(as)) return as.map((as, key) => <Component key={key} as={as} />)

    const {
        component = 'div',
        componentWrapper,
        componentWrapperProps = {},
        ...other
    } = as || {}

    // @ts-ignore
    const content = <Box {...other} as={defaultTo(components[component], component)} ref={ref}/>

    return componentWrapper ? <Box {...componentWrapperProps} as={componentWrapper}>{content}</Box> : content
})

Component.prototype = {
    children: PropTypes.node,

    as: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.elementType,
    ]),

    componentWrapper: PropTypes.elementType,

    componentWrapperProps: PropTypes.object,
}


export default Component
