n.d(t, { h: () => f }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(913527),
    r = n.n(l),
    a = n(481060),
    o = n(355467),
    c = n(100527),
    d = n(906732),
    u = n(313201),
    h = n(73346),
    m = n(584825),
    g = n(305342),
    x = n(293810),
    _ = n(388032),
    p = n(473639);
let E = (e) => {
        let [t, n] = s.useState(!1),
            [i, l] = s.useState(null);
        return {
            cancelSubscription: async (t) => {
                try {
                    return n(!0), await o.EO(t, e), !0;
                } catch (e) {
                    l(e);
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
        let { transitionState: n, groupListing: s, guildId: l, listing: o, subscription: C, onClose: f } = e,
            N = (0, u.Dt)(),
            I = (0, m.YB)(l),
            T = (null == I ? void 0 : null === (t = I.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, h._W)(I.cover_image_asset.application_id, I.cover_image_asset, 440) : void 0,
            { analyticsLocations: S } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: j, error: v, submitting: b } = E(S),
            A = async () => {
                (await j(C.id)) && f();
            },
            O = o.role_benefits.benefits.filter((e) => e.ref_type === x.Qs.CHANNEL),
            R = o.role_benefits.benefits.filter((e) => e.ref_type === x.Qs.INTANGIBLE),
            D = r()(C.currentPeriodEnd).format('MMMM Do, YYYY'),
            P = _.intl.formatToPlainString(_.t.KsMRPz, {
                numChannels: O.length,
                numAdditionalBenefits: R.length,
                subscriptionEndDate: D
            });
        return (0, i.jsxs)(a.Y0X, {
            transitionState: n,
            className: p.__invalid_modal,
            'aria-labelledby': N,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('img', {
                            src: T,
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
                            id: N,
                            variant: 'text-md/medium',
                            className: p.title,
                            children: _.intl.string(_.t.O6l5tL)
                        }),
                        (0, i.jsx)(a.Text, {
                            className: p.description,
                            variant: 'text-sm/normal',
                            children: P
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
                            submitting: b,
                            children: _.intl.string(_.t.F6lUDA)
                        }),
                        (0, i.jsx)(a.zxk, {
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.WHITE,
                            className: p.goBackButton,
                            onClick: f,
                            children: _.intl.string(_.t.EP6EPT)
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
