"use strict";
n.d(t, { x: () => o, y: () => l });
var r = n(761799),
    i = n(668459),
    a = n(105423);
let s = {
    1: i.A.getByteAt,
    2: i.A.getAsciiAt,
    3: i.A.getShortAt,
    4: i.A.getLongAt,
    5: i.A.getRationalAt,
    7: i.A.getUndefinedAt,
    9: i.A.getSlongAt,
    10: i.A.getSrationalAt,
    13: i.A.getIfdPointerAt,
};
function o(e, t, n) {
    return t + i.A.getLongAt(e, t + 4, n);
}
function l(e, t, n, s, o, d) {
    let _ = i.A.getTypeSize("SHORT"),
        f = 12,
        p = {},
        h = u(e, s, o);
    s += _;
    for (let r = 0; r < h && !(s + f > e.byteLength); r++) {
        let r = c(e, t, n, s, o, d);
        void 0 !== r &&
            ((p[r.name] = { id: r.id, value: r.value, description: r.description }),
            ("MakerNote" === r.name || (t === a.SI && "LevelInfo" === r.name)) && (p[r.name].__offset = r.__offset)),
            (s += f);
    }
    if (r.A.USE_THUMBNAIL && s < e.byteLength - i.A.getTypeSize("LONG")) {
        let r = i.A.getLongAt(e, s, o);
        0 !== r && t === a.eY && (p.Thumbnail = l(e, a.Qb, n, n + r, o, d));
    }
    return p;
}
function u(e, t, n) {
    return t + i.A.getTypeSize("SHORT") <= e.byteLength ? i.A.getShortAt(e, t, n) : 0;
}
function c(e, t, n, r, s, o) {
    let l,
        u,
        c = 33723,
        g = i.A.getTypeSize("SHORT"),
        E = g + i.A.getTypeSize("SHORT"),
        A = E + i.A.getTypeSize("LONG"),
        I = i.A.getShortAt(e, r, s),
        T = i.A.getShortAt(e, r + g, s),
        y = i.A.getLongAt(e, r + E, s);
    if (void 0 === i.A.typeSizes[T] || (!o && void 0 === a.Ay[t][I])) return;
    d(T, y)
        ? (l = _(e, (u = r + A), T, y, s))
        : ((u = i.A.getLongAt(e, r + A, s)), (l = f(e, n, u, T, y) ? _(e, n + u, T, y, s, I === c) : "<faulty value>")),
        T === i.A.tagTypes.ASCII && (l = h((l = p(l))));
    let S = `undefined-${I}`,
        v = l;
    if (void 0 !== a.Ay[t][I])
        if (void 0 !== a.Ay[t][I].name && void 0 !== a.Ay[t][I].description) {
            S = a.Ay[t][I].name;
            try {
                v = a.Ay[t][I].description(l);
            } catch (e) {
                v = m(l);
            }
        } else
            T === i.A.tagTypes.RATIONAL || T === i.A.tagTypes.SRATIONAL
                ? ((S = a.Ay[t][I]), (v = "" + l[0] / l[1]))
                : ((S = a.Ay[t][I]), (v = m(l)));
    return { id: I, name: S, value: l, description: v, __offset: u };
}
function d(e, t) {
    return i.A.typeSizes[e] * t <= i.A.getTypeSize("LONG");
}
function _(e, t, n, r, a, o = !1) {
    let l = [];
    o && ((r *= i.A.typeSizes[n]), (n = i.A.tagTypes.BYTE));
    for (let o = 0; o < r; o++) l.push(s[n](e, t, a)), (t += i.A.typeSizes[n]);
    return n === i.A.tagTypes.ASCII ? (l = i.A.getAsciiValue(l)) : 1 === l.length && (l = l[0]), l;
}
function f(e, t, n, r, a) {
    return t + n + i.A.typeSizes[r] * a <= e.byteLength;
}
function p(e) {
    let t = [],
        n = 0;
    for (let r = 0; r < e.length; r++) {
        if ("\0" === e[r]) {
            n++;
            continue;
        }
        void 0 === t[n] && (t[n] = ""), (t[n] += e[r]);
    }
    return t;
}
function h(e) {
    try {
        return e.map((e) => decodeURIComponent(escape(e)));
    } catch (t) {
        return e;
    }
}
function m(e) {
    return e instanceof Array ? e.join(", ") : e;
}
