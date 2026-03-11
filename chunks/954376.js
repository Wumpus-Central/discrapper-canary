"use strict";
a.d(t, { A: () => o });
var n = a(627968);
a(64700);
var i = a(311907),
    r = a(397927),
    s = a(478063),
    l = a(287809);
let o = function (e) {
    let { recipients: t, size: a, status: o, isTyping: c, className: _, ...d } = e,
        u = r.vCh[a],
        f = (0, i.yK)(
            [l.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = l.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, u.size, !1);
                }),
            [t, u.size],
        );
    return (0, n.jsx)(s.A, {
        "aria-label": d["aria-label"],
        "aria-hidden": d["aria-hidden"],
        backSrc: f[0],
        frontSrc: f[1],
        size: a,
        status: o,
        isTyping: c ?? !1,
        className: _,
    });
};
