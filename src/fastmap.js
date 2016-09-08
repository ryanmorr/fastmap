/**
 * Define a constructor with a null prototype,
 * instantiating this is much faster than explicitly
 * calling `Object.create(null)` to get a "bare"
 * empty object
 */
function EmptyObject() {}
EmptyObject.prototype = Object.create(null);

/**
 * Create an accelerated hash map
 *
 * @param {...Object} props (optional)
 * @return {Object}
 * @api public
 */
export default function fastmap(...props) {
    const map = new EmptyObject();
    if (props.length) {
        props.forEach((object) => {
            for (const key in object) {
                map[key] = object[key];
            }
        });
    }
    return map;
}
