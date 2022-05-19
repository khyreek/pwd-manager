// custom array methods
type PassFailPair<T> = [passed: T[], failed: T[]];
interface Array<T> {
    /**
     * Given a filter prompt, return a new array with the left side
     * being an array of the values of the filter, and the right side
     * being an array of the values that did not pass the filter
     */
    splitFilter: (
        callback: (value: T, index: number, array: T[]) => boolean
    ) => [passed: T[], failed: T[]];

    // testing
    bruh: () => void;
}
