
export const storeTestState = ( contentObj ) => {
    const contentString = JSON.stringify(contentObj);
    localStorage.setItem("session", window.btoa(contentString));
}


export const retrieveTestState = () => {
    if(localStorage.getItem("session")){
        const contentString = window.atob(localStorage.getItem("session"));
        return JSON.parse(contentString);
    } else { return {} }

}