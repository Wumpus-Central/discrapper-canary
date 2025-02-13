n.d(t, { Z: () => o });
var a = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    s = n(289823),
    r = n(594174);
let o = function (e) {
    let { recipients: t, size: n, status: o, isTyping: c, className: d, ...u } = e,
        m = i.ny6[n],
        _ = (0, l.Wu)(
            [r.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = r.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, m.size, !1);
                }),
            [t, m.size]
        );
    return (0, a.jsx)(s.Z, {
        'aria-label': u['aria-label'],
        'aria-hidden': u['aria-hidden'],
        backSrc: _[0],
        frontSrc: _[1],
        size: n,
        status: o,
        isTyping: null != c && c,
        className: d
    });
};
