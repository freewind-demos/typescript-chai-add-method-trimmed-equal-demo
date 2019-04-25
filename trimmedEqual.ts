import chai from "chai";

declare global {
  namespace Chai {
    interface Assertion {
      trimmedEqual: (expected: string) => Assertion
    }
  }
}

function trimmedEqual() {
  (chai as any).Assertion.addMethod("trimmedEqual", function (expectedString: string) {
    // @ts-ignore
    const actual = this._obj.trim();
    const expected = expectedString.trim();
    // @ts-ignore
    this.assert(
      actual === expected
      , 'expected #{this} to equal string #{exp} after trimmed, but it was #{act} after trimmed'
      , 'expected #{this} not to equal string #{exp} after trimmed'
      , expected
      , actual
    );
  });
}

export function registerCustomMethods() {
  trimmedEqual()
}
