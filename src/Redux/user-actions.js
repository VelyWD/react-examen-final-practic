export function addUser(payload) {
    console.log(payload, "a")
    return {
        type: 'ADD_USER',
        payload
    }
}