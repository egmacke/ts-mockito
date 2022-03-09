import { Matcher } from "./Matcher";
export declare class AnyEnumMatcher<T extends string | number> extends Matcher {
    constructor();
    match(value: T): boolean;
    toString(): string;
}
