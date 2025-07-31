(n.d(t, { h: () => E }), n(388685), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(913527),
    a = n.n(s),
    l = n(755721),
    o = n(481060),
    c = n(355467),
    d = n(100527),
    u = n(906732),
    m = n(313201),
    p = n(73346),
    g = n(584825),
    h = n(305342),
    f = n(293810),
    b = n(388032),
    x = n(637158);
let _ = (e) => {
        let [t, n] = r.useState(!1),
            [i, s] = r.useState(null);
        return {
            cancelSubscription: async (t) => {
                try {
                    return (n(!0), await c.EO(t, e), !0);
                } catch (e) {
                    s(e);
                } finally {
                    n(!1);
                }
            },
            error: i,
            submitting: t
        };
    },
    j = (e) => {
        var t;
        let { transitionState: n, groupListing: r, guildId: s, listing: c, subscription: j, onClose: E } = e,
            O = (0, m.Dt)(),
            C = (0, g.YB)(s),
            v = (null == C || null == (t = C.cover_image_asset) ? void 0 : t.application_id) != null ? (0, p._W)(C.cover_image_asset.application_id, C.cover_image_asset, 440) : void 0,
            { analyticsLocations: S } = (0, u.ZP)(d.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: T, error: N, submitting: I } = _(S),
            y = async () => {
                (await T(j.id)) && E();
            },
            A = c.role_benefits.benefits.filter((e) => e.ref_type === f.Qs.CHANNEL),
            P = c.role_benefits.benefits.filter((e) => e.ref_type === f.Qs.INTANGIBLE),
            R = a()(j.currentPeriodEnd).format('MMMM Do, YYYY'),
            D = b.intl.formatToPlainString(b.t.KsMRPz, {
                numChannels: A.length,
                numAdditionalBenefits: P.length,
                subscriptionEndDate: R
            });
        return (0, i.jsxs)(o.Y0X, {
            transitionState: n,
            className: x.__invalid_modal,
            'aria-labelledby': O,
            parentComponent: 'CancelSubscriptionModal',
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('img', {
                            src: v,
                            alt: '',
                            className: x.headerImage
                        }),
                        (0, i.jsx)(o.olH, {
                            withCircleBackground: !0,
                            className: x.closeButton,
                            onClick: E
                        })
                    ]
                }),
                null != N ? (0, i.jsx)(o.kzN, { children: N.message }) : null,
                (0, i.jsxs)(o.hzk, {
                    className: x.content,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            id: O,
                            variant: 'text-md/medium',
                            className: x.title,
                            children: b.intl.string(b.t.O6l5tL)
                        }),
                        (0, i.jsx)(o.Text, {
                            className: x.description,
                            variant: 'text-sm/normal',
                            children: D
                        }),
                        (0, i.jsx)(h.c, {
                            listingId: c.id,
                            guildId: r.guild_id,
                            className: x.benefits
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    className: x.footer,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            variant: 'critical-primary',
                            text: b.intl.string(b.t.F6lUDA),
                            onClick: y,
                            loading: I
                        }),
                        (0, i.jsx)(l.zx, {
                            look: l.zx.Looks.LINK,
                            color: l.zx.Colors.WHITE,
                            className: x.goBackButton,
                            onClick: E,
                            children: b.intl.string(b.t.EP6EPT)
                        })
                    ]
                })
            ]
        });
    },
    E = (e) => {
        (0, o.h7j)((t) =>
            (0, i.jsx)(
                j,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                ((i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i));
                            }));
                    }
                    return e;
                })({}, t, e)
            )
        );
    };
