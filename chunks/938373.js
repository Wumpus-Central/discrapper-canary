var r = n(507604),
    i = n(77025),
    o = Function.prototype,
    a = r && Object.getOwnPropertyDescriptor,
    s = i(o, 'name'),
    l = s && 'something' === function () {}.name,
    c = s && (!r || (r && a(o, 'name').configurable));
e.exports = {
    EXISTS: s,
    PROPER: l,
    CONFIGURABLE: c
};
