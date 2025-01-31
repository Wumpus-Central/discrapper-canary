var n = r(581079),
    i = /\./,
    o = /\|\|/,
    a = /\s+\-\s+/,
    u = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
    s = /^(\d*)(.*)/;
function c(t, e) {
    if ('' === (t = t.trim())) return !0;
    var r,
        n,
        o,
        a,
        u,
        s,
        c,
        h = e.split(i),
        d = f(t),
        g = d.modifier,
        v = d.rangeComponents;
    switch (g) {
        case '<':
            return -1 === y(h, v);
        case '<=':
            return -1 === (r = y(h, v)) || 0 === r;
        case '>=':
            return l(h, v);
        case '>':
            return 1 === y(h, v);
        case '~':
        case '~>':
            return (n = h), (a = (o = v).slice()), (u = o.slice()).length > 1 && u.pop(), (s = u.length - 1), p((c = parseInt(u[s], 10))) && (u[s] = c + 1 + ''), l(n, a) && -1 === y(n, u);
        default:
            return 0 === y(h, v);
    }
}
function l(t, e) {
    var r = y(t, e);
    return 1 === r || 0 === r;
}
function f(t) {
    var e = t.split(i),
        r = e[0].match(u);
    return (
        r || n(!1),
        {
            modifier: r[1],
            rangeComponents: [r[2]].concat(e.slice(1))
        }
    );
}
function p(t) {
    return !isNaN(t) && isFinite(t);
}
function h(t) {
    return !f(t).modifier;
}
function d(t, e) {
    for (var r = t.length; r < e; r++) t[r] = '0';
}
function g(t, e) {
    return (typeof t != typeof e && n(!1), t > e) ? 1 : t < e ? -1 : 0;
}
function y(t, e) {
    for (
        var r = (function (t, e) {
                d((t = t.slice()), (e = e.slice()).length);
                for (var r = 0; r < e.length; r++) {
                    var n = e[r].match(/^[x*]$/i);
                    if (n && ((e[r] = t[r] = '0'), '*' === n[0] && r === e.length - 1)) for (var i = r; i < t.length; i++) t[i] = '0';
                }
                return d(e, t.length), [t, e];
            })(t, e),
            n = r[0],
            i = r[1],
            o = 0;
        o < i.length;
        o++
    ) {
        var a = (function (t, e) {
            var r = t.match(s)[1],
                n = e.match(s)[1],
                i = parseInt(r, 10),
                o = parseInt(n, 10);
            return p(i) && p(o) && i !== o ? g(i, o) : g(t, e);
        })(n[o], i[o]);
        if (a) return a;
    }
    return 0;
}
var v = {
    contains: function (t, e) {
        var r, i, u;
        return (
            (r = t.trim()),
            (i = e.trim()),
            (u = r.split(o)).length > 1
                ? u.some(function (t) {
                      return v.contains(t, i);
                  })
                : (function (t, e) {
                      var r = t.split(a);
                      if (((r.length > 0 && r.length <= 2) || n(!1), 1 === r.length)) return c(r[0], e);
                      var i = r[0],
                          o = r[1];
                      return (h(i) && h(o)) || n(!1), c('>=' + i, e) && c('<=' + o, e);
                  })((r = u[0].trim()), i)
        );
    }
};
t.exports = v;
