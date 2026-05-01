var n = e(257943),
    o = e(210140),
    i = Function.prototype,
    u = n && Object.getOwnPropertyDescriptor,
    a = o(i, "name"),
    c = a && (!n || (n && u(i, "name").configurable));
r.exports = { EXISTS: a, PROPER: a && "something" === function () {}.name, CONFIGURABLE: c };
