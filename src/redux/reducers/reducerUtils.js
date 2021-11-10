function convertActionNameToLowerCase(actionName) {
    return actionName.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase())
}

export default function execHandler(state, action, handlers) {
    let key = convertActionNameToLowerCase(action.type)
    let handler = handlers[key]
    if(handler)
        handler(state, action)
}