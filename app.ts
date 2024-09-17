const player = {
    name: "?",
    hp: 100,
    mp: 0,
    items: [],
}

const hanSolo = player;
const darthVader = player;

console.log(hanSolo);


const createPlayer = (name: string, hp: number, mp: number, items: string[]) => {
    return {
        name,
        hp,
        mp,
        items
    }
}