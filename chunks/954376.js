s.d(e, { A: () => r });
var _ = s(627968);
s(64700);
var i = s(311907),
    a = s(397927),
    A = s(478063),
    n = s(287809);
let r = function (t) {
    let { recipients: e, size: s, status: r, isTyping: l, className: I, ...E } = t,
        o = a.vCh[s],
        d = (0, i.yK)(
            [n.default],
            () =>
                e.slice(0, 2).map((t) => {
                    let e = n.default.getUser(t);
                    if (null != e) return e.getAvatarURL(void 0, o.size, !1);
                }),
            [e, o.size],
        );
    return (0, _.jsx)(A.A, {
        "aria-label": E["aria-label"],
        "aria-hidden": E["aria-hidden"],
        backSrc: d[0],
        frontSrc: d[1],
        size: s,
        status: r,
        isTyping: l ?? !1,
        className: I,
    });
};
