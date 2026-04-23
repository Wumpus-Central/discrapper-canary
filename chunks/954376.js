"use strict";
a.d(t, { A: () => o });
var r = a(627968);
a(64700);
var i = a(311907),
    n = a(778712),
    s = a(478063),
    l = a(287809);
let o = function (e) {
    let { recipients: t, size: a, status: o, isTyping: d, className: c, ..._ } = e,
        u = n.vC[a],
        h = (0, i.yK)(
            [l.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = l.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, u.size, !1);
                }),
            [t, u.size],
        );
    return (0, r.jsx)(s.A, {
        "aria-label": _["aria-label"],
        "aria-hidden": _["aria-hidden"],
        backSrc: h[0],
        frontSrc: h[1],
        size: a,
        status: o,
        isTyping: d ?? !1,
        className: c,
    });
};
