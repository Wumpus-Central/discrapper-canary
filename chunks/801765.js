n.d(t, {
    x: () => o,
    y: () => l,
});
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
    let f = i.A.getTypeSize("SHORT"),
        p = 12,
        _ = {},
        h = c(e, s, o);
    s += f;
    for (let r = 0; r < h && !(s + p > e.byteLength); r++) {
        let r = u(e, t, n, s, o, d);
        void 0 !== r &&
            ((_[r.name] = {
                id: r.id,
                value: r.value,
                description: r.description,
            }),
            ("MakerNote" === r.name || (t === a.SI && "LevelInfo" === r.name)) && (_[r.name].__offset = r.__offset)),
            (s += p);
    }
    if (r.A.USE_THUMBNAIL && s < e.byteLength - i.A.getTypeSize("LONG")) {
        let r = i.A.getLongAt(e, s, o);
        0 !== r && t === a.eY && (_.Thumbnail = l(e, a.Qb, n, n + r, o, d));
    }
    return _;
}

function c(e, t, n) {
    return t + i.A.getTypeSize("SHORT") <= e.byteLength ? i.A.getShortAt(e, t, n) : 0;
}

function u(e, t, n, r, s, o) {
    let l,
        c,
        u = 33723,
        g = i.A.getTypeSize("SHORT"),
        E = g + i.A.getTypeSize("SHORT"),
        b = E + i.A.getTypeSize("LONG"),
        y = i.A.getShortAt(e, r, s),
        O = i.A.getShortAt(e, r + g, s),
        A = i.A.getLongAt(e, r + E, s);
    if (void 0 === i.A.typeSizes[O] || (!o && void 0 === a.Ay[t][y])) return;
    d(O, A)
        ? (l = f(e, (c = r + b), O, A, s))
        : ((c = i.A.getLongAt(e, r + b, s)), (l = p(e, n, c, O, A) ? f(e, n + c, O, A, s, y === u) : "<faulty value>")),
        O === i.A.tagTypes.ASCII && (l = h((l = _(l))));
    let v = `undefined-${y}`,
        S = l;
    if (void 0 !== a.Ay[t][y])
        if (void 0 !== a.Ay[t][y].name && void 0 !== a.Ay[t][y].description) {
            v = a.Ay[t][y].name;
            try {
                S = a.Ay[t][y].description(l);
            } catch (e) {
                S = m(l);
            }
        } else
            O === i.A.tagTypes.RATIONAL || O === i.A.tagTypes.SRATIONAL
                ? ((v = a.Ay[t][y]), (S = "" + l[0] / l[1]))
                : ((v = a.Ay[t][y]), (S = m(l)));
    return {
        id: y,
        name: v,
        value: l,
        description: S,
        __offset: c,
    };
}

function d(e, t) {
    return i.A.typeSizes[e] * t <= i.A.getTypeSize("LONG");
}

function f(e, t, n, r, a, o = !1) {
    let l = [];
    o && ((r *= i.A.typeSizes[n]), (n = i.A.tagTypes.BYTE));
    for (let o = 0; o < r; o++) l.push(s[n](e, t, a)), (t += i.A.typeSizes[n]);
    return n === i.A.tagTypes.ASCII ? (l = i.A.getAsciiValue(l)) : 1 === l.length && (l = l[0]), l;
}

function p(e, t, n, r, a) {
    return t + n + i.A.typeSizes[r] * a <= e.byteLength;
}

function _(e) {
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
