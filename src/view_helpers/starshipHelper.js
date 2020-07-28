/**
 * @param {String} name
 * @param {String} glue
 *
 * @return {String}
 */
const splitWordsGlueFirstLetter = (name, glue = '') => {
    const words = name.split(' ');
    const firstLetters = words.map(word => word.charAt(0));

    return firstLetters.join(glue);
};

export const starshipHelper = {
    shortenName: (longName) => {
        return splitWordsGlueFirstLetter(longName);
    }
};
