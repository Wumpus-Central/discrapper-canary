n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(289823),
    s = n(594174);
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let u = function (e) {
    var { recipients: t, size: n, status: c, isTyping: u, className: d } = e,
        f = l(e, ['recipients', 'size', 'status', 'isTyping', 'className']);
    let _ = o.ny6[n],
        p = (0, i.Wu)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, _.size, !1);
                }),
            [t, _.size]
        );
    return (0, r.jsx)(a.Z, {
        'aria-label': f['aria-label'],
        'aria-hidden': f['aria-hidden'],
        backSrc: p[0],
        frontSrc: p[1],
        size: n,
        status: c,
        isTyping: null != u && u,
        className: d
    });
};
