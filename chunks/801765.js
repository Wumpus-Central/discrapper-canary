i.d(t, {
    x: () => s,
    y: () =>
        function e(t, i, a, s, c, d) {
            var f, p, m;
            let g = r.A.getTypeSize("SHORT"),
                h = {},
                y =
                    ((f = t),
                    (p = s),
                    (m = c),
                    p + r.A.getTypeSize("SHORT") <= f.byteLength ? r.A.getShortAt(f, p, m) : 0);
            s += g;
            for (let e = 0; e < y && !(s + 12 > t.byteLength); e++) {
                let e = (function (e, t, i, n, a, s) {
                    var c, d, f, p, m, g, h;
                    let y,
                        A,
                        v = r.A.getTypeSize("SHORT"),
                        T = v + r.A.getTypeSize("SHORT"),
                        b = T + r.A.getTypeSize("LONG"),
                        P = r.A.getShortAt(e, n, a),
                        S = r.A.getShortAt(e, n + v, a),
                        F = r.A.getLongAt(e, n + T, a);
                    if (void 0 === r.A.typeSizes[S] || (!s && void 0 === o.Ay[t][P])) return;
                    ((c = S), (d = F), r.A.typeSizes[c] * d <= r.A.getTypeSize("LONG"))
                        ? (y = l(e, (A = n + b), S, F, a))
                        : ((A = r.A.getLongAt(e, n + b, a)),
                          (f = e),
                          (p = i),
                          (m = A),
                          (g = S),
                          (h = F),
                          (y =
                              p + m + r.A.typeSizes[g] * h <= f.byteLength
                                  ? l(e, i + A, S, F, a, 33723 === P)
                                  : "<faulty value>")),
                        S === r.A.tagTypes.ASCII &&
                            (y = (function (e) {
                                try {
                                    return e.map((e) => decodeURIComponent(escape(e)));
                                } catch (t) {
                                    return e;
                                }
                            })(
                                (y = (function (e) {
                                    let t = [],
                                        i = 0;
                                    for (let n = 0; n < e.length; n++) {
                                        if ("\0" === e[n]) {
                                            i++;
                                            continue;
                                        }
                                        void 0 === t[i] && (t[i] = ""), (t[i] += e[n]);
                                    }
                                    return t;
                                })(y)),
                            ));
                    let I = `undefined-${P}`,
                        C = y;
                    if (void 0 !== o.Ay[t][P])
                        if (void 0 !== o.Ay[t][P].name && void 0 !== o.Ay[t][P].description) {
                            I = o.Ay[t][P].name;
                            try {
                                C = o.Ay[t][P].description(y);
                            } catch (e) {
                                C = u(y);
                            }
                        } else
                            S === r.A.tagTypes.RATIONAL || S === r.A.tagTypes.SRATIONAL
                                ? ((I = o.Ay[t][P]), (C = "" + y[0] / y[1]))
                                : ((I = o.Ay[t][P]), (C = u(y)));
                    return { id: P, name: I, value: y, description: C, __offset: A };
                })(t, i, a, s, c, d);
                void 0 !== e &&
                    ((h[e.name] = { id: e.id, value: e.value, description: e.description }),
                    ("MakerNote" === e.name || (i === o.SI && "LevelInfo" === e.name)) &&
                        (h[e.name].__offset = e.__offset)),
                    (s += 12);
            }
            if (n.A.USE_THUMBNAIL && s < t.byteLength - r.A.getTypeSize("LONG")) {
                let n = r.A.getLongAt(t, s, c);
                0 !== n && i === o.eY && (h.Thumbnail = e(t, o.Qb, a, a + n, c, d));
            }
            return h;
        },
});
var n = i(761799),
    r = i(668459),
    o = i(105423);
let a = {
    1: r.A.getByteAt,
    2: r.A.getAsciiAt,
    3: r.A.getShortAt,
    4: r.A.getLongAt,
    5: r.A.getRationalAt,
    7: r.A.getUndefinedAt,
    9: r.A.getSlongAt,
    10: r.A.getSrationalAt,
    13: r.A.getIfdPointerAt,
};
function s(e, t, i) {
    return t + r.A.getLongAt(e, t + 4, i);
}
function l(e, t, i, n, o, s = !1) {
    let u = [];
    s && ((n *= r.A.typeSizes[i]), (i = r.A.tagTypes.BYTE));
    for (let s = 0; s < n; s++) u.push(a[i](e, t, o)), (t += r.A.typeSizes[i]);
    return i === r.A.tagTypes.ASCII ? (u = r.A.getAsciiValue(u)) : 1 === u.length && (u = u[0]), u;
}
function u(e) {
    return e instanceof Array ? e.join(", ") : e;
}
