var n = e(257943),
    o = e(210140),
    i = Function.prototype,
    a = n && Object.getOwnPropertyDescriptor,
    u = o(i, "name"),
    c = u && (!n || (n && a(i, "name").configurable));
r.exports = { EXISTS: u, PROPER: u && "something" === function () {}.name, CONFIGURABLE: c };
