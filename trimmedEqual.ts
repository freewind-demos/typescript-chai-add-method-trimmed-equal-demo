import chai from 'chai';
import './typing';

function trimmedEqual() {
  chai.Assertion.addMethod("trimmedEqual", function (this: Chai.Assertion, expectedString: string) {
    const actual = this._obj.trim();
    const expected = expectedString.trim();
    this.assert(
      actual === expected,
      'expected #{this} to equal string #{exp} after trimmed, but it was #{act} after trimmed',
      'expected #{this} not to equal string #{exp} after trimmed',
      expected,
      actual,
    );
  });
}

export function registerCustomMethods() {
  trimmedEqual()
}
