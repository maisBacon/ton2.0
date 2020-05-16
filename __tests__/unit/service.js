const myObj = require('../unit/exemplo')

describe('TESTANU', () => {

  it('stub .toBeCalled()', () => {
    const stub = jest.fn();
    stub();
    expect(stub).toBeCalled();
  });

  it('spyOn .toBeCalled()', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething').mockReturnValue('grifinoria')
    const res = myObj.doSomething();
    expect(res).toBe(12)
  })
})

// https://codewithhugo.com/jest-fn-spyon-stub-mock/
