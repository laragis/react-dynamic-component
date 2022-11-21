import components from "./components";
import {has} from 'lodash'

export const registerComponent = (name: string, Component = {}) => {
    // @ts-ignore
    components[name] = Component
}

export const hasComponent = (name: string) => has(components, name)

export const getAllComponents = () => components

export const getComponent = (name: string) => {
    // @ts-ignore
    return components[name]
}


