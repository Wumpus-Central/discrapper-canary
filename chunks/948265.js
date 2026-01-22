c.d(t, { default: () => f });
var a = c(627968);
c(64700);
var n = c(87719),
    d = c(377108),
    s = c(244975),
    o = c(652215),
    r = c(985018);
function f(e) {
    let { premiumUpsellType: t, title: c, body: f, glowUp: p, analyticsSource: b, onClose: A, onSecondaryClick: l } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var c,
                a,
                n,
                d = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (n = 0, c = Reflect.ownKeys(e); n < c.length; n++)
                    (a = c[n]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (d[a] = e[a]);
                return d;
            }
            if (
                ((d = (function (e, t) {
                    if (null == e) return {};
                    var c,
                        a,
                        n = {},
                        d = Object.getOwnPropertyNames(e);
                    for (a = 0; a < d.length; a++)
                        (c = d[a]),
                            !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (n[c] = e[c]);
                    return n;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (n = 0, c = Object.getOwnPropertySymbols(e); n < c.length; n++)
                    (a = c[n]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (d[a] = e[a]);
            return d;
        })(e, ["premiumUpsellType", "title", "body", "glowUp", "analyticsSource", "onClose", "onSecondaryClick"]),
        u = (0, d.A)(t);
    return (0, a.jsx)(
        s.A,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var c = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(c);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(c).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(c, e).enumerable;
                        }),
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = c[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })(
            {
                artURL: u,
                type: t,
                title: c,
                body: f,
                glowUp: p,
                onSecondaryClick: () => {
                    l(), (0, n.x)(A);
                },
                secondaryCTA: r.intl.string(r.t.PcTCB7),
                onClose: A,
                enableArtBoxShadow: !1,
                analyticsSource: b,
                analyticsLocation: {
                    section: o.JJy.USER_PROFILE,
                    object: o.ZSU.BUTTON_CTA,
                },
                hideBackButton: !0,
                showEnhancedUpsell: !0,
            },
            i,
        ),
    );
}
