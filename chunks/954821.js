n.d(t, { h: () => f }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(481060),
    o = n(355467),
    c = n(100527),
    d = n(906732),
    u = n(313201),
    m = n(73346),
    h = n(584825),
    g = n(305342),
    _ = n(293810),
    x = n(388032),
    p = n(196844);
let E = (e) => {
        let [t, n] = s.useState(!1),
            [i, r] = s.useState(null);
        return {
            cancelSubscription: async (t) => {
                try {
                    return n(!0), await o.EO(t, e), !0;
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            },
            error: i,
            submitting: t
        };
    },
    C = (e) => {
        var t;
        let { transitionState: n, groupListing: s, guildId: r, listing: o, subscription: C, onClose: f } = e,
            T = (0, u.Dt)(),
            N = (0, h.YB)(r),
            S = (null == N ? void 0 : null === (t = N.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, m._W)(N.cover_image_asset.application_id, N.cover_image_asset, 440) : void 0,
            { analyticsLocations: I } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: b, error: v, submitting: j } = E(I),
            A = async () => {
                (await b(C.id)) && f();
            },
            O = o.role_benefits.benefits.filter((e) => e.ref_type === _.Qs.CHANNEL),
            R = o.role_benefits.benefits.filter((e) => e.ref_type === _.Qs.INTANGIBLE),
            P = l()(C.currentPeriodEnd).format('MMMM Do, YYYY'),
            D = x.intl.formatToPlainString(x.t.KsMRPz, {
                numChannels: O.length,
                numAdditionalBenefits: R.length,
                subscriptionEndDate: P
            });
        return (0, i.jsxs)(a.Y0X, {
            transitionState: n,
            className: p.__invalid_modal,
            'aria-labelledby': T,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('img', {
                            src: S,
                            alt: '',
                            className: p.headerImage
                        }),
                        (0, i.jsx)(a.olH, {
                            withCircleBackground: !0,
                            className: p.closeButton,
                            onClick: f
                        })
                    ]
                }),
                null != v ? (0, i.jsx)(a.kzN, { children: v.message }) : null,
                (0, i.jsxs)(a.hzk, {
                    className: p.content,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            id: T,
                            variant: 'text-md/medium',
                            className: p.title,
                            children: x.intl.string(x.t.O6l5tL)
                        }),
                        (0, i.jsx)(a.Text, {
                            className: p.description,
                            variant: 'text-sm/normal',
                            children: D
                        }),
                        (0, i.jsx)(g.c, {
                            listingId: o.id,
                            guildId: s.guild_id,
                            className: p.benefits
                        })
                    ]
                }),
                (0, i.jsxs)(a.mzw, {
                    className: p.footer,
                    children: [
                        (0, i.jsx)(a.zxk, {
                            color: a.zxk.Colors.RED,
                            onClick: A,
                            submitting: j,
                            children: x.intl.string(x.t.F6lUDA)
                        }),
                        (0, i.jsx)(a.zxk, {
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.WHITE,
                            className: p.goBackButton,
                            onClick: f,
                            children: x.intl.string(x.t.EP6EPT)
                        })
                    ]
                })
            ]
        });
    },
    f = (e) => {
        (0, a.h7j)((t) =>
            (0, i.jsx)(C, {
                ...t,
                ...e
            })
        );
    };
