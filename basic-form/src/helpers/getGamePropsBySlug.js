import data_game from "../Assets/game.js";

const findGameBySlug = (slug, id) => {
    const game = data_game.find((game) => game.slug === slug);
    if (id === 'LeftPaneImgComp')
        return game.image;
    if (id === 'GameInfo')
        return {description: game.description, name: game.name};
    if (id === 'ProceedtoBuy')
        return {price: game.price, quantity: game.quantity};
};

export default findGameBySlug;
