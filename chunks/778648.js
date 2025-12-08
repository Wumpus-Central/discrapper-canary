n.d(t, { Z: () => L }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(664751),
    i = n(772848),
    s = n(311570),
    o = n(442837),
    c = n(199849),
    d = n(755721),
    u = n(481060),
    m = n(355467),
    p = n(821849),
    h = n(72924),
    x = n(100527),
    f = n(906732),
    g = n(883904),
    b = n(678558),
    v = n(730647),
    j = n(584825),
    _ = n(305342),
    y = n(333867),
    C = n(963249),
    S = n(87484),
    E = n(736519),
    O = n(43747),
    N = n(970815),
    T = n(430824),
    P = n(78839),
    I = n(246992),
    w = n(981631),
    k = n(474936),
    R = n(443582);
function A(e) {
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
function Z(e, t) {
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
function D(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, j.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, a.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(
                      _.Z,
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
let L = function () {
    let [e, t] = l.useState(k.Si.TIER_2),
        [n, j] = l.useState(null),
        _ = (0, o.Wu)([T.Z], () => T.Z.getGuildsArray()),
        [L] = (0, o.Wu)([P.Z], () => [P.Z.getPremiumSubscription()]),
        M = _.map((e) => ({
            value: e,
            label: e.name,
        })),
        [U, F] = l.useState(M.length > 0 ? M[0].value : null),
        [B, G] = l.useState(""),
        [z, V] = l.useState({
            plan_id: k.Xh.PREMIUM_MONTH_TIER_2,
            gift: "true",
        }),
        H = "true" !== z.gift && null != L,
        [W, K] = l.useState(M.length > 0 ? M[0].value : null),
        { analyticsLocations: q } = (0, f.ZP)(x.Z.PAYMENT_FLOW_TEST_PAGE),
        [Y, J] = l.useState(""),
        [X, Q] = l.useState(w.lds),
        { balance: $, isFetching: ee, error: et } = (0, O.A)(),
        { isSubmitting: en, responseMessage: ea, redeemVirtualCurrency: el } = (0, O.f)(),
        [er, ei] = l.useState(w.lds),
        [es, eo] = l.useState(""),
        [ec, ed] = l.useState(w.lds),
        [eu, em] = l.useState(w.lds);
    return (0, a.jsx)(f.Gt, {
        value: q,
        children: (0, a.jsx)(u.zJl, {
            className: R.scroller,
            children: (0, a.jsxs)(u.Kqy, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, a.jsxs)(u.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(c.y6, {
                                label: "Gift",
                                value: e,
                                options: [
                                    {
                                        value: k.Si.TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        value: k.Si.TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        value: k.Si.TIER_0,
                                        label: "Nitro Basic",
                                    },
                                    {
                                        value: null,
                                        label: "None",
                                    },
                                ],
                                onChange: (e) => t(e),
                                popoutLayerContext: I.O$,
                            }),
                            (0, a.jsx)(E.Z, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: d.Tt.PRIMARY,
                                look: d.iL.FILLED,
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsxs)(u.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(c.y6, {
                                label: "Premium Select Plan",
                                value: n,
                                options: [
                                    {
                                        value: k.Si.TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        value: k.Si.TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        value: k.Si.TIER_0,
                                        label: "Nitro Basic",
                                    },
                                    {
                                        value: null,
                                        label: "None",
                                    },
                                ],
                                onChange: (e) => j(e),
                                popoutLayerContext: I.O$,
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () =>
                                    (0, C.Z)({
                                        subscriptionTier: n,
                                        analyticsLocations: q,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsxs)(u.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsx)(c.y6, {
                                label: "Boost",
                                value: U,
                                options: M,
                                onChange: (e) => F(e),
                                popoutLayerContext: I.O$,
                            }),
                            null != U
                                ? (0, a.jsx)(b.Z, {
                                      guild: U,
                                      analyticsLocation: {},
                                  })
                                : (0, a.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsxs)(u.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsx)(u.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, a.jsxs)(u.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(u.oil, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: B,
                                        onChange: (e) => G(e),
                                    }),
                                    (0, a.jsx)(u.aML, {
                                        "data-migration-pending": !0,
                                        text: "Need Promotion Code",
                                        shouldShow: B.length < 1,
                                        children: (e) =>
                                            (0, a.jsx)(
                                                u.Button,
                                                Z(
                                                    A(
                                                        {
                                                            variant: "primary",
                                                            text: "Open Link",
                                                            disabled: B.length < 1,
                                                        },
                                                        e,
                                                    ),
                                                    {
                                                        onClick: () => {
                                                            window.open(w.Z5c.BILLING_PROMOTION_REDEMPTION(B));
                                                        },
                                                    },
                                                ),
                                            ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsxs)(u.C3N, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, a.jsx)(c.y6, {
                                label: "Plan",
                                value: z.plan_id,
                                options: [
                                    {
                                        value: k.Xh.PREMIUM_MONTH_TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        value: k.Xh.PREMIUM_MONTH_TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        value: k.Xh.PREMIUM_MONTH_TIER_0,
                                        label: "Nitro Basic",
                                    },
                                ],
                                onChange: (e) => V((t) => Z(A({}, t), { plan_id: e })),
                                popoutLayerContext: I.O$,
                            }),
                            (0, a.jsx)(c.y6, {
                                label: "Type",
                                value: z.gift,
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
                                onChange: (e) => V((t) => Z(A({}, t), { gift: e })),
                                popoutLayerContext: I.O$,
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.aML, {
                        "data-migration-pending": !0,
                        text: "Already subscribed",
                        shouldShow: H,
                        children: (e) =>
                            (0, a.jsx)(
                                u.Button,
                                Z(
                                    A(
                                        {
                                            variant: "primary",
                                            text: "Open Link",
                                        },
                                        e,
                                    ),
                                    {
                                        disabled: H,
                                        onClick: () => {
                                            window.open(w.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify(A({}, z)));
                                        },
                                    },
                                ),
                            ),
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsxs)(u.C3N, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, a.jsxs)(u.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    ee
                                        ? (0, a.jsx)("div", {
                                              className: R.loader,
                                              children: (0, a.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: R.balanceWidgetPillContainer,
                                              children: [
                                                  null !== et &&
                                                      (0, a.jsxs)(u.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              et.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(N.A4, {
                                                      balance: null != $ ? $ : 0,
                                                      balanceWidgetMode: N.b6.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)(u.oil, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: er,
                                onChange: (e) => ei(e),
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: en,
                                onClick: () => el(er, (0, i.Z)()),
                            }),
                            null != ea &&
                                (0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: ea,
                                }),
                        ],
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsxs)(u.C3N, {
                        label: "Creator Revenue",
                        children: [
                            (0, a.jsx)(c.y6, {
                                label: "Premium Server Subscription For",
                                value: W,
                                options: M,
                                onChange: (e) => K(e),
                                popoutLayerContext: I.O$,
                            }),
                            (0, a.jsx)(v.l, {
                                guildId: null == W ? void 0 : W.id,
                                children: (0, a.jsx)(D, { selectedGuildForGuildSub: W }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsxs)(u.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsxs)(u.C3N, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, a.jsx)(u.oil, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: Y,
                                        onChange: J,
                                    }),
                                    (0, a.jsx)(u.oil, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: X,
                                        onChange: (e) => Q(e),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, h.S)({
                                        applicationId: Y,
                                        skuId: X,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: w.ZY5.IN_APP },
                                        context: w.IlC.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsx)(u.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, a.jsx)(u.C3N, {
                            label: "Standard Payment Modal Test",
                            children: (0, a.jsxs)(u.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(u.oil, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: es,
                                        onChange: eo,
                                    }),
                                    (0, a.jsx)(u.oil, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: ec,
                                        onChange: (e) => ed(e),
                                    }),
                                    (0, a.jsx)(u.Button, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, S.Z)({
                                                applicationId: es,
                                                skuId: ec,
                                                analyticsLocations: q,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsxs)(u.Kqy, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, a.jsx)(u.oil, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: eu,
                                onChange: (e) => em(e),
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () =>
                                    (0, y.Z)({
                                        skuId: eu,
                                        analyticsLocations: q,
                                        variantsReturnStyle: s.v.VARIANTS_GROUP,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsx)(u.C3N, {
                        label: "Helpers",
                        children: (0, a.jsxs)(u.Kqy, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, a.jsx)(u.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, p.mE)(),
                                }),
                                (0, a.jsx)(u.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, m.GM)(),
                                }),
                            ],
                        }),
                    }),
                    (0, a.jsx)(u.izJ, {}),
                    (0, a.jsx)(u.C3N, {
                        label: "Dismissible Content Framework",
                        children: (0, a.jsx)(u.Button, {
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
