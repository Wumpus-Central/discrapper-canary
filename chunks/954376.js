a.d(t, { A: () => _ });
var n = a(627968);
a(64700);
var r = a(17928),
    i = a(778712),
    l = a(478063),
    s = a(287809);
let _ = function (e) {
    let { recipients: t, size: a, status: _, isTyping: o, className: d, ...c } = e,
        u = i.vC[a],
        h = (0, r.yK)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, u.size, !1);
                }),
            [t, u.size],
        );
    return (0, n.jsx)(l.A, {
        "aria-label": c["aria-label"],
        "aria-hidden": c["aria-hidden"],
        backSrc: h[0],
        frontSrc: h[1],
        size: a,
        status: _,
        isTyping: o ?? !1,
        className: d,
    });
};
