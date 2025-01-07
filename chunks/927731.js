n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(399606),
    c = n(215569),
    d = n(481060),
    u = n(852860),
    m = n(999382),
    h = n(644542),
    g = n(923726),
    x = n(584825),
    p = n(295141),
    f = n(723047),
    C = n(290348),
    v = n(450215),
    _ = n(981631),
    I = n(388032),
    N = n(26405);
let T = 'guild-role-subscription-tier-template-selector',
    j = (e) => {
        let [t, n] = r.useState(!0),
            [i, l] = r.useState();
        return (
            r.useEffect(() => {
                n(!0),
                    (0, p.X)(e).then((e) => {
                        l(e), n(!1);
                    });
            }, [e]),
            {
                loading: t,
                priceTiers: i
            }
        );
    };
function b(e) {
    let { guildId: t, priceTiers: l, groupListingId: p } = e,
        j = (0, x._k)(p),
        { editStateIds: b, addNewEditStateId: S, addNewEditStateFromTemplate: E, removeEditStateId: R } = C.B7(p, t, { includeSoftDeleted: !0 }),
        [y, A] = r.useState({}),
        Z = r.useMemo(() => {
            let e = b.map((e) => {
                var t;
                return null !== (t = y[e]) && void 0 !== t ? t : e;
            });
            return (0, s.uniq)(e);
        }, [b, y]),
        L = (e, t) => {
            A((n) => ({
                ...n,
                [e]: t
            }));
        },
        D = (0, g.ss)(t),
        O = (0, g.Gp)(),
        k = r.useCallback(() => {
            O &&
                h.jJ.trackExposure({
                    guildId: t,
                    location: 'b2d9de_1'
                }),
                O && D
                    ? (0, d.openModalLazy)(
                          async () => {
                              let { default: e } = await n.e('9558').then(n.bind(n, 34460));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildId: t,
                                      addNewEditStateFromTemplate: E,
                                      addNewEditStateFromScratch: S,
                                      priceTiers: l
                                  });
                          },
                          { modalKey: T }
                      )
                    : S();
        }, [t, E, S, l, O, D]),
        P = C.Lo(Z),
        M = r.useCallback(() => Z.forEach(C.GM), [Z]),
        w = (0, f.mY)(),
        B = (0, o.e7)([m.Z], () => m.Z.getProps().subsection);
    return (
        r.useEffect(
            () => (
                B === _.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && k(),
                () => {
                    (0, d.closeModal)(T);
                }
            ),
            [B, k]
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: N.groupListings,
                    children: [
                        Z.map((e) =>
                            (0, i.jsx)(
                                v.Z,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: j,
                                    priceTiers: l,
                                    groupListingId: p,
                                    onDeleteEditState: () => R(e),
                                    onBeforeDispatchNewListing: (t) => L(t.id, e),
                                    onAfterDispatchNewListing: () => R(e)
                                },
                                e
                            )
                        ),
                        (0, i.jsxs)(d.Clickable, {
                            onClick: w ? void 0 : k,
                            className: a()(N.createTierButton, { [N.disabled]: w }),
                            'aria-disabled': w,
                            children: [
                                (0, i.jsx)(d.CirclePlusIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: N.createTierIcon
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'interactive-active',
                                    children: I.intl.string(I.t.PiFnn5)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.W, {
                    component: 'div',
                    className: N.contentRegion,
                    children: P && (0, i.jsx)(d.SlideIn, { children: (0, i.jsx)(u.Z, { onReset: M }) })
                })
            ]
        })
    );
}
function S(e) {
    let { guildId: t } = e,
        { priceTiers: n } = j(t),
        r = (0, x.GG)(t),
        { maxTiers: l } = (0, g.s1)(t),
        a = r.map((e) => e.id);
    return (0, i.jsxs)(d.FormSection, {
        title: I.intl.string(I.t['72+Soq']),
        className: N.container,
        children: [
            (0, i.jsx)(d.FormText, {
                type: d.FormText.Types.DESCRIPTION,
                children: I.intl.format(I.t.nHRSvL, { maxTiers: l })
            }),
            (0, i.jsx)(d.Spacer, { size: 16 }),
            (0, i.jsx)(b, {
                priceTiers: n,
                guildId: t,
                groupListingId: a[0]
            })
        ]
    });
}
