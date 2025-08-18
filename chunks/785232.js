n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    o = n(289823),
    a = n(594174);
let s = function (e) {
    var { recipients: t, size: n, status: s, isTyping: c, className: u } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["recipients", "size", "status", "isTyping", "className"]);
    let p = l.ny6[n],
        m = (0, i.Wu)(
            [a.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = a.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, p.size, !1);
                }),
            [t, p.size],
        );
    return (0, r.jsx)(o.Z, {
        "aria-label": d["aria-label"],
        "aria-hidden": d["aria-hidden"],
        backSrc: m[0],
        frontSrc: m[1],
        size: n,
        status: s,
        isTyping: null != c && c,
        className: u,
    });
};
