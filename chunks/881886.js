var r = n(581079),
    i = /\./,
    o = /\|\|/,
    a = /\s+\-\s+/,
    s = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
    l = /^(\d*)(.*)/;
function c(e, t) {
    var n = e.split(o);
    return n.length > 1
        ? n.some(function (e) {
              return A.contains(e, t);
          })
        : u((e = n[0].trim()), t);
}
function u(e, t) {
    var n = e.split(a);
    if (((n.length > 0 && n.length <= 2) || r(!1), 1 === n.length)) return d(n[0], t);
    var i = n[0],
        o = n[1];
    return (y(i) && y(o)) || r(!1), d(">=" + i, t) && d("<=" + o, t);
}
function d(e, t) {
    if ("" === (e = e.trim())) return !0;
    var n = t.split(i),
        r = E(e),
        o = r.modifier,
        a = r.rangeComponents;
    switch (o) {
        case "<":
            return f(n, a);
        case "<=":
            return _(n, a);
        case ">=":
            return h(n, a);
        case ">":
            return m(n, a);
        case "~":
        case "~>":
            return g(n, a);
        default:
            return p(n, a);
    }
}
function f(e, t) {
    return -1 === S(e, t);
}
function _(e, t) {
    var n = S(e, t);
    return -1 === n || 0 === n;
}
function p(e, t) {
    return 0 === S(e, t);
}
function h(e, t) {
    var n = S(e, t);
    return 1 === n || 0 === n;
}
function m(e, t) {
    return 1 === S(e, t);
}
function g(e, t) {
    var n = t.slice(),
        r = t.slice();
    r.length > 1 && r.pop();
    var i = r.length - 1,
        o = parseInt(r[i], 10);
    return b(o) && (r[i] = o + 1 + ""), h(e, n) && f(e, r);
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
function I(e, t) {
    var n = e.match(l)[1],
        r = t.match(l)[1],
        i = parseInt(n, 10),
        o = parseInt(r, 10);
    return b(i) && b(o) && i !== o ? T(i, o) : T(e, t);
}
function T(e, t) {
    return (typeof e != typeof t && r(!1), e > t) ? 1 : e < t ? -1 : 0;
}
function S(e, t) {
    for (var n = v(e, t), r = n[0], i = n[1], o = 0; o < i.length; o++) {
        var a = I(r[o], i[o]);
        if (a) return a;
    }
    return 0;
}
var A = {
    contains: function (e, t) {
        return c(e.trim(), t.trim());
    },
};
e.exports = A;
