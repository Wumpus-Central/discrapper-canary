l.d(t, { G: () => eA }), l(321073);
var r = l(477900),
    n = l(582128),
    s = l(696292),
    a = l(17928),
    i = l(939249),
    o = l(926268),
    c = l(34188),
    u = l(661531),
    d = l(770178),
    b = l(196736),
    f = l(742589),
    m = l(617986);
let S = (0, l(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var E = l(975732),
    p = l(318346),
    g = l(70926),
    h = l(287809),
    C = l(623655),
    y = l(13875),
    A = l(80151),
    O = l(365491),
    T = l(503698),
    L = l.n(T),
    x = l(477782),
    F = l(980707),
    _ = l(146919),
    I = l(375708);
function R(e) {
    let { shops: t, onClose: l } = e,
        n = (0, _.yB)("CollectiblesGameShopsContextMenu");
    return (0, r.jsx)("div", {
        className: L()({ [_.jP]: n }),
        children: (0, r.jsx)(F.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: L()({ [_.jP]: n }),
            onClose: l,
            "aria-label": I.intl.string(I.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, r.jsx)(
                    x.Dr,
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
var G = l(641150),
    P = l(478016),
    j = l(758836);
let v = [
        { tab: j.G2.OFFER_ELIGIBLE, labelKey: I.t.hY8Ft1 },
        { tab: j.G2.AVATAR_DECORATIONS, labelKey: I.t.dRZYNE },
        { tab: j.G2.NAMEPLATES, labelKey: I.t.V68Fqz },
        { tab: j.G2.PROFILE_EFFECTS, labelKey: I.t["1cNjtx"] },
        { tab: j.G2.PROFILE_FRAMES, labelKey: I.t.ecTJkR },
        { tab: j.G2.BUNDLES, labelKey: I.t.FYFpps },
        { tab: j.G2.COLLABS, labelKey: I.t["+W8gb+"] },
        { tab: j.G2.CATALOG, labelKey: I.t.xFcotU },
    ],
    k = {
        [G.q.ALL]: j.G2.CATALOG,
        [G.q.AVATAR_DECORATION]: j.G2.AVATAR_DECORATIONS,
        [G.q.PROFILE_EFFECT]: j.G2.PROFILE_EFFECTS,
        [G.q.NAMEPLATE]: j.G2.NAMEPLATES,
        [G.q.PROFILE_FRAME]: j.G2.PROFILE_FRAMES,
        [G.q.BUNDLE]: j.G2.BUNDLES,
    };
function N(e, t, l, r) {
    if (e !== j.G2.CATALOG) return e;
    if (t.size > 0) {
        let l = t.values().next().value;
        return null == l ? e : (k[l] ?? e);
    }
    return l ? j.G2.COLLABS : r ? j.G2.OFFER_ELIGIBLE : e;
}
function M(e) {
    let { canViewProfileFrames: t, collabsFilterEnabled: l, hasActivePromotion: r } = e;
    return v.filter((e) => {
        let { tab: n } = e;
        return (n !== j.G2.PROFILE_FRAMES || !!t) && (n !== j.G2.COLLABS || !!l) && (n !== j.G2.OFFER_ELIGIBLE || !!r);
    });
}
function B(e) {
    let {
            handleTransition: t,
            onClose: l,
            selectedTab: n,
            itemTypeFilters: s,
            thirdPartyOnly: a,
            offerEligible: i,
        } = e,
        o = (0, _.yB)("CollectiblesIndexPageContextMenu"),
        c = (0, y.sk)("CollectiblesIndexPageContextMenu"),
        u = (0, C.z)("CollectiblesIndexPageContextMenu"),
        d = (0, A.A)(),
        b = N(n, s, a, i),
        f = M({ canViewProfileFrames: c, collabsFilterEnabled: u, hasActivePromotion: null != d });
    return (0, r.jsx)("div", {
        className: L()({ [_.jP]: o }),
        children: (0, r.jsx)(F.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: L()({ [_.jP]: o }),
            onClose: l,
            "aria-label": I.intl.string(I.t.xFcotU),
            onSelect: () => {},
            children: f.map((e) => {
                let { tab: l, labelKey: n } = e,
                    s = l === b;
                return (0, r.jsx)(
                    x.Dr,
                    {
                        id: l,
                        label: I.intl.string(n),
                        badge: l === j.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: s ? { type: "icon", icon: P.U } : void 0,
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
var $ = l(7689),
    w = l(892547),
    q = l(773669),
    H = l(174459),
    D = l(440938),
    z = l(652215),
    U = l(748992);
function K(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: s, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, O.v)(),
        [b, f] = n.useState(""),
        m = (0, D.uM)(),
        S = (0, a.bG)([q.default], () => q.default.locale),
        E = n.useRef(null),
        [p, g] = n.useState(!1);
    n.useEffect(() => {
        let e = setTimeout(() => {
            d(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, d]),
        n.useEffect(() => {
            f(c);
        }, [c]),
        n.useEffect(() => {
            g(s && o);
        }, [s, o]);
    let h = n.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        C = n.useCallback(
            (e) => {
                H.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: m?.sessionId,
                    page_section: m?.pageSection,
                    page_category: m?.pageCategory,
                    page_index: m?.pageIndex,
                    page_size: m?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, m],
        ),
        y = n.useCallback(() => {
            l !== j.G2.CATALOG && t(j.G2.CATALOG), C(j.uY.SEARCH_ICON), g(!0), setTimeout(() => E.current?.focus());
        }, [l, t, C]),
        A = n.useCallback(() => {
            l !== j.G2.CATALOG && t(j.G2.CATALOG), C(j.uY.SEARCH_BAR);
        }, [l, t, C]),
        T = n.useCallback(() => {
            f(""), d(""), C(j.uY.SEARCH_BAR_CLEAR), s && g(!1);
        }, [d, C, s]),
        x = n.useCallback(() => {
            s && "" === b && g(!1);
        }, [s, b]),
        F = s && !p,
        _ = (0, r.jsx)(i.D, {
            className: U.qc,
            onClick: y,
            children: (0, r.jsx)($.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        R = (0, r.jsx)(w.I, {
            size: "sm",
            ref: E,
            onKeyDown: h,
            query: b,
            onChange: f,
            onClear: T,
            onBlur: x,
            placeholder: "en-US" === S ? I.intl.string(I.t.arz34K) : I.intl.string(I.t["hIt/Nm"]),
        }),
        G = { "--custom-search-bar-width": `${j.rr}px`, "--custom-search-bar-icon-width": `${j.Dy}px` };
    return F
        ? (0, r.jsx)("div", { style: G, children: _ })
        : (0, r.jsx)("div", {
              className: L()(U.ON, { [U.Nz]: p }),
              style: G,
              children: (0, r.jsx)(i.D, { ignoreKeyPress: !0, onClick: A, children: R }),
          });
}
var V = l(3666),
    Y = l(834730),
    W = l(812993),
    Q = l(761508),
    J = l(922016),
    X = l(900797),
    Z = l(847374),
    ee = l(955572),
    et = l(775602),
    el = l(421773);
function er(e) {
    let { tabs: t, selectedTab: l, onTabSelect: n, onClose: s, showOrbRentalNewBadge: a } = e;
    return (0, r.jsx)(F.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": I.intl.string(I.t["UKOtz+"]),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, r.jsx)(
            x.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: i, renderOverflowContent: o } = e;
                    if (null != o)
                        return (0, r.jsx)(x.Dr, { id: t, label: i, hasSubmenu: !0, children: o({ onClose: s }) }, t);
                    let c = t === j.G2.ORBS && a;
                    return (0, r.jsx)(
                        x.Dr,
                        {
                            id: t,
                            label: i,
                            trailingIndicator: t === l ? { type: "icon", icon: P.U } : void 0,
                            badge: c ? "new" : void 0,
                            action: () => n(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var en = l(755976);
function es(e) {
    let { label: t, icon: l, showNewBadge: n } = e;
    return (0, r.jsxs)(Y.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, r.jsxs)("span", {
                      className: en.nt,
                      children: [t, (0, r.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            n && (0, r.jsx)(W.Lp, { text: I.intl.string(I.t.y2b7CA), className: en.Ad }),
        ],
    });
}
function ea(e) {
    let {
        tab: t,
        label: l,
        selected: n,
        handleTransition: s,
        renderSubmenu: a,
        submenuOnly: i,
        showNewBadge: o,
        icon: c,
        trailingBadge: u,
    } = e;
    if (null != a)
        return (0, r.jsx)(ei, { tab: t, label: l, selected: n, handleTransition: s, renderSubmenu: a, submenuOnly: i });
    let d = (0, r.jsx)(Q.V.Item, {
        id: t,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: n ? t : void 0,
        onClick: () => s(t),
        className: en.Mf,
        "aria-label": l,
        children: (0, r.jsx)(es, { label: l, icon: c, showNewBadge: o }),
    });
    return null != u
        ? (0, r.jsxs)("div", {
              className: en.ju,
              children: [d, (0, r.jsx)(W.Lp, { disableColor: !0, text: u, className: en.qe })],
          })
        : d;
}
function ei(e) {
    let { tab: t, label: l, selected: s, handleTransition: a, renderSubmenu: i, submenuOnly: o } = e,
        c = n.useRef(null),
        u = n.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: f, onMouseLeave: m, cancelTimers: S } = (0, el.A)(100, 100),
        E = n.useCallback(() => {
            (u.current = et.Ay.keyboardModeEnabled), f();
        }, [f]),
        p = n.useCallback(() => {
            S(), b(!0), (u.current = et.Ay.keyboardModeEnabled), o || a(t);
        }, [S, b, o, a, t]);
    return (0, r.jsx)(J.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            S(), b(!0), (u.current = et.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !et.Ay.keyboardModeEnabled && (0, ee.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)("div", { onMouseEnter: f, onMouseLeave: m, children: i({ onClose: t }) });
        },
        children: (e, n) => {
            let { isShown: a } = n,
                i = a ? X.t : Z.a;
            return (0, r.jsx)(Q.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? t : void 0,
                onClick: p,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: en.Mf,
                "aria-label": l,
                children: (0, r.jsx)("div", {
                    "aria-hidden": "true",
                    className: en.Lj,
                    onMouseEnter: E,
                    onMouseLeave: m,
                    children: (0, r.jsx)(Y.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, r.jsxs)("span", {
                            className: en.hP,
                            children: [l, (0, r.jsx)(i, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e) {
    let { onTabSelect: t, tabs: l, selectedTab: s, selected: a } = e,
        i = n.useRef(null),
        o = n.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: f } = (0, el.A)(100, 100),
        m = n.useCallback(() => {
            (o.current = et.Ay.keyboardModeEnabled), d();
        }, [d]),
        S = n.useCallback(() => {
            f(), u(!0), (o.current = et.Ay.keyboardModeEnabled);
        }, [f, u]);
    return (0, r.jsx)(J.Y, {
        targetElementRef: i,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            f(), u(!0), (o.current = et.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            o.current && !et.Ay.keyboardModeEnabled && (0, ee.uS)(),
                u(!1),
                requestAnimationFrame(() => i.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, r.jsx)(er, { selectedTab: s, onClose: n, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                n = l ? X.t : Z.a;
            return (0, r.jsx)(Q.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a ? "more" : void 0,
                onClick: S,
                clickableRef: (e) => {
                    null != e && null != e.ref && (i.current = e.ref);
                },
                className: L()(en.Mf, en.OS),
                "aria-label": I.intl.string(I.t["UKOtz+"]),
                children: (0, r.jsx)("div", {
                    "aria-hidden": "true",
                    className: en.Lj,
                    onMouseEnter: m,
                    onMouseLeave: b,
                    children: (0, r.jsx)(Y.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, r.jsxs)("span", {
                            className: en.hP,
                            children: [I.intl.string(I.t["UKOtz+"]), (0, r.jsx)(n, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ec(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, j.dF)(l) && e === j.G2.CATALOG);
}
function eu(e) {
    let { className: t, selectedTab: l, tabs: s, onTabSelect: a } = e,
        [i, o] = n.useState(0),
        c = n.useRef(i),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: f,
        } = (0, V.Wv)({ items: s, itemGapPx: 32, maxLines: 1, containerWidth: i }),
        m = n.useMemo(() => s.slice(0, u + 1), [u, s]),
        S = n.useMemo(() => s.slice(u + 1), [u, s]),
        E = n.useRef(null),
        p = n.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (o(t), (c.current = t));
        }, []);
    (0, d.g)(E, p);
    let g = 0 !== i,
        h = S.some((e) => ec(e.tab, e, l));
    return (0, r.jsxs)("div", {
        className: L()(en.kL, t),
        ref: E,
        children: [
            (0, r.jsxs)("div", {
                className: en.Kk,
                "aria-hidden": "true",
                children: [
                    s.map((e, t) =>
                        (0, r.jsx)(
                            V.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, r.jsx)(ea, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ec(e.tab, e, l),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                    trailingBadge: e.trailingBadge,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        ref: f,
                        children: (0, r.jsx)(eo, { tabs: S, onTabSelect: a, selectedTab: l, selected: h }),
                    }),
                ],
            }),
            g &&
                (0, r.jsxs)(Q.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: a,
                    className: en.vR,
                    children: [
                        m.map((e) =>
                            (0, r.jsx)(
                                ea,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ec(e.tab, e, l),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                    trailingBadge: e.trailingBadge,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== S.length
                            ? (0, r.jsx)(eo, { tabs: S, onTabSelect: a, selectedTab: l, selected: h })
                            : null,
                    ],
                }),
        ],
    });
}
var ed = l(812729),
    eb = l.n(ed),
    ef = l(627363),
    em = l(587895),
    eS = l(733391),
    eE = l(832163),
    ep = l(44724),
    eg = l(486020);
l(801416);
var eh = l(518477),
    eC = l(275695),
    ey = l(933159);
function eA(e) {
    let { selectedTab: t, handleTransition: l } = e,
        T = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        L = (function (e) {
            let { location: t } = e;
            return S.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        F = (0, y.sk)("CollectiblesShopHeaderBar"),
        _ = (0, C.z)("CollectiblesShopHeaderBar"),
        G = null != (0, A.A)(),
        { searchQuery: v, itemTypeFilters: k, thirdPartyOnly: $, offerEligible: w } = (0, O.v)(),
        q = n.useRef(null),
        [U, V] = n.useState(!1);
    (0, d.g)(
        q,
        n.useCallback((e) => {
            V(e.contentRect.width < 800);
        }, []),
    );
    let { gameShops: Y, hasGameShops: W } = (function (e) {
            let { enabled: t } = e,
                l = (0, D.uM)(),
                r = (0, a.yK)(
                    [eE.A],
                    () =>
                        t
                            ? (eE.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            n.useEffect(() => {
                t && (0, eS.Xw)();
            }, [t]),
                n.useEffect(() => {
                    r.length > 0 &&
                        ef.Ay.fetchApplications(
                            r.map((e) => e.applicationId),
                            !1,
                        );
                }, [r]);
            let s = n.useCallback(
                    (e) => {
                        H.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: l?.sessionId,
                            page_type: j.G2.GAME_SHOPS,
                            page_category: l?.pageCategory,
                            page_section: l?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, ep.default)({ applicationId: e }).catch(() => {});
                    },
                    [l],
                ),
                i = (0, a.bG)(
                    [em.A],
                    () =>
                        r.flatMap((e) => {
                            let t = em.A.getApplication(e.applicationId),
                                l = t?.name;
                            return null == l
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: l,
                                          iconSrc:
                                              t?.icon != null
                                                  ? eg.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [r],
                    eb(),
                );
            return {
                gameShops: n.useMemo(() => i.map((e) => ({ ...e, onSelect: () => s(e.id) })), [i, s]),
                hasGameShops: r.length > 0,
            };
        })({ enabled: L }),
        Q = (0, b.H)({ location: "collectibles_shop_header_bar" }),
        J = n.useMemo(() => {
            let e = [
                { tab: j.G2.HOME, label: I.intl.string(I.t["xNiB/O"]) },
                {
                    tab: j.G2.CATALOG,
                    label: I.intl.string(I.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: n } = e;
                        return (0, r.jsx)(B, {
                            handleTransition: l,
                            onClose: n,
                            selectedTab: t,
                            itemTypeFilters: k,
                            thirdPartyOnly: $,
                            offerEligible: w,
                        });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: n } = e;
                        return (function (e) {
                            let {
                                    selectedTab: t,
                                    itemTypeFilters: l,
                                    thirdPartyOnly: n,
                                    offerEligible: s,
                                    canViewProfileFrames: a,
                                    collabsFilterEnabled: i,
                                    hasActivePromotion: o,
                                    onTabSelect: c,
                                    onClose: u,
                                } = e,
                                d = N(t, l, n, s);
                            return M({ canViewProfileFrames: a, collabsFilterEnabled: i, hasActivePromotion: o }).map(
                                (e) => {
                                    let { tab: t, labelKey: l } = e,
                                        n = t === d;
                                    return (0, r.jsx)(
                                        x.Dr,
                                        {
                                            id: t,
                                            label: I.intl.string(l),
                                            badge: t === j.G2.PROFILE_FRAMES ? "new" : void 0,
                                            trailingIndicator: n ? { type: "icon", icon: P.U } : void 0,
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
                            itemTypeFilters: k,
                            thirdPartyOnly: $,
                            offerEligible: w,
                            canViewProfileFrames: F,
                            collabsFilterEnabled: _,
                            hasActivePromotion: G,
                            onTabSelect: l,
                            onClose: n,
                        });
                    },
                },
            ];
            return (
                e.push({ tab: j.G2.ORBS, label: I.intl.string(I.t.EBYkzk) }),
                L &&
                    W &&
                    e.push({
                        tab: j.G2.GAME_SHOPS,
                        label: I.intl.string(I.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, r.jsx)(R, { shops: Y, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: l } = e;
                                return t.map((e) =>
                                    (0, r.jsx)(
                                        x.Dr,
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
                Q &&
                    e.push({
                        tab: j.G2.GAME_SERVERS,
                        label: I.intl.string(eC.default.vCzwM7),
                        trailingBadge: I.intl.string(I.t.oW0eUd),
                    }),
                e
            );
        }, [l, Y, t, k, $, w, F, _, G, L, W, Q]),
        X = t === j.G2.ORBS ? z.liQ.SHOP_ORBS_TAB : z.liQ.COLLECTIBLES_SHOP,
        Z = n.useCallback(() => {
            (0, p.Y)({ pageType: X, sectionType: z.JJy.ORBS_BALANCE_MENU, ctaObject: z.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.mA)({ fromContent: s.u.ORBS_BALANCE_MENU });
        }, [X]),
        ee = n.useCallback(() => {
            T?.id != null && (0, E.openUserProfileModal)({ userId: T.id, tabSection: eh.RP.WISHLIST });
        }, [T?.id]),
        et = n.useCallback(
            (e) => {
                l(e);
            },
            [l],
        );
    return (0, r.jsx)("div", {
        ref: q,
        children: (0, r.jsxs)(f.A, {
            disableDoubleClick: !0,
            className: ey.jr,
            toolbar: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(K, { handleTransition: l, selectedTab: t, isNarrow: U, hasText: "" !== v }),
                    (0, r.jsx)(i.D, {
                        className: ey.ij,
                        onClick: ee,
                        "aria-label": I.intl.string(I.t["7lZ31J"]),
                        children: (0, r.jsx)(o.C, { size: "xs", color: "currentColor" }),
                    }),
                    (0, r.jsx)(g.SS, {
                        analyticsPage: X,
                        cardAlignment: g.SS.CardAlignment.END,
                        ctaText: I.intl.string(I.t.VC4Mq0),
                        ctaOnClick: Z,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, r.jsx)(i.D, {
                    className: ey.sU,
                    onClick: () => l(j.G2.HOME),
                    "aria-label": I.intl.string(I.t["5upuqx"]),
                    children: (0, r.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, r.jsx)(eu, { tabs: J, selectedTab: t, onTabSelect: et }),
            ],
        }),
    });
}
