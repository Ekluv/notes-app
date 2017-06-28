export const loadState = () => {
    try {
        let state = localStorage.getItem('state');
        return JSON.parse(state);
    } catch(e) {
        console.log(e);
    }
};

export const setState = (state) => {
    try { 
        localStorage.setItem('state', JSON.stringify(state));
    } catch(e) {
        console.log(e);
    }
};