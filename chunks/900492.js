var i = n(477900),
    s = n(582128),
    r = n(855986),
    l = n(189213),
    a = n(331322),
    c = n(683071),
    u = n(821609),
    o = n(289873),
    p = n(793574),
    d = n(688810),
    y = n(295405),
    h = n(97352),
    x = n(166403),
    g = n(543767),
    j = n(621031),
    A = n(841907),
    b = n(792996);
function C(t) {
    let { message: e, onRetry: n } = t;
    return (0, i.jsxs)(a.B, {
        direction: "vertical",
        align: "start",
        gap: 8,
        children: [
            (0, i.jsx)(c.w, { type: "critical", message: e, role: "alert" }),
            (0, i.jsx)(u.$, { variant: "secondary", onClick: n, text: b.intl.string(b.t["5911Lb"]) }),
        ],
    });
}
function I(t) {
    let { subscription: e } = t,
        { analyticsLocations: n } = (0, d.Ay)(),
        [l, a] = s.useState(0),
        [c, u] = (0, g.YV)(
            {
                subscriptionId: e.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: p.A.GIFTED_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            },
            l,
        ),
        [h, x] = (0, r.yK)([y.A], () => [y.A.hasFetchedPaymentSources, y.A.paymentSourceFetchError]),
        A = s.useCallback(() => {
            a((t) => t + 1);
        }, []);
    return null == c && null != u
        ? (0, i.jsx)(C, { message: u.message, onRetry: A })
        : null != c && (h || x)
          ? (0, i.jsx)(j.A, { subscription: e, currentInvoicePreview: c })
          : (0, i.jsx)(o.y, {});
}
n.d(
    e,
    {},
    {
        default: function (t) {
            let e,
                { subscriptionId: n, analyticsLocations: s, onClose: a, transitionState: u } = t,
                p = (0, r.bG)([x.A], () => x.A.getSubscriptionById(n)),
                y = (0, r.bG)([h.A], () => null != p && p.items.every((t) => null != h.A.get(t.planId)), [p]),
                { hasFetchFailed: g } = (0, A.r)(null != p && !y);
            return (
                (e =
                    null != p && y
                        ? (0, i.jsx)(I, { subscription: p })
                        : null == p || g
                          ? (0, i.jsx)(c.w, { type: "critical", message: b.intl.string(b.t["5mlOCW"]), role: "alert" })
                          : (0, i.jsx)(o.y, {})),
                (0, i.jsx)(d.f5, {
                    value: s,
                    children: (0, i.jsx)(l.a, {
                        title: b.intl.string(b.t["7spYft"]),
                        actions: [{ text: b.intl.string(b.t.i4jeWR), onClick: a, variant: "primary" }],
                        transitionState: u,
                        onClose: a,
                        children: e,
                    }),
                })
            );
        },
    },
);
