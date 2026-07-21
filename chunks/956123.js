l.d(t, { G: () => eS }), l(321073);
var n = l(627968),
    s = l(64700),
    a = l(696292),
    r = l(17928),
    o = l(939249),
    i = l(926268),
    c = l(34188),
    u = l(661531),
    d = l(770178),
    b = l(742589),
    m = l(140218),
    p = l(617986);
let E = (0, l(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = l(975732),
    A = l(318346),
    h = l(70926),
    S = l(287809),
    f = l(13875),
    x = l(23161),
    g = l(503698),
    O = l.n(g),
    I = l(477782),
    T = l(980707),
    _ = l(146919),
    L = l(375708);
function y(e) {
    let { shops: t, onClose: l } = e,
        s = (0, _.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: O()({ [_.jP]: s }),
        children: (0, n.jsx)(T.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: O()({ [_.jP]: s }),
            onClose: l,
            "aria-label": L.intl.string(L.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    I.Dr,
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
    j = l(478016),
    G = l(758836);
let v = [
        { tab: G.G2.AVATAR_DECORATIONS, labelKey: L.t.dRZYNE },
        { tab: G.G2.NAMEPLATES, labelKey: L.t.V68Fqz },
        { tab: G.G2.PROFILE_EFFECTS, labelKey: L.t["1cNjtx"] },
        { tab: G.G2.PROFILE_FRAMES, labelKey: L.t.ecTJkR },
        { tab: G.G2.BUNDLES, labelKey: L.t.FYFpps },
        { tab: G.G2.CATALOG, labelKey: L.t.xFcotU },
    ],
    k = {
        [R.q.ALL]: G.G2.CATALOG,
        [R.q.AVATAR_DECORATION]: G.G2.AVATAR_DECORATIONS,
        [R.q.PROFILE_EFFECT]: G.G2.PROFILE_EFFECTS,
        [R.q.NAMEPLATE]: G.G2.NAMEPLATES,
        [R.q.PROFILE_FRAME]: G.G2.PROFILE_FRAMES,
        [R.q.BUNDLE]: G.G2.BUNDLES,
    };
function M(e, t) {
    if (e !== G.G2.CATALOG || 0 === t.size) return e;
    let l = t.values().next().value;
    return null == l ? e : (k[l] ?? e);
}
function N(e) {
    let { handleTransition: t, onClose: l, selectedTab: s, itemTypeFilters: a } = e,
        r = (0, _.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, f.sk)("CollectiblesIndexPageContextMenu"),
        i = M(s, a),
        c = v.filter((e) => {
            let { tab: t } = e;
            return o || t !== G.G2.PROFILE_FRAMES;
        });
    return (0, n.jsx)("div", {
        className: O()({ [_.jP]: r }),
        children: (0, n.jsx)(T.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: O()({ [_.jP]: r }),
            onClose: l,
            "aria-label": L.intl.string(L.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: l, labelKey: s } = e,
                    a = l === i;
                return (0, n.jsx)(
                    I.Dr,
                    {
                        id: l,
                        label: L.intl.string(s),
                        badge: l === G.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: a ? { type: "icon", icon: j.U } : void 0,
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
var F = l(7689),
    P = l(892547),
    $ = l(773669),
    B = l(174459),
    D = l(440938),
    w = l(652215),
    U = l(748992);
function H(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: a, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, x.v)(),
        [b, m] = s.useState(""),
        p = (0, D.uM)(),
        E = (0, r.bG)([$.default], () => $.default.locale),
        C = s.useRef(null),
        [A, h] = s.useState(!1);
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
            h(a && i);
        }, [a, i]);
    let S = s.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        f = s.useCallback(
            (e) => {
                B.default.track(w.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        g = s.useCallback(() => {
            l !== G.G2.CATALOG && t(G.G2.CATALOG), f(G.uY.SEARCH_ICON), h(!0), setTimeout(() => C.current?.focus());
        }, [l, t, f]),
        I = s.useCallback(() => {
            l !== G.G2.CATALOG && t(G.G2.CATALOG), f(G.uY.SEARCH_BAR);
        }, [l, t, f]),
        T = s.useCallback(() => {
            m(""), d(""), f(G.uY.SEARCH_BAR_CLEAR), a && h(!1);
        }, [d, f, a]),
        _ = s.useCallback(() => {
            a && "" === b && h(!1);
        }, [a, b]),
        y = a && !A,
        R = (0, n.jsx)(o.D, {
            className: U.qc,
            onClick: g,
            children: (0, n.jsx)(F.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        j = (0, n.jsx)(P.I, {
            size: "sm",
            ref: C,
            onKeyDown: S,
            query: b,
            onChange: m,
            onClear: T,
            onBlur: _,
            placeholder: "en-US" === E ? L.intl.string(L.t.arz34K) : L.intl.string(L.t["hIt/Nm"]),
        }),
        v = { "--custom-search-bar-width": `${G.rr}px`, "--custom-search-bar-icon-width": `${G.Dy}px` };
    return y
        ? (0, n.jsx)("div", { style: v, children: R })
        : (0, n.jsx)("div", {
              className: O()(U.ON, { [U.Nz]: A }),
              style: v,
              children: (0, n.jsx)(o.D, { ignoreKeyPress: !0, onClick: I, children: j }),
          });
}
var q = l(3666),
    z = l(834730),
    V = l(812993),
    K = l(761508),
    W = l(922016),
    Y = l(900797),
    X = l(847374),
    J = l(955572),
    Q = l(775602),
    Z = l(421773);
function ee(e) {
    let { tabs: t, selectedTab: l, onTabSelect: s, onClose: a, showOrbRentalNewBadge: r } = e;
    return (0, n.jsx)(T.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": L.intl.string(L.t["UKOtz+"]),
        hideScroller: !0,
        onClose: a,
        onSelect: a,
        children: (0, n.jsx)(
            I.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, n.jsx)(I.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: a }) }, t);
                    let c = t === G.G2.ORBS && r;
                    return (0, n.jsx)(
                        I.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === l ? { type: "icon", icon: j.U } : void 0,
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
var et = l(755976);
function el(e) {
    let { label: t, icon: l, showNewBadge: s } = e;
    return (0, n.jsxs)(z.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, n.jsxs)("span", {
                      className: et.nt,
                      children: [t, (0, n.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            s && (0, n.jsx)(V.Lp, { text: L.intl.string(L.t.y2b7CA), className: et.Ad }),
        ],
    });
}
function en(e) {
    let {
        tab: t,
        label: l,
        selected: s,
        handleTransition: a,
        renderSubmenu: r,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != r
        ? (0, n.jsx)(es, { tab: t, label: l, selected: s, handleTransition: a, renderSubmenu: r, submenuOnly: o })
        : (0, n.jsx)(K.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => a(t),
              className: et.Mf,
              "aria-label": l,
              children: (0, n.jsx)(el, { label: l, icon: c, showNewBadge: i }),
          });
}
function es(e) {
    let { tab: t, label: l, selected: a, handleTransition: r, renderSubmenu: o, submenuOnly: i } = e,
        c = s.useRef(null),
        u = s.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: p, cancelTimers: E } = (0, Z.A)(100, 100),
        C = s.useCallback(() => {
            (u.current = Q.Ay.keyboardModeEnabled), m();
        }, [m]),
        A = s.useCallback(() => {
            E(), b(!0), (u.current = Q.Ay.keyboardModeEnabled), i || r(t);
        }, [E, b, i, r, t]);
    return (0, n.jsx)(W.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            E(), b(!0), (u.current = Q.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !Q.Ay.keyboardModeEnabled && (0, J.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: m, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: r } = s,
                o = r ? Y.t : X.a;
            return (0, n.jsx)(K.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a ? t : void 0,
                onClick: A,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: et.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: et.Lj,
                    onMouseEnter: C,
                    onMouseLeave: p,
                    children: (0, n.jsx)(z.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: et.hP,
                            children: [l, (0, n.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ea(e) {
    let { onTabSelect: t, tabs: l, selectedTab: a, selected: r } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, Z.A)(100, 100),
        p = s.useCallback(() => {
            (i.current = Q.Ay.keyboardModeEnabled), d();
        }, [d]),
        E = s.useCallback(() => {
            m(), u(!0), (i.current = Q.Ay.keyboardModeEnabled);
        }, [m, u]);
    return (0, n.jsx)(W.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = Q.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !Q.Ay.keyboardModeEnabled && (0, J.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(ee, { selectedTab: a, onClose: s, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                s = l ? Y.t : X.a;
            return (0, n.jsx)(K.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r ? "more" : void 0,
                onClick: E,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: O()(et.Mf, et.OS),
                "aria-label": L.intl.string(L.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: et.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, n.jsx)(z.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: et.hP,
                            children: [L.intl.string(L.t["UKOtz+"]), (0, n.jsx)(s, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function er(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, G.dF)(l) && e === G.G2.CATALOG);
}
function eo(e) {
    let { className: t, selectedTab: l, tabs: a, onTabSelect: r } = e,
        [o, i] = s.useState(0),
        c = s.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, q.Wv)({ items: a, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = s.useMemo(() => a.slice(0, u + 1), [u, a]),
        E = s.useMemo(() => a.slice(u + 1), [u, a]),
        C = s.useRef(null),
        A = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(C, A);
    let h = 0 !== o,
        S = E.some((e) => er(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: O()(et.kL, t),
        ref: C,
        children: [
            (0, n.jsxs)("div", {
                className: et.Kk,
                "aria-hidden": "true",
                children: [
                    a.map((e, t) =>
                        (0, n.jsx)(
                            q.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, n.jsx)(en, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: er(e.tab, e, l),
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
                        children: (0, n.jsx)(ea, { tabs: E, onTabSelect: r, selectedTab: l, selected: S }),
                    }),
                ],
            }),
            h &&
                (0, n.jsxs)(K.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: r,
                    className: et.vR,
                    children: [
                        p.map((e) =>
                            (0, n.jsx)(
                                en,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: er(e.tab, e, l),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== E.length
                            ? (0, n.jsx)(ea, { tabs: E, onTabSelect: r, selectedTab: l, selected: S })
                            : null,
                    ],
                }),
        ],
    });
}
var ei = l(812729),
    ec = l.n(ei),
    eu = l(627363),
    ed = l(587895),
    eb = l(733391),
    em = l(832163),
    ep = l(44724),
    eE = l(486020);
l(801416);
var eC = l(518477),
    eA = l(576709),
    eh = l(933159);
function eS(e) {
    let { selectedTab: t, handleTransition: l } = e,
        g = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        O = (function (e) {
            let { location: t } = e;
            return E.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        T = (0, f.sk)("CollectiblesShopHeaderBar"),
        { searchQuery: _, itemTypeFilters: R } = (0, x.v)(),
        k = s.useRef(null),
        [F, P] = s.useState(!1);
    (0, d.g)(
        k,
        s.useCallback((e) => {
            P(e.contentRect.width < 800);
        }, []),
    );
    let $ = (function (e) {
            let { enabled: t } = e,
                l = (0, D.uM)(),
                n = (0, r.yK)(
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
                    n.length > 0 &&
                        eu.Ay.fetchApplications(
                            n.map((e) => e.applicationId),
                            !1,
                        );
                }, [n]);
            let a = s.useCallback(
                    (e) => {
                        B.default.track(w.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: l?.sessionId,
                            page_type: G.G2.GAME_SHOPS,
                            page_category: l?.pageCategory,
                            page_section: l?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, ep.default)({ applicationId: e }).catch(() => {});
                    },
                    [l],
                ),
                o = (0, r.bG)(
                    [ed.A],
                    () =>
                        n.flatMap((e) => {
                            let t = ed.A.getApplication(e.applicationId),
                                l = t?.name;
                            return null == l
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: l,
                                          iconSrc:
                                              t?.icon != null
                                                  ? eE.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [n],
                    ec(),
                );
            return s.useMemo(() => o.map((e) => ({ ...e, onSelect: () => a(e.id) })), [o, a]);
        })({ enabled: O }),
        U = $.length > 0,
        q = (0, m.H)({ location: "collectibles_shop_header_bar" }),
        z = s.useMemo(() => {
            let e = [
                { tab: G.G2.HOME, label: L.intl.string(L.t["xNiB/O"]) },
                {
                    tab: G.G2.CATALOG,
                    label: L.intl.string(L.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, n.jsx)(N, { handleTransition: l, onClose: s, selectedTab: t, itemTypeFilters: R });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: s } = e;
                        return (function (e) {
                            let {
                                    selectedTab: t,
                                    itemTypeFilters: l,
                                    canViewProfileFrames: s,
                                    onTabSelect: a,
                                    onClose: r,
                                } = e,
                                o = M(t, l);
                            return v
                                .filter((e) => {
                                    let { tab: t } = e;
                                    return s || t !== G.G2.PROFILE_FRAMES;
                                })
                                .map((e) => {
                                    let { tab: t, labelKey: l } = e,
                                        s = t === o;
                                    return (0, n.jsx)(
                                        I.Dr,
                                        {
                                            id: t,
                                            label: L.intl.string(l),
                                            badge: t === G.G2.PROFILE_FRAMES ? "new" : void 0,
                                            trailingIndicator: s ? { type: "icon", icon: j.U } : void 0,
                                            action: () => {
                                                a(t), r();
                                            },
                                        },
                                        t,
                                    );
                                });
                        })({ selectedTab: t, itemTypeFilters: R, canViewProfileFrames: T, onTabSelect: l, onClose: s });
                    },
                },
            ];
            return (
                e.push({ tab: G.G2.ORBS, label: L.intl.string(L.t.EBYkzk) }),
                q && e.push({ tab: G.G2.GAME_SERVERS, label: L.intl.string(eA.default.vCzwM7) }),
                O &&
                    U &&
                    e.push({
                        tab: G.G2.GAME_SHOPS,
                        label: L.intl.string(L.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(y, { shops: $, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: l } = e;
                                return t.map((e) =>
                                    (0, n.jsx)(
                                        I.Dr,
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
                            })({ shops: $, onClose: t });
                        },
                    }),
                e
            );
        }, [l, $, t, R, T, O, U, q]),
        V = t === G.G2.ORBS ? w.liQ.SHOP_ORBS_TAB : w.liQ.COLLECTIBLES_SHOP,
        K = s.useCallback(() => {
            (0, A.Y)({ pageType: V, sectionType: w.JJy.ORBS_BALANCE_MENU, ctaObject: w.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.mA)({ fromContent: a.u.ORBS_BALANCE_MENU });
        }, [V]),
        W = s.useCallback(() => {
            g?.id != null && (0, C.openUserProfileModal)({ userId: g.id, tabSection: eC.RP.WISHLIST });
        }, [g?.id]),
        Y = s.useCallback(
            (e) => {
                l(e);
            },
            [l],
        );
    return (0, n.jsx)("div", {
        ref: k,
        children: (0, n.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eh.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(H, { handleTransition: l, selectedTab: t, isNarrow: F, hasText: "" !== _ }),
                    (0, n.jsx)(o.D, {
                        className: eh.ij,
                        onClick: W,
                        "aria-label": L.intl.string(L.t["7lZ31J"]),
                        children: (0, n.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(h.SS, {
                        analyticsPage: V,
                        cardAlignment: h.SS.CardAlignment.END,
                        ctaText: L.intl.string(L.t.VC4Mq0),
                        ctaOnClick: K,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(o.D, {
                    className: eh.sU,
                    onClick: () => l(G.G2.HOME),
                    "aria-label": L.intl.string(L.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(eo, { tabs: z, selectedTab: t, onTabSelect: Y }),
            ],
        }),
    });
}
