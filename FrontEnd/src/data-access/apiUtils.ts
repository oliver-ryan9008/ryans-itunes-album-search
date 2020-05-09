export const baseUrl = 'http://localhost:3001';

export const getRandomJoke = async () => {
    const response = await fetch('/advice');
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;
};

// export const getRandomJoke = async () => {
//     const response = await fetch('/joke');
//     const body = await response.json();

//     if (response.status !== 200) {
//         throw Error(body.message);
//     }
//     return body;
// };