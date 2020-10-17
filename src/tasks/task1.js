const sayHelo = (name) => {
    if (typeof name !== 'string') return;

    const favoriteFriend = 'Mark';

    const isFavoriteFriend = favoriteFriend.toLowerCase() === name.toLowerCase();

    return `${isFavoriteFriend ? 'Hi' : "Hello"}, ${name}!`

}
const result = sayHelo('Mark');
console.log(result);