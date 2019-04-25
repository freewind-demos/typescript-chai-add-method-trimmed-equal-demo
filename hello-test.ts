import chai, {expect} from 'chai'

(chai as any).Assertion.addMethod("trimmedEqual", function (expectedString: string) {
  // @ts-ignore
  const str = this._obj;
  new (chai as any).Assertion(str.trim()).to.equal(expectedString.trim());
});

declare global {
  namespace Chai {
    interface Assertion {
      trimmedEqual: (expected: string) => Assertion
    }
  }
}

describe('chai', () => {
  it('should work with added method', () => {
    expect('      Hello ').to.trimmedEqual(' Hello         ')
  })
})

