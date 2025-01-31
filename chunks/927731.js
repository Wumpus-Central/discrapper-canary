n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(399606),
    c = n(215569),
    d = n(481060),
    u = n(852860),
    m = n(999382),
    h = n(644542),
    g = n(923726),
    x = n(584825),
    p = n(295141),
    _ = n(723047),
    C = n(290348),
    f = n(450215),
    v = n(981631),
    N = n(388032),
    j = n(26405);
let I = 'guild-role-subscription-tier-template-selector',
    E = (e) => {
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
        E = (0, x._k)(p),
        { editStateIds: b, addNewEditStateId: T, addNewEditStateFromTemplate: S, removeEditStateId: R } = C.B7(p, t, { includeSoftDeleted: !0 }),
        [Z, y] = r.useState({}),
        A = r.useMemo(() => {
            let e = b.map((e) => {
                var t;
                return null !== (t = Z[e]) && void 0 !== t ? t : e;
            });
            return (0, a.uniq)(e);
        }, [b, Z]),
        L = (e, t) => {
            y((n) => ({
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
                    ? (0, d.ZDy)(
                          async () => {
                              let { default: e } = await n.e('9558').then(n.bind(n, 34460));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildId: t,
                                      addNewEditStateFromTemplate: S,
                                      addNewEditStateFromScratch: T,
                                      priceTiers: l
                                  });
                          },
                          { modalKey: I }
                      )
                    : T();
        }, [t, S, T, l, O, D]),
        P = C.Lo(A),
        w = r.useCallback(() => A.forEach(C.GM), [A]),
        M = (0, _.mY)(),
        U = (0, o.e7)([m.Z], () => m.Z.getProps().subsection);
    return (
        r.useEffect(
            () => (
                U === v.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && k(),
                () => {
                    (0, d.Mr3)(I);
                }
            ),
            [U, k]
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: j.groupListings,
                    children: [
                        A.map((e) =>
                            (0, i.jsx)(
                                f.Z,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: E,
                                    priceTiers: l,
                                    groupListingId: p,
                                    onDeleteEditState: () => R(e),
                                    onBeforeDispatchNewListing: (t) => L(t.id, e),
                                    onAfterDispatchNewListing: () => R(e)
                                },
                                e
                            )
                        ),
                        (0, i.jsxs)(d.P3F, {
                            onClick: M ? void 0 : k,
                            className: s()(j.createTierButton, { [j.disabled]: M }),
                            'aria-disabled': M,
                            children: [
                                (0, i.jsx)(d.oFk, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: j.createTierIcon
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'interactive-active',
                                    children: N.intl.string(N.t.PiFnn5)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.W, {
                    component: 'div',
                    className: j.contentRegion,
                    children: P && (0, i.jsx)(d.oXn, { children: (0, i.jsx)(u.Z, { onReset: w }) })
                })
            ]
        })
    );
}
function T(e) {
    let { guildId: t } = e,
        { priceTiers: n } = E(t),
        r = (0, x.GG)(t),
        { maxTiers: l } = (0, g.s1)(t),
        s = r.map((e) => e.id);
    return (0, i.jsxs)(d.hjN, {
        title: N.intl.string(N.t['72+Soq']),
        className: j.container,
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                children: N.intl.format(N.t.nHRSvL, { maxTiers: l })
            }),
            (0, i.jsx)(d.LZC, { size: 16 }),
            (0, i.jsx)(b, {
                priceTiers: n,
                guildId: t,
                groupListingId: s[0]
            })
        ]
    });
}
