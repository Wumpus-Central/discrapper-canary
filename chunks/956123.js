l.d(t, { G: () => eA }), l(321073);
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
    m = l(617986);
let p = (0, l(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var E = l(975732),
    C = l(318346),
    A = l(70926),
    h = l(287809),
    S = l(13875),
    f = l(23161),
    x = l(503698),
    O = l.n(x),
    g = l(477782),
    I = l(980707),
    T = l(146919),
    L = l(375708);
function _(e) {
    let { shops: t, onClose: l } = e,
        s = (0, T.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: O()({ [T.jP]: s }),
        children: (0, n.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: O()({ [T.jP]: s }),
            onClose: l,
            "aria-label": L.intl.string(L.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    g.Dr,
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
var y = l(641150),
    R = l(478016),
    j = l(758836);
let G = [
        { tab: j.G2.AVATAR_DECORATIONS, labelKey: L.t.dRZYNE },
        { tab: j.G2.NAMEPLATES, labelKey: L.t.V68Fqz },
        { tab: j.G2.PROFILE_EFFECTS, labelKey: L.t["1cNjtx"] },
        { tab: j.G2.PROFILE_FRAMES, labelKey: L.t.ecTJkR },
        { tab: j.G2.BUNDLES, labelKey: L.t.FYFpps },
        { tab: j.G2.CATALOG, labelKey: L.t.xFcotU },
    ],
    v = {
        [y.q.ALL]: j.G2.CATALOG,
        [y.q.AVATAR_DECORATION]: j.G2.AVATAR_DECORATIONS,
        [y.q.PROFILE_EFFECT]: j.G2.PROFILE_EFFECTS,
        [y.q.NAMEPLATE]: j.G2.NAMEPLATES,
        [y.q.PROFILE_FRAME]: j.G2.PROFILE_FRAMES,
        [y.q.BUNDLE]: j.G2.BUNDLES,
    };
function k(e, t) {
    if (e !== j.G2.CATALOG || 0 === t.size) return e;
    let l = t.values().next().value;
    return null == l ? e : (v[l] ?? e);
}
function N(e) {
    let { handleTransition: t, onClose: l, selectedTab: s, itemTypeFilters: a } = e,
        r = (0, T.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, S.sk)("CollectiblesIndexPageContextMenu"),
        i = k(s, a),
        c = G.filter((e) => {
            let { tab: t } = e;
            return o || t !== j.G2.PROFILE_FRAMES;
        });
    return (0, n.jsx)("div", {
        className: O()({ [T.jP]: r }),
        children: (0, n.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: O()({ [T.jP]: r }),
            onClose: l,
            "aria-label": L.intl.string(L.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: l, labelKey: s } = e,
                    a = l === i;
                return (0, n.jsx)(
                    g.Dr,
                    {
                        id: l,
                        label: L.intl.string(s),
                        badge: l === j.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: a ? { type: "icon", icon: R.U } : void 0,
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
var M = l(7689),
    F = l(892547),
    P = l(773669),
    $ = l(174459),
    B = l(440938),
    D = l(652215),
    w = l(113960);
function U(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: a, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, f.v)(),
        [b, m] = s.useState(""),
        p = (0, B.uM)(),
        E = (0, r.bG)([P.default], () => P.default.locale),
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
        x = s.useCallback(
            (e) => {
                $.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            l !== j.G2.CATALOG && t(j.G2.CATALOG), x(j.uY.SEARCH_ICON), h(!0), setTimeout(() => C.current?.focus());
        }, [l, t, x]),
        I = s.useCallback(() => {
            l !== j.G2.CATALOG && t(j.G2.CATALOG), x(j.uY.SEARCH_BAR);
        }, [l, t, x]),
        T = s.useCallback(() => {
            m(""), d(""), x(j.uY.SEARCH_BAR_CLEAR), a && h(!1);
        }, [d, x, a]),
        _ = s.useCallback(() => {
            a && "" === b && h(!1);
        }, [a, b]),
        y = a && !A,
        R = (0, n.jsx)(o.D, {
            className: w.qc,
            onClick: g,
            children: (0, n.jsx)(M.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        G = (0, n.jsx)(F.I, {
            size: "sm",
            ref: C,
            onKeyDown: S,
            query: b,
            onChange: m,
            onClear: T,
            onBlur: _,
            placeholder: "en-US" === E ? L.intl.string(L.t.arz34K) : L.intl.string(L.t["hIt/Nm"]),
        }),
        v = { "--custom-search-bar-width": `${j.rr}px`, "--custom-search-bar-icon-width": `${j.Dy}px` };
    return y
        ? (0, n.jsx)("div", { style: v, children: R })
        : (0, n.jsx)("div", {
              className: O()(w.ON, { [w.Nz]: A }),
              style: v,
              children: (0, n.jsx)(o.D, { ignoreKeyPress: !0, onClick: I, children: G }),
          });
}
var H = l(3666),
    q = l(834730),
    z = l(812993),
    K = l(761508),
    V = l(922016),
    W = l(900797),
    Y = l(847374),
    X = l(955572),
    J = l(775602),
    Q = l(421773);
function Z(e) {
    let { tabs: t, selectedTab: l, onTabSelect: s, onClose: a, showOrbRentalNewBadge: r } = e;
    return (0, n.jsx)(I.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": L.intl.string(L.t["UKOtz+"]),
        hideScroller: !0,
        onClose: a,
        onSelect: a,
        children: (0, n.jsx)(
            g.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, n.jsx)(g.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: a }) }, t);
                    let c = t === j.G2.ORBS && r;
                    return (0, n.jsx)(
                        g.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === l ? { type: "icon", icon: R.U } : void 0,
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
var ee = l(584512);
function et(e) {
    let { label: t, icon: l, showNewBadge: s } = e;
    return (0, n.jsxs)(q.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, n.jsxs)("span", {
                      className: ee.nt,
                      children: [t, (0, n.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            s && (0, n.jsx)(z.Lp, { text: L.intl.string(L.t.y2b7CA), className: ee.Ad }),
        ],
    });
}
function el(e) {
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
        ? (0, n.jsx)(en, { tab: t, label: l, selected: s, handleTransition: a, renderSubmenu: r, submenuOnly: o })
        : (0, n.jsx)(K.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => a(t),
              className: ee.Mf,
              "aria-label": l,
              children: (0, n.jsx)(et, { label: l, icon: c, showNewBadge: i }),
          });
}
function en(e) {
    let { tab: t, label: l, selected: a, handleTransition: r, renderSubmenu: o, submenuOnly: i } = e,
        c = s.useRef(null),
        u = s.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: p, cancelTimers: E } = (0, Q.A)(100, 100),
        C = s.useCallback(() => {
            (u.current = J.Ay.keyboardModeEnabled), m();
        }, [m]),
        A = s.useCallback(() => {
            E(), b(!0), (u.current = J.Ay.keyboardModeEnabled), i || r(t);
        }, [E, b, i, r, t]);
    return (0, n.jsx)(V.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            E(), b(!0), (u.current = J.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !J.Ay.keyboardModeEnabled && (0, X.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: m, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: r } = s,
                o = r ? W.t : Y.a;
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
                className: ee.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: ee.Lj,
                    onMouseEnter: C,
                    onMouseLeave: p,
                    children: (0, n.jsx)(q.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: ee.hP,
                            children: [l, (0, n.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function es(e) {
    let { onTabSelect: t, tabs: l, selectedTab: a, selected: r } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, Q.A)(100, 100),
        p = s.useCallback(() => {
            (i.current = J.Ay.keyboardModeEnabled), d();
        }, [d]),
        E = s.useCallback(() => {
            m(), u(!0), (i.current = J.Ay.keyboardModeEnabled);
        }, [m, u]);
    return (0, n.jsx)(V.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = J.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !J.Ay.keyboardModeEnabled && (0, X.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(Z, { selectedTab: a, onClose: s, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                s = l ? W.t : Y.a;
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
                className: O()(ee.Mf, ee.OS),
                "aria-label": L.intl.string(L.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: ee.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, n.jsx)(q.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: ee.hP,
                            children: [L.intl.string(L.t["UKOtz+"]), (0, n.jsx)(s, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ea(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, j.dF)(l) && e === j.G2.CATALOG);
}
function er(e) {
    let { className: t, selectedTab: l, tabs: a, onTabSelect: r } = e,
        [o, i] = s.useState(0),
        c = s.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, H.Wv)({ items: a, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = s.useMemo(() => a.slice(0, u + 1), [u, a]),
        E = s.useMemo(() => a.slice(u + 1), [u, a]),
        C = s.useRef(null),
        A = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(C, A);
    let h = 0 !== o,
        S = E.some((e) => ea(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: O()(ee.kL, t),
        ref: C,
        children: [
            (0, n.jsxs)("div", {
                className: ee.Kk,
                "aria-hidden": "true",
                children: [
                    a.map((e, t) =>
                        (0, n.jsx)(
                            H.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, n.jsx)(el, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ea(e.tab, e, l),
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
                        children: (0, n.jsx)(es, { tabs: E, onTabSelect: r, selectedTab: l, selected: S }),
                    }),
                ],
            }),
            h &&
                (0, n.jsxs)(K.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: r,
                    className: ee.vR,
                    children: [
                        p.map((e) =>
                            (0, n.jsx)(
                                el,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ea(e.tab, e, l),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== E.length
                            ? (0, n.jsx)(es, { tabs: E, onTabSelect: r, selectedTab: l, selected: S })
                            : null,
                    ],
                }),
        ],
    });
}
var eo = l(812729),
    ei = l.n(eo),
    ec = l(627363),
    eu = l(587895),
    ed = l(733391),
    eb = l(832163),
    em = l(44724),
    ep = l(486020);
l(801416);
var eE = l(518477),
    eC = l(773743);
function eA(e) {
    let { selectedTab: t, handleTransition: l } = e,
        x = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        O = (function (e) {
            let { location: t } = e;
            return p.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        I = (0, S.sk)("CollectiblesShopHeaderBar"),
        { searchQuery: T, itemTypeFilters: y } = (0, f.v)(),
        v = s.useRef(null),
        [M, F] = s.useState(!1);
    (0, d.g)(
        v,
        s.useCallback((e) => {
            F(e.contentRect.width < 800);
        }, []),
    );
    let P = (function (e) {
            let { enabled: t } = e,
                l = (0, B.uM)(),
                n = (0, r.yK)(
                    [eb.A],
                    () =>
                        t
                            ? (eb.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            s.useEffect(() => {
                t && (0, ed.Xw)();
            }, [t]),
                s.useEffect(() => {
                    n.length > 0 &&
                        ec.Ay.fetchApplications(
                            n.map((e) => e.applicationId),
                            !1,
                        );
                }, [n]);
            let a = s.useCallback(
                    (e) => {
                        $.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: l?.sessionId,
                            page_type: j.G2.GAME_SHOPS,
                            page_category: l?.pageCategory,
                            page_section: l?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, em.default)({ applicationId: e }).catch(() => {});
                    },
                    [l],
                ),
                o = (0, r.bG)(
                    [eu.A],
                    () =>
                        n.flatMap((e) => {
                            let t = eu.A.getApplication(e.applicationId),
                                l = t?.name;
                            return null == l
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: l,
                                          iconSrc:
                                              t?.icon != null
                                                  ? ep.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [n],
                    ei(),
                );
            return s.useMemo(() => o.map((e) => ({ ...e, onSelect: () => a(e.id) })), [o, a]);
        })({ enabled: O }),
        w = P.length > 0,
        H = s.useMemo(() => {
            let e = [
                { tab: j.G2.HOME, label: L.intl.string(L.t["xNiB/O"]) },
                {
                    tab: j.G2.CATALOG,
                    label: L.intl.string(L.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, n.jsx)(N, { handleTransition: l, onClose: s, selectedTab: t, itemTypeFilters: y });
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
                                o = k(t, l);
                            return G.filter((e) => {
                                let { tab: t } = e;
                                return s || t !== j.G2.PROFILE_FRAMES;
                            }).map((e) => {
                                let { tab: t, labelKey: l } = e,
                                    s = t === o;
                                return (0, n.jsx)(
                                    g.Dr,
                                    {
                                        id: t,
                                        label: L.intl.string(l),
                                        badge: t === j.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: s ? { type: "icon", icon: R.U } : void 0,
                                        action: () => {
                                            a(t), r();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ selectedTab: t, itemTypeFilters: y, canViewProfileFrames: I, onTabSelect: l, onClose: s });
                    },
                },
            ];
            return (
                e.push({ tab: j.G2.ORBS, label: L.intl.string(L.t.EBYkzk) }),
                O &&
                    w &&
                    e.push({
                        tab: j.G2.GAME_SHOPS,
                        label: L.intl.string(L.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(_, { shops: P, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: l } = e;
                                return t.map((e) =>
                                    (0, n.jsx)(
                                        g.Dr,
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
                            })({ shops: P, onClose: t });
                        },
                    }),
                e
            );
        }, [l, P, t, y, I, O, w]),
        q = t === j.G2.ORBS ? D.liQ.SHOP_ORBS_TAB : D.liQ.COLLECTIBLES_SHOP,
        z = s.useCallback(() => {
            (0, C.Y)({ pageType: q, sectionType: D.JJy.ORBS_BALANCE_MENU, ctaObject: D.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.mA)({ fromContent: a.u.ORBS_BALANCE_MENU });
        }, [q]),
        K = s.useCallback(() => {
            x?.id != null && (0, E.openUserProfileModal)({ userId: x.id, tabSection: eE.RP.WISHLIST });
        }, [x?.id]),
        V = s.useCallback(
            (e) => {
                l(e);
            },
            [l],
        );
    return (0, n.jsx)("div", {
        ref: v,
        children: (0, n.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eC.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(U, { handleTransition: l, selectedTab: t, isNarrow: M, hasText: "" !== T }),
                    (0, n.jsx)(o.D, {
                        className: eC.ij,
                        onClick: K,
                        "aria-label": L.intl.string(L.t["7lZ31J"]),
                        children: (0, n.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(A.SS, {
                        analyticsPage: q,
                        cardAlignment: A.SS.CardAlignment.END,
                        ctaText: L.intl.string(L.t.VC4Mq0),
                        ctaOnClick: z,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(o.D, {
                    className: eC.sU,
                    onClick: () => l(j.G2.HOME),
                    "aria-label": L.intl.string(L.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(er, { tabs: H, selectedTab: t, onTabSelect: V }),
            ],
        }),
    });
}
