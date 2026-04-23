n.d(t, { A: () => i });
var a = n(627968);
n(64700);
var r = n(17928),
    s = n(778712),
    l = n(478063),
    o = n(287809);
let i = function (e) {
    let { recipients: t, size: n, status: i, isTyping: c, className: _, ...u } = e,
        d = s.vC[n],
        A = (0, r.yK)(
            [o.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = o.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, d.size, !1);
                }),
            [t, d.size],
        );
    return (0, a.jsx)(l.A, {
        "aria-label": u["aria-label"],
        "aria-hidden": u["aria-hidden"],
        backSrc: A[0],
        frontSrc: A[1],
        size: n,
        status: i,
        isTyping: c ?? !1,
        className: _,
    });
};
