// Notice:
// ts-node doesn't support `*.d.ts` files well, so we have to use a normal `.ts` file and import it in other files.
// if we use `tsc` or `webpack`, we can use `.d.ts`
declare global {
  namespace Chai {
    interface Assertion {
      new(obj: any): Assertion

      _obj: any
      assert: (expression: boolean,
               message: string,
               negativeMessage: string,
               expected: any,
               actual: any,
               showDiff?: boolean) => void
      addMethod: (name: string, callback: (expected: any) => void) => void

      trimmedEqual: (expected: string) => Assertion
    }

    interface ChaiStatic {
      Assertion: Assertion
    }

  }
}

export {}
