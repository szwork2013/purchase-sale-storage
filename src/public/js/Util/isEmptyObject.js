const isEmptyObject = e => {
    for (let t in e) {
        return false
    }
    return true
}

export default isEmptyObject