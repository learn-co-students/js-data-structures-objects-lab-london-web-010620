const driver = {name: "sam"}


const updateDriverWithKeyAndValue = (driver, key, value) => {
    const newObj = {...driver}
    newObj[key] = value
    return newObj
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key]= value
    return driver
}

const deleteFromDriverByKey = (driver, key) => {
    const newObject = {...driver}
    delete newObject[key]
    return newObject
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}