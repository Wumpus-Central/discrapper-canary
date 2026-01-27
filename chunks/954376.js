r.d(t, {
    A: () => o,
});
var n = r(627968);
r(64700);
var l = r(311907),
    s = r(397927),
    a = r(478063),
    i = r(287809);
let o = function (e) {
    let { recipients: t, size: r, status: o, isTyping: c, className: u } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        s = Object.getOwnPropertyNames(e);
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s;
        })(e, ["recipients", "size", "status", "isTyping", "className"]),
        h = s.vCh[r],
        p = (0, l.yK)(
            [i.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = i.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, h.size, !1);
                }),
            [t, h.size],
        );
    return (0, n.jsx)(a.A, {
        "aria-label": d["aria-label"],
        "aria-hidden": d["aria-hidden"],
        backSrc: p[0],
        frontSrc: p[1],
        size: r,
        status: o,
        isTyping: null != c && c,
        className: u,
    });
};
