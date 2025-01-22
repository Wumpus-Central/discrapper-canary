var l = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    r = n(289823),
    s = n(594174);
t.Z = function (e) {
    let { recipients: t, size: n, status: o, isTyping: c, className: u, ...d } = e,
        h = a.AvatarSizeSpecs[n],
        f = (0, i.Wu)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, h.size, !1);
                }),
            [t, h.size]
        );
    return (0, l.jsx)(r.Z, {
        'aria-label': d['aria-label'],
        'aria-hidden': d['aria-hidden'],
        backSrc: f[0],
        frontSrc: f[1],
        size: n,
        status: o,
        isTyping: null != c && c,
        className: u
    });
};
