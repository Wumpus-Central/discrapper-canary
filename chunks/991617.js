n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(475179),
    o = n(906732),
    a = n(522651),
    s = n(871499),
    c = n(354459),
    u = n(388032);
function d(e) {
    var { channelId: t, isHorizontal: n } = e,
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
        })(e, ['channelId', 'isHorizontal']);
    let { parentAnalyticsLocation: p } = (0, o.ZP)();
    return (0, r.jsx)(
        s.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                onClick: function () {
                    (0, a.v)(p, a.d.FOCUS), l.Z.selectParticipant(t, c.dF.AUTO);
                },
                label: u.NW.string(u.t.np22FR),
                iconComponent: n ? i.dRJ : i.SVt,
                tooltipPosition: 'bottom'
            },
            d
        )
    );
}
