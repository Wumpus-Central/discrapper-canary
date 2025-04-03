n.d(e, { default: () => O });
var r = n(200651);
n(192379);
var o = n(692547),
    a = n(481060),
    c = n(906732),
    i = n(98278),
    l = n(790527),
    s = n(474936),
    u = n(981631),
    f = n(388032),
    d = n(685506),
    p = n(127453),
    b = n(860324);
function y(t, e) {
    return (0, r.jsx)(
        a.IGR,
        {
            text: t,
            className: p.newBadge,
            color: o.Z.unsafe_rawColors.BRAND_500.css
        },
        e
    );
}
function O(t) {
    var { guildCount: e, onClose: n, analyticsLocations: o } = t,
        p = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(t);
                    for (r = 0; r < a.length; r++) (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (r = 0; r < a.length; r++) (n = a[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ['guildCount', 'onClose', 'analyticsLocations']);
    let O = function (t, e) {
            return (0, r.jsx)(
                a.P3F,
                {
                    className: d.learnMoreLink,
                    tag: 'span',
                    onClick: () => {
                        n(), (0, i.z)();
                    },
                    children: t
                },
                e
            );
        },
        { analyticsLocations: g } = (0, c.ZP)(o);
    return (0, r.jsx)(c.Gt, {
        value: g,
        children: (0, r.jsx)(
            l.Z,
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
                    artURL: b.Z,
                    onClose: n,
                    type: s.cd.GUILD_CAP_MODAL_UPSELL,
                    title: f.NW.string(f.t.CoNXBw),
                    body:
                        e < u.DZw
                            ? f.NW.format(f.t['5qLH7O'], {
                                  guildCount: e,
                                  onAndMore: O,
                                  newBadgeHook: y
                              })
                            : f.NW.format(f.t.mk9CS0, {
                                  onAndMore: O,
                                  newBadgeHook: y
                              }),
                    context: e < u.DZw ? f.NW.formatToPlainString(f.t['C+Hqzs'], { guildCount: e }) : f.NW.string(f.t.m0xavb),
                    glowUp: f.NW.format(f.t['6Dl5X1'], { onAndMore: O })
                },
                p
            )
        )
    });
}
