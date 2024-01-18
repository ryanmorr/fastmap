import { expect } from 'chai';
import fastmap from '../../src/fastmap.js';

describe('fastmap', () => {
    it('should be an object', () => {
        const map = fastmap();
        expect(map).to.be.an('object');
    });

    it('should support assigning and reading properties', () => {
        const map = fastmap();
        map.foo = 1;
        map.bar = 2;

        expect(map['foo']).to.equal(1); // eslint-disable-line dot-notation
        expect(map.bar).to.equal(2);
    });

    it('should support enumeration', () => {
        const map = fastmap();
        map.foo = 1;
        map.bar = 2;

        let i = 0;
        const keys = Object.keys(map);
        for (const prop in map) {
            expect(prop).to.equal(keys[i]);
            expect(map[prop]).to.equal(map[keys[i]]);
            i++;
        }
    });

    it('should not have inherited properties/methods', () => {
        const map = fastmap();
        let hasProps = false;
        /* eslint-disable no-unused-vars */
        for (const key in map) {
            hasProps = true;
        }
        /* eslint-enable no-unused-vars */
        expect(hasProps).to.equal(false);
        Object.getOwnPropertyNames(Object.prototype).forEach((prop) => {
            expect(prop in map).to.equal(false);
        });
    });

    it('should allow object literal as an argument to populate the map with its properties', () => {
        const map = fastmap({foo: 1, bar: 2});
        expect(map).to.eql({foo: 1, bar: 2});
    });

    it('should allow multiple object literals as parameters (right overwrites left)', () => {
        const map = fastmap({foo: 1, bar: 2}, {baz: 3, qux: 4}, {foo: 10});
        expect(map).to.eql({foo: 10, bar: 2, baz: 3, qux: 4});
    });
});
