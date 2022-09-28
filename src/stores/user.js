import { writable } from 'svelte/store';
import { browser } from '$app/environment';
// let userData;
// if (browser) {
// 	console.log(localStorage.getItem('user'));
// 	userData = JSON.parse(localStorage.getItem('user'));
// }
// export const user = writable(userData ? userData : null);

//local storage are not available on the server to pass this issue you need to check for browser
export const user = writable((browser && JSON.parse(localStorage.getItem('user'))) || null);
