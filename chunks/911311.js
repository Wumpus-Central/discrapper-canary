n.d(t, { Z: () => b });
var r = n(255367),
    i = n(442837),
    a = n(914010),
    o = n(526167),
    s = n(403182),
    l = n(63063),
    c = n(7366),
    u = n(981631),
    d = n(388032),
    f = n(152599),
    _ = n(860978);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let E = 2.1,
    b = (e) => {
        var { handleLearnMore: t } = e,
            n = m(e, ['handleLearnMore']);
        let p = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
            g = (0, s.iL)({
                guildId: p,
                onClick: () => {
                    window.open(l.Z.getArticleURL(u.BhN.NITRO_FAQ), '_blank');
                }
            }),
            b = (0, o.rO)() ? f.Z : _.Z;
        return (0, r.jsx)(
            c.Z,
            h(
                {
                    gradientColor: 'nitro-pink',
                    title: d.intl.string(d.t['9C+41t']),
                    subtitle: g,
                    videoSrc: b,
                    loopAt: E,
                    onSecondaryClick: t
                },
                n
            )
        );
    };
