n.d(t, { Z: () => o });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    a = n(289823),
    s = n(594174);
let o = function (e) {
    var { recipients: t, size: n, status: o, isTyping: c, className: u } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['recipients', 'size', 'status', 'isTyping', 'className']);
    let f = i.ny6[n],
        h = (0, r.Wu)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, f.size, !1);
                }),
            [t, f.size]
        );
    return (0, l.jsx)(a.Z, {
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
