const autobind = require(".").autobind;
const autobindReact = require(".").react;

console.log("start");
console.log(autobindReact);

function constructSpell(element) {
  return `${element} enfold everywhere!`;
}

class Witch {
  constructor(element) {
    this._other = {};
    this._element = element;
    autobind(this);
  }

  spell() {
    return constructSpell(this._element);
  }
}

class WitchExclude {
    constructor(element) {
      this._other = {};
      this._element = element;
      autobindReact(this);
    }
  
    spell() {
      return constructSpell(this._element);
    }
  
    componentDidMount() {
      if (this === undefined) {
          throw new Error();
      }

      return constructSpell(this._element);
    }
  }


test("returns bound instance", () => {
  const witch = new Witch("Ice");
  const bounded = autobind(witch);

  expect(bounded).toBe(witch);
});

test("binds methods", () => {
  const element = "Ice";
  const referenceSpell = constructSpell(element);
  const iceWitch = new Witch(element);
  const { spell : iceWitchSpell } = iceWitch;
  

  expect(referenceSpell).toBe(iceWitchSpell());
});

test("excludes excluded methods", () => {
    const element = "Ice";
    const referenceSpell = constructSpell(element);
    const iceWitch = new WitchExclude(element);
    const { componentDidMount : iceWitchExcludedSpell } = iceWitch;

    expect(iceWitchExcludedSpell).toThrow();
  });

  test("excludes excluded methods", () => {
    const element = "Ice";
    const referenceSpell = constructSpell(element);
    const iceWitch = new WitchExclude(element);
    const { componentDidMount : iceWitchExcludedSpell } = iceWitch;

    expect(iceWitchExcludedSpell).toThrow();
  });
