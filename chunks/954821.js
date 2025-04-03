n.d(t, { h: () => _ }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(481060),
    o = n(355467),
    c = n(100527),
    d = n(906732),
    u = n(313201),
    m = n(73346),
    g = n(584825),
    p = n(305342),
    h = n(293810),
    f = n(388032),
    b = n(637158);
let N = (e) => {
        let [t, n] = i.useState(!1),
            [r, s] = i.useState(null);
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
            error: r,
            submitting: t
        };
    },
    x = (e) => {
        var t;
        let { transitionState: n, groupListing: i, guildId: s, listing: o, subscription: x, onClose: _ } = e,
            E = (0, u.Dt)(),
            j = (0, g.YB)(s),
            O = (null == j || null == (t = j.cover_image_asset) ? void 0 : t.application_id) != null ? (0, m._W)(j.cover_image_asset.application_id, j.cover_image_asset, 440) : void 0,
            { analyticsLocations: C } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: S, error: v, submitting: T } = N(C),
            I = async () => {
                (await S(x.id)) && _();
            },
            y = o.role_benefits.benefits.filter((e) => e.ref_type === h.Qs.CHANNEL),
            A = o.role_benefits.benefits.filter((e) => e.ref_type === h.Qs.INTANGIBLE),
            P = a()(x.currentPeriodEnd).format('MMMM Do, YYYY'),
            R = f.NW.formatToPlainString(f.t.KsMRPz, {
                numChannels: y.length,
                numAdditionalBenefits: A.length,
                subscriptionEndDate: P
            });
        return (0, r.jsxs)(l.Y0X, {
            transitionState: n,
            className: b.__invalid_modal,
            'aria-labelledby': E,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)('img', {
                            src: O,
                            alt: '',
                            className: b.headerImage
                        }),
                        (0, r.jsx)(l.olH, {
                            withCircleBackground: !0,
                            className: b.closeButton,
                            onClick: _
                        })
                    ]
                }),
                null != v ? (0, r.jsx)(l.kzN, { children: v.message }) : null,
                (0, r.jsxs)(l.hzk, {
                    className: b.content,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            id: E,
                            variant: 'text-md/medium',
                            className: b.title,
                            children: f.NW.string(f.t.O6l5tL)
                        }),
                        (0, r.jsx)(l.Text, {
                            className: b.description,
                            variant: 'text-sm/normal',
                            children: R
                        }),
                        (0, r.jsx)(p.c, {
                            listingId: o.id,
                            guildId: i.guild_id,
                            className: b.benefits
                        })
                    ]
                }),
                (0, r.jsxs)(l.mzw, {
                    className: b.footer,
                    children: [
                        (0, r.jsx)(l.zxk, {
                            color: l.zxk.Colors.RED,
                            onClick: I,
                            submitting: T,
                            children: f.NW.string(f.t.F6lUDA)
                        }),
                        (0, r.jsx)(l.zxk, {
                            look: l.zxk.Looks.LINK,
                            color: l.zxk.Colors.WHITE,
                            className: b.goBackButton,
                            onClick: _,
                            children: f.NW.string(f.t.EP6EPT)
                        })
                    ]
                })
            ]
        });
    },
    _ = (e) => {
        (0, l.h7j)((t) =>
            (0, r.jsx)(
                x,
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
                })({}, t, e)
            )
        );
    };
