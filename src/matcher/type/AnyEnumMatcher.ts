import { Matcher } from "./Matcher";

export class AnyEnumMatcher<T extends string | number> extends Matcher {
  constructor() {
    super();
  }

  public match(value: T): boolean {
    return typeof value === "string" || typeof value === "number";
  }

  public toString(): string {
    return "anyString()";
  }
}
