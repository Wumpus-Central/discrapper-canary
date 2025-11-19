n.d(t, { Z: () => D }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(664751),
    i = n(772848),
    s = n(311570),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(355467),
    m = n(821849),
    p = n(72924),
    h = n(100527),
    x = n(906732),
    g = n(883904),
    f = n(678558),
    b = n(730647),
    v = n(584825),
    j = n(305342),
    _ = n(333867),
    y = n(963249),
    C = n(87484),
    S = n(736519),
    E = n(43747),
    O = n(970815),
    T = n(430824),
    N = n(78839),
    P = n(246992),
    I = n(981631),
    w = n(474936),
    k = n(358928);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, v.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, a.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(
                      j.Z,
                      {
                          guildId: t.id,
                          groupListingId: e,
                          listingId: e,
                      },
                      e,
                  ),
              ),
          })
        : null;
}
let D = function () {
    let [e, t] = l.useState(w.Si.TIER_2),
        [n, v] = l.useState(null),
        j = (0, o.Wu)([T.Z], () => T.Z.getGuildsArray()),
        [D] = (0, o.Wu)([N.Z], () => [N.Z.getPremiumSubscription()]),
        L = j.map((e) => ({
            value: e,
            label: e.name,
        })),
        [M, U] = l.useState(L.length > 0 ? L[0].value : null),
        [F, B] = l.useState(""),
        [G, z] = l.useState({
            plan_id: w.Xh.PREMIUM_MONTH_TIER_2,
            gift: "true",
        }),
        V = "true" !== G.gift && null != D,
        [H, W] = l.useState(L.length > 0 ? L[0].value : null),
        { analyticsLocations: K } = (0, x.ZP)(h.Z.PAYMENT_FLOW_TEST_PAGE),
        [q, Y] = l.useState(""),
        [J, X] = l.useState(I.lds),
        { balance: Q, isFetching: $, error: ee } = (0, E.A)(),
        { isSubmitting: et, responseMessage: en, redeemVirtualCurrency: ea } = (0, E.f)(),
        [el, er] = l.useState(I.lds),
        [ei, es] = l.useState(""),
        [eo, ec] = l.useState(I.lds),
        [ed, eu] = l.useState(I.lds);
    return (0, a.jsx)(x.Gt, {
        value: K,
        children: (0, a.jsx)(d.zJl, {
            className: k.scroller,
            children: (0, a.jsxs)(d.Kqy, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, a.jsxs)(d.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(d.q4e, {
                                label: "Gift",
                                value: e,
                                options: [
                                    {
                                        value: w.Si.TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        value: w.Si.TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        value: w.Si.TIER_0,
                                        label: "Nitro Basic",
                                    },
                                    {
                                        value: null,
                                        label: "None",
                                    },
                                ],
                                onChange: (e) => t(e),
                                popoutLayerContext: P.O$,
                            }),
                            (0, a.jsx)(S.Z, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: c.Tt.PRIMARY,
                                look: c.iL.FILLED,
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsxs)(d.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(d.q4e, {
                                label: "Premium Select Plan",
                                value: n,
                                options: [
                                    {
                                        value: w.Si.TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        value: w.Si.TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        value: w.Si.TIER_0,
                                        label: "Nitro Basic",
                                    },
                                    {
                                        value: null,
                                        label: "None",
                                    },
                                ],
                                onChange: (e) => v(e),
                                popoutLayerContext: P.O$,
                            }),
                            (0, a.jsx)(d.Button, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () =>
                                    (0, y.Z)({
                                        subscriptionTier: n,
                                        analyticsLocations: K,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsxs)(d.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsx)(d.q4e, {
                                label: "Boost",
                                value: M,
                                options: L,
                                onChange: (e) => U(e),
                                popoutLayerContext: P.O$,
                            }),
                            null != M
                                ? (0, a.jsx)(f.Z, {
                                      guild: M,
                                      analyticsLocation: {},
                                  })
                                : (0, a.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsxs)(d.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsx)(d.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, a.jsxs)(d.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: F,
                                        onChange: (e) => B(e),
                                    }),
                                    (0, a.jsx)(d.aML, {
                                        "data-migration-pending": !0,
                                        text: "Need Promotion Code",
                                        shouldShow: F.length < 1,
                                        children: (e) =>
                                            (0, a.jsx)(
                                                d.Button,
                                                A(
                                                    R(
                                                        {
                                                            variant: "primary",
                                                            text: "Open Link",
                                                            disabled: F.length < 1,
                                                        },
                                                        e,
                                                    ),
                                                    {
                                                        onClick: () => {
                                                            window.open(I.Z5c.BILLING_PROMOTION_REDEMPTION(F));
                                                        },
                                                    },
                                                ),
                                            ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsxs)(d.C3N, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, a.jsx)(d.q4e, {
                                label: "Plan",
                                value: G.plan_id,
                                options: [
                                    {
                                        value: w.Xh.PREMIUM_MONTH_TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        value: w.Xh.PREMIUM_MONTH_TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        value: w.Xh.PREMIUM_MONTH_TIER_0,
                                        label: "Nitro Basic",
                                    },
                                ],
                                onChange: (e) => z((t) => A(R({}, t), { plan_id: e })),
                                popoutLayerContext: P.O$,
                            }),
                            (0, a.jsx)(d.q4e, {
                                label: "Type",
                                value: G.gift,
                                options: [
                                    {
                                        value: "true",
                                        label: "Gift",
                                    },
                                    {
                                        value: "false",
                                        label: "Not Gift",
                                    },
                                ],
                                onChange: (e) => z((t) => A(R({}, t), { gift: e })),
                                popoutLayerContext: P.O$,
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.aML, {
                        "data-migration-pending": !0,
                        text: "Already subscribed",
                        shouldShow: V,
                        children: (e) =>
                            (0, a.jsx)(
                                d.Button,
                                A(
                                    R(
                                        {
                                            variant: "primary",
                                            text: "Open Link",
                                        },
                                        e,
                                    ),
                                    {
                                        disabled: V,
                                        onClick: () => {
                                            window.open(I.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify(R({}, G)));
                                        },
                                    },
                                ),
                            ),
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsxs)(d.C3N, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, a.jsxs)(d.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    $
                                        ? (0, a.jsx)("div", {
                                              className: k.loader,
                                              children: (0, a.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: k.balanceWidgetPillContainer,
                                              children: [
                                                  null !== ee &&
                                                      (0, a.jsxs)(d.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              ee.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(O.A4, {
                                                      balance: null != Q ? Q : 0,
                                                      balanceWidgetMode: O.b6.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)(d.oil, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: el,
                                onChange: (e) => er(e),
                            }),
                            (0, a.jsx)(d.Button, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: et,
                                onClick: () => ea(el, (0, i.Z)()),
                            }),
                            null != en &&
                                (0, a.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: en,
                                }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsxs)(d.C3N, {
                        label: "Creator Revenue",
                        children: [
                            (0, a.jsx)(d.q4e, {
                                label: "Premium Server Subscription For",
                                value: H,
                                options: L,
                                onChange: (e) => W(e),
                                popoutLayerContext: P.O$,
                            }),
                            (0, a.jsx)(b.l, {
                                guildId: null == H ? void 0 : H.id,
                                children: (0, a.jsx)(Z, { selectedGuildForGuildSub: H }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsxs)(d.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsxs)(d.C3N, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: q,
                                        onChange: Y,
                                    }),
                                    (0, a.jsx)(d.oil, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: J,
                                        onChange: (e) => X(e),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(d.Button, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, p.S)({
                                        applicationId: q,
                                        skuId: J,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: I.ZY5.IN_APP },
                                        context: I.IlC.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsx)(d.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, a.jsx)(d.C3N, {
                            label: "Standard Payment Modal Test",
                            children: (0, a.jsxs)(d.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: ei,
                                        onChange: es,
                                    }),
                                    (0, a.jsx)(d.oil, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: eo,
                                        onChange: (e) => ec(e),
                                    }),
                                    (0, a.jsx)(d.Button, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, C.Z)({
                                                applicationId: ei,
                                                skuId: eo,
                                                analyticsLocations: K,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsxs)(d.Kqy, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, a.jsx)(d.oil, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: ed,
                                onChange: (e) => eu(e),
                            }),
                            (0, a.jsx)(d.Button, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () =>
                                    (0, _.Z)({
                                        skuId: ed,
                                        analyticsLocations: K,
                                        variantsReturnStyle: s.v.VARIANTS_GROUP,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsx)(d.C3N, {
                        label: "Helpers",
                        children: (0, a.jsxs)(d.Kqy, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, m.mE)(),
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, u.GM)(),
                                }),
                            ],
                        }),
                    }),
                    (0, a.jsx)(d.izJ, {}),
                    (0, a.jsx)(d.C3N, {
                        label: "Dismissible Content Framework",
                        children: (0, a.jsx)(d.Button, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, g.EG)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
