n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(289823),
    r = n(594174);
let o = function (e) {
    let { recipients: t, size: n, status: o, isTyping: c, className: u, ...d } = e,
        _ = a.ny6[n],
        h = (0, i.Wu)(
            [r.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = r.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, _.size, !1);
                }),
            [t, _.size]
        );
    return (0, l.jsx)(s.Z, {
        'aria-label': d['aria-label'],
        'aria-hidden': d['aria-hidden'],
        backSrc: h[0],
        frontSrc: h[1],
        size: n,
        status: o,
        isTyping: null != c && c,
        className: u
    });
};
