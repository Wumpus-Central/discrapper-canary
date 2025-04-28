n.d(t, { h: () => E }), n(388685), n(953529);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    l = n.n(s),
    a = n(481060),
    o = n(355467),
    c = n(100527),
    d = n(906732),
    u = n(313201),
    m = n(73346),
    p = n(584825),
    g = n(305342),
    h = n(293810),
    f = n(388032),
    b = n(637158);
let _ = (e) => {
        let [t, n] = r.useState(!1),
            [i, s] = r.useState(null);
        return {
            cancelSubscription: async (t) => {
                try {
                    return n(!0), await o.EO(t, e), !0;
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
    x = (e) => {
        var t;
        let { transitionState: n, groupListing: r, guildId: s, listing: o, subscription: x, onClose: E } = e,
            j = (0, u.Dt)(),
            C = (0, p.YB)(s),
            O = (null == C || null == (t = C.cover_image_asset) ? void 0 : t.application_id) != null ? (0, m._W)(C.cover_image_asset.application_id, C.cover_image_asset, 440) : void 0,
            { analyticsLocations: S } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: v, error: T, submitting: N } = _(S),
            I = async () => {
                (await v(x.id)) && E();
            },
            y = o.role_benefits.benefits.filter((e) => e.ref_type === h.Qs.CHANNEL),
            A = o.role_benefits.benefits.filter((e) => e.ref_type === h.Qs.INTANGIBLE),
            P = l()(x.currentPeriodEnd).format('MMMM Do, YYYY'),
            R = f.intl.formatToPlainString(f.t.KsMRPz, {
                numChannels: y.length,
                numAdditionalBenefits: A.length,
                subscriptionEndDate: P
            });
        return (0, i.jsxs)(a.Y0X, {
            transitionState: n,
            className: b.__invalid_modal,
            'aria-labelledby': j,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('img', {
                            src: O,
                            alt: '',
                            className: b.headerImage
                        }),
                        (0, i.jsx)(a.olH, {
                            withCircleBackground: !0,
                            className: b.closeButton,
                            onClick: E
                        })
                    ]
                }),
                null != T ? (0, i.jsx)(a.kzN, { children: T.message }) : null,
                (0, i.jsxs)(a.hzk, {
                    className: b.content,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            id: j,
                            variant: 'text-md/medium',
                            className: b.title,
                            children: f.intl.string(f.t.O6l5tL)
                        }),
                        (0, i.jsx)(a.Text, {
                            className: b.description,
                            variant: 'text-sm/normal',
                            children: R
                        }),
                        (0, i.jsx)(g.c, {
                            listingId: o.id,
                            guildId: r.guild_id,
                            className: b.benefits
                        })
                    ]
                }),
                (0, i.jsxs)(a.mzw, {
                    className: b.footer,
                    children: [
                        (0, i.jsx)(a.zxk, {
                            color: a.zxk.Colors.RED,
                            onClick: I,
                            submitting: N,
                            children: f.intl.string(f.t.F6lUDA)
                        }),
                        (0, i.jsx)(a.zxk, {
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.WHITE,
                            className: b.goBackButton,
                            onClick: E,
                            children: f.intl.string(f.t.EP6EPT)
                        })
                    ]
                })
            ]
        });
    },
    E = (e) => {
        (0, a.h7j)((t) =>
            (0, i.jsx)(
                x,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, t, e)
            )
        );
    };
