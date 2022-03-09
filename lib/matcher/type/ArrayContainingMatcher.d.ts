import { Matcher } from "./Matcher";
export declare class ArrayContainingMatcher<T> extends Matcher {
    private expectedValue;
    constructor(expectedValue: T | T[]);
    match(value: Array<T>): boolean;
    toString(): string;
}
