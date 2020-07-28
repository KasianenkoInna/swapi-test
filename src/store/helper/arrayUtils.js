/**
 * @param value
 * @return {Array}
 */
const normalizeArray = (value) =>
{
    if (Array.isArray(value)) {
        return Array.from(value);
    }

    if (value === undefined || null === value || '' === value) {
        return [];
    }

    return [value];
};

/**
 * @param {Array[]} sourceArrays
 * @return {Array}
 */
const assignArray = (...sourceArrays) =>
{
    return [].concat(...sourceArrays);
};

/**
 * @param {Array[]} sourceArrays
 * @return {Array}
 */
const assignDistinctArray = (...sourceArrays) =>
{
    const merged = [].concat(...sourceArrays);
    const distinct = new Set(merged);

    return Array.from(distinct);
};

export {normalizeArray, assignArray, assignDistinctArray};
