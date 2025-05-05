n.d(t, { default: () => u });
var r = n(255367);
n(73800);
var o = n(98278),
    c = n(790527),
    a = n(474936),
    i = n(981631),
    l = n(388032),
    f = n(102525);
function u(e) {
    var { onClose: t, source: n } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['onClose', 'source']);
    let b = l.intl.format(l.t.WMO9pq, {
        onAndMore: function () {
            t(), (0, o.z)(!0);
        }
    });
    return (0, r.jsx)(
        c.Z,
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
                artURL: f.Z,
                type: a.cd.PREMIUM_GUILD_IDENTITY_MODAL,
                title: l.intl.string(l.t.kOEBKC),
                body: b,
                glowUp: b,
                analyticsSource: n,
                analyticsLocation: {
                    section: i.jXE.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
                    object: i.qAy.BUTTON_CTA
                },
                onClose: t
            },
            u
        )
    );
}
