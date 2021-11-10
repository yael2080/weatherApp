function convertActionName(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

const actions = new Proxy(
    {},
    {
        get: function (target, prop) {
            if (target[prop] === undefined)
                return function (args) {
                    return { type: convertActionName(prop), payLoad: args }
                }
            else
                return target[prop];
        },

    }
)
export default actions;