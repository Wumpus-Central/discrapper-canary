l.d(t, { G: () => eE });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(696292),
    o = l(17928),
    u = l(939249),
    c = l(926268),
    d = l(34188),
    E = l(661531),
    p = l(770178),
    A = l(742589),
    f = l(617986),
    C = l(402860),
    S = l(318346),
    g = l(70926),
    _ = l(287809),
    O = l(365491),
    h = l(435558),
    b = l(834730),
    L = l(7689),
    G = l(683438),
    I = l(265872),
    m = l(444927),
    T = l(775602),
    R = l(174459),
    x = l(440938),
    y = l(945810),
    v = l(758836);
let N = (0, y.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: v.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: v.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: v.hE.WIDE } },
});
var M = l(652215),
    B = l(841998),
    k = l(105292),
    P = l(848913);
let F = [
        B.default.bKvkzB,
        B.default["U+7iha"],
        B.default.fwKulM,
        B.default.KqfZhk,
        B.default.amuakh,
        B.default["5txfu7"],
        B.default.SxlobC,
        B.default.bnJVgJ,
        B.default.Z4b7dI,
        B.default.M6igKM,
        B.default.qozQ5X,
        B.default.tu6vgS,
        B.default["w/OnRT"],
        B.default["+EMTB/"],
        B.default.Ib3xUj,
        B.default["7DZ2Fj"],
        B.default.cChmCO,
        B.default["H0zY/q"],
        B.default["+Bo7fD"],
        B.default["o/+isu"],
        B.default.MzFZoP,
        B.default["NKZY+Z"],
        B.default["SM4C+M"],
        B.default.rsvVIs,
        B.default["kmA+p3"],
        B.default["S+ZC67"],
    ],
    j = "collectibles-search-suggestions",
    H = `${j}-header`;
function D() {
    return (0, h.sampleSize)(F, 7).map((e) => k.intl.string(e));
}
function w(e) {
    e.preventDefault();
}
function U(e) {
    let { suggestions: t, selectedIndex: l, onSelect: a, onHover: i } = e;
    return (0, n.jsxs)("div", {
        className: P.Gn,
        onMouseDown: w,
        children: [
            (0, n.jsx)("div", {
                id: H,
                className: P.Xe,
                children: (0, n.jsx)(b.E, {
                    variant: "text-xs/semibold",
                    color: "text-subtle",
                    children: k.intl.string(k.t.eYMbUC),
                }),
            }),
            (0, n.jsx)("div", {
                role: "listbox",
                id: j,
                tabIndex: -1,
                "aria-labelledby": H,
                className: P.sq,
                children: t.map((e, t) =>
                    (0, n.jsx)(
                        u.D,
                        {
                            id: `${j}-${t}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": t === l,
                            className: P.h,
                            onClick: () => a(t),
                            onMouseEnter: () => i(t),
                            children: (0, n.jsx)(b.E, { variant: "text-sm/medium", color: "text-strong", children: e }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function V(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: s } = e,
        c = (0, m.A)(D),
        { searchQuery: d, onSetSearchQuery: E } = (0, O.v)(),
        [p, A] = a.useState(""),
        f = (0, x.uM)(),
        C = (0, o.bG)([T.Ay], () => T.Ay.useReducedMotion),
        { enabled: S, searchBarWidthPx: g } = N.useConfig({ location: "collectibles_search_bar" }),
        _ = a.useRef(null),
        [h, b] = a.useState(!1),
        y = a.useRef(null),
        [F, H] = a.useState(!1),
        [w, V] = a.useState(!1),
        [K, z] = a.useState(-1),
        [Y, q] = a.useState(0),
        W = S && F && !w && "" === p;
    (a.useEffect(() => {
        let e = setTimeout(() => {
            E(p);
        }, 250);
        return () => clearTimeout(e);
    }, [p, E]),
        a.useEffect(() => {
            A(d);
        }, [d]),
        a.useEffect(() => {
            if (!S || "" !== p || F || C) return;
            let e = setInterval(() => {
                q((e) => (e + 1) % c.length);
            }, 5e3);
            return () => clearInterval(e);
        }, [S, p, F, C, c]),
        a.useEffect(() => {
            b(i && s);
        }, [i, s]));
    let X = a.useCallback(
            (e, t, n) => {
                R.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: f?.sessionId,
                    page_section: f?.pageSection,
                    page_category: f?.pageCategory,
                    page_index: f?.pageIndex,
                    page_size: f?.pageSize,
                    cta_name: e,
                    page_type: l,
                    tile_type: t,
                    tile_position: null != n ? String(n) : void 0,
                });
            },
            [l, f],
        ),
        Z = a.useCallback(
            (e) => {
                let t = c[e];
                (A(t), E(t), z(-1), X(t, v.Xi.SEARCH_SUGGESTION, e));
            },
            [E, X, c],
        ),
        $ = a.useCallback(
            (e) => {
                if (W && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    z((e) => {
                        let l = e + t;
                        return l < 0 ? c.length - 1 : l >= c.length ? 0 : l;
                    });
                    return;
                }
                if (W && "Escape" === e.key) {
                    (e.preventDefault(), V(!0), z(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (W && K >= 0) return void Z(K);
                    E(p);
                }
            },
            [p, E, W, K, Z, c],
        ),
        J = a.useCallback((e) => {
            (A(e), V(!1), z(-1));
        }, []),
        Q = a.useCallback(() => {
            (H(!0), V(!1), z(-1));
        }, []),
        ee = a.useCallback(() => {
            (l !== v.G2.CATALOG && t(v.G2.CATALOG),
                X(v.uY.SEARCH_ICON, v.Xi.SEARCH),
                b(!0),
                setTimeout(() => _.current?.focus()));
        }, [l, t, X]),
        et = a.useCallback(() => {
            (l !== v.G2.CATALOG && t(v.G2.CATALOG), X(v.uY.SEARCH_BAR, v.Xi.SEARCH));
        }, [l, t, X]),
        el = a.useCallback(() => {
            (A(""), E(""), X(v.uY.SEARCH_BAR_CLEAR, v.Xi.SEARCH), i && b(!1));
        }, [E, X, i]),
        en = a.useCallback(() => {
            (H(!1), i && "" === p && b(!1));
        }, [i, p]),
        ea = i && !h,
        ei = k.intl.string(k.t.arz34K),
        er = (0, n.jsx)(u.D, {
            className: P.qc,
            onClick: ee,
            "aria-label": ei,
            children: (0, n.jsx)(L.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        es = (0, n.jsx)(G.I, {
            size: "sm",
            ref: _,
            onKeyDown: $,
            query: p,
            onChange: J,
            onClear: el,
            onFocus: Q,
            onBlur: en,
            inputProps: S
                ? {
                      role: "combobox",
                      "aria-expanded": W,
                      "aria-controls": W ? j : void 0,
                      "aria-autocomplete": "list",
                      "aria-activedescendant": W && K >= 0 ? `${j}-${K}` : void 0,
                  }
                : void 0,
            placeholder: !S || C ? ei : k.intl.formatToPlainString(B.default.bRwRwX, { option: c[Y] }),
            "aria-label": ei,
        }),
        eo = { "--custom-search-bar-width": `${g}px` };
    return ea
        ? (0, n.jsx)("div", { style: eo, children: er })
        : (0, n.jsx)(I.Y, {
              targetElementRef: y,
              renderPopout: () =>
                  (0, n.jsx)("div", {
                      style: eo,
                      children: (0, n.jsx)(U, { suggestions: c, selectedIndex: K, onSelect: Z, onHover: z }),
                  }),
              position: "bottom",
              align: "right",
              animation: I.Y.Animation.NONE,
              shouldShow: W,
              autoInvert: !1,
              children: () =>
                  (0, n.jsx)("div", {
                      className: r()(P.ON, { [P.Nz]: h }),
                      style: eo,
                      children: (0, n.jsx)(u.D, { innerRef: y, ignoreKeyPress: !0, onClick: et, children: es }),
                  }),
          });
}
var K = l(173127);
l(321073);
var z = l(278416),
    Y = l(196736),
    q = l(976860),
    W = l(288106),
    X = l(223311),
    Z = l(65238),
    $ = l(758461),
    J = l(151115),
    Q = l(812729),
    ee = l.n(Q),
    et = l(627363),
    el = l(587895),
    en = l(733391),
    ea = l(832163),
    ei = l(44724),
    er = l(486020),
    es = l(351585);
let eo = [
    { tab: v.G2.OFFER_ELIGIBLE, labelKey: k.t.hY8Ft1 },
    { tab: v.G2.AVATAR_DECORATIONS, labelKey: k.t.dRZYNE },
    { tab: v.G2.NAMEPLATES, labelKey: k.t.V68Fqz },
    { tab: v.G2.PROFILE_EFFECTS, labelKey: k.t["1cNjtx"] },
    { tab: v.G2.PROFILE_FRAMES, labelKey: k.t.ecTJkR },
    { tab: v.G2.BUNDLES, labelKey: k.t.FYFpps },
    { tab: v.G2.COLLABS, labelKey: k.t["+W8gb+"] },
    { tab: v.G2.CATALOG, labelKey: k.t.xFcotU },
];
var eu = l(783857);
l(801416);
var ec = l(518477),
    ed = l(835018);
function eE(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: i } = e,
        h = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        b = (0, eu.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: L } = (0, O.v)(),
        G = a.useRef(null),
        [I, m] = a.useState(!1);
    (0, p.g)(
        G,
        a.useCallback((e) => {
            m(e.contentRect.width < 800);
        }, []),
    );
    let T = t === v.G2.ORBS ? M.liQ.SHOP_ORBS_TAB : M.liQ.COLLECTIBLES_SHOP,
        y = a.useCallback(() => {
            ((0, S.Y)({ pageType: T, sectionType: M.JJy.ORBS_BALANCE_MENU, ctaObject: M.ZSU.CTA_TO_QUEST_HOME }),
                (0, f.mA)({ fromContent: s.u.ORBS_BALANCE_MENU }));
        }, [T]),
        N = a.useCallback(() => {
            h?.id != null && (0, C.openUserProfileModal)({ userId: h.id, tabSection: ec.RP.WISHLIST });
        }, [h?.id]),
        B = (function (e) {
            let t,
                l,
                n,
                i,
                r,
                s,
                u,
                c,
                d,
                E,
                p,
                A,
                f,
                C,
                S,
                g,
                _ = (0, Y.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: O, hasGameShops: h } =
                    ((t = (0, x.uM)()),
                    (l = (0, o.yK)(
                        [ea.A],
                        () => (ea.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    a.useEffect(() => {
                        (0, en.Xw)();
                    }, []),
                    a.useEffect(() => {
                        l.length > 0 &&
                            et.Ay.fetchApplications(
                                l.map((e) => e.applicationId),
                                !1,
                            );
                    }, [l]),
                    (n = a.useCallback(
                        (e) => {
                            (R.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: v.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, ei.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (i = (0, o.bG)(
                        [el.A],
                        () =>
                            l.flatMap((e) => {
                                let t = el.A.getApplication(e.applicationId),
                                    l = t?.name;
                                return null == l
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: l,
                                              iconSrc:
                                                  t?.icon != null
                                                      ? er.Ay.getApplicationIconURL({
                                                            id: t.id,
                                                            icon: t.icon,
                                                            size: 32,
                                                        })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [l],
                        ee(),
                    )),
                    {
                        gameShops: a.useMemo(
                            () =>
                                i.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => n(e.id),
                                })),
                            [i, n],
                        ),
                        hasGameShops: l.length > 0,
                    }),
                b = null != (0, $.HH)(),
                L =
                    ((r = (0, X.A)(M.FYj)),
                    (s = (0, Z.XF)(r)),
                    (u = s?.shared.navigation?.tab),
                    (c = u?.title),
                    (d = u?.icon),
                    (E = s?.collectionId),
                    (p = r?.rewardStatus),
                    a.useMemo(
                        () =>
                            null == c || null == E || p === W.GM.CONSUMED
                                ? null
                                : { title: c, icon: d, collectionId: E },
                        [c, d, E, p],
                    )),
                G =
                    ((A = (0, X.A)(M.FYj)),
                    (f = (0, Z.NN)(A)),
                    (C = f?.navigation?.tab?.title),
                    (S = f?.navigation?.tab?.icon),
                    (g = f?.collectionId),
                    a.useMemo(
                        () => (null == C || null == g ? null : { title: C, icon: S, collectionId: g }),
                        [C, S, g],
                    )),
                I = L ?? G;
            return a.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return eo.filter((e) => {
                            let { tab: l } = e;
                            return l !== v.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: b }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            a = l === v.G2.OFFER_ELIGIBLE ? z.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: k.intl.string(n),
                            onClick: () => e(l),
                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: v.G2.HOME,
                            text: k.intl.string(k.t["xNiB/O"]),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.HOME),
                            onClick: () => e(v.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: v.G2.CATALOG,
                            text: k.intl.string(k.t.FshAeN),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.CATALOG),
                            onClick: () => e(v.G2.CATALOG),
                            expandLabel: k.intl.string(k.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: v.G2.ORBS,
                            text: k.intl.string(k.t.fG3RIg),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS),
                            onClick: () => e(v.G2.ORBS),
                        },
                    ];
                if (
                    (h &&
                        l.push({
                            type: "menu",
                            key: v.G2.GAME_SHOPS,
                            text: k.intl.string(k.t.FkjcWY),
                            expandLabel: k.intl.string(k.t.bf9uMH),
                            options: O,
                        }),
                    _ &&
                        l.push({
                            type: "page",
                            key: v.G2.GAME_SERVERS,
                            text: k.intl.string(es.default.vCzwM7),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.GAME_SERVERS),
                            onClick: () => e(v.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != I)
                ) {
                    let e = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(I.collectionId),
                        t = (0, J.s)(I.icon);
                    l.push({
                        type: "page",
                        key: v.G2.PROMOTION,
                        text: I.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, q.pX)(e),
                    });
                }
                return l;
            }, [e, b, I, _, h, O]);
        })(
            a.useCallback(
                (e) => {
                    i(e);
                },
                [i],
            ),
        ),
        P = a.useMemo(() => {
            if (null == l) return !1;
            let e = B.find((e) => e.key === v.G2.PROMOTION);
            if (null == e) return !1;
            let t = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [B, l])
            ? v.G2.PROMOTION
            : t;
    return (0, n.jsx)("div", {
        ref: G,
        children: (0, n.jsxs)(A.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: r()(ed.jr, { [eu.jP]: b }),
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(V, { handleTransition: i, selectedTab: t, isNarrow: I, hasText: "" !== L }),
                    (0, n.jsx)(u.D, {
                        className: ed.ij,
                        onClick: N,
                        "aria-label": k.intl.string(k.t["7lZ31J"]),
                        children: (0, n.jsx)(c.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(g.SS, {
                        analyticsPage: T,
                        cardAlignment: g.SS.CardAlignment.END,
                        ctaText: k.intl.string(k.t.VC4Mq0),
                        ctaOnClick: y,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(u.D, {
                    className: ed.sU,
                    onClick: () => i(v.G2.HOME),
                    "aria-label": k.intl.string(k.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: E.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(K.A, {
                    "aria-label": k.intl.string(k.t["5upuqx"]),
                    className: ed.IV,
                    options: B,
                    selectedKey: P,
                    overflowLabel: k.intl.string(k.t["UKOtz+"]),
                    overflowExpandLabel: k.intl.string(k.t.PEtHiE),
                }),
            ],
        }),
    });
}
