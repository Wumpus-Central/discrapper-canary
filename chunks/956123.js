r.d(t, { G: () => eg }), r(321073);
var l = r(627968),
    n = r(64700),
    s = r(696292),
    a = r(17928),
    o = r(939249),
    i = r(926268),
    c = r(34188),
    u = r(661531),
    d = r(770178),
    b = r(742589),
    m = r(617986);
let p = (0, r(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S = r(975732),
    E = r(318346),
    h = r(371446),
    f = r(70926),
    C = r(287809),
    g = r(13875),
    A = r(23161),
    y = r(503698),
    T = r.n(y),
    O = r(477782),
    x = r(509434),
    I = r(980707),
    L = r(81341),
    _ = r(146919),
    R = r(375708);
function v(e) {
    let { shops: t, onClose: r } = e,
        n = (0, _.yB)("CollectiblesGameShopsContextMenu"),
        s = (0, L.I)({ location: "CollectiblesGameShopsContextMenu" });
    return (0, l.jsx)("div", {
        className: T()({ [_.jP]: n }),
        children: (0, l.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: T()({ [_.jP]: n }),
            onClose: r,
            "aria-label": R.intl.string(R.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, l.jsx)(
                    O.Dr,
                    {
                        id: e.id,
                        label: e.label,
                        leadingAccessory: null != e.iconSrc && s ? { type: "image", src: e.iconSrc } : void 0,
                        trailingIndicator: s ? void 0 : { type: "icon", icon: x.I },
                        action: e.onSelect,
                    },
                    e.id,
                ),
            ),
        }),
    });
}
var j = r(641150),
    F = r(478016),
    G = r(758836);
let P = [
        { tab: G.G2.AVATAR_DECORATIONS, labelKey: R.t.dRZYNE },
        { tab: G.G2.NAMEPLATES, labelKey: R.t.V68Fqz },
        { tab: G.G2.PROFILE_EFFECTS, labelKey: R.t["1cNjtx"] },
        { tab: G.G2.PROFILE_FRAMES, labelKey: R.t.ecTJkR },
        { tab: G.G2.BUNDLES, labelKey: R.t.FYFpps },
        { tab: G.G2.CATALOG, labelKey: R.t.xFcotU },
    ],
    k = {
        [j.q.ALL]: G.G2.CATALOG,
        [j.q.AVATAR_DECORATION]: G.G2.AVATAR_DECORATIONS,
        [j.q.PROFILE_EFFECT]: G.G2.PROFILE_EFFECTS,
        [j.q.NAMEPLATE]: G.G2.NAMEPLATES,
        [j.q.PROFILE_FRAME]: G.G2.PROFILE_FRAMES,
        [j.q.BUNDLE]: G.G2.BUNDLES,
    };
function M(e, t) {
    if (e !== G.G2.CATALOG || 0 === t.size) return e;
    let r = t.values().next().value;
    return null == r ? e : (k[r] ?? e);
}
function N(e) {
    let { handleTransition: t, onClose: r, selectedTab: n, itemTypeFilters: s } = e,
        a = (0, _.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, g.sk)("CollectiblesIndexPageContextMenu"),
        i = M(n, s),
        c = P.filter((e) => {
            let { tab: t } = e;
            return o || t !== G.G2.PROFILE_FRAMES;
        });
    return (0, l.jsx)("div", {
        className: T()({ [_.jP]: a }),
        children: (0, l.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: T()({ [_.jP]: a }),
            onClose: r,
            "aria-label": R.intl.string(R.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: r, labelKey: n } = e,
                    s = r === i;
                return (0, l.jsx)(
                    O.Dr,
                    {
                        id: r,
                        label: R.intl.string(n),
                        badge: r === G.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: s ? { type: "icon", icon: F.U } : void 0,
                        action: () => {
                            t(r);
                        },
                    },
                    r,
                );
            }),
        }),
    });
}
var $ = r(7689),
    w = r(892547),
    D = r(773669),
    B = r(174459),
    H = r(440938),
    q = r(652215),
    U = r(113960);
function z(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: s, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, A.v)(),
        [b, m] = n.useState(""),
        p = (0, H.uM)(),
        S = (0, a.bG)([D.default], () => D.default.locale),
        E = n.useRef(null),
        [h, f] = n.useState(!1);
    n.useEffect(() => {
        let e = setTimeout(() => {
            d(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, d]),
        n.useEffect(() => {
            m(c);
        }, [c]),
        n.useEffect(() => {
            f(s && i);
        }, [s, i]);
    let C = n.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        g = n.useCallback(
            (e) => {
                B.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: p?.sessionId,
                    page_section: p?.pageSection,
                    page_category: p?.pageCategory,
                    page_index: p?.pageIndex,
                    page_size: p?.pageSize,
                    cta_name: e,
                    page_type: r,
                });
            },
            [r, p],
        ),
        y = n.useCallback(() => {
            r !== G.G2.CATALOG && t(G.G2.CATALOG), g(G.uY.SEARCH_ICON), f(!0), setTimeout(() => E.current?.focus());
        }, [r, t, g]),
        O = n.useCallback(() => {
            r !== G.G2.CATALOG && t(G.G2.CATALOG), g(G.uY.SEARCH_BAR);
        }, [r, t, g]),
        x = n.useCallback(() => {
            m(""), d(""), g(G.uY.SEARCH_BAR_CLEAR), s && f(!1);
        }, [d, g, s]),
        I = n.useCallback(() => {
            s && "" === b && f(!1);
        }, [s, b]),
        L = s && !h,
        _ = (0, l.jsx)(o.D, {
            className: U.qc,
            onClick: y,
            children: (0, l.jsx)($.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        v = (0, l.jsx)(w.I, {
            size: "sm",
            ref: E,
            onKeyDown: C,
            query: b,
            onChange: m,
            onClear: x,
            onBlur: I,
            placeholder: "en-US" === S ? R.intl.string(R.t.arz34K) : R.intl.string(R.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${G.rr}px`, "--custom-search-bar-icon-width": `${G.Dy}px` };
    return L
        ? (0, l.jsx)("div", { style: j, children: _ })
        : (0, l.jsx)("div", {
              className: T()(U.ON, { [U.Nz]: h }),
              style: j,
              children: (0, l.jsx)(o.D, { ignoreKeyPress: !0, onClick: O, children: v }),
          });
}
var V = r(3666),
    W = r(834730),
    K = r(777666),
    Y = r(761508),
    Q = r(922016),
    J = r(900797),
    X = r(847374),
    Z = r(955572),
    ee = r(775602),
    et = r(421773);
function er(e) {
    let { tabs: t, selectedTab: r, onTabSelect: n, onClose: s, showOrbRentalNewBadge: a } = e;
    return (0, l.jsx)(I.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": R.intl.string(R.t["UKOtz+"]),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, l.jsx)(
            O.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, l.jsx)(O.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: s }) }, t);
                    let c = t === G.G2.ORBS && a;
                    return (0, l.jsx)(
                        O.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === r ? { type: "icon", icon: F.U } : void 0,
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
var el = r(584512);
function en(e) {
    let { label: t, icon: r, showNewBadge: n } = e;
    return (0, l.jsxs)(W.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != r
                ? (0, l.jsxs)("span", {
                      className: el.nt,
                      children: [t, (0, l.jsx)(r, { size: "xs", color: "currentColor" })],
                  })
                : t,
            n && (0, l.jsx)(K.Lp, { text: R.intl.string(R.t.y2b7CA), className: el.Ad }),
        ],
    });
}
function es(e) {
    let {
        tab: t,
        label: r,
        selected: n,
        handleTransition: s,
        renderSubmenu: a,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != a
        ? (0, l.jsx)(ea, { tab: t, label: r, selected: n, handleTransition: s, renderSubmenu: a, submenuOnly: o })
        : (0, l.jsx)(Y.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: n ? t : void 0,
              onClick: () => s(t),
              className: el.Mf,
              "aria-label": r,
              children: (0, l.jsx)(en, { label: r, icon: c, showNewBadge: i }),
          });
}
function ea(e) {
    let { tab: t, label: r, selected: s, handleTransition: a, renderSubmenu: o, submenuOnly: i } = e,
        c = n.useRef(null),
        u = n.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: p, cancelTimers: S } = (0, et.A)(100, 100),
        E = n.useCallback(() => {
            (u.current = ee.A.keyboardModeEnabled), m();
        }, [m]),
        h = n.useCallback(() => {
            S(), b(!0), (u.current = ee.A.keyboardModeEnabled), i || a(t);
        }, [S, b, i, a, t]);
    return (0, l.jsx)(Q.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            S(), b(!0), (u.current = ee.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !ee.A.keyboardModeEnabled && (0, Z.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)("div", { onMouseEnter: m, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, n) => {
            let { isShown: a } = n,
                o = a ? J.t : X.a;
            return (0, l.jsx)(Y.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? t : void 0,
                onClick: h,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: el.Mf,
                "aria-label": r,
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: el.Lj,
                    onMouseEnter: E,
                    onMouseLeave: p,
                    children: (0, l.jsx)(W.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: el.hP,
                            children: [r, (0, l.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e) {
    let { onTabSelect: t, tabs: r, selectedTab: s, selected: a } = e,
        o = n.useRef(null),
        i = n.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, et.A)(100, 100),
        p = n.useCallback(() => {
            (i.current = ee.A.keyboardModeEnabled), d();
        }, [d]),
        S = n.useCallback(() => {
            m(), u(!0), (i.current = ee.A.keyboardModeEnabled);
        }, [m, u]);
    return (0, l.jsx)(Q.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = ee.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !ee.A.keyboardModeEnabled && (0, Z.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, l.jsx)(er, { selectedTab: s, onClose: n, tabs: r, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: r } = t,
                n = r ? J.t : X.a;
            return (0, l.jsx)(Y.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a ? "more" : void 0,
                onClick: S,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: T()(el.Mf, el.OS),
                "aria-label": R.intl.string(R.t["UKOtz+"]),
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: el.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, l.jsx)(W.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: el.hP,
                            children: [R.intl.string(R.t["UKOtz+"]), (0, l.jsx)(n, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ei(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, G.dF)(r) && e === G.G2.CATALOG);
}
function ec(e) {
    let { className: t, selectedTab: r, tabs: s, onTabSelect: a } = e,
        [o, i] = n.useState(0),
        c = n.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, V.Wv)({ items: s, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = n.useMemo(() => s.slice(0, u + 1), [u, s]),
        S = n.useMemo(() => s.slice(u + 1), [u, s]),
        E = n.useRef(null),
        h = n.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(E, h);
    let f = 0 !== o,
        C = S.some((e) => ei(e.tab, e, r));
    return (0, l.jsxs)("div", {
        className: T()(el.kL, t),
        ref: E,
        children: [
            (0, l.jsxs)("div", {
                className: el.Kk,
                "aria-hidden": "true",
                children: [
                    s.map((e, t) =>
                        (0, l.jsx)(
                            V.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, l.jsx)(es, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, l.jsx)("div", {
                        ref: m,
                        children: (0, l.jsx)(eo, { tabs: S, onTabSelect: a, selectedTab: r, selected: C }),
                    }),
                ],
            }),
            f &&
                (0, l.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: a,
                    className: el.vR,
                    children: [
                        p.map((e) =>
                            (0, l.jsx)(
                                es,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== S.length
                            ? (0, l.jsx)(eo, { tabs: S, onTabSelect: a, selectedTab: r, selected: C })
                            : null,
                    ],
                }),
        ],
    });
}
var eu = r(812729),
    ed = r.n(eu),
    eb = r(627363),
    em = r(587895),
    ep = r(733391),
    eS = r(832163),
    eE = r(44724),
    eh = r(486020);
r(801416);
var ef = r(518477),
    eC = r(773743);
function eg(e) {
    let { selectedTab: t, handleTransition: r } = e,
        y = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        { enabled: T } = (0, h.Z)({ location: "collectibles_shop_header_bar" }),
        I = (function (e) {
            let { location: t } = e;
            return p.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        _ = (0, g.sk)("CollectiblesShopHeaderBar"),
        { searchQuery: j, itemTypeFilters: k } = (0, A.v)(),
        $ = n.useRef(null),
        [w, D] = n.useState(!1);
    (0, d.g)(
        $,
        n.useCallback((e) => {
            D(e.contentRect.width < 800);
        }, []),
    );
    let U = (function (e) {
            let { enabled: t } = e,
                r = (0, H.uM)(),
                l = (0, a.yK)(
                    [eS.A],
                    () =>
                        t
                            ? (eS.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            n.useEffect(() => {
                t && (0, ep.Xw)();
            }, [t]),
                n.useEffect(() => {
                    l.length > 0 &&
                        eb.Ay.fetchApplications(
                            l.map((e) => e.applicationId),
                            !1,
                        );
                }, [l]);
            let s = n.useCallback(
                    (e) => {
                        B.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: r?.sessionId,
                            page_type: G.G2.GAME_SHOPS,
                            page_category: r?.pageCategory,
                            page_section: r?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, eE.default)({ applicationId: e }).catch(() => {});
                    },
                    [r],
                ),
                o = (0, a.bG)(
                    [em.A],
                    () =>
                        l.flatMap((e) => {
                            let t = em.A.getApplication(e.applicationId),
                                r = t?.name;
                            return null == r
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: r,
                                          iconSrc:
                                              t?.icon != null
                                                  ? eh.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [l],
                    ed(),
                );
            return n.useMemo(() => o.map((e) => ({ ...e, onSelect: () => s(e.id) })), [o, s]);
        })({ enabled: I }),
        V = U.length > 0,
        W = n.useMemo(() => {
            let e = [
                { tab: G.G2.HOME, label: R.intl.string(R.t["xNiB/O"]) },
                {
                    tab: G.G2.CATALOG,
                    label: R.intl.string(R.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: n } = e;
                        return (0, l.jsx)(N, { handleTransition: r, onClose: n, selectedTab: t, itemTypeFilters: k });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: n } = e;
                        return (function (e) {
                            let {
                                    selectedTab: t,
                                    itemTypeFilters: r,
                                    canViewProfileFrames: n,
                                    onTabSelect: s,
                                    onClose: a,
                                } = e,
                                o = M(t, r);
                            return P.filter((e) => {
                                let { tab: t } = e;
                                return n || t !== G.G2.PROFILE_FRAMES;
                            }).map((e) => {
                                let { tab: t, labelKey: r } = e,
                                    n = t === o;
                                return (0, l.jsx)(
                                    O.Dr,
                                    {
                                        id: t,
                                        label: R.intl.string(r),
                                        badge: t === G.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: n ? { type: "icon", icon: F.U } : void 0,
                                        action: () => {
                                            s(t), a();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ selectedTab: t, itemTypeFilters: k, canViewProfileFrames: _, onTabSelect: r, onClose: n });
                    },
                },
            ];
            return (
                T && e.push({ tab: G.G2.ORBS, label: R.intl.string(R.t.EBYkzk) }),
                I &&
                    V &&
                    e.push({
                        tab: G.G2.GAME_SHOPS,
                        label: R.intl.string(R.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, l.jsx)(v, { shops: U, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: r } = e,
                                    n = (0, L.V)({ location: "CollectiblesGameShopsContextMenu" });
                                return t.map((e) =>
                                    (0, l.jsx)(
                                        O.Dr,
                                        {
                                            id: e.id,
                                            label: e.label,
                                            leadingAccessory:
                                                null != e.iconSrc && n ? { type: "image", src: e.iconSrc } : void 0,
                                            trailingIndicator: n ? void 0 : { type: "icon", icon: x.I },
                                            action: () => {
                                                e.onSelect(), r();
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: U, onClose: t });
                        },
                    }),
                e
            );
        }, [T, r, U, t, k, _, I, V]),
        K = t === G.G2.ORBS ? q.liQ.SHOP_ORBS_TAB : q.liQ.COLLECTIBLES_SHOP,
        Y = n.useCallback(() => {
            (0, E.Y)({ pageType: K, sectionType: q.JJy.ORBS_BALANCE_MENU, ctaObject: q.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.navigateToQuestHome)({ fromContent: s.u.ORBS_BALANCE_MENU });
        }, [K]),
        Q = n.useCallback(() => {
            y?.id != null && (0, S.openUserProfileModal)({ userId: y.id, tabSection: ef.RP.WISHLIST });
        }, [y?.id]),
        J = n.useCallback(
            (e) => {
                r(e);
            },
            [r],
        );
    return (0, l.jsx)("div", {
        ref: $,
        children: (0, l.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eC.jr,
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z, { handleTransition: r, selectedTab: t, isNarrow: w, hasText: "" !== j }),
                    (0, l.jsx)(o.D, {
                        className: eC.ij,
                        onClick: Q,
                        "aria-label": R.intl.string(R.t["7lZ31J"]),
                        children: (0, l.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    T &&
                        (0, l.jsx)(f.SS, {
                            analyticsPage: K,
                            cardAlignment: f.SS.CardAlignment.END,
                            ctaText: R.intl.string(R.t.VC4Mq0),
                            ctaOnClick: Y,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(o.D, {
                    className: eC.sU,
                    onClick: () => r(G.G2.HOME),
                    "aria-label": R.intl.string(R.t["5upuqx"]),
                    children: (0, l.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(ec, { tabs: W, selectedTab: t, onTabSelect: J }),
            ],
        }),
    });
}
