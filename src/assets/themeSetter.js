import {Cookies} from 'react-cookie';

// eslint-disable-next-line no-unused-vars
const themeSetter = (event) => {
    const cookies = new Cookies;
    let set = cookies.get('theme');
    if(set === undefined || set === 'light')
    {
        cookies.set('theme','dark', {path: '/'});
    }
    else if(set === 'dark')
    {
        cookies.set('theme', 'light',{path: '/'});
    }
    window.location.reload();
}

export default themeSetter;