n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
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
    _ = n(807915);
function N(e) {
    var t, n;
    let { allSubscriptionListings: l, priceTiers: N, loading: I, error: T, handlePublishTier: j, onDeleteEditState: b } = e,
        { editStateId: S } = (0, u.N)(),
        E = (0, s.e7)([c.Z], () => c.Z.getSubscriptionListing(S)),
        R = (0, d.mY)(),
        y = r.useMemo(() => {
            let e = l
                .filter((e) => e.id !== S)
                .map((e) => {
                    var t;
                    return null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price;
                });
            return null == N ? void 0 : N.filter((t) => !e.includes(t));
        }, [l, S, N]),
        A = null == E,
        Z = null !== (t = null == E ? void 0 : E.published) && void 0 !== t && t,
        L = null !== (n = null == E ? void 0 : E.archived) && void 0 !== n && n;
    return (0, i.jsxs)('div', {
        className: _.body,
        children: [
            null != T && (0, i.jsx)(m.Z, { children: T.getAnyErrorMessage() }),
            !Z &&
                !R &&
                !L &&
                (0, i.jsxs)('div', {
                    className: _.publishListing,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-md/semibold',
                                    className: _.publishListingInfoHeader,
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
                                    className: a()(_.publishButton, v.autoWidth),
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
