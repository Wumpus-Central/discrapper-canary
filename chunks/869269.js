n.d(t, { Z: () => x });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(28664),
    s = n(481060),
    o = n(289393),
    c = n(723047),
    d = n(727843),
    u = n(86126),
    g = n(880193),
    m = n(516448),
    p = n(975331),
    f = n(231610),
    h = n(388032),
    b = n(747805);
function x(e) {
    var t, n;
    let {
            allSubscriptionListings: x,
            priceTiers: j,
            loading: _,
            error: v,
            handlePublishTier: O,
            onDeleteEditState: C,
        } = e,
        { editStateId: y } = (0, d.N)(),
        N = (0, l.e7)([o.Z], () => o.Z.getSubscriptionListing(y)),
        E = (0, c.mY)(),
        I = i.useMemo(() => {
            let e = x
                .filter((e) => e.id !== y)
                .map((e) => {
                    var t;
                    return null == (t = e.subscription_plans[0]) ? void 0 : t.price;
                });
            return null == j ? void 0 : j.filter((t) => !e.includes(t));
        }, [x, y, j]),
        S = null == N,
        T = null != (t = null == N ? void 0 : N.published) && t,
        P = null != (n = null == N ? void 0 : N.archived) && n;
    return (0, r.jsxs)("div", {
        className: b.body,
        children: [
            null != v &&
                (0, r.jsx)(s.M14, {
                    type: "critical",
                    children: v.getAnyErrorMessage(),
                }),
            !T &&
                !E &&
                !P &&
                (0, r.jsxs)("div", {
                    className: b.publishListing,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: b.publishListingInfoHeader,
                                    children: h.intl.string(h.t.WOlcS8),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: h.intl.string(h.t.rMulDT),
                                }),
                            ],
                        }),
                        (0, r.jsx)(a.u, {
                            shouldShow: S,
                            text: h.intl.string(h.t.v7lRIh),
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(s.Button, {
                                    disabled: S,
                                    variant: "secondary",
                                    onClick: O,
                                    loading: _,
                                    text: h.intl.string(h.t.Lj6R5m),
                                }),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(g.Z, { priceTiers: I }),
            (0, r.jsx)(m.Z, { allSubscriptionListings: x }),
            (0, r.jsx)(p.Z, {}),
            (0, r.jsx)(f.Z, {}),
            (0, r.jsx)(u.Z, { onDeleteEditState: C }),
        ],
    });
}
