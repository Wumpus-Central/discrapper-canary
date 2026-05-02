"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(778712),
    a = n(478063),
    o = n(287809);
let l = function (e) {
    let { recipients: t, size: n, status: l, isTyping: u, className: c, ...d } = e,
        _ = s.vC[n],
        f = (0, r.yK)(
            [o.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = o.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, _.size, !1);
                }),
            [t, _.size],
        );
    return (0, i.jsx)(a.A, {
        "aria-label": d["aria-label"],
        "aria-hidden": d["aria-hidden"],
        backSrc: f[0],
        frontSrc: f[1],
        size: n,
        status: l,
        isTyping: u ?? !1,
        className: c,
    });
};
