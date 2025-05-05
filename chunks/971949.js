e.d(n, { default: () => O });
var r = e(255367);
e(73800);
var o = e(692547),
    a = e(481060),
    c = e(906732),
    i = e(98278),
    l = e(790527),
    s = e(474936),
    u = e(981631),
    f = e(388032),
    d = e(685506),
    p = e(127453),
    b = e(860324);
function y(t, n) {
    return (0, r.jsx)(
        a.IGR,
        {
            text: t,
            className: p.newBadge,
            color: o.Z.unsafe_rawColors.BRAND_500.css
        },
        n
    );
}
function O(t) {
    var { guildCount: n, onClose: e, analyticsLocations: o } = t,
        p = (function (t, n) {
            if (null == t) return {};
            var e,
                r,
                o = (function (t, n) {
                    if (null == t) return {};
                    var e,
                        r,
                        o = {},
                        a = Object.keys(t);
                    for (r = 0; r < a.length; r++) (e = a[r]), n.indexOf(e) >= 0 || (o[e] = t[e]);
                    return o;
                })(t, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (r = 0; r < a.length; r++) (e = a[r]), !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e]);
            }
            return o;
        })(t, ['guildCount', 'onClose', 'analyticsLocations']);
    let O = function (t, n) {
            return (0, r.jsx)(
                a.P3F,
                {
                    className: d.learnMoreLink,
                    tag: 'span',
                    onClick: () => {
                        e(), (0, i.z)();
                    },
                    children: t
                },
                n
            );
        },
        { analyticsLocations: g } = (0, c.ZP)(o);
    return (0, r.jsx)(c.Gt, {
        value: g,
        children: (0, r.jsx)(
            l.Z,
            (function (t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(e).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })
                        )),
                        r.forEach(function (n) {
                            var r;
                            (r = e[n]),
                                n in t
                                    ? Object.defineProperty(t, n, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (t[n] = r);
                        });
                }
                return t;
            })(
                {
                    artURL: b.Z,
                    onClose: e,
                    type: s.cd.GUILD_CAP_MODAL_UPSELL,
                    title: f.intl.string(f.t.CoNXBw),
                    body:
                        n < u.DZw
                            ? f.intl.format(f.t['5qLH7O'], {
                                  guildCount: n,
                                  onAndMore: O,
                                  newBadgeHook: y
                              })
                            : f.intl.format(f.t.mk9CS0, {
                                  onAndMore: O,
                                  newBadgeHook: y
                              }),
                    context: n < u.DZw ? f.intl.formatToPlainString(f.t['C+Hqzs'], { guildCount: n }) : f.intl.string(f.t.m0xavb),
                    glowUp: f.intl.format(f.t['6Dl5X1'], { onAndMore: O })
                },
                p
            )
        )
    });
}
