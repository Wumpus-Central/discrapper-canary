i.d(e, { B4: () => J, Mp: () => V, B8: () => X });
var t = i(627968),
    l = i(64700),
    s = i(834730),
    r = i(277834);
function a(n) {
    let {
            title: e,
            subtitle: i,
            iconSrc: a,
            backgroundSrc: d,
            animatedBackgroundSrc: u,
            prefersReducedMotion: o = !0,
        } = n,
        c = l.useMemo(() => {
            let n = d ?? a;
            if (null != n) return { "--custom-background-url": `url(${n.toString()})` };
        }, [d, a]),
        m = l.useMemo(() => {
            if (null == d) return;
            let n = { "--custom-background-static": `url(${d.toString()}` };
            return o || null == u || (n["--custom-background-animated"] = `url(${u.toString()})`), n;
        }, [u, d, o]);
    return (0, t.jsxs)("div", {
        className: r.iE,
        children: [
            (0, t.jsx)("div", { className: r.Tp, style: c }),
            (0, t.jsxs)("div", {
                className: r.Qs,
                children: [
                    null != a &&
                        (0, t.jsx)("div", {
                            className: r.Kk,
                            children: (0, t.jsx)("img", { src: a.toString(), alt: "" }),
                        }),
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(s.E, { variant: "heading-xl/bold", tag: "div", children: e }),
                            null != i &&
                                (0, t.jsxs)(s.E, { variant: "text-sm/normal", children: ["\u201C", i, "\u201D"] }),
                        ],
                    }),
                ],
            }),
            null != d ? (0, t.jsx)("div", { className: r.Sl, style: m }) : null,
        ],
    });
}
var d = i(503698),
    u = i.n(d),
    o = i(187322),
    c = i(638916),
    m = i(667055),
    p = i(693217);
function h(n) {
    let {
        title: e,
        description: i,
        headerImage: l,
        onDetails: r,
        onPurchase: a,
        PurchaseButton: d,
        GiftButton: h,
        availabilityLabel: x,
    } = n;
    return (0, t.jsx)(o.vN, {
        children: (0, t.jsxs)("div", {
            className: u()(m.iE, p.t),
            tabIndex: 0,
            onClick: () => {
                null != r ? r() : null != a && a();
            },
            onKeyUp: (n) => {
                "Enter" === n.key && (n.stopPropagation(), n.preventDefault(), null != r ? r() : null != a && a());
            },
            children: [
                (0, t.jsx)("div", {
                    className: m.Td,
                    style: null != l ? { backgroundImage: null != l ? `url(${l.toString()})` : void 0 } : void 0,
                    children: null == l && (0, t.jsx)(c.q, { color: "white", size: "custom", height: 80, width: 80 }),
                }),
                (0, t.jsxs)("div", {
                    className: m.zH,
                    children: [
                        (0, t.jsx)(s.E, { color: "text-strong", variant: "text-md/semibold", children: e }),
                        null != i &&
                            (0, t.jsx)(s.E, {
                                className: m.h_,
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: i,
                            }),
                    ],
                }),
                (null != d || null != h) &&
                    (0, t.jsxs)("div", {
                        className: m.qr,
                        children: [
                            null != d &&
                                (0, t.jsx)(s.E, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/normal",
                                    children: x,
                                }),
                            (0, t.jsxs)("div", {
                                className: m.GC,
                                children: [
                                    null != d &&
                                        (0, t.jsx)(d, {
                                            onClick: (n) => {
                                                n.stopPropagation(), a?.();
                                            },
                                        }),
                                    null != h && (0, t.jsx)(h, {}),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var x = i(885996),
    g = i(17928),
    b = i(534514),
    v = i(192308),
    I = i(775602),
    j = i(793574),
    k = i(688810),
    A = i(75304),
    P = i(548118),
    f = i(915043),
    E = i(163437),
    N = i(955440),
    S = i(638643),
    T = i(3432),
    y = i(185438),
    R = i(71393),
    M = i(67480),
    _ = i(328968),
    L = i(174459),
    U = i(486020),
    F = i(371794),
    C = i(240248),
    G = i(998218),
    D = i(943775),
    O = i(237218),
    z = i(56754),
    B = i(376374),
    w = i(311321),
    K = i(652215),
    $ = i(375708),
    q = i(707739);
let H = new Intl.DateTimeFormat($.intl.currentLocale, { month: "short", day: "numeric" });
function V(n) {
    let { app: e, guildId: i, subscriptions: s, otps: r } = n,
        d = l.useMemo(() => (0, D.A)(e, 100), [e]),
        { bot: u } = e,
        o = l.useMemo(() => {
            if (u?.banner == null) return;
            let n = (0, U.z)({ id: u.id, banner: u.banner, size: 1024, canAnimate: !1 });
            return null != n ? (G.A.toURLSafe(n) ?? void 0) : void 0;
        }, [u]),
        c = l.useMemo(() => {
            if (u?.banner == null) return;
            let n = (0, U.z)({ id: u.id, banner: u.banner, size: 1024, canAnimate: !0 });
            return null != n ? (G.A.toURLSafe(n) ?? void 0) : void 0;
        }, [u]),
        m = (0, g.bG)([I.A], () => I.A.useReducedMotion),
        p = l.useMemo(() => [...s.map((n) => n.skuId), ...r.map((n) => n.skuId)], [s, r]),
        { analyticsLocations: h } = (0, k.Ay)(j.A.APP_STOREFRONT);
    return (
        l.useEffect(() => {
            0 !== p.length &&
                L.default.track(K.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: e.id,
                    sku_ids: p,
                    location_stack: h,
                });
        }, [h, e.id, p]),
        (0, t.jsxs)("div", {
            className: q.iE,
            children: [
                (0, t.jsx)(a, {
                    title: e.name,
                    iconSrc: d,
                    backgroundSrc: o,
                    animatedBackgroundSrc: c,
                    prefersReducedMotion: m,
                }),
                (0, t.jsx)(Z, { appId: e.id, subscriptions: s, otps: r, guildId: i }),
            ],
        })
    );
}
function Z(n) {
    let { appId: e, subscriptions: i, otps: l, guildId: s } = n;
    return (0, t.jsxs)("div", {
        className: q.q4,
        children: [
            i.length > 0 &&
                (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(w.A, { subscriptions: i }),
                        (0, t.jsx)("div", {
                            className: q.dD,
                            children: i.map((n) =>
                                (0, t.jsx)(
                                    J,
                                    {
                                        appId: e,
                                        guildId: s,
                                        listing: n,
                                        subscriptionType: (0, E.bg)(n.skuFlags) ? "user" : "guild",
                                    },
                                    n.id,
                                ),
                            ),
                        }),
                    ],
                }),
            l.length > 0 &&
                (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(b.D, { variant: "heading-lg/semibold", children: $.intl.string($.t.yUGTs8) }),
                        (0, t.jsx)("div", {
                            className: q.dD,
                            children: l.map((n) => (0, t.jsx)(X, { skuId: n.skuId, appId: e }, n.id)),
                        }),
                    ],
                }),
        ],
    });
}
function J(n) {
    let { appId: e, guildId: r, listing: a, subscriptionType: d, onDetails: u } = n,
        { data: o } = (0, N.A)(a.skuId),
        c = o?.[0],
        m = (0, g.bG)([M.A], () => M.A.get(a.skuId), [a.skuId]),
        p = (0, g.bG)([R.A], () => R.A.getGuild(r), [r]),
        h = (0, g.bG)([M.A], () => M.A.getParentSKU(a.skuId), [a.skuId]),
        b = (0, f.GD)(h, r),
        I = b?.subscription,
        j = (0, f.Ko)(h, r),
        k = null != I && (0, E.Uo)(I, m),
        A = null != j && b?.subscriptionPlan?.id !== j?.subscriptionPlan.id,
        S = !1 === k && j?.subscriptionPlan.skuId === a.skuId,
        _ = b?.subscriptionPlan.skuId === a.skuId,
        {
            openModal: L,
            subscriptionPurchaseButtonState: U,
            isGuildSubscribed: F,
        } = (0, y.A)({ skuId: a.skuId, initialSubscribeForGuild: r, analyticsLocation: K.ThZ.APP_STOREFRONT }),
        C = l.useMemo(
            () =>
                a.benefits?.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, T.N)(e, n.icon),
                })),
            [e, a.benefits],
        ),
        G = l.useMemo(() => (null != a.thumbnail ? (0, O.t)(e, a.thumbnail, 256) : void 0), [e, a.thumbnail]),
        D = l.useCallback(
            (n) =>
                (0, t.jsx)(B.rc, {
                    ...n,
                    appId: e,
                    subscriptionType: d,
                    skuId: a.skuId,
                    subscriptionPlan: c,
                    state: U,
                }),
            [e, d, a.skuId, c, U],
        ),
        z = l.useMemo(() => {
            if (A && I?.currentPeriodEnd != null) {
                let n = H.format(I?.currentPeriodEnd);
                if (_) return $.intl.formatToPlainString($.t.EV2lZz, { date: n });
                if (S) return $.intl.formatToPlainString($.t["2w6+NN"], { date: n });
            }
            if (F)
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        null != p && (0, t.jsx)(P.Ay, { guild: p, size: P.Ay.Sizes.MINI }),
                        $.intl.string($.t.l8ufqL),
                    ],
                });
        }, [I?.currentPeriodEnd, p, A, _, F, S]),
        w =
            null != z
                ? (0, t.jsx)(s.E, { color: "text-default", variant: "text-sm/normal", className: q.BJ, children: z })
                : void 0;
    return (0, t.jsx)(x.OP, {
        title: a.summary,
        subtitle: w,
        maxBenefits: null != w ? x.GS - 1 : x.GS,
        description: a.description ?? void 0,
        imgSrc: G,
        onPurchase: L,
        renderPurchaseButton: D,
        benefitItems: null != C ? C.map((n) => (0, t.jsx)(x.FY, { description: n.title, icon: n.icon }, n.id)) : void 0,
        onDetails:
            null != u
                ? u
                : null != C
                  ? () => {
                        (0, v.openModalLazy)(async () => {
                            let { SubscriptionDetailsModal: n } = await Promise.all([
                                i.e("63202"),
                                i.e("53917"),
                                i.e("15186"),
                                i.e("80830"),
                                i.e("64850"),
                            ]).then(i.bind(i, 168393));
                            return (i) =>
                                (0, t.jsx)(n, { appId: e, subscriptionType: d, skuId: a.skuId, guildId: r, ...i });
                        });
                    }
                  : void 0,
    });
}
function X(n) {
    let { skuId: e, appId: l, onDetails: s } = n,
        { analyticsLocations: r } = (0, k.Ay)(j.A.APP_STOREFRONT),
        a = (0, g.bG)([_.A], () => _.A.getForSKU(e), [e]),
        d = (0, g.bG)([M.A], () => M.A.get(e), [e]),
        u = (0, z.L)(e);
    if (null == d) return null;
    let o = d.name ?? "",
        c = a?.description?.trim() ?? void 0,
        m = a?.headerBackground != null ? (G.A.toURLSafe((0, F.YE)(l, a.headerBackground, 256)) ?? void 0) : void 0,
        p = d.type === K.Puh.DURABLE && u,
        x = d.type === K.Puh.DURABLE ? (p ? $.intl.string($.t.bm82mm) : $.intl.string($.t["6gprwf"])) : void 0,
        { price: b } = d;
    return null == b
        ? null
        : (0, t.jsx)(h, {
              title: o,
              description: c,
              headerImage: m,
              availabilityLabel: x,
              PurchaseButton: (n) => (0, t.jsx)(B.$P, { ...n, appId: l, sku: d }),
              onPurchase: () => {
                  (0, S.k)({
                      appId: l,
                      skuId: d.id,
                      analyticsLocations: r,
                      checkoutFlow: A.C.PREMIUM_APPS_OTP_CHECKOUT,
                  });
              },
              onDetails:
                  null != s
                      ? s
                      : (0, C.uJ)(c)
                        ? void 0
                        : () => {
                              (0, v.openModalLazy)(async () => {
                                  let { ItemDetailsModal: n } = await Promise.all([
                                      i.e("63202"),
                                      i.e("53917"),
                                      i.e("15186"),
                                      i.e("80830"),
                                      i.e("70104"),
                                  ]).then(i.bind(i, 963179));
                                  return (i) => (0, t.jsx)(n, { appId: l, skuId: e, ...i });
                              });
                          },
          });
}
