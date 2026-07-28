i.d(e, { B4: () => J, Mp: () => V, B8: () => X });
var l = i(477900),
    t = i(582128),
    s = i(834730),
    r = i(33378);
function a(n) {
    let {
            title: e,
            subtitle: i,
            iconSrc: a,
            backgroundSrc: u,
            animatedBackgroundSrc: d,
            prefersReducedMotion: o = !0,
        } = n,
        c = t.useMemo(() => {
            let n = u ?? a;
            if (null != n) return { "--custom-background-url": `url(${n.toString()})` };
        }, [u, a]),
        m = t.useMemo(() => {
            if (null == u) return;
            let n = { "--custom-background-static": `url(${u.toString()}` };
            return o || null == d || (n["--custom-background-animated"] = `url(${d.toString()})`), n;
        }, [d, u, o]);
    return (0, l.jsxs)("div", {
        className: r.iE,
        children: [
            (0, l.jsx)("div", { className: r.Tp, style: c }),
            (0, l.jsxs)("div", {
                className: r.Qs,
                children: [
                    null != a &&
                        (0, l.jsx)("div", {
                            className: r.Kk,
                            children: (0, l.jsx)("img", { src: a.toString(), alt: "" }),
                        }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(s.E, { variant: "heading-xl/bold", tag: "div", children: e }),
                            null != i &&
                                (0, l.jsxs)(s.E, { variant: "text-sm/normal", children: ["\u201C", i, "\u201D"] }),
                        ],
                    }),
                ],
            }),
            null != u ? (0, l.jsx)("div", { className: r.Sl, style: m }) : null,
        ],
    });
}
var u = i(503698),
    d = i.n(u),
    o = i(259678),
    c = i(638916),
    m = i(638887),
    p = i(870889);
function h(n) {
    let {
        title: e,
        description: i,
        headerImage: t,
        onDetails: r,
        onPurchase: a,
        PurchaseButton: u,
        GiftButton: h,
        availabilityLabel: x,
    } = n;
    return (0, l.jsx)(o.vN, {
        children: (0, l.jsxs)("div", {
            className: d()(m.iE, p.t),
            tabIndex: 0,
            onClick: () => {
                null != r ? r() : null != a && a();
            },
            onKeyUp: (n) => {
                "Enter" === n.key && (n.stopPropagation(), n.preventDefault(), null != r ? r() : null != a && a());
            },
            children: [
                (0, l.jsx)("div", {
                    className: m.Td,
                    style: null != t ? { backgroundImage: null != t ? `url(${t.toString()})` : void 0 } : void 0,
                    children: null == t && (0, l.jsx)(c.q, { color: "white", size: "custom", height: 80, width: 80 }),
                }),
                (0, l.jsxs)("div", {
                    className: m.zH,
                    children: [
                        (0, l.jsx)(s.E, { color: "text-strong", variant: "text-md/semibold", children: e }),
                        null != i &&
                            (0, l.jsx)(s.E, {
                                className: m.h_,
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: i,
                            }),
                    ],
                }),
                (null != u || null != h) &&
                    (0, l.jsxs)("div", {
                        className: m.qr,
                        children: [
                            null != u &&
                                (0, l.jsx)(s.E, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/normal",
                                    children: x,
                                }),
                            (0, l.jsxs)("div", {
                                className: m.GC,
                                children: [
                                    null != u &&
                                        (0, l.jsx)(u, {
                                            onClick: (n) => {
                                                n.stopPropagation(), a?.();
                                            },
                                        }),
                                    null != h && (0, l.jsx)(h, {}),
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
    b = i(297264),
    v = i(192308),
    I = i(775602),
    j = i(793574),
    k = i(688810),
    A = i(75304),
    f = i(548118),
    P = i(915043),
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
    q = i(945219);
let H = new Intl.DateTimeFormat($.intl.currentLocale, { month: "short", day: "numeric" });
function V(n) {
    let { app: e, guildId: i, subscriptions: s, otps: r } = n,
        u = t.useMemo(() => (0, D.A)(e, 100), [e]),
        { bot: d } = e,
        o = t.useMemo(() => {
            if (d?.banner == null) return;
            let n = (0, U.z)({ id: d.id, banner: d.banner, size: 1024, canAnimate: !1 });
            return null != n ? (G.A.toURLSafe(n) ?? void 0) : void 0;
        }, [d]),
        c = t.useMemo(() => {
            if (d?.banner == null) return;
            let n = (0, U.z)({ id: d.id, banner: d.banner, size: 1024, canAnimate: !0 });
            return null != n ? (G.A.toURLSafe(n) ?? void 0) : void 0;
        }, [d]),
        m = (0, g.bG)([I.Ay], () => I.Ay.useReducedMotion),
        p = t.useMemo(() => [...s.map((n) => n.skuId), ...r.map((n) => n.skuId)], [s, r]),
        { analyticsLocations: h } = (0, k.Ay)(j.A.APP_STOREFRONT);
    return (
        t.useEffect(() => {
            0 !== p.length &&
                L.default.track(K.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: e.id,
                    sku_ids: p,
                    location_stack: h,
                });
        }, [h, e.id, p]),
        (0, l.jsxs)("div", {
            className: q.iE,
            children: [
                (0, l.jsx)(a, {
                    title: e.name,
                    iconSrc: u,
                    backgroundSrc: o,
                    animatedBackgroundSrc: c,
                    prefersReducedMotion: m,
                }),
                (0, l.jsx)(Z, { appId: e.id, subscriptions: s, otps: r, guildId: i }),
            ],
        })
    );
}
function Z(n) {
    let { appId: e, subscriptions: i, otps: t, guildId: s } = n;
    return (0, l.jsxs)("div", {
        className: q.q4,
        children: [
            i.length > 0 &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(w.A, { subscriptions: i }),
                        (0, l.jsx)("div", {
                            className: q.dD,
                            children: i.map((n) =>
                                (0, l.jsx)(
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
            t.length > 0 &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(b.D, { variant: "heading-lg/semibold", children: $.intl.string($.t.yUGTs8) }),
                        (0, l.jsx)("div", {
                            className: q.dD,
                            children: t.map((n) => (0, l.jsx)(X, { skuId: n.skuId, appId: e }, n.id)),
                        }),
                    ],
                }),
        ],
    });
}
function J(n) {
    let { appId: e, guildId: r, listing: a, subscriptionType: u, onDetails: d } = n,
        { data: o } = (0, N.A)(a.skuId),
        c = o?.[0],
        m = (0, g.bG)([M.A], () => M.A.get(a.skuId), [a.skuId]),
        p = (0, g.bG)([R.A], () => R.A.getGuild(r), [r]),
        h = (0, g.bG)([M.A], () => M.A.getParentSKU(a.skuId), [a.skuId]),
        b = (0, P.GD)(h, r),
        I = b?.subscription,
        j = (0, P.Ko)(h, r),
        k = null != I && (0, E.Uo)(I, m),
        A = null != j && b?.subscriptionPlan?.id !== j?.subscriptionPlan.id,
        S = !1 === k && j?.subscriptionPlan.skuId === a.skuId,
        _ = b?.subscriptionPlan.skuId === a.skuId,
        {
            openModal: L,
            subscriptionPurchaseButtonState: U,
            isGuildSubscribed: F,
        } = (0, y.A)({ skuId: a.skuId, initialSubscribeForGuild: r, analyticsLocation: K.ThZ.APP_STOREFRONT }),
        C = t.useMemo(
            () =>
                a.benefits?.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, T.N)(e, n.icon),
                })),
            [e, a.benefits],
        ),
        G = t.useMemo(() => (null != a.thumbnail ? (0, O.t)(e, a.thumbnail, 256) : void 0), [e, a.thumbnail]),
        D = t.useCallback(
            (n) =>
                (0, l.jsx)(B.rc, {
                    ...n,
                    appId: e,
                    subscriptionType: u,
                    skuId: a.skuId,
                    subscriptionPlan: c,
                    state: U,
                }),
            [e, u, a.skuId, c, U],
        ),
        z = t.useMemo(() => {
            if (A && I?.currentPeriodEnd != null) {
                let n = H.format(I?.currentPeriodEnd);
                if (_) return $.intl.formatToPlainString($.t.EV2lZz, { date: n });
                if (S) return $.intl.formatToPlainString($.t["2w6+NN"], { date: n });
            }
            if (F)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        null != p && (0, l.jsx)(f.Ay, { guild: p, size: f.Ay.Sizes.MINI }),
                        $.intl.string($.t.l8ufqL),
                    ],
                });
        }, [I?.currentPeriodEnd, p, A, _, F, S]),
        w =
            null != z
                ? (0, l.jsx)(s.E, { color: "text-default", variant: "text-sm/normal", className: q.BJ, children: z })
                : void 0;
    return (0, l.jsx)(x.OP, {
        title: a.summary,
        subtitle: w,
        maxBenefits: null != w ? x.GS - 1 : x.GS,
        description: a.description ?? void 0,
        imgSrc: G,
        onPurchase: L,
        renderPurchaseButton: D,
        benefitItems: null != C ? C.map((n) => (0, l.jsx)(x.FY, { description: n.title, icon: n.icon }, n.id)) : void 0,
        onDetails:
            null != d
                ? d
                : null != C
                  ? () => {
                        (0, v.openModalLazy)(async () => {
                            let { SubscriptionDetailsModal: n } = await Promise.all([
                                i.e("73432"),
                                i.e("39086"),
                                i.e("17104"),
                                i.e("17989"),
                                i.e("80830"),
                                i.e("64850"),
                            ]).then(i.bind(i, 168393));
                            return (i) =>
                                (0, l.jsx)(n, { appId: e, subscriptionType: u, skuId: a.skuId, guildId: r, ...i });
                        });
                    }
                  : void 0,
    });
}
function X(n) {
    let { skuId: e, appId: t, onDetails: s } = n,
        { analyticsLocations: r } = (0, k.Ay)(j.A.APP_STOREFRONT),
        a = (0, g.bG)([_.A], () => _.A.getForSKU(e), [e]),
        u = (0, g.bG)([M.A], () => M.A.get(e), [e]),
        d = (0, z.L)(e);
    if (null == u) return null;
    let o = u.name ?? "",
        c = a?.description?.trim() ?? void 0,
        m = a?.headerBackground != null ? (G.A.toURLSafe((0, F.YE)(t, a.headerBackground, 256)) ?? void 0) : void 0,
        p = u.type === K.Puh.DURABLE && d,
        x = u.type === K.Puh.DURABLE ? (p ? $.intl.string($.t.bm82mm) : $.intl.string($.t["6gprwf"])) : void 0,
        { price: b } = u;
    return null == b
        ? null
        : (0, l.jsx)(h, {
              title: o,
              description: c,
              headerImage: m,
              availabilityLabel: x,
              PurchaseButton: function (n) {
                  return null == u ? null : (0, l.jsx)(B.$P, { ...n, appId: t, sku: u });
              },
              onPurchase: function () {
                  null != u &&
                      (0, S.k)({
                          appId: t,
                          skuId: u.id,
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
                                      i.e("73432"),
                                      i.e("39086"),
                                      i.e("17104"),
                                      i.e("17989"),
                                      i.e("80830"),
                                      i.e("70104"),
                                  ]).then(i.bind(i, 963179));
                                  return (i) => (0, l.jsx)(n, { appId: t, skuId: e, ...i });
                              });
                          },
          });
}
