"use strict";
var i = n(257943),
    r = n(210140),
    s = Function.prototype,
    a = i && Object.getOwnPropertyDescriptor,
    o = r(s, "name"),
    l = o && (!i || (i && a(s, "name").configurable));
e.exports = { EXISTS: o, PROPER: o && "something" === function () {}.name, CONFIGURABLE: l };
