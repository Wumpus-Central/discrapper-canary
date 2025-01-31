n.d(t, { Z: () => N });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(289393),
    d = n(723047),
    u = n(727843),
    m = n(587431),
    h = n(86126),
    g = n(880193),
    x = n(516448),
    p = n(975331),
    _ = n(231610),
    C = n(388032),
    f = n(83701),
    v = n(807915);
function N(e) {
    var t, n;
    let { allSubscriptionListings: l, priceTiers: N, loading: j, error: I, handlePublishTier: E, onDeleteEditState: b } = e,
        { editStateId: T } = (0, u.N)(),
        S = (0, a.e7)([c.Z], () => c.Z.getSubscriptionListing(T)),
        R = (0, d.mY)(),
        Z = r.useMemo(() => {
            let e = l
                .filter((e) => e.id !== T)
                .map((e) => {
                    var t;
                    return null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price;
                });
            return null == N ? void 0 : N.filter((t) => !e.includes(t));
        }, [l, T, N]),
        y = null == S,
        A = null !== (t = null == S ? void 0 : S.published) && void 0 !== t && t,
        L = null !== (n = null == S ? void 0 : S.archived) && void 0 !== n && n;
    return (0, i.jsxs)('div', {
        className: v.body,
        children: [
            null != I && (0, i.jsx)(m.Z, { children: I.getAnyErrorMessage() }),
            !A &&
                !R &&
                !L &&
                (0, i.jsxs)('div', {
                    className: v.publishListing,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: v.publishListingInfoHeader,
                                    children: C.intl.string(C.t.WOlcS0)
                                }),
                                (0, i.jsx)(o.R94, {
                                    type: o.R94.Types.DESCRIPTION,
                                    children: C.intl.string(C.t.rMulDQ)
                                })
                            ]
                        }),
                        (0, i.jsx)(o.ua7, {
                            shouldShow: y,
                            tooltipClassName: f.autoWidth,
                            text: C.intl.string(C.t.v7lRIi),
                            children: (e) =>
                                (0, i.jsx)(o.zxk, {
                                    ...e,
                                    disabled: y,
                                    color: o.zxk.Colors.CUSTOM,
                                    wrapperClassName: f.autoWidth,
                                    className: s()(v.publishButton, f.autoWidth),
                                    onClick: E,
                                    submitting: j,
                                    children: C.intl.string(C.t.Lj6R5u)
                                })
                        })
                    ]
                }),
            (0, i.jsx)(g.Z, { priceTiers: Z }),
            (0, i.jsx)(x.Z, { allSubscriptionListings: l }),
            (0, i.jsx)(p.Z, {}),
            (0, i.jsx)(_.Z, {}),
            (0, i.jsx)(h.Z, { onDeleteEditState: b })
        ]
    });
}
