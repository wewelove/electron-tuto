import { useStore } from '@stores/index'

const userIsLoggedIn = (pinia) => {
    const store = useStore(pinia)
    console.log("userIsLoggedIn", store.userIsLoggedIn)
    return store.userIsLoggedIn
}

const setUserIsLoggedIn = (pinia, state) => {
    const store = useStore(pinia)
    store.setUserLoggedIn(state)
}

export { userIsLoggedIn, setUserIsLoggedIn }