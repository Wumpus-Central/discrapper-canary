n.d(t, { Z: () => x });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(28664),
    s = n(481060),
    o = n(289393),
    c = n(723047),
    d = n(727843),
    u = n(86126),
    g = n(880193),
    f = n(516448),
    m = n(975331),
    b = n(231610),
    p = n(388032),
    h = n(252154);
function x(e) {
    var t, n;
    let {
            allSubscriptionListings: x,
            priceTiers: j,
            loading: v,
            error: O,
            handlePublishTier: C,
            onDeleteEditState: y,
        } = e,
        { editStateId: N } = (0, d.N)(),
        E = (0, l.e7)([o.Z], () => o.Z.getSubscriptionListing(N)),
        I = (0, c.mY)(),
        S = i.useMemo(() => {
            let e = x
                .filter((e) => e.id !== N)
                .map((e) => {
                    var t;
                    return null == (t = e.subscription_plans[0]) ? void 0 : t.price;
                });
            return null == j ? void 0 : j.filter((t) => !e.includes(t));
        }, [x, N, j]),
        _ = null == E,
        T = null != (t = null == E ? void 0 : E.published) && t,
        P = null != (n = null == E ? void 0 : E.archived) && n;
    return (0, r.jsxs)("div", {
        className: h.body,
        children: [
            null != O &&
                (0, r.jsx)(s.M14, {
                    type: "critical",
                    children: O.getAnyErrorMessage(),
                }),
            !T &&
                !I &&
                !P &&
                (0, r.jsxs)("div", {
                    className: h.publishListing,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: h.publishListingInfoHeader,
                                    children: p.intl.string(p.t.WOlcS8),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: p.intl.string(p.t.rMulDT),
                                }),
                            ],
                        }),
                        (0, r.jsx)(a.u, {
                            shouldShow: _,
                            text: p.intl.string(p.t.v7lRIh),
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(s.Button, {
                                    disabled: _,
                                    variant: "secondary",
                                    onClick: C,
                                    loading: v,
                                    text: p.intl.string(p.t.Lj6R5m),
                                }),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(g.Z, { priceTiers: S }),
            (0, r.jsx)(f.Z, { allSubscriptionListings: x }),
            (0, r.jsx)(m.Z, {}),
            (0, r.jsx)(b.Z, {}),
            (0, r.jsx)(u.Z, { onDeleteEditState: y }),
        ],
    });
}
