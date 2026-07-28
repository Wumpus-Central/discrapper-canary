l.d(t, { G: () => eL }), l(321073);
var n = l(477900),
    a = l(582128),
    s = l(696292),
    r = l(17928),
    o = l(939249),
    i = l(926268),
    c = l(34188),
    u = l(661531),
    d = l(770178),
    b = l(742589),
    m = l(140218),
    E = l(617986);
let p = (0, l(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = l(223311),
    A = l(975732),
    S = l(318346),
    f = l(70926),
    h = l(287809),
    g = l(623655),
    L = l(13875),
    x = l(23161),
    O = l(503698),
    I = l.n(O),
    _ = l(477782),
    G = l(980707),
    y = l(146919),
    T = l(375708);
function j(e) {
    let { shops: t, onClose: l } = e,
        a = (0, y.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: I()({ [y.jP]: a }),
        children: (0, n.jsx)(G.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: I()({ [y.jP]: a }),
            onClose: l,
            "aria-label": T.intl.string(T.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    _.Dr,
                    {
                        id: e.id,
                        label: e.label,
                        leadingAccessory: null != e.iconSrc ? { type: "image", src: e.iconSrc } : void 0,
                        action: e.onSelect,
                    },
                    e.id,
                ),
            ),
        }),
    });
}
var R = l(641150),
    F = l(478016),
    v = l(758836),
    k = l(652215);
let N = [
        { tab: v.G2.OFFER_ELIGIBLE, labelKey: T.t.hY8Ft1 },
        { tab: v.G2.AVATAR_DECORATIONS, labelKey: T.t.dRZYNE },
        { tab: v.G2.NAMEPLATES, labelKey: T.t.V68Fqz },
        { tab: v.G2.PROFILE_EFFECTS, labelKey: T.t["1cNjtx"] },
        { tab: v.G2.PROFILE_FRAMES, labelKey: T.t.ecTJkR },
        { tab: v.G2.BUNDLES, labelKey: T.t.FYFpps },
        { tab: v.G2.COLLABS, labelKey: T.t["+W8gb+"] },
        { tab: v.G2.CATALOG, labelKey: T.t.xFcotU },
    ],
    M = {
        [R.q.ALL]: v.G2.CATALOG,
        [R.q.AVATAR_DECORATION]: v.G2.AVATAR_DECORATIONS,
        [R.q.PROFILE_EFFECT]: v.G2.PROFILE_EFFECTS,
        [R.q.NAMEPLATE]: v.G2.NAMEPLATES,
        [R.q.PROFILE_FRAME]: v.G2.PROFILE_FRAMES,
        [R.q.BUNDLE]: v.G2.BUNDLES,
    };
function B(e, t, l, n) {
    if (e !== v.G2.CATALOG) return e;
    if (t.size > 0) {
        let l = t.values().next().value;
        return null == l ? e : (M[l] ?? e);
    }
    return l ? v.G2.COLLABS : n ? v.G2.OFFER_ELIGIBLE : e;
}
function P(e) {
    let { canViewProfileFrames: t, collabsFilterEnabled: l, hasActivePromotion: n } = e;
    return N.filter((e) => {
        let { tab: a } = e;
        return (a !== v.G2.PROFILE_FRAMES || !!t) && (a !== v.G2.COLLABS || !!l) && (a !== v.G2.OFFER_ELIGIBLE || !!n);
    });
}
function $(e) {
    let {
            handleTransition: t,
            onClose: l,
            selectedTab: a,
            itemTypeFilters: s,
            thirdPartyOnly: r,
            offerEligible: o,
        } = e,
        i = (0, y.yB)("CollectiblesIndexPageContextMenu"),
        c = (0, L.sk)("CollectiblesIndexPageContextMenu"),
        u = (0, g.z)("CollectiblesIndexPageContextMenu"),
        d = (0, C.A)(k.FYj),
        b = B(a, s, r, o),
        m = P({ canViewProfileFrames: c, collabsFilterEnabled: u, hasActivePromotion: null != d });
    return (0, n.jsx)("div", {
        className: I()({ [y.jP]: i }),
        children: (0, n.jsx)(G.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: I()({ [y.jP]: i }),
            onClose: l,
            "aria-label": T.intl.string(T.t.xFcotU),
            onSelect: () => {},
            children: m.map((e) => {
                let { tab: l, labelKey: a } = e,
                    s = l === b;
                return (0, n.jsx)(
                    _.Dr,
                    {
                        id: l,
                        label: T.intl.string(a),
                        badge: l === v.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: s ? { type: "icon", icon: F.U } : void 0,
                        action: () => {
                            t(l);
                        },
                    },
                    l,
                );
            }),
        }),
    });
}
var w = l(7689),
    D = l(892547),
    U = l(773669),
    H = l(174459),
    q = l(440938),
    z = l(748992);
function K(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: s, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, x.v)(),
        [b, m] = a.useState(""),
        E = (0, q.uM)(),
        p = (0, r.bG)([U.default], () => U.default.locale),
        C = a.useRef(null),
        [A, S] = a.useState(!1);
    a.useEffect(() => {
        let e = setTimeout(() => {
            d(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, d]),
        a.useEffect(() => {
            m(c);
        }, [c]),
        a.useEffect(() => {
            S(s && i);
        }, [s, i]);
    let f = a.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        h = a.useCallback(
            (e) => {
                H.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: E?.sessionId,
                    page_section: E?.pageSection,
                    page_category: E?.pageCategory,
                    page_index: E?.pageIndex,
                    page_size: E?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, E],
        ),
        g = a.useCallback(() => {
            l !== v.G2.CATALOG && t(v.G2.CATALOG), h(v.uY.SEARCH_ICON), S(!0), setTimeout(() => C.current?.focus());
        }, [l, t, h]),
        L = a.useCallback(() => {
            l !== v.G2.CATALOG && t(v.G2.CATALOG), h(v.uY.SEARCH_BAR);
        }, [l, t, h]),
        O = a.useCallback(() => {
            m(""), d(""), h(v.uY.SEARCH_BAR_CLEAR), s && S(!1);
        }, [d, h, s]),
        _ = a.useCallback(() => {
            s && "" === b && S(!1);
        }, [s, b]),
        G = s && !A,
        y = (0, n.jsx)(o.D, {
            className: z.qc,
            onClick: g,
            children: (0, n.jsx)(w.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        j = (0, n.jsx)(D.I, {
            size: "sm",
            ref: C,
            onKeyDown: f,
            query: b,
            onChange: m,
            onClear: O,
            onBlur: _,
            placeholder: "en-US" === p ? T.intl.string(T.t.arz34K) : T.intl.string(T.t["hIt/Nm"]),
        }),
        R = { "--custom-search-bar-width": `${v.rr}px`, "--custom-search-bar-icon-width": `${v.Dy}px` };
    return G
        ? (0, n.jsx)("div", { style: R, children: y })
        : (0, n.jsx)("div", {
              className: I()(z.ON, { [z.Nz]: A }),
              style: R,
              children: (0, n.jsx)(o.D, { ignoreKeyPress: !0, onClick: L, children: j }),
          });
}
var V = l(3666),
    Y = l(834730),
    W = l(812993),
    J = l(761508),
    Q = l(922016),
    X = l(900797),
    Z = l(847374),
    ee = l(955572),
    et = l(775602),
    el = l(421773);
function en(e) {
    let { tabs: t, selectedTab: l, onTabSelect: a, onClose: s, showOrbRentalNewBadge: r } = e;
    return (0, n.jsx)(G.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": T.intl.string(T.t["UKOtz+"]),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, n.jsx)(
            _.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, n.jsx)(_.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: s }) }, t);
                    let c = t === v.G2.ORBS && r;
                    return (0, n.jsx)(
                        _.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === l ? { type: "icon", icon: F.U } : void 0,
                            badge: c ? "new" : void 0,
                            action: () => a(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var ea = l(755976);
function es(e) {
    let { label: t, icon: l, showNewBadge: a } = e;
    return (0, n.jsxs)(Y.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, n.jsxs)("span", {
                      className: ea.nt,
                      children: [t, (0, n.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            a && (0, n.jsx)(W.Lp, { text: T.intl.string(T.t.y2b7CA), className: ea.Ad }),
        ],
    });
}
function er(e) {
    let {
        tab: t,
        label: l,
        selected: a,
        handleTransition: s,
        renderSubmenu: r,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
        trailingBadge: u,
    } = e;
    if (null != r)
        return (0, n.jsx)(eo, { tab: t, label: l, selected: a, handleTransition: s, renderSubmenu: r, submenuOnly: o });
    let d = (0, n.jsx)(J.V.Item, {
        id: t,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: a ? t : void 0,
        onClick: () => s(t),
        className: ea.Mf,
        "aria-label": l,
        children: (0, n.jsx)(es, { label: l, icon: c, showNewBadge: i }),
    });
    return null != u
        ? (0, n.jsxs)("div", {
              className: ea.ju,
              children: [d, (0, n.jsx)(W.Lp, { disableColor: !0, text: u, className: ea.qe })],
          })
        : d;
}
function eo(e) {
    let { tab: t, label: l, selected: s, handleTransition: r, renderSubmenu: o, submenuOnly: i } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: E, cancelTimers: p } = (0, el.A)(100, 100),
        C = a.useCallback(() => {
            (u.current = et.Ay.keyboardModeEnabled), m();
        }, [m]),
        A = a.useCallback(() => {
            p(), b(!0), (u.current = et.Ay.keyboardModeEnabled), i || r(t);
        }, [p, b, i, r, t]);
    return (0, n.jsx)(Q.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            p(), b(!0), (u.current = et.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !et.Ay.keyboardModeEnabled && (0, ee.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: m, onMouseLeave: E, children: o({ onClose: t }) });
        },
        children: (e, a) => {
            let { isShown: r } = a,
                o = r ? X.t : Z.a;
            return (0, n.jsx)(J.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? t : void 0,
                onClick: A,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: ea.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: ea.Lj,
                    onMouseEnter: C,
                    onMouseLeave: E,
                    children: (0, n.jsx)(Y.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: ea.hP,
                            children: [l, (0, n.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ei(e) {
    let { onTabSelect: t, tabs: l, selectedTab: s, selected: r } = e,
        o = a.useRef(null),
        i = a.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, el.A)(100, 100),
        E = a.useCallback(() => {
            (i.current = et.Ay.keyboardModeEnabled), d();
        }, [d]),
        p = a.useCallback(() => {
            m(), u(!0), (i.current = et.Ay.keyboardModeEnabled);
        }, [m, u]);
    return (0, n.jsx)(Q.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = et.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !et.Ay.keyboardModeEnabled && (0, ee.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(en, { selectedTab: s, onClose: a, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                a = l ? X.t : Z.a;
            return (0, n.jsx)(J.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r ? "more" : void 0,
                onClick: p,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: I()(ea.Mf, ea.OS),
                "aria-label": T.intl.string(T.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: ea.Lj,
                    onMouseEnter: E,
                    onMouseLeave: b,
                    children: (0, n.jsx)(Y.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: ea.hP,
                            children: [T.intl.string(T.t["UKOtz+"]), (0, n.jsx)(a, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ec(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, v.dF)(l) && e === v.G2.CATALOG);
}
function eu(e) {
    let { className: t, selectedTab: l, tabs: s, onTabSelect: r } = e,
        [o, i] = a.useState(0),
        c = a.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, V.Wv)({ items: s, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        E = a.useMemo(() => s.slice(0, u + 1), [u, s]),
        p = a.useMemo(() => s.slice(u + 1), [u, s]),
        C = a.useRef(null),
        A = a.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(C, A);
    let S = 0 !== o,
        f = p.some((e) => ec(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: I()(ea.kL, t),
        ref: C,
        children: [
            (0, n.jsxs)("div", {
                className: ea.Kk,
                "aria-hidden": "true",
                children: [
                    s.map((e, t) =>
                        (0, n.jsx)(
                            V.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, n.jsx)(er, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ec(e.tab, e, l),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                    trailingBadge: e.trailingBadge,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: m,
                        children: (0, n.jsx)(ei, { tabs: p, onTabSelect: r, selectedTab: l, selected: f }),
                    }),
                ],
            }),
            S &&
                (0, n.jsxs)(J.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: r,
                    className: ea.vR,
                    children: [
                        E.map((e) =>
                            (0, n.jsx)(
                                er,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ec(e.tab, e, l),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                    trailingBadge: e.trailingBadge,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== p.length
                            ? (0, n.jsx)(ei, { tabs: p, onTabSelect: r, selectedTab: l, selected: f })
                            : null,
                    ],
                }),
        ],
    });
}
var ed = l(812729),
    eb = l.n(ed),
    em = l(627363),
    eE = l(587895),
    ep = l(733391),
    eC = l(832163),
    eA = l(44724),
    eS = l(486020);
l(801416);
var ef = l(518477),
    eh = l(576709),
    eg = l(933159);
function eL(e) {
    let { selectedTab: t, handleTransition: l } = e,
        O = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        I = (function (e) {
            let { location: t } = e;
            return p.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        G = (0, L.sk)("CollectiblesShopHeaderBar"),
        y = (0, g.z)("CollectiblesShopHeaderBar"),
        R = null != (0, C.A)(k.FYj),
        { searchQuery: N, itemTypeFilters: M, thirdPartyOnly: w, offerEligible: D } = (0, x.v)(),
        U = a.useRef(null),
        [z, V] = a.useState(!1);
    (0, d.g)(
        U,
        a.useCallback((e) => {
            V(e.contentRect.width < 800);
        }, []),
    );
    let { gameShops: Y, hasGameShops: W } = (function (e) {
            let { enabled: t } = e,
                l = (0, q.uM)(),
                n = (0, r.yK)(
                    [eC.A],
                    () =>
                        t
                            ? (eC.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            a.useEffect(() => {
                t && (0, ep.Xw)();
            }, [t]),
                a.useEffect(() => {
                    n.length > 0 &&
                        em.Ay.fetchApplications(
                            n.map((e) => e.applicationId),
                            !1,
                        );
                }, [n]);
            let s = a.useCallback(
                    (e) => {
                        H.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: l?.sessionId,
                            page_type: v.G2.GAME_SHOPS,
                            page_category: l?.pageCategory,
                            page_section: l?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, eA.default)({ applicationId: e }).catch(() => {});
                    },
                    [l],
                ),
                o = (0, r.bG)(
                    [eE.A],
                    () =>
                        n.flatMap((e) => {
                            let t = eE.A.getApplication(e.applicationId),
                                l = t?.name;
                            return null == l
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: l,
                                          iconSrc:
                                              t?.icon != null
                                                  ? eS.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [n],
                    eb(),
                );
            return {
                gameShops: a.useMemo(() => o.map((e) => ({ ...e, onSelect: () => s(e.id) })), [o, s]),
                hasGameShops: n.length > 0,
            };
        })({ enabled: I }),
        J = (0, m.H)({ location: "collectibles_shop_header_bar" }),
        Q = a.useMemo(() => {
            let e = [
                { tab: v.G2.HOME, label: T.intl.string(T.t["xNiB/O"]) },
                {
                    tab: v.G2.CATALOG,
                    label: T.intl.string(T.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: a } = e;
                        return (0, n.jsx)($, {
                            handleTransition: l,
                            onClose: a,
                            selectedTab: t,
                            itemTypeFilters: M,
                            thirdPartyOnly: w,
                            offerEligible: D,
                        });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: a } = e;
                        return (function (e) {
                            let {
                                    selectedTab: t,
                                    itemTypeFilters: l,
                                    thirdPartyOnly: a,
                                    offerEligible: s,
                                    canViewProfileFrames: r,
                                    collabsFilterEnabled: o,
                                    hasActivePromotion: i,
                                    onTabSelect: c,
                                    onClose: u,
                                } = e,
                                d = B(t, l, a, s);
                            return P({ canViewProfileFrames: r, collabsFilterEnabled: o, hasActivePromotion: i }).map(
                                (e) => {
                                    let { tab: t, labelKey: l } = e,
                                        a = t === d;
                                    return (0, n.jsx)(
                                        _.Dr,
                                        {
                                            id: t,
                                            label: T.intl.string(l),
                                            badge: t === v.G2.PROFILE_FRAMES ? "new" : void 0,
                                            trailingIndicator: a ? { type: "icon", icon: F.U } : void 0,
                                            action: () => {
                                                c(t), u();
                                            },
                                        },
                                        t,
                                    );
                                },
                            );
                        })({
                            selectedTab: t,
                            itemTypeFilters: M,
                            thirdPartyOnly: w,
                            offerEligible: D,
                            canViewProfileFrames: G,
                            collabsFilterEnabled: y,
                            hasActivePromotion: R,
                            onTabSelect: l,
                            onClose: a,
                        });
                    },
                },
            ];
            return (
                e.push({ tab: v.G2.ORBS, label: T.intl.string(T.t.EBYkzk) }),
                I &&
                    W &&
                    e.push({
                        tab: v.G2.GAME_SHOPS,
                        label: T.intl.string(T.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(j, { shops: Y, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: l } = e;
                                return t.map((e) =>
                                    (0, n.jsx)(
                                        _.Dr,
                                        {
                                            id: e.id,
                                            label: e.label,
                                            leadingAccessory:
                                                null != e.iconSrc ? { type: "image", src: e.iconSrc } : void 0,
                                            action: () => {
                                                e.onSelect(), l();
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: Y, onClose: t });
                        },
                    }),
                J &&
                    e.push({
                        tab: v.G2.GAME_SERVERS,
                        label: T.intl.string(eh.default.vCzwM7),
                        trailingBadge: T.intl.string(T.t.oW0eUd),
                    }),
                e
            );
        }, [l, Y, t, M, w, D, G, y, R, I, W, J]),
        X = t === v.G2.ORBS ? k.liQ.SHOP_ORBS_TAB : k.liQ.COLLECTIBLES_SHOP,
        Z = a.useCallback(() => {
            (0, S.Y)({ pageType: X, sectionType: k.JJy.ORBS_BALANCE_MENU, ctaObject: k.ZSU.CTA_TO_QUEST_HOME }),
                (0, E.mA)({ fromContent: s.u.ORBS_BALANCE_MENU });
        }, [X]),
        ee = a.useCallback(() => {
            O?.id != null && (0, A.openUserProfileModal)({ userId: O.id, tabSection: ef.RP.WISHLIST });
        }, [O?.id]),
        et = a.useCallback(
            (e) => {
                l(e);
            },
            [l],
        );
    return (0, n.jsx)("div", {
        ref: U,
        children: (0, n.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eg.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(K, { handleTransition: l, selectedTab: t, isNarrow: z, hasText: "" !== N }),
                    (0, n.jsx)(o.D, {
                        className: eg.ij,
                        onClick: ee,
                        "aria-label": T.intl.string(T.t["7lZ31J"]),
                        children: (0, n.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(f.SS, {
                        analyticsPage: X,
                        cardAlignment: f.SS.CardAlignment.END,
                        ctaText: T.intl.string(T.t.VC4Mq0),
                        ctaOnClick: Z,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(o.D, {
                    className: eg.sU,
                    onClick: () => l(v.G2.HOME),
                    "aria-label": T.intl.string(T.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(eu, { tabs: Q, selectedTab: t, onTabSelect: et }),
            ],
        }),
    });
}
