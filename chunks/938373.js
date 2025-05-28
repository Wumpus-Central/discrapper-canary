var r = n(507604),
    i = n(77025),
    a = Function.prototype,
    o = r && Object.getOwnPropertyDescriptor,
    s = i(a, 'name'),
    l = s && 'something' === function () {}.name,
    c = s && (!r || (r && o(a, 'name').configurable));
e.exports = {
    EXISTS: s,
    PROPER: l,
    CONFIGURABLE: c
};
