l.d(t, { G: () => ex }), l(321073);
var n = l(627968),
    a = l(64700),
    s = l(696292),
    r = l(17928),
    o = l(939249),
    i = l(926268),
    c = l(34188),
    u = l(661531),
    d = l(770178),
    b = l(742589),
    m = l(140218),
    p = l(617986);
let C = (0, l(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var E = l(975732),
    A = l(318346),
    S = l(70926),
    f = l(287809),
    h = l(623655),
    x = l(13875),
    g = l(23161),
    O = l(503698),
    L = l.n(O),
    y = l(477782),
    T = l(980707),
    _ = l(146919),
    I = l(375708);
function j(e) {
    let { shops: t, onClose: l } = e,
        a = (0, _.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: L()({ [_.jP]: a }),
        children: (0, n.jsx)(T.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: L()({ [_.jP]: a }),
            onClose: l,
            "aria-label": I.intl.string(I.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    y.Dr,
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
    G = l(478016),
    v = l(758836);
let k = [
        { tab: v.G2.AVATAR_DECORATIONS, labelKey: I.t.dRZYNE },
        { tab: v.G2.NAMEPLATES, labelKey: I.t.V68Fqz },
        { tab: v.G2.PROFILE_EFFECTS, labelKey: I.t["1cNjtx"] },
        { tab: v.G2.PROFILE_FRAMES, labelKey: I.t.ecTJkR },
        { tab: v.G2.BUNDLES, labelKey: I.t.FYFpps },
        { tab: v.G2.COLLABS, labelKey: I.t["+W8gb+"] },
        { tab: v.G2.CATALOG, labelKey: I.t.xFcotU },
    ],
    M = {
        [R.q.ALL]: v.G2.CATALOG,
        [R.q.AVATAR_DECORATION]: v.G2.AVATAR_DECORATIONS,
        [R.q.PROFILE_EFFECT]: v.G2.PROFILE_EFFECTS,
        [R.q.NAMEPLATE]: v.G2.NAMEPLATES,
        [R.q.PROFILE_FRAME]: v.G2.PROFILE_FRAMES,
        [R.q.BUNDLE]: v.G2.BUNDLES,
    };
function N(e, t, l) {
    if (e !== v.G2.CATALOG) return e;
    if (t.size > 0) {
        let l = t.values().next().value;
        return null == l ? e : (M[l] ?? e);
    }
    return l ? v.G2.COLLABS : e;
}
function F(e) {
    let { canViewProfileFrames: t, collabsFilterEnabled: l } = e;
    return k.filter((e) => {
        let { tab: n } = e;
        return (n !== v.G2.PROFILE_FRAMES || !!t) && (n !== v.G2.COLLABS || !!l);
    });
}
function P(e) {
    let { handleTransition: t, onClose: l, selectedTab: a, itemTypeFilters: s, thirdPartyOnly: r } = e,
        o = (0, _.yB)("CollectiblesIndexPageContextMenu"),
        i = (0, x.sk)("CollectiblesIndexPageContextMenu"),
        c = (0, h.z)("CollectiblesIndexPageContextMenu"),
        u = N(a, s, r),
        d = F({ canViewProfileFrames: i, collabsFilterEnabled: c });
    return (0, n.jsx)("div", {
        className: L()({ [_.jP]: o }),
        children: (0, n.jsx)(T.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: L()({ [_.jP]: o }),
            onClose: l,
            "aria-label": I.intl.string(I.t.xFcotU),
            onSelect: () => {},
            children: d.map((e) => {
                let { tab: l, labelKey: a } = e,
                    s = l === u;
                return (0, n.jsx)(
                    y.Dr,
                    {
                        id: l,
                        label: I.intl.string(a),
                        badge: l === v.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: s ? { type: "icon", icon: G.U } : void 0,
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
    B = l(892547),
    w = l(773669),
    D = l(174459),
    H = l(440938),
    U = l(652215),
    q = l(748992);
function z(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: s, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, g.v)(),
        [b, m] = a.useState(""),
        p = (0, H.uM)(),
        C = (0, r.bG)([w.default], () => w.default.locale),
        E = a.useRef(null),
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
                D.default.track(U.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: p?.sessionId,
                    page_section: p?.pageSection,
                    page_category: p?.pageCategory,
                    page_index: p?.pageIndex,
                    page_size: p?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, p],
        ),
        x = a.useCallback(() => {
            l !== v.G2.CATALOG && t(v.G2.CATALOG), h(v.uY.SEARCH_ICON), S(!0), setTimeout(() => E.current?.focus());
        }, [l, t, h]),
        O = a.useCallback(() => {
            l !== v.G2.CATALOG && t(v.G2.CATALOG), h(v.uY.SEARCH_BAR);
        }, [l, t, h]),
        y = a.useCallback(() => {
            m(""), d(""), h(v.uY.SEARCH_BAR_CLEAR), s && S(!1);
        }, [d, h, s]),
        T = a.useCallback(() => {
            s && "" === b && S(!1);
        }, [s, b]),
        _ = s && !A,
        j = (0, n.jsx)(o.D, {
            className: q.qc,
            onClick: x,
            children: (0, n.jsx)($.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        R = (0, n.jsx)(B.I, {
            size: "sm",
            ref: E,
            onKeyDown: f,
            query: b,
            onChange: m,
            onClear: y,
            onBlur: T,
            placeholder: "en-US" === C ? I.intl.string(I.t.arz34K) : I.intl.string(I.t["hIt/Nm"]),
        }),
        G = { "--custom-search-bar-width": `${v.rr}px`, "--custom-search-bar-icon-width": `${v.Dy}px` };
    return _
        ? (0, n.jsx)("div", { style: G, children: j })
        : (0, n.jsx)("div", {
              className: L()(q.ON, { [q.Nz]: A }),
              style: G,
              children: (0, n.jsx)(o.D, { ignoreKeyPress: !0, onClick: O, children: R }),
          });
}
var K = l(3666),
    V = l(834730),
    W = l(812993),
    Y = l(761508),
    J = l(922016),
    Q = l(900797),
    X = l(847374),
    Z = l(955572),
    ee = l(775602),
    et = l(421773);
function el(e) {
    let { tabs: t, selectedTab: l, onTabSelect: a, onClose: s, showOrbRentalNewBadge: r } = e;
    return (0, n.jsx)(T.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": I.intl.string(I.t["UKOtz+"]),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, n.jsx)(
            y.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, n.jsx)(y.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: s }) }, t);
                    let c = t === v.G2.ORBS && r;
                    return (0, n.jsx)(
                        y.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === l ? { type: "icon", icon: G.U } : void 0,
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
var en = l(755976);
function ea(e) {
    let { label: t, icon: l, showNewBadge: a } = e;
    return (0, n.jsxs)(V.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, n.jsxs)("span", {
                      className: en.nt,
                      children: [t, (0, n.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            a && (0, n.jsx)(W.Lp, { text: I.intl.string(I.t.y2b7CA), className: en.Ad }),
        ],
    });
}
function es(e) {
    let {
        tab: t,
        label: l,
        selected: a,
        handleTransition: s,
        renderSubmenu: r,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != r
        ? (0, n.jsx)(er, { tab: t, label: l, selected: a, handleTransition: s, renderSubmenu: r, submenuOnly: o })
        : (0, n.jsx)(Y.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: a ? t : void 0,
              onClick: () => s(t),
              className: en.Mf,
              "aria-label": l,
              children: (0, n.jsx)(ea, { label: l, icon: c, showNewBadge: i }),
          });
}
function er(e) {
    let { tab: t, label: l, selected: s, handleTransition: r, renderSubmenu: o, submenuOnly: i } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: p, cancelTimers: C } = (0, et.A)(100, 100),
        E = a.useCallback(() => {
            (u.current = ee.Ay.keyboardModeEnabled), m();
        }, [m]),
        A = a.useCallback(() => {
            C(), b(!0), (u.current = ee.Ay.keyboardModeEnabled), i || r(t);
        }, [C, b, i, r, t]);
    return (0, n.jsx)(J.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            C(), b(!0), (u.current = ee.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !ee.Ay.keyboardModeEnabled && (0, Z.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: m, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, a) => {
            let { isShown: r } = a,
                o = r ? Q.t : X.a;
            return (0, n.jsx)(Y.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? t : void 0,
                onClick: A,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: en.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: en.Lj,
                    onMouseEnter: E,
                    onMouseLeave: p,
                    children: (0, n.jsx)(V.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: en.hP,
                            children: [l, (0, n.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e) {
    let { onTabSelect: t, tabs: l, selectedTab: s, selected: r } = e,
        o = a.useRef(null),
        i = a.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, et.A)(100, 100),
        p = a.useCallback(() => {
            (i.current = ee.Ay.keyboardModeEnabled), d();
        }, [d]),
        C = a.useCallback(() => {
            m(), u(!0), (i.current = ee.Ay.keyboardModeEnabled);
        }, [m, u]);
    return (0, n.jsx)(J.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = ee.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !ee.Ay.keyboardModeEnabled && (0, Z.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(el, { selectedTab: s, onClose: a, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                a = l ? Q.t : X.a;
            return (0, n.jsx)(Y.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r ? "more" : void 0,
                onClick: C,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: L()(en.Mf, en.OS),
                "aria-label": I.intl.string(I.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: en.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, n.jsx)(V.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: en.hP,
                            children: [I.intl.string(I.t["UKOtz+"]), (0, n.jsx)(a, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ei(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, v.dF)(l) && e === v.G2.CATALOG);
}
function ec(e) {
    let { className: t, selectedTab: l, tabs: s, onTabSelect: r } = e,
        [o, i] = a.useState(0),
        c = a.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, K.Wv)({ items: s, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = a.useMemo(() => s.slice(0, u + 1), [u, s]),
        C = a.useMemo(() => s.slice(u + 1), [u, s]),
        E = a.useRef(null),
        A = a.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(E, A);
    let S = 0 !== o,
        f = C.some((e) => ei(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: L()(en.kL, t),
        ref: E,
        children: [
            (0, n.jsxs)("div", {
                className: en.Kk,
                "aria-hidden": "true",
                children: [
                    s.map((e, t) =>
                        (0, n.jsx)(
                            K.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, n.jsx)(es, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, l),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: m,
                        children: (0, n.jsx)(eo, { tabs: C, onTabSelect: r, selectedTab: l, selected: f }),
                    }),
                ],
            }),
            S &&
                (0, n.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: r,
                    className: en.vR,
                    children: [
                        p.map((e) =>
                            (0, n.jsx)(
                                es,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, l),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== C.length
                            ? (0, n.jsx)(eo, { tabs: C, onTabSelect: r, selectedTab: l, selected: f })
                            : null,
                    ],
                }),
        ],
    });
}
var eu = l(812729),
    ed = l.n(eu),
    eb = l(627363),
    em = l(587895),
    ep = l(733391),
    eC = l(832163),
    eE = l(44724),
    eA = l(486020);
l(801416);
var eS = l(518477),
    ef = l(576709),
    eh = l(933159);
function ex(e) {
    let { selectedTab: t, handleTransition: l } = e,
        O = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        L = (function (e) {
            let { location: t } = e;
            return C.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        T = (0, x.sk)("CollectiblesShopHeaderBar"),
        _ = (0, h.z)("CollectiblesShopHeaderBar"),
        { searchQuery: R, itemTypeFilters: k, thirdPartyOnly: M } = (0, g.v)(),
        $ = a.useRef(null),
        [B, w] = a.useState(!1);
    (0, d.g)(
        $,
        a.useCallback((e) => {
            w(e.contentRect.width < 800);
        }, []),
    );
    let q = (function (e) {
            let { enabled: t } = e,
                l = (0, H.uM)(),
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
                        eb.Ay.fetchApplications(
                            n.map((e) => e.applicationId),
                            !1,
                        );
                }, [n]);
            let s = a.useCallback(
                    (e) => {
                        D.default.track(U.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: l?.sessionId,
                            page_type: v.G2.GAME_SHOPS,
                            page_category: l?.pageCategory,
                            page_section: l?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, eE.default)({ applicationId: e }).catch(() => {});
                    },
                    [l],
                ),
                o = (0, r.bG)(
                    [em.A],
                    () =>
                        n.flatMap((e) => {
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
                                                  ? eA.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [n],
                    ed(),
                );
            return a.useMemo(() => o.map((e) => ({ ...e, onSelect: () => s(e.id) })), [o, s]);
        })({ enabled: L }),
        K = q.length > 0,
        V = (0, m.H)({ location: "collectibles_shop_header_bar" }),
        W = a.useMemo(() => {
            let e = [
                { tab: v.G2.HOME, label: I.intl.string(I.t["xNiB/O"]) },
                {
                    tab: v.G2.CATALOG,
                    label: I.intl.string(I.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: a } = e;
                        return (0, n.jsx)(P, {
                            handleTransition: l,
                            onClose: a,
                            selectedTab: t,
                            itemTypeFilters: k,
                            thirdPartyOnly: M,
                        });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: a } = e;
                        return (function (e) {
                            let {
                                    selectedTab: t,
                                    itemTypeFilters: l,
                                    thirdPartyOnly: a,
                                    canViewProfileFrames: s,
                                    collabsFilterEnabled: r,
                                    onTabSelect: o,
                                    onClose: i,
                                } = e,
                                c = N(t, l, a);
                            return F({ canViewProfileFrames: s, collabsFilterEnabled: r }).map((e) => {
                                let { tab: t, labelKey: l } = e,
                                    a = t === c;
                                return (0, n.jsx)(
                                    y.Dr,
                                    {
                                        id: t,
                                        label: I.intl.string(l),
                                        badge: t === v.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: a ? { type: "icon", icon: G.U } : void 0,
                                        action: () => {
                                            o(t), i();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({
                            selectedTab: t,
                            itemTypeFilters: k,
                            thirdPartyOnly: M,
                            canViewProfileFrames: T,
                            collabsFilterEnabled: _,
                            onTabSelect: l,
                            onClose: a,
                        });
                    },
                },
            ];
            return (
                e.push({ tab: v.G2.ORBS, label: I.intl.string(I.t.EBYkzk) }),
                V && e.push({ tab: v.G2.GAME_SERVERS, label: I.intl.string(ef.default.vCzwM7) }),
                L &&
                    K &&
                    e.push({
                        tab: v.G2.GAME_SHOPS,
                        label: I.intl.string(I.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(j, { shops: q, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: l } = e;
                                return t.map((e) =>
                                    (0, n.jsx)(
                                        y.Dr,
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
                            })({ shops: q, onClose: t });
                        },
                    }),
                e
            );
        }, [l, q, t, k, M, T, _, L, K, V]),
        Y = t === v.G2.ORBS ? U.liQ.SHOP_ORBS_TAB : U.liQ.COLLECTIBLES_SHOP,
        J = a.useCallback(() => {
            (0, A.Y)({ pageType: Y, sectionType: U.JJy.ORBS_BALANCE_MENU, ctaObject: U.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.mA)({ fromContent: s.u.ORBS_BALANCE_MENU });
        }, [Y]),
        Q = a.useCallback(() => {
            O?.id != null && (0, E.openUserProfileModal)({ userId: O.id, tabSection: eS.RP.WISHLIST });
        }, [O?.id]),
        X = a.useCallback(
            (e) => {
                l(e);
            },
            [l],
        );
    return (0, n.jsx)("div", {
        ref: $,
        children: (0, n.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eh.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(z, { handleTransition: l, selectedTab: t, isNarrow: B, hasText: "" !== R }),
                    (0, n.jsx)(o.D, {
                        className: eh.ij,
                        onClick: Q,
                        "aria-label": I.intl.string(I.t["7lZ31J"]),
                        children: (0, n.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(S.SS, {
                        analyticsPage: Y,
                        cardAlignment: S.SS.CardAlignment.END,
                        ctaText: I.intl.string(I.t.VC4Mq0),
                        ctaOnClick: J,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(o.D, {
                    className: eh.sU,
                    onClick: () => l(v.G2.HOME),
                    "aria-label": I.intl.string(I.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(ec, { tabs: W, selectedTab: t, onTabSelect: X }),
            ],
        }),
    });
}
