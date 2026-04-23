n.d(t, { A: () => i });
var a = n(627968);
n(64700);
var r = n(311907),
    l = n(778712),
    s = n(478063),
    o = n(287809);
let i = function (e) {
    let { recipients: t, size: n, status: i, isTyping: c, className: d, ..._ } = e,
        u = l.vC[n],
        A = (0, r.yK)(
            [o.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = o.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, u.size, !1);
                }),
            [t, u.size],
        );
    return (0, a.jsx)(s.A, {
        "aria-label": _["aria-label"],
        "aria-hidden": _["aria-hidden"],
        backSrc: A[0],
        frontSrc: A[1],
        size: n,
        status: i,
        isTyping: c ?? !1,
        className: d,
    });
};
