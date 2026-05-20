r.d(t, { G: () => eh }), r(321073);
var l = r(627968),
    s = r(64700),
    n = r(696292),
    a = r(17928),
    o = r(939249),
    i = r(926268),
    c = r(34188),
    u = r(661531),
    d = r(770178),
    b = r(742589),
    m = r(617986);
let S = (0, r(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var p = r(975732),
    E = r(318346),
    h = r(371446),
    f = r(70926),
    C = r(287809),
    g = r(13875),
    A = r(23161),
    T = r(503698),
    y = r.n(T),
    O = r(477782),
    x = r(509434),
    I = r(980707),
    _ = r(81341),
    L = r(146919),
    R = r(375708);
function j(e) {
    let { shops: t, onClose: r } = e,
        s = (0, L.yB)("CollectiblesGameShopsContextMenu"),
        n = (0, _.I)({ location: "CollectiblesGameShopsContextMenu" });
    return (0, l.jsx)("div", {
        className: y()({ [L.jP]: s }),
        children: (0, l.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: y()({ [L.jP]: s }),
            onClose: r,
            "aria-label": R.intl.string(R.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, l.jsx)(
                    O.Dr,
                    {
                        id: e.id,
                        label: e.label,
                        trailingIndicator: n ? void 0 : { type: "icon", icon: x.I },
                        action: e.onSelect,
                    },
                    e.id,
                ),
            ),
        }),
    });
}
var v = r(641150),
    F = r(478016),
    P = r(758836);
let G = [
        { tab: P.G2.AVATAR_DECORATIONS, labelKey: R.t.dRZYNE },
        { tab: P.G2.PROFILE_EFFECTS, labelKey: R.t["1cNjtx"] },
        { tab: P.G2.NAMEPLATES, labelKey: R.t.V68Fqz },
        { tab: P.G2.PROFILE_FRAMES, labelKey: R.t.ecTJkR },
        { tab: P.G2.BUNDLES, labelKey: R.t.FYFpps },
        { tab: P.G2.CATALOG, labelKey: R.t.xFcotU },
    ],
    k = {
        [v.q.ALL]: P.G2.CATALOG,
        [v.q.AVATAR_DECORATION]: P.G2.AVATAR_DECORATIONS,
        [v.q.PROFILE_EFFECT]: P.G2.PROFILE_EFFECTS,
        [v.q.NAMEPLATE]: P.G2.NAMEPLATES,
        [v.q.PROFILE_FRAME]: P.G2.PROFILE_FRAMES,
        [v.q.BUNDLE]: P.G2.BUNDLES,
    };
function N(e, t) {
    if (e !== P.G2.CATALOG || 0 === t.size) return e;
    let r = t.values().next().value;
    return null == r ? e : (k[r] ?? e);
}
function M(e) {
    let { handleTransition: t, onClose: r, selectedTab: s, itemTypeFilters: n } = e,
        a = (0, L.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, g.sk)("CollectiblesIndexPageContextMenu"),
        i = N(s, n),
        c = G.filter((e) => {
            let { tab: t } = e;
            return o || t !== P.G2.PROFILE_FRAMES;
        });
    return (0, l.jsx)("div", {
        className: y()({ [L.jP]: a }),
        children: (0, l.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: y()({ [L.jP]: a }),
            onClose: r,
            "aria-label": R.intl.string(R.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: r, labelKey: s } = e,
                    n = r === i;
                return (0, l.jsx)(
                    O.Dr,
                    {
                        id: r,
                        label: R.intl.string(s),
                        badge: r === P.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: n ? { type: "icon", icon: F.U } : void 0,
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
    let { handleTransition: t, selectedTab: r, isNarrow: n, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, A.v)(),
        [b, m] = s.useState(""),
        S = (0, H.uM)(),
        p = (0, a.bG)([D.default], () => D.default.locale),
        E = s.useRef(null),
        [h, f] = s.useState(!1);
    s.useEffect(() => {
        let e = setTimeout(() => {
            d(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, d]),
        s.useEffect(() => {
            m(c);
        }, [c]),
        s.useEffect(() => {
            f(n && i);
        }, [n, i]);
    let C = s.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        g = s.useCallback(
            (e) => {
                B.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: S?.sessionId,
                    page_section: S?.pageSection,
                    page_category: S?.pageCategory,
                    page_index: S?.pageIndex,
                    page_size: S?.pageSize,
                    cta_name: e,
                    page_type: r,
                });
            },
            [r, S],
        ),
        T = s.useCallback(() => {
            r !== P.G2.CATALOG && t(P.G2.CATALOG), g(P.uY.SEARCH_ICON), f(!0), setTimeout(() => E.current?.focus());
        }, [r, t, g]),
        O = s.useCallback(() => {
            r !== P.G2.CATALOG && t(P.G2.CATALOG), g(P.uY.SEARCH_BAR);
        }, [r, t, g]),
        x = s.useCallback(() => {
            m(""), d(""), g(P.uY.SEARCH_BAR_CLEAR), n && f(!1);
        }, [d, g, n]),
        I = s.useCallback(() => {
            n && "" === b && f(!1);
        }, [n, b]),
        _ = n && !h,
        L = (0, l.jsx)(o.D, {
            className: U.qc,
            onClick: T,
            children: (0, l.jsx)($.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        j = (0, l.jsx)(w.I, {
            size: "sm",
            ref: E,
            onKeyDown: C,
            query: b,
            onChange: m,
            onClear: x,
            onBlur: I,
            placeholder: "en-US" === p ? R.intl.string(R.t.arz34K) : R.intl.string(R.t["hIt/Nm"]),
        }),
        v = { "--custom-search-bar-width": `${P.rr}px`, "--custom-search-bar-icon-width": `${P.Dy}px` };
    return _
        ? (0, l.jsx)("div", { style: v, children: L })
        : (0, l.jsx)("div", {
              className: y()(U.ON, { [U.Nz]: h }),
              style: v,
              children: (0, l.jsx)(o.D, { ignoreKeyPress: !0, onClick: O, children: j }),
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
    let { tabs: t, selectedTab: r, onTabSelect: s, onClose: n, showOrbRentalNewBadge: a } = e;
    return (0, l.jsx)(I.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": R.intl.string(R.t["UKOtz+"]),
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, l.jsx)(
            O.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, l.jsx)(O.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: n }) }, t);
                    let c = t === P.G2.ORBS && a;
                    return (0, l.jsx)(
                        O.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === r ? { type: "icon", icon: F.U } : void 0,
                            badge: c ? "new" : void 0,
                            action: () => s(t),
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
function es(e) {
    let { label: t, icon: r, showNewBadge: s } = e;
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
            s && (0, l.jsx)(K.Lp, { text: R.intl.string(R.t.y2b7CA), className: el.Ad }),
        ],
    });
}
function en(e) {
    let {
        tab: t,
        label: r,
        selected: s,
        handleTransition: n,
        renderSubmenu: a,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != a
        ? (0, l.jsx)(ea, { tab: t, label: r, selected: s, handleTransition: n, renderSubmenu: a, submenuOnly: o })
        : (0, l.jsx)(Y.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => n(t),
              className: el.Mf,
              "aria-label": r,
              children: (0, l.jsx)(es, { label: r, icon: c, showNewBadge: i }),
          });
}
function ea(e) {
    let { tab: t, label: r, selected: n, handleTransition: a, renderSubmenu: o, submenuOnly: i } = e,
        c = s.useRef(null),
        u = s.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: S, cancelTimers: p } = (0, et.A)(100, 100),
        E = s.useCallback(() => {
            (u.current = ee.A.keyboardModeEnabled), m();
        }, [m]),
        h = s.useCallback(() => {
            p(), b(!0), (u.current = ee.A.keyboardModeEnabled), i || a(t);
        }, [p, b, i, a, t]);
    return (0, l.jsx)(Q.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            p(), b(!0), (u.current = ee.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !ee.A.keyboardModeEnabled && (0, Z.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)("div", { onMouseEnter: m, onMouseLeave: S, children: o({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: a } = s,
                o = a ? J.t : X.a;
            return (0, l.jsx)(Y.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: n ? t : void 0,
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
                    onMouseLeave: S,
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
    let { onTabSelect: t, tabs: r, selectedTab: n, selected: a } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, et.A)(100, 100),
        S = s.useCallback(() => {
            (i.current = ee.A.keyboardModeEnabled), d();
        }, [d]),
        p = s.useCallback(() => {
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
            let { closePopout: s } = e;
            return (0, l.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, l.jsx)(er, { selectedTab: n, onClose: s, tabs: r, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: r } = t,
                s = r ? J.t : X.a;
            return (0, l.jsx)(Y.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a ? "more" : void 0,
                onClick: p,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: y()(el.Mf, el.OS),
                "aria-label": R.intl.string(R.t["UKOtz+"]),
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: el.Lj,
                    onMouseEnter: S,
                    onMouseLeave: b,
                    children: (0, l.jsx)(W.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: el.hP,
                            children: [R.intl.string(R.t["UKOtz+"]), (0, l.jsx)(s, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ei(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, P.dF)(r) && e === P.G2.CATALOG);
}
function ec(e) {
    let { className: t, selectedTab: r, tabs: n, onTabSelect: a } = e,
        [o, i] = s.useState(0),
        c = s.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, V.Wv)({ items: n, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        S = s.useMemo(() => n.slice(0, u + 1), [u, n]),
        p = s.useMemo(() => n.slice(u + 1), [u, n]),
        E = s.useRef(null),
        h = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(E, h);
    let f = 0 !== o,
        C = p.some((e) => ei(e.tab, e, r));
    return (0, l.jsxs)("div", {
        className: y()(el.kL, t),
        ref: E,
        children: [
            (0, l.jsxs)("div", {
                className: el.Kk,
                "aria-hidden": "true",
                children: [
                    n.map((e, t) =>
                        (0, l.jsx)(
                            V.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, l.jsx)(en, {
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
                        children: (0, l.jsx)(eo, { tabs: p, onTabSelect: a, selectedTab: r, selected: C }),
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
                        S.map((e) =>
                            (0, l.jsx)(
                                en,
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
                        0 !== p.length
                            ? (0, l.jsx)(eo, { tabs: p, onTabSelect: a, selectedTab: r, selected: C })
                            : null,
                    ],
                }),
        ],
    });
}
var eu = r(627363),
    ed = r(587895),
    eb = r(733391),
    em = r(832163),
    eS = r(44724);
r(801416);
var ep = r(518477),
    eE = r(773743);
function eh(e) {
    let { selectedTab: t, handleTransition: r } = e,
        T = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        { enabled: y } = (0, h.Z)({ location: "collectibles_shop_header_bar" }),
        I = (function (e) {
            let { location: t } = e;
            return S.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        _ = (0, g.sk)("CollectiblesShopHeaderBar"),
        { searchQuery: L, itemTypeFilters: v } = (0, A.v)(),
        k = s.useRef(null),
        [$, w] = s.useState(!1);
    (0, d.g)(
        k,
        s.useCallback((e) => {
            w(e.contentRect.width < 800);
        }, []),
    );
    let D = (function (e) {
            let { enabled: t } = e,
                r = (0, H.uM)(),
                l = (0, a.yK)(
                    [em.A],
                    () =>
                        t
                            ? (em.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            s.useEffect(() => {
                t && (0, eb.Xw)();
            }, [t]),
                s.useEffect(() => {
                    l.length > 0 &&
                        eu.Ay.fetchApplications(
                            l.map((e) => e.applicationId),
                            !1,
                        );
                }, [l]);
            let n = s.useCallback(
                (e) => {
                    B.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: r?.sessionId,
                        page_type: P.G2.GAME_SHOPS,
                        page_category: r?.pageCategory,
                        page_section: r?.pageSection,
                        tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                        cta_name: "go_to_game_shop",
                    }),
                        (0, eS.default)({ guildId: e }).catch(() => {});
                },
                [r],
            );
            return (0, a.bG)(
                [ed.A],
                () =>
                    l.flatMap((e) => {
                        let t = ed.A.getApplication(e.applicationId)?.name;
                        return null == t ? [] : [{ id: e.guildId, label: t, onSelect: () => n(e.guildId) }];
                    }),
                [l, n],
            );
        })({ enabled: I }),
        U = D.length > 0,
        V = s.useMemo(() => {
            let e = [
                { tab: P.G2.HOME, label: R.intl.string(R.t["xNiB/O"]) },
                {
                    tab: P.G2.CATALOG,
                    label: R.intl.string(R.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, l.jsx)(M, { handleTransition: r, onClose: s, selectedTab: t, itemTypeFilters: v });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: s } = e;
                        return (function (e) {
                            let {
                                    selectedTab: t,
                                    itemTypeFilters: r,
                                    canViewProfileFrames: s,
                                    onTabSelect: n,
                                    onClose: a,
                                } = e,
                                o = N(t, r);
                            return G.filter((e) => {
                                let { tab: t } = e;
                                return s || t !== P.G2.PROFILE_FRAMES;
                            }).map((e) => {
                                let { tab: t, labelKey: r } = e,
                                    s = t === o;
                                return (0, l.jsx)(
                                    O.Dr,
                                    {
                                        id: t,
                                        label: R.intl.string(r),
                                        badge: t === P.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: s ? { type: "icon", icon: F.U } : void 0,
                                        action: () => {
                                            n(t), a();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ selectedTab: t, itemTypeFilters: v, canViewProfileFrames: _, onTabSelect: r, onClose: s });
                    },
                },
            ];
            return (
                y && e.push({ tab: P.G2.ORBS, label: R.intl.string(R.t.EBYkzk) }),
                I &&
                    U &&
                    e.push({
                        tab: P.G2.GAME_SHOPS,
                        label: R.intl.string(R.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, l.jsx)(j, { shops: D, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: r } = e;
                                return t.map((e) =>
                                    (0, l.jsx)(
                                        O.Dr,
                                        {
                                            id: e.id,
                                            label: e.label,
                                            trailingIndicator: { type: "icon", icon: x.I },
                                            action: () => {
                                                e.onSelect(), r();
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: D, onClose: t });
                        },
                    }),
                e
            );
        }, [y, r, D, t, v, _, I, U]),
        W = t === P.G2.ORBS ? q.liQ.SHOP_ORBS_TAB : q.liQ.COLLECTIBLES_SHOP,
        K = s.useCallback(() => {
            (0, E.Y)({ pageType: W, sectionType: q.JJy.ORBS_BALANCE_MENU, ctaObject: q.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.navigateToQuestHome)({ fromContent: n.u.ORBS_BALANCE_MENU });
        }, [W]),
        Y = s.useCallback(() => {
            T?.id != null && (0, p.openUserProfileModal)({ userId: T.id, tabSection: ep.RP.WISHLIST });
        }, [T?.id]),
        Q = s.useCallback(
            (e) => {
                r(e);
            },
            [r],
        );
    return (0, l.jsx)("div", {
        ref: k,
        children: (0, l.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eE.jr,
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z, { handleTransition: r, selectedTab: t, isNarrow: $, hasText: "" !== L }),
                    (0, l.jsx)(o.D, {
                        className: eE.ij,
                        onClick: Y,
                        "aria-label": R.intl.string(R.t["7lZ31J"]),
                        children: (0, l.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    y &&
                        (0, l.jsx)(f.SS, {
                            analyticsPage: W,
                            cardAlignment: f.SS.CardAlignment.END,
                            ctaText: R.intl.string(R.t.VC4Mq0),
                            ctaOnClick: K,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(o.D, {
                    className: eE.sU,
                    onClick: () => r(P.G2.HOME),
                    "aria-label": R.intl.string(R.t["5upuqx"]),
                    children: (0, l.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(ec, { tabs: V, selectedTab: t, onTabSelect: Q }),
            ],
        }),
    });
}
