r.d(t, { default: () => y });
var n = r(200651);
r(192379);
var o = r(442837),
    c = r(654904),
    a = r(594174),
    i = r(74538),
    u = r(98278),
    s = r(790527),
    l = r(474936),
    f = r(981631),
    p = r(486324),
    b = r(388032),
    d = r(89671);
function y(e) {
    var { onClose: t, source: r } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['onClose', 'source']);
    let O = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
        g = i.ZP.isPremium(O) ? b.t.E0sNsb : b.t.UBcutr,
        j = b.NW.format(g, {
            onLearnMore: function () {
                t(), (0, u.z)(!0);
            }
        });
    return (0, n.jsx)(
        s.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                artURL: d.Z,
                type: l.cd.CUSTOM_PROFILE_UPSELL,
                title: b.NW.string(b.t.BbsMm5),
                body: j,
                glowUp: j,
                onSecondaryClick: () => {
                    t(), (0, c.$r)(p.pC.BANNER);
                },
                secondaryCTA: b.NW.string(b.t.SpAQiY),
                analyticsSource: r,
                analyticsLocation: {
                    section: f.jXE.USER_PROFILE,
                    object: f.qAy.BUTTON_CTA
                },
                onClose: t
            },
            y
        )
    );
}
