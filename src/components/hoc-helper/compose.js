const compose = (...funcs) => (item) => {
    return funcs.reduceRight((prevResult, func) => {
        return func(prevResult)
    }, item)
}

export default compose