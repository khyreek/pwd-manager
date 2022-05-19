export type ExclusiveUnion<T, U> = Record<
    Exclude<keyof (T & U), Extract<keyof T, keyof U>>,
    unknown
>;

export type NonEmptyObject<T> = keyof T extends never ? never : T;

export type NoOverlappingKeys<T extends object, M extends object> = Extract<
    keyof T,
    keyof M
> extends never // empty extract returns never
    ? Record<keyof (T & M), unknown>
    : never;

// meaning it can be converted to a number with + prefix operator
export type UnariableString = string;

// groups of types
export type NumberOrStringGeneric<T> = T extends number
    ? number
    : T extends string
    ? string
    : never;

