var r = n(581079),
    i = /\./,
    a = /\|\|/,
    o = /\s+\-\s+/,
    s = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
    l = /^(\d*)(.*)/;
function c(e, t) {
    var n = e.split(a);
    return n.length > 1
        ? n.some(function (e) {
              return C.contains(e, t);
          })
        : u((e = n[0].trim()), t);
}
function u(e, t) {
    var n = e.split(o);
    if (((n.length > 0 && n.length <= 2) || r(!1), 1 === n.length)) return d(n[0], t);
    var i = n[0],
        a = n[1];
    return (y(i) && y(a)) || r(!1), d(">=" + i, t) && d("<=" + a, t);
}
function d(e, t) {
    if ("" === (e = e.trim())) return !0;
    var n = t.split(i),
        r = E(e),
        a = r.modifier,
        o = r.rangeComponents;
    switch (a) {
        case "<":
            return f(n, o);
        case "<=":
            return p(n, o);
        case ">=":
            return m(n, o);
        case ">":
            return h(n, o);
        case "~":
        case "~>":
            return g(n, o);
        default:
            return _(n, o);
    }
}
function f(e, t) {
    return -1 === T(e, t);
}
function p(e, t) {
    var n = T(e, t);
    return -1 === n || 0 === n;
}
function _(e, t) {
    return 0 === T(e, t);
}
function m(e, t) {
    var n = T(e, t);
    return 1 === n || 0 === n;
}
function h(e, t) {
    return 1 === T(e, t);
}
function g(e, t) {
    var n = t.slice(),
        r = t.slice();
    r.length > 1 && r.pop();
    var i = r.length - 1,
        a = parseInt(r[i], 10);
    return b(a) && (r[i] = a + 1 + ""), m(e, n) && f(e, r);
}
function E(e) {
    var t = e.split(i),
        n = t[0].match(s);
    return (
        n || r(!1),
        {
            modifier: n[1],
            rangeComponents: [n[2]].concat(t.slice(1)),
        }
    );
}
function b(e) {
    return !isNaN(e) && isFinite(e);
}
function y(e) {
    return !E(e).modifier;
}
function O(e, t) {
    for (var n = e.length; n < t; n++) e[n] = "0";
}
function v(e, t) {
    O((e = e.slice()), (t = t.slice()).length);
    for (var n = 0; n < t.length; n++) {
        var r = t[n].match(/^[x*]$/i);
        if (r && ((t[n] = e[n] = "0"), "*" === r[0] && n === t.length - 1))
            for (var i = n; i < e.length; i++) e[i] = "0";
    }
    return O(t, e.length), [e, t];
}
function S(e, t) {
    var n = e.match(l)[1],
        r = t.match(l)[1],
        i = parseInt(n, 10),
        a = parseInt(r, 10);
    return b(i) && b(a) && i !== a ? I(i, a) : I(e, t);
}
function I(e, t) {
    return (typeof e != typeof t && r(!1), e > t) ? 1 : e < t ? -1 : 0;
}
function T(e, t) {
    for (var n = v(e, t), r = n[0], i = n[1], a = 0; a < i.length; a++) {
        var o = S(r[a], i[a]);
        if (o) return o;
    }
    return 0;
}
var C = {
    contains: function (e, t) {
        return c(e.trim(), t.trim());
    },
};
e.exports = C;
