n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    l = n(289823),
    s = n(594174);
let c = function (e) {
    var { recipients: t, size: n, status: c, isTyping: o, className: u } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['recipients', 'size', 'status', 'isTyping', 'className']);
    let f = a.ny6[n],
        p = (0, r.Wu)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, f.size, !1);
                }),
            [t, f.size]
        );
    return (0, i.jsx)(l.Z, {
        'aria-label': d['aria-label'],
        'aria-hidden': d['aria-hidden'],
        backSrc: p[0],
        frontSrc: p[1],
        size: n,
        status: c,
        isTyping: null != o && o,
        className: u
    });
};
