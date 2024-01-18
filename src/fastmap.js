function EmptyObject() {}
EmptyObject.prototype = Object.create(null);

export default function fastmap(props) {
    const map = new EmptyObject();
    if (props) {
        Object.assign(map, props);
    }
    return map;
}
