n.d(e, { default: () => d });
var r = n(200651);
n(192379);
var o = n(442837),
    c = n(654904),
    a = n(594174),
    i = n(74538),
    l = n(98278),
    u = n(790527),
    s = n(474936),
    f = n(981631),
    p = n(486324),
    b = n(388032),
    y = n(89671);
function d(t) {
    var { onClose: e, source: n } = t,
        d = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(t);
                    for (r = 0; r < c.length; r++) (n = c[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(t);
                for (r = 0; r < c.length; r++) (n = c[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ['onClose', 'source']);
    let O = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
        g = i.ZP.isPremium(O) ? b.t.E0sNsb : b.t.UBcutr,
        j = b.intl.format(g, {
            onLearnMore: function () {
                e(), (0, l.z)(!0);
            }
        });
    return (0, r.jsx)(
        u.Z,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })(
            {
                artURL: y.Z,
                type: s.cd.CUSTOM_PROFILE_UPSELL,
                title: b.intl.string(b.t.BbsMm5),
                body: j,
                glowUp: j,
                onSecondaryClick: () => {
                    e(),
                        (0, c.$r)({
                            uploadType: p.pC.BANNER,
                            analyticsSource: n
                        });
                },
                secondaryCTA: b.intl.string(b.t.SpAQiY),
                analyticsSource: n,
                analyticsLocation: {
                    section: f.jXE.USER_PROFILE,
                    object: f.qAy.BUTTON_CTA
                },
                onClose: e
            },
            d
        )
    );
}
