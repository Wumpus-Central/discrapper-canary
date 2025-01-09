n.d(t, {
    Z: function () {
        return _;
    }
});
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
    f = n(231610),
    C = n(388032),
    v = n(83701),
    N = n(807915);
function _(e) {
    var t, n;
    let { allSubscriptionListings: l, priceTiers: _, loading: I, error: T, handlePublishTier: j, onDeleteEditState: b } = e,
        { editStateId: E } = (0, u.N)(),
        S = (0, a.e7)([c.Z], () => c.Z.getSubscriptionListing(E)),
        R = (0, d.mY)(),
        y = r.useMemo(() => {
            let e = l
                .filter((e) => e.id !== E)
                .map((e) => {
                    var t;
                    return null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price;
                });
            return null == _ ? void 0 : _.filter((t) => !e.includes(t));
        }, [l, E, _]),
        A = null == S,
        Z = null !== (t = null == S ? void 0 : S.published) && void 0 !== t && t,
        L = null !== (n = null == S ? void 0 : S.archived) && void 0 !== n && n;
    return (0, i.jsxs)('div', {
        className: N.body,
        children: [
            null != T && (0, i.jsx)(m.Z, { children: T.getAnyErrorMessage() }),
            !Z &&
                !R &&
                !L &&
                (0, i.jsxs)('div', {
                    className: N.publishListing,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-md/semibold',
                                    className: N.publishListingInfoHeader,
                                    children: C.intl.string(C.t.WOlcS0)
                                }),
                                (0, i.jsx)(o.FormText, {
                                    type: o.FormText.Types.DESCRIPTION,
                                    children: C.intl.string(C.t.rMulDQ)
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Tooltip, {
                            shouldShow: A,
                            tooltipClassName: v.autoWidth,
                            text: C.intl.string(C.t.v7lRIi),
                            children: (e) =>
                                (0, i.jsx)(o.Button, {
                                    ...e,
                                    disabled: A,
                                    color: o.Button.Colors.CUSTOM,
                                    wrapperClassName: v.autoWidth,
                                    className: s()(N.publishButton, v.autoWidth),
                                    onClick: j,
                                    submitting: I,
                                    children: C.intl.string(C.t.Lj6R5u)
                                })
                        })
                    ]
                }),
            (0, i.jsx)(g.Z, { priceTiers: y }),
            (0, i.jsx)(x.Z, { allSubscriptionListings: l }),
            (0, i.jsx)(p.Z, {}),
            (0, i.jsx)(f.Z, {}),
            (0, i.jsx)(h.Z, { onDeleteEditState: b })
        ]
    });
}
