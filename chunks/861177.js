r.d(t, {
    default: () => O,
});
var n = r(627968);
r(64700);
var o = r(311907),
    c = r(385612),
    l = r(287809),
    a = r(927578),
    i = r(87719),
    u = r(244975),
    s = r(788868),
    f = r(652215),
    p = r(339984),
    y = r(985018),
    b = r(626072);

function O(e) {
    let { onClose: t, source: r } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["onClose", "source"]),
        d = (0, o.bG)([l.default], () => l.default.getCurrentUser()),
        g = a.Ay.isPremium(d) ? y.t.E0sNsc : y.t.UBcuto,
        m = y.intl.format(g, {
            onLearnMore: function () {
                t(), (0, i.Z)();
            },
        });
    return (0, n.jsx)(
        u.A,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                artURL: b.A,
                type: s.e.CUSTOM_PROFILE_UPSELL,
                title: y.intl.string(y.t.BbsMm4),
                body: m,
                glowUp: m,
                onSecondaryClick: () => {
                    t(),
                        (0, c.XD)({
                            uploadType: p.HL.BANNER,
                            analyticsSource: r,
                        });
                },
                secondaryCTA: y.intl.string(y.t.SpAQib),
                analyticsSource: r,
                analyticsLocation: {
                    section: f.JJy.USER_PROFILE,
                    object: f.ZSU.BUTTON_CTA,
                },
                onClose: t,
            },
            O,
        ),
    );
}
