import {describe, it} from 'mocha';
import {expect} from 'chai';
import {data, byName, byAbbr} from '../lib';


describe('usps-states', () => {
  it('is valid', () => {
    const nameMap = Object.create(null);
    const abbrMap = Object.create(null);

    expect(data.length).to.equal(62);
    expect(Object.keys(byName).length).to.equal(62);
    expect(Object.keys(byAbbr).length).to.equal(62);

    data.forEach((item) => {
      const {name, abbr} = item;

      expect(item).to.equal(byName[name]);
      expect(item).to.equal(byAbbr[abbr]);

      expect(name.trim()).to.equal(name);
      expect(name.length > 0).to.be.true;

      expect(abbr).to.match(/^[A-Z]{2}$/);

      // test uniqueness
      expect(name in nameMap).to.be.false;
      nameMap[name] = true;

      expect(abbr in abbrMap).to.be.false;
      abbrMap[abbr] = true;
    });

    console.log(JSON.stringify(data, null, '  '));
  });
});
