a.d(t, { A: () => o });
var i = a(627968);
a(64700);
var r = a(311907),
    l = a(778712),
    n = a(478063),
    s = a(287809);
let o = function (e) {
    let { recipients: t, size: a, status: o, isTyping: c, className: d, ..._ } = e,
        u = l.vC[a],
        h = (0, r.yK)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, u.size, !1);
                }),
            [t, u.size],
        );
    return (0, i.jsx)(n.A, {
        "aria-label": _["aria-label"],
        "aria-hidden": _["aria-hidden"],
        backSrc: h[0],
        frontSrc: h[1],
        size: a,
        status: o,
        isTyping: c ?? !1,
        className: d,
    });
};
