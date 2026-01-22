var n = e(414123),
    o = e(512008),
    s = Function.prototype,
    i = n && Object.getOwnPropertyDescriptor,
    u = o(s, "name"),
    c = u && (!n || (n && i(s, "name").configurable));
t.exports = {
    EXISTS: u,
    PROPER: u && "something" === function () {}.name,
    CONFIGURABLE: c,
};
