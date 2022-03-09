import { ArgCaptor1, ArgCaptor10, ArgCaptor2, ArgCaptor3, ArgCaptor4, ArgCaptor5, ArgCaptor6, ArgCaptor7, ArgCaptor8, ArgCaptor9 } from "./capture/ArgCaptor";
import { MethodStubSetter } from "./MethodStubSetter";
import { MethodStubVerificator } from "./MethodStubVerificator";
export declare function spy<T>(instanceToSpy: T): T;
export declare function mock<T>(clazz: (new (...args: any[]) => T) | (Function & {
    prototype: T;
})): T;
export declare function mock<T>(clazz?: any): T;
export declare function verify<T>(method: T): MethodStubVerificator<T>;
export declare function when<T>(method: Promise<T>): MethodStubSetter<Promise<T>, T, Error>;
export declare function when<T>(method: T): MethodStubSetter<T>;
export declare function instance<T>(mockedValue: T): T;
export declare function capture<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(method: (a: T0, b: T1, c: T2, d: T3, e: T4, f: T5, g: T6, h: T7, i: T8, j: T9) => any): ArgCaptor10<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
export declare function capture<T0, T1, T2, T3, T4, T5, T6, T7, T8>(method: (a: T0, b: T1, c: T2, d: T3, e: T4, f: T5, g: T6, h: T7, i: T8) => any): ArgCaptor9<T0, T1, T2, T3, T4, T5, T6, T7, T8>;
export declare function capture<T0, T1, T2, T3, T4, T5, T6, T7>(method: (a: T0, b: T1, c: T2, d: T3, e: T4, f: T5, g: T6, h: T7) => any): ArgCaptor8<T0, T1, T2, T3, T4, T5, T6, T7>;
export declare function capture<T0, T1, T2, T3, T4, T5, T6>(method: (a: T0, b: T1, c: T2, d: T3, e: T4, f: T5, g: T6) => any): ArgCaptor7<T0, T1, T2, T3, T4, T5, T6>;
export declare function capture<T0, T1, T2, T3, T4, T5>(method: (a: T0, b: T1, c: T2, d: T3, e: T4, f: T5) => any): ArgCaptor6<T0, T1, T2, T3, T4, T5>;
export declare function capture<T0, T1, T2, T3, T4>(method: (a: T0, b: T1, c: T2, d: T3, e: T4) => any): ArgCaptor5<T0, T1, T2, T3, T4>;
export declare function capture<T0, T1, T2, T3>(method: (a: T0, b: T1, c: T2, d: T3) => any): ArgCaptor4<T0, T1, T2, T3>;
export declare function capture<T0, T1, T2>(method: (a: T0, b: T1, c: T2) => any): ArgCaptor3<T0, T1, T2>;
export declare function capture<T0, T1>(method: (a: T0, b: T1) => any): ArgCaptor2<T0, T1>;
export declare function capture<T0>(method: (a: T0) => any): ArgCaptor1<T0>;
export declare function reset<T>(...mockedValues: T[]): void;
export declare function resetCalls<T>(...mockedValues: T[]): void;
export declare function anyOfClass<T extends Object>(expectedClass: new (...args: any[]) => T): T;
export declare function anyFunction(): Function;
export declare function anyNumber(): number;
export declare function anyString(): string;
export declare function anyEnum<T extends string | number>(): T;
export declare function anything<T>(): T;
export declare function between(min: number, max: number): any;
export declare function deepEqual<T>(expectedValue: T): T;
export declare function notNull(): any;
export declare function strictEqual<T>(expectedValue: T): T;
export declare function match(expectedValue: RegExp | string): any;
export declare function objectContaining<T>(expectedValue: Partial<T> | T): T;
declare const _default: {
    spy: typeof spy;
    mock: typeof mock;
    verify: typeof verify;
    when: typeof when;
    instance: typeof instance;
    capture: typeof capture;
    reset: typeof reset;
    resetCalls: typeof resetCalls;
    anyOfClass: typeof anyOfClass;
    anyFunction: typeof anyFunction;
    anyNumber: typeof anyNumber;
    anyString: typeof anyString;
    anything: typeof anything;
    between: typeof between;
    deepEqual: typeof deepEqual;
    notNull: typeof notNull;
    strictEqual: typeof strictEqual;
    match: typeof match;
    objectContaining: typeof objectContaining;
};
export default _default;
