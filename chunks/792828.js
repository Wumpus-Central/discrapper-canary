"use strict";
n.d(t, { A: () => i });
var r = n(544195);
let i = {
    y: function (e, t) {
        var n = e.getUTCFullYear(),
            i = n > 0 ? n : 1 - n;
        return (0, r.A)("yy" === t ? i % 100 : i, t.length);
    },
    M: function (e, t) {
        var n = e.getUTCMonth();
        return "M" === t ? String(n + 1) : (0, r.A)(n + 1, 2);
    },
    d: function (e, t) {
        return (0, r.A)(e.getUTCDate(), t.length);
    },
    a: function (e, t) {
        var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
            case "a":
            case "aa":
                return n.toUpperCase();
            case "aaa":
                return n;
            case "aaaaa":
                return n[0];
            default:
                return "am" === n ? "a.m." : "p.m.";
        }
    },
    h: function (e, t) {
        return (0, r.A)(e.getUTCHours() % 12 || 12, t.length);
    },
    H: function (e, t) {
        return (0, r.A)(e.getUTCHours(), t.length);
    },
    m: function (e, t) {
        return (0, r.A)(e.getUTCMinutes(), t.length);
    },
    s: function (e, t) {
        return (0, r.A)(e.getUTCSeconds(), t.length);
    },
    S: function (e, t) {
        var n = t.length,
            i = Math.floor(e.getUTCMilliseconds() * Math.pow(10, n - 3));
        return (0, r.A)(i, t.length);
    },
};
