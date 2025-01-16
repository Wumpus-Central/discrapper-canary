n.d(t, {
    h: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(481060),
    o = n(355467),
    c = n(100527),
    d = n(906732),
    u = n(313201),
    m = n(73346),
    g = n(584825),
    h = n(305342),
    p = n(293810),
    x = n(388032),
    f = n(196844);
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
    E = (e) => {
        var t;
        let { transitionState: n, groupListing: r, guildId: s, listing: o, subscription: E, onClose: C } = e,
            T = (0, u.Dt)(),
            S = (0, g.YB)(s),
            b = (null == S ? void 0 : null === (t = S.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, m._W)(S.cover_image_asset.application_id, S.cover_image_asset, 440) : void 0,
            { analyticsLocations: I } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: N, error: v, submitting: A } = _(I),
            j = async () => {
                (await N(E.id)) && C();
            },
            O = o.role_benefits.benefits.filter((e) => e.ref_type === p.Qs.CHANNEL),
            R = o.role_benefits.benefits.filter((e) => e.ref_type === p.Qs.INTANGIBLE),
            P = a()(E.currentPeriodEnd).format('MMMM Do, YYYY'),
            y = x.intl.formatToPlainString(x.t.KsMRPz, {
                numChannels: O.length,
                numAdditionalBenefits: R.length,
                subscriptionEndDate: P
            });
        return (0, i.jsxs)(l.ModalRoot, {
            transitionState: n,
            className: f.__invalid_modal,
            'aria-labelledby': T,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('img', {
                            src: b,
                            alt: '',
                            className: f.headerImage
                        }),
                        (0, i.jsx)(l.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: f.closeButton,
                            onClick: C
                        })
                    ]
                }),
                null != v ? (0, i.jsx)(l.FormErrorBlock, { children: v.message }) : null,
                (0, i.jsxs)(l.ModalContent, {
                    className: f.content,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            id: T,
                            variant: 'text-md/medium',
                            className: f.title,
                            children: x.intl.string(x.t.O6l5tL)
                        }),
                        (0, i.jsx)(l.Text, {
                            className: f.description,
                            variant: 'text-sm/normal',
                            children: y
                        }),
                        (0, i.jsx)(h.c, {
                            listingId: o.id,
                            guildId: r.guild_id,
                            className: f.benefits
                        })
                    ]
                }),
                (0, i.jsxs)(l.ModalFooter, {
                    className: f.footer,
                    children: [
                        (0, i.jsx)(l.Button, {
                            color: l.Button.Colors.RED,
                            onClick: j,
                            submitting: A,
                            children: x.intl.string(x.t.F6lUDA)
                        }),
                        (0, i.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.WHITE,
                            className: f.goBackButton,
                            onClick: C,
                            children: x.intl.string(x.t.EP6EPT)
                        })
                    ]
                })
            ]
        });
    },
    C = (e) => {
        (0, l.openModal)((t) =>
            (0, i.jsx)(E, {
                ...t,
                ...e
            })
        );
    };
