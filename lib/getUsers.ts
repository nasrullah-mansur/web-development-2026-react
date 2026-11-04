
export const getUsers = async () => {
    const res = await fetch('https://jsonplaceholders.typicode.com/posts')
    const data = await res.json();

    return data;
}