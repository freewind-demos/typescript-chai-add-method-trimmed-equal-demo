import chai, {expect} from 'chai'
import {registerCustomMethods} from "./trimmedEqual";

registerCustomMethods();

describe('chai', () => {
  it('should work with added method', () => {
    expect('      Hello ').to.trimmedEqual(' Hello         ')
  })
})

