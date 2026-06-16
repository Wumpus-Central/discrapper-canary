r.d(t, { G: () => eC }), r(321073);
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
    h = r(70926),
    f = r(287809),
    C = r(13875),
    g = r(23161),
    A = r(503698),
    y = r.n(A),
    T = r(477782),
    O = r(509434),
    x = r(980707),
    I = r(81341),
    L = r(146919),
    _ = r(375708);
function R(e) {
    let { shops: t, onClose: r } = e,
        n = (0, L.yB)("CollectiblesGameShopsContextMenu"),
        s = (0, I.I)({ location: "CollectiblesGameShopsContextMenu" });
    return (0, l.jsx)("div", {
        className: y()({ [L.jP]: n }),
        children: (0, l.jsx)(x.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: y()({ [L.jP]: n }),
            onClose: r,
            "aria-label": _.intl.string(_.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, l.jsx)(
                    T.Dr,
                    {
                        id: e.id,
                        label: e.label,
                        leadingAccessory: null != e.iconSrc && s ? { type: "image", src: e.iconSrc } : void 0,
                        trailingIndicator: s ? void 0 : { type: "icon", icon: O.I },
                        action: e.onSelect,
                    },
                    e.id,
                ),
            ),
        }),
    });
}
var v = r(641150),
    j = r(478016),
    F = r(758836);
let P = [
        { tab: F.G2.AVATAR_DECORATIONS, labelKey: _.t.dRZYNE },
        { tab: F.G2.NAMEPLATES, labelKey: _.t.V68Fqz },
        { tab: F.G2.PROFILE_EFFECTS, labelKey: _.t["1cNjtx"] },
        { tab: F.G2.PROFILE_FRAMES, labelKey: _.t.ecTJkR },
        { tab: F.G2.BUNDLES, labelKey: _.t.FYFpps },
        { tab: F.G2.CATALOG, labelKey: _.t.xFcotU },
    ],
    G = {
        [v.q.ALL]: F.G2.CATALOG,
        [v.q.AVATAR_DECORATION]: F.G2.AVATAR_DECORATIONS,
        [v.q.PROFILE_EFFECT]: F.G2.PROFILE_EFFECTS,
        [v.q.NAMEPLATE]: F.G2.NAMEPLATES,
        [v.q.PROFILE_FRAME]: F.G2.PROFILE_FRAMES,
        [v.q.BUNDLE]: F.G2.BUNDLES,
    };
function k(e, t) {
    if (e !== F.G2.CATALOG || 0 === t.size) return e;
    let r = t.values().next().value;
    return null == r ? e : (G[r] ?? e);
}
function N(e) {
    let { handleTransition: t, onClose: r, selectedTab: n, itemTypeFilters: s } = e,
        a = (0, L.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, C.sk)("CollectiblesIndexPageContextMenu"),
        i = k(n, s),
        c = P.filter((e) => {
            let { tab: t } = e;
            return o || t !== F.G2.PROFILE_FRAMES;
        });
    return (0, l.jsx)("div", {
        className: y()({ [L.jP]: a }),
        children: (0, l.jsx)(x.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: y()({ [L.jP]: a }),
            onClose: r,
            "aria-label": _.intl.string(_.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: r, labelKey: n } = e,
                    s = r === i;
                return (0, l.jsx)(
                    T.Dr,
                    {
                        id: r,
                        label: _.intl.string(n),
                        badge: r === F.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: s ? { type: "icon", icon: j.U } : void 0,
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
var M = r(7689),
    $ = r(892547),
    w = r(773669),
    D = r(174459),
    B = r(440938),
    q = r(652215),
    H = r(113960);
function U(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: s, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, g.v)(),
        [b, m] = n.useState(""),
        p = (0, B.uM)(),
        S = (0, a.bG)([w.default], () => w.default.locale),
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
        A = n.useCallback(
            (e) => {
                D.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        T = n.useCallback(() => {
            r !== F.G2.CATALOG && t(F.G2.CATALOG), A(F.uY.SEARCH_ICON), f(!0), setTimeout(() => E.current?.focus());
        }, [r, t, A]),
        O = n.useCallback(() => {
            r !== F.G2.CATALOG && t(F.G2.CATALOG), A(F.uY.SEARCH_BAR);
        }, [r, t, A]),
        x = n.useCallback(() => {
            m(""), d(""), A(F.uY.SEARCH_BAR_CLEAR), s && f(!1);
        }, [d, A, s]),
        I = n.useCallback(() => {
            s && "" === b && f(!1);
        }, [s, b]),
        L = s && !h,
        R = (0, l.jsx)(o.D, {
            className: H.qc,
            onClick: T,
            children: (0, l.jsx)(M.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        v = (0, l.jsx)($.I, {
            size: "sm",
            ref: E,
            onKeyDown: C,
            query: b,
            onChange: m,
            onClear: x,
            onBlur: I,
            placeholder: "en-US" === S ? _.intl.string(_.t.arz34K) : _.intl.string(_.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${F.rr}px`, "--custom-search-bar-icon-width": `${F.Dy}px` };
    return L
        ? (0, l.jsx)("div", { style: j, children: R })
        : (0, l.jsx)("div", {
              className: y()(H.ON, { [H.Nz]: h }),
              style: j,
              children: (0, l.jsx)(o.D, { ignoreKeyPress: !0, onClick: O, children: v }),
          });
}
var z = r(3666),
    V = r(834730),
    W = r(812993),
    K = r(761508),
    Y = r(922016),
    Q = r(900797),
    J = r(847374),
    X = r(955572),
    Z = r(775602),
    ee = r(421773);
function et(e) {
    let { tabs: t, selectedTab: r, onTabSelect: n, onClose: s, showOrbRentalNewBadge: a } = e;
    return (0, l.jsx)(x.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": _.intl.string(_.t["UKOtz+"]),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, l.jsx)(
            T.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, l.jsx)(T.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: s }) }, t);
                    let c = t === F.G2.ORBS && a;
                    return (0, l.jsx)(
                        T.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === r ? { type: "icon", icon: j.U } : void 0,
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
var er = r(584512);
function el(e) {
    let { label: t, icon: r, showNewBadge: n } = e;
    return (0, l.jsxs)(V.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != r
                ? (0, l.jsxs)("span", {
                      className: er.nt,
                      children: [t, (0, l.jsx)(r, { size: "xs", color: "currentColor" })],
                  })
                : t,
            n && (0, l.jsx)(W.Lp, { text: _.intl.string(_.t.y2b7CA), className: er.Ad }),
        ],
    });
}
function en(e) {
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
        ? (0, l.jsx)(es, { tab: t, label: r, selected: n, handleTransition: s, renderSubmenu: a, submenuOnly: o })
        : (0, l.jsx)(K.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: n ? t : void 0,
              onClick: () => s(t),
              className: er.Mf,
              "aria-label": r,
              children: (0, l.jsx)(el, { label: r, icon: c, showNewBadge: i }),
          });
}
function es(e) {
    let { tab: t, label: r, selected: s, handleTransition: a, renderSubmenu: o, submenuOnly: i } = e,
        c = n.useRef(null),
        u = n.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: p, cancelTimers: S } = (0, ee.A)(100, 100),
        E = n.useCallback(() => {
            (u.current = Z.Ay.keyboardModeEnabled), m();
        }, [m]),
        h = n.useCallback(() => {
            S(), b(!0), (u.current = Z.Ay.keyboardModeEnabled), i || a(t);
        }, [S, b, i, a, t]);
    return (0, l.jsx)(Y.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            S(), b(!0), (u.current = Z.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !Z.Ay.keyboardModeEnabled && (0, X.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)("div", { onMouseEnter: m, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, n) => {
            let { isShown: a } = n,
                o = a ? Q.t : J.a;
            return (0, l.jsx)(K.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? t : void 0,
                onClick: h,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: er.Mf,
                "aria-label": r,
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: er.Lj,
                    onMouseEnter: E,
                    onMouseLeave: p,
                    children: (0, l.jsx)(V.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: er.hP,
                            children: [r, (0, l.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ea(e) {
    let { onTabSelect: t, tabs: r, selectedTab: s, selected: a } = e,
        o = n.useRef(null),
        i = n.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, ee.A)(100, 100),
        p = n.useCallback(() => {
            (i.current = Z.Ay.keyboardModeEnabled), d();
        }, [d]),
        S = n.useCallback(() => {
            m(), u(!0), (i.current = Z.Ay.keyboardModeEnabled);
        }, [m, u]);
    return (0, l.jsx)(Y.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = Z.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !Z.Ay.keyboardModeEnabled && (0, X.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, l.jsx)(et, { selectedTab: s, onClose: n, tabs: r, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: r } = t,
                n = r ? Q.t : J.a;
            return (0, l.jsx)(K.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a ? "more" : void 0,
                onClick: S,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: y()(er.Mf, er.OS),
                "aria-label": _.intl.string(_.t["UKOtz+"]),
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: er.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, l.jsx)(V.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: er.hP,
                            children: [_.intl.string(_.t["UKOtz+"]), (0, l.jsx)(n, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, F.dF)(r) && e === F.G2.CATALOG);
}
function ei(e) {
    let { className: t, selectedTab: r, tabs: s, onTabSelect: a } = e,
        [o, i] = n.useState(0),
        c = n.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, z.Wv)({ items: s, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = n.useMemo(() => s.slice(0, u + 1), [u, s]),
        S = n.useMemo(() => s.slice(u + 1), [u, s]),
        E = n.useRef(null),
        h = n.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(E, h);
    let f = 0 !== o,
        C = S.some((e) => eo(e.tab, e, r));
    return (0, l.jsxs)("div", {
        className: y()(er.kL, t),
        ref: E,
        children: [
            (0, l.jsxs)("div", {
                className: er.Kk,
                "aria-hidden": "true",
                children: [
                    s.map((e, t) =>
                        (0, l.jsx)(
                            z.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, l.jsx)(en, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: eo(e.tab, e, r),
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
                        children: (0, l.jsx)(ea, { tabs: S, onTabSelect: a, selectedTab: r, selected: C }),
                    }),
                ],
            }),
            f &&
                (0, l.jsxs)(K.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: a,
                    className: er.vR,
                    children: [
                        p.map((e) =>
                            (0, l.jsx)(
                                en,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: eo(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== S.length
                            ? (0, l.jsx)(ea, { tabs: S, onTabSelect: a, selectedTab: r, selected: C })
                            : null,
                    ],
                }),
        ],
    });
}
var ec = r(812729),
    eu = r.n(ec),
    ed = r(627363),
    eb = r(587895),
    em = r(733391),
    ep = r(832163),
    eS = r(44724),
    eE = r(486020);
r(801416);
var eh = r(518477),
    ef = r(773743);
function eC(e) {
    let { selectedTab: t, handleTransition: r } = e,
        A = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        y = (function (e) {
            let { location: t } = e;
            return p.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        x = (0, C.sk)("CollectiblesShopHeaderBar"),
        { searchQuery: L, itemTypeFilters: v } = (0, g.v)(),
        G = n.useRef(null),
        [M, $] = n.useState(!1);
    (0, d.g)(
        G,
        n.useCallback((e) => {
            $(e.contentRect.width < 800);
        }, []),
    );
    let w = (function (e) {
            let { enabled: t } = e,
                r = (0, B.uM)(),
                l = (0, a.yK)(
                    [ep.A],
                    () =>
                        t
                            ? (ep.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            n.useEffect(() => {
                t && (0, em.Xw)();
            }, [t]),
                n.useEffect(() => {
                    l.length > 0 &&
                        ed.Ay.fetchApplications(
                            l.map((e) => e.applicationId),
                            !1,
                        );
                }, [l]);
            let s = n.useCallback(
                    (e) => {
                        D.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: r?.sessionId,
                            page_type: F.G2.GAME_SHOPS,
                            page_category: r?.pageCategory,
                            page_section: r?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, eS.default)({ applicationId: e }).catch(() => {});
                    },
                    [r],
                ),
                o = (0, a.bG)(
                    [eb.A],
                    () =>
                        l.flatMap((e) => {
                            let t = eb.A.getApplication(e.applicationId),
                                r = t?.name;
                            return null == r
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: r,
                                          iconSrc:
                                              t?.icon != null
                                                  ? eE.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [l],
                    eu(),
                );
            return n.useMemo(() => o.map((e) => ({ ...e, onSelect: () => s(e.id) })), [o, s]);
        })({ enabled: y }),
        H = w.length > 0,
        z = n.useMemo(() => {
            let e = [
                { tab: F.G2.HOME, label: _.intl.string(_.t["xNiB/O"]) },
                {
                    tab: F.G2.CATALOG,
                    label: _.intl.string(_.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: n } = e;
                        return (0, l.jsx)(N, { handleTransition: r, onClose: n, selectedTab: t, itemTypeFilters: v });
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
                                o = k(t, r);
                            return P.filter((e) => {
                                let { tab: t } = e;
                                return n || t !== F.G2.PROFILE_FRAMES;
                            }).map((e) => {
                                let { tab: t, labelKey: r } = e,
                                    n = t === o;
                                return (0, l.jsx)(
                                    T.Dr,
                                    {
                                        id: t,
                                        label: _.intl.string(r),
                                        badge: t === F.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: n ? { type: "icon", icon: j.U } : void 0,
                                        action: () => {
                                            s(t), a();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ selectedTab: t, itemTypeFilters: v, canViewProfileFrames: x, onTabSelect: r, onClose: n });
                    },
                },
            ];
            return (
                e.push({ tab: F.G2.ORBS, label: _.intl.string(_.t.EBYkzk) }),
                y &&
                    H &&
                    e.push({
                        tab: F.G2.GAME_SHOPS,
                        label: _.intl.string(_.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, l.jsx)(R, { shops: w, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: r } = e,
                                    n = (0, I.V)({ location: "CollectiblesGameShopsContextMenu" });
                                return t.map((e) =>
                                    (0, l.jsx)(
                                        T.Dr,
                                        {
                                            id: e.id,
                                            label: e.label,
                                            leadingAccessory:
                                                null != e.iconSrc && n ? { type: "image", src: e.iconSrc } : void 0,
                                            trailingIndicator: n ? void 0 : { type: "icon", icon: O.I },
                                            action: () => {
                                                e.onSelect(), r();
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: w, onClose: t });
                        },
                    }),
                e
            );
        }, [r, w, t, v, x, y, H]),
        V = t === F.G2.ORBS ? q.liQ.SHOP_ORBS_TAB : q.liQ.COLLECTIBLES_SHOP,
        W = n.useCallback(() => {
            (0, E.Y)({ pageType: V, sectionType: q.JJy.ORBS_BALANCE_MENU, ctaObject: q.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.navigateToQuestHome)({ fromContent: s.u.ORBS_BALANCE_MENU });
        }, [V]),
        K = n.useCallback(() => {
            A?.id != null && (0, S.openUserProfileModal)({ userId: A.id, tabSection: eh.RP.WISHLIST });
        }, [A?.id]),
        Y = n.useCallback(
            (e) => {
                r(e);
            },
            [r],
        );
    return (0, l.jsx)("div", {
        ref: G,
        children: (0, l.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: ef.jr,
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(U, { handleTransition: r, selectedTab: t, isNarrow: M, hasText: "" !== L }),
                    (0, l.jsx)(o.D, {
                        className: ef.ij,
                        onClick: K,
                        "aria-label": _.intl.string(_.t["7lZ31J"]),
                        children: (0, l.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsx)(h.SS, {
                        analyticsPage: V,
                        cardAlignment: h.SS.CardAlignment.END,
                        ctaText: _.intl.string(_.t.VC4Mq0),
                        ctaOnClick: W,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(o.D, {
                    className: ef.sU,
                    onClick: () => r(F.G2.HOME),
                    "aria-label": _.intl.string(_.t["5upuqx"]),
                    children: (0, l.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(ei, { tabs: z, selectedTab: t, onTabSelect: Y }),
            ],
        }),
    });
}
