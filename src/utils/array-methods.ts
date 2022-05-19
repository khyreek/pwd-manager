export {};

/**
 * @Custom array methods
 *
 * To use,
 * Import this file and then use the methods as you would normally.
 * The import should just be empty brackets,
 * import {} from "[path]/array-methods";
 *
 * [array].[method](...)
 *
 */

// testing
Array.prototype.bruh = function () {
    console.log("asd");
};

Array.prototype.splitFilter = function <T>(
    callback: (value: T, index: number, array: T[]) => boolean
): PassFailPair<T> {
    // see global.d.ts for the definition of this function

    return this.reduce(
        (
            acc: PassFailPair<T>,
            value: T,
            index: number,
            array: T[]
        ): PassFailPair<T> => {
            const result = callback(value, index, array);
            const oldP = acc[0];
            const oldNP = acc[1];

            return result
                ? [[...oldP, value], oldNP]
                : [oldP, [...oldNP, value]];
        },
        [[], []]
    );
};
