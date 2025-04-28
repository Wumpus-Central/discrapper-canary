var e = r(507604),
    o = r(77025),
    i = Function.prototype,
    u = e && Object.getOwnPropertyDescriptor,
    c = o(i, 'name'),
    a = c && (!e || (e && u(i, 'name').configurable));
t.exports = {
    EXISTS: c,
    PROPER: c && 'something' === function () {}.name,
    CONFIGURABLE: a
};
