n.d(t, { Z: () => o });
var a = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    i = n(289823),
    s = n(594174);
let o = function (e) {
    var { recipients: t, size: n, status: o, isTyping: c, className: u } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++) (n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['recipients', 'size', 'status', 'isTyping', 'className']);
    let m = l.ny6[n],
        p = (0, r.Wu)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, m.size, !1);
                }),
            [t, m.size]
        );
    return (0, a.jsx)(i.Z, {
        'aria-label': d['aria-label'],
        'aria-hidden': d['aria-hidden'],
        backSrc: p[0],
        frontSrc: p[1],
        size: n,
        status: o,
        isTyping: null != c && c,
        className: u
    });
};
