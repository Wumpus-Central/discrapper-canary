n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(289823),
    s = n(594174);
let o = function (e) {
    let { recipients: t, size: n, status: o, isTyping: c, className: d, ...u } = e,
        m = a.ny6[n],
        _ = (0, l.Wu)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, m.size, !1);
                }),
            [t, m.size]
        );
    return (0, i.jsx)(r.Z, {
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
