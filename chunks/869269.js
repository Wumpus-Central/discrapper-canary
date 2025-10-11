n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(28664),
    s = n(481060),
    o = n(289393),
    c = n(723047),
    d = n(727843),
    u = n(587431),
    g = n(86126),
    m = n(880193),
    p = n(516448),
    f = n(975331),
    h = n(66972),
    b = n(388032),
    x = n(747805);
function j(e) {
    var t, n;
    let {
            allSubscriptionListings: j,
            priceTiers: v,
            loading: _,
            error: C,
            handlePublishTier: O,
            onDeleteEditState: y,
        } = e,
        { editStateId: N } = (0, d.N)(),
        E = (0, l.e7)([o.Z], () => o.Z.getSubscriptionListing(N)),
        I = (0, c.mY)(),
        S = i.useMemo(() => {
            let e = j
                .filter((e) => e.id !== N)
                .map((e) => {
                    var t;
                    return null == (t = e.subscription_plans[0]) ? void 0 : t.price;
                });
            return null == v ? void 0 : v.filter((t) => !e.includes(t));
        }, [j, N, v]),
        T = null == E,
        P = null != (t = null == E ? void 0 : E.published) && t,
        w = null != (n = null == E ? void 0 : E.archived) && n;
    return (0, r.jsxs)("div", {
        className: x.body,
        children: [
            null != C && (0, r.jsx)(u.Z, { children: C.getAnyErrorMessage() }),
            !P &&
                !I &&
                !w &&
                (0, r.jsxs)("div", {
                    className: x.publishListing,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: x.publishListingInfoHeader,
                                    children: b.intl.string(b.t.WOlcS0),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: b.intl.string(b.t.rMulDQ),
                                }),
                            ],
                        }),
                        (0, r.jsx)(a.u, {
                            shouldShow: T,
                            text: b.intl.string(b.t.v7lRIi),
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(s.Button, {
                                    disabled: T,
                                    variant: "secondary",
                                    onClick: O,
                                    loading: _,
                                    text: b.intl.string(b.t.Lj6R5u),
                                }),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(m.Z, { priceTiers: S }),
            (0, r.jsx)(p.Z, { allSubscriptionListings: j }),
            (0, r.jsx)(f.Z, {}),
            (0, r.jsx)(h.Z, {}),
            (0, r.jsx)(g.Z, { onDeleteEditState: y }),
        ],
    });
}
