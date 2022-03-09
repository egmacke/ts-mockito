import { Matcher } from "./Matcher";

export class ArrayContainingMatcher<T> extends Matcher {
  constructor(private expectedValue: T | T[]) {
    super();
  }

  public match(value: Array<T>): boolean {
    if (Array.isArray(this.expectedValue)) {
      return this.expectedValue.every((item) => value.includes(item));
    } else {
      return value.includes(this.expectedValue);
    }
  }

  public toString(): string {
    return `objectContaining(${JSON.stringify(this.expectedValue)})`;
  }
}
