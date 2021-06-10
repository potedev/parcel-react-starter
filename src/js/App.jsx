//Motherlord
import React from 'react'

//logic here

export const App = () => {

    //logic here
    const imHappy = true;

    // const element = imHappy
    //     ? <h1>Bonjour, tu es content</h1>
    //     : <h1>Bonjour, tu n'es pas content</h1>

    // let element;
    // if (imHappy === true) {
    //     element = <h1>Bonjour, tu es content</h1>
    // } else {
    //     element = <h1>Bonjour, tu n'es pas content</h1>
    // }

    return (
        imHappy
            ? <h1>Bonjour, tu es content</h1>
            : <h1>Bonjour, tu n'es pas content</h1>

        //element
    )
}

// equivalent --> export function App() {
    // return (
    //     <h1>Bonjour</h1>
    // )
// }