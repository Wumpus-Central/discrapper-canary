a.d(t, { A: () => s });
var n = a(627968);
a(64700);
var i = a(311907),
    r = a(397927),
    l = a(478063),
    o = a(287809);
let s = function (e) {
    let { recipients: t, size: a, status: s, isTyping: _, className: c, ...d } = e,
        u = r.vCh[a],
        f = (0, i.yK)(
            [o.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = o.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, u.size, !1);
                }),
            [t, u.size],
        );
    return (0, n.jsx)(l.A, {
        "aria-label": d["aria-label"],
        "aria-hidden": d["aria-hidden"],
        backSrc: f[0],
        frontSrc: f[1],
        size: a,
        status: s,
        isTyping: _ ?? !1,
        className: c,
    });
};
