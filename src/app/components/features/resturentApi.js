"use client"

export const getResturent = async () => {

    const resultResturent = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resultResturent.json();
    return data;
}