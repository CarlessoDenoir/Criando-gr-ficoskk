const Getcss =(variavel) => {
    const bodystyles = getComputedStyle (document.body)
    return bodystyles.getPropertyValue (variavel)
}

const tickconfig = {
    family: Getcss ('--Font'),
    size 16,
    color: Getcss ('--primary color')
}

export {Getcss, tickconfig}
