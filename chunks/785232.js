n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(289823),
    a = n(594174);
let u = function (e) {
    var { recipients: t, size: n, status: u, isTyping: s, className: c } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['recipients', 'size', 'status', 'isTyping', 'className']);
    let p = l.ny6[n],
        f = (0, i.Wu)(
            [a.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = a.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, p.size, !1);
                }),
            [t, p.size]
        );
    return (0, r.jsx)(o.Z, {
        'aria-label': d['aria-label'],
        'aria-hidden': d['aria-hidden'],
        backSrc: f[0],
        frontSrc: f[1],
        size: n,
        status: u,
        isTyping: null != s && s,
        className: c
    });
};
