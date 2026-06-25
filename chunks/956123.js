r.d(t, { G: () => ef }), r(321073);
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
let p = (0, r(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S = r(975732),
    E = r(318346),
    f = r(70926),
    h = r(287809),
    C = r(13875),
    g = r(23161),
    A = r(503698),
    y = r.n(A),
    T = r(477782),
    O = r(980707),
    x = r(146919),
    I = r(375708);
function L(e) {
    let { shops: t, onClose: r } = e,
        s = (0, x.yB)("CollectiblesGameShopsContextMenu");
    return (0, l.jsx)("div", {
        className: y()({ [x.jP]: s }),
        children: (0, l.jsx)(O.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: y()({ [x.jP]: s }),
            onClose: r,
            "aria-label": I.intl.string(I.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, l.jsx)(
                    T.Dr,
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
var _ = r(641150),
    R = r(478016),
    F = r(758836);
let j = [
        { tab: F.G2.AVATAR_DECORATIONS, labelKey: I.t.dRZYNE },
        { tab: F.G2.NAMEPLATES, labelKey: I.t.V68Fqz },
        { tab: F.G2.PROFILE_EFFECTS, labelKey: I.t["1cNjtx"] },
        { tab: F.G2.PROFILE_FRAMES, labelKey: I.t.ecTJkR },
        { tab: F.G2.BUNDLES, labelKey: I.t.FYFpps },
        { tab: F.G2.CATALOG, labelKey: I.t.xFcotU },
    ],
    v = {
        [_.q.ALL]: F.G2.CATALOG,
        [_.q.AVATAR_DECORATION]: F.G2.AVATAR_DECORATIONS,
        [_.q.PROFILE_EFFECT]: F.G2.PROFILE_EFFECTS,
        [_.q.NAMEPLATE]: F.G2.NAMEPLATES,
        [_.q.PROFILE_FRAME]: F.G2.PROFILE_FRAMES,
        [_.q.BUNDLE]: F.G2.BUNDLES,
    };
function P(e, t) {
    if (e !== F.G2.CATALOG || 0 === t.size) return e;
    let r = t.values().next().value;
    return null == r ? e : (v[r] ?? e);
}
function G(e) {
    let { handleTransition: t, onClose: r, selectedTab: s, itemTypeFilters: n } = e,
        a = (0, x.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, C.sk)("CollectiblesIndexPageContextMenu"),
        i = P(s, n),
        c = j.filter((e) => {
            let { tab: t } = e;
            return o || t !== F.G2.PROFILE_FRAMES;
        });
    return (0, l.jsx)("div", {
        className: y()({ [x.jP]: a }),
        children: (0, l.jsx)(O.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: y()({ [x.jP]: a }),
            onClose: r,
            "aria-label": I.intl.string(I.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: r, labelKey: s } = e,
                    n = r === i;
                return (0, l.jsx)(
                    T.Dr,
                    {
                        id: r,
                        label: I.intl.string(s),
                        badge: r === F.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: n ? { type: "icon", icon: R.U } : void 0,
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
var k = r(7689),
    N = r(892547),
    M = r(773669),
    $ = r(174459),
    w = r(440938),
    D = r(652215),
    B = r(345832);
function q(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: n, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, g.v)(),
        [b, m] = s.useState(""),
        p = (0, w.uM)(),
        S = (0, a.bG)([M.default], () => M.default.locale),
        E = s.useRef(null),
        [f, h] = s.useState(!1);
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
            h(n && i);
        }, [n, i]);
    let C = s.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        A = s.useCallback(
            (e) => {
                $.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        T = s.useCallback(() => {
            r !== F.G2.CATALOG && t(F.G2.CATALOG), A(F.uY.SEARCH_ICON), h(!0), setTimeout(() => E.current?.focus());
        }, [r, t, A]),
        O = s.useCallback(() => {
            r !== F.G2.CATALOG && t(F.G2.CATALOG), A(F.uY.SEARCH_BAR);
        }, [r, t, A]),
        x = s.useCallback(() => {
            m(""), d(""), A(F.uY.SEARCH_BAR_CLEAR), n && h(!1);
        }, [d, A, n]),
        L = s.useCallback(() => {
            n && "" === b && h(!1);
        }, [n, b]),
        _ = n && !f,
        R = (0, l.jsx)(o.D, {
            className: B.qc,
            onClick: T,
            children: (0, l.jsx)(k.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        j = (0, l.jsx)(N.I, {
            size: "sm",
            ref: E,
            onKeyDown: C,
            query: b,
            onChange: m,
            onClear: x,
            onBlur: L,
            placeholder: "en-US" === S ? I.intl.string(I.t.arz34K) : I.intl.string(I.t["hIt/Nm"]),
        }),
        v = { "--custom-search-bar-width": `${F.rr}px`, "--custom-search-bar-icon-width": `${F.Dy}px` };
    return _
        ? (0, l.jsx)("div", { style: v, children: R })
        : (0, l.jsx)("div", {
              className: y()(B.ON, { [B.Nz]: f }),
              style: v,
              children: (0, l.jsx)(o.D, { ignoreKeyPress: !0, onClick: O, children: j }),
          });
}
var H = r(3666),
    U = r(834730),
    z = r(812993),
    K = r(761508),
    V = r(922016),
    Y = r(900797),
    W = r(847374),
    Q = r(955572),
    J = r(775602),
    X = r(421773);
function Z(e) {
    let { tabs: t, selectedTab: r, onTabSelect: s, onClose: n, showOrbRentalNewBadge: a } = e;
    return (0, l.jsx)(O.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": I.intl.string(I.t["UKOtz+"]),
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, l.jsx)(
            T.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, l.jsx)(T.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: n }) }, t);
                    let c = t === F.G2.ORBS && a;
                    return (0, l.jsx)(
                        T.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === r ? { type: "icon", icon: R.U } : void 0,
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
var ee = r(113600);
function et(e) {
    let { label: t, icon: r, showNewBadge: s } = e;
    return (0, l.jsxs)(U.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != r
                ? (0, l.jsxs)("span", {
                      className: ee.nt,
                      children: [t, (0, l.jsx)(r, { size: "xs", color: "currentColor" })],
                  })
                : t,
            s && (0, l.jsx)(z.Lp, { text: I.intl.string(I.t.y2b7CA), className: ee.Ad }),
        ],
    });
}
function er(e) {
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
        ? (0, l.jsx)(el, { tab: t, label: r, selected: s, handleTransition: n, renderSubmenu: a, submenuOnly: o })
        : (0, l.jsx)(K.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => n(t),
              className: ee.Mf,
              "aria-label": r,
              children: (0, l.jsx)(et, { label: r, icon: c, showNewBadge: i }),
          });
}
function el(e) {
    let { tab: t, label: r, selected: n, handleTransition: a, renderSubmenu: o, submenuOnly: i } = e,
        c = s.useRef(null),
        u = s.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: p, cancelTimers: S } = (0, X.A)(100, 100),
        E = s.useCallback(() => {
            (u.current = J.Ay.keyboardModeEnabled), m();
        }, [m]),
        f = s.useCallback(() => {
            S(), b(!0), (u.current = J.Ay.keyboardModeEnabled), i || a(t);
        }, [S, b, i, a, t]);
    return (0, l.jsx)(V.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            S(), b(!0), (u.current = J.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !J.Ay.keyboardModeEnabled && (0, Q.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)("div", { onMouseEnter: m, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: a } = s,
                o = a ? Y.t : W.a;
            return (0, l.jsx)(K.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: n ? t : void 0,
                onClick: f,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: ee.Mf,
                "aria-label": r,
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: ee.Lj,
                    onMouseEnter: E,
                    onMouseLeave: p,
                    children: (0, l.jsx)(U.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: ee.hP,
                            children: [r, (0, l.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function es(e) {
    let { onTabSelect: t, tabs: r, selectedTab: n, selected: a } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, X.A)(100, 100),
        p = s.useCallback(() => {
            (i.current = J.Ay.keyboardModeEnabled), d();
        }, [d]),
        S = s.useCallback(() => {
            m(), u(!0), (i.current = J.Ay.keyboardModeEnabled);
        }, [m, u]);
    return (0, l.jsx)(V.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = J.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !J.Ay.keyboardModeEnabled && (0, Q.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, l.jsx)(Z, { selectedTab: n, onClose: s, tabs: r, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: r } = t,
                s = r ? Y.t : W.a;
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
                className: y()(ee.Mf, ee.OS),
                "aria-label": I.intl.string(I.t["UKOtz+"]),
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: ee.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, l.jsx)(U.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: ee.hP,
                            children: [I.intl.string(I.t["UKOtz+"]), (0, l.jsx)(s, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function en(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, F.dF)(r) && e === F.G2.CATALOG);
}
function ea(e) {
    let { className: t, selectedTab: r, tabs: n, onTabSelect: a } = e,
        [o, i] = s.useState(0),
        c = s.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, H.Wv)({ items: n, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = s.useMemo(() => n.slice(0, u + 1), [u, n]),
        S = s.useMemo(() => n.slice(u + 1), [u, n]),
        E = s.useRef(null),
        f = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(E, f);
    let h = 0 !== o,
        C = S.some((e) => en(e.tab, e, r));
    return (0, l.jsxs)("div", {
        className: y()(ee.kL, t),
        ref: E,
        children: [
            (0, l.jsxs)("div", {
                className: ee.Kk,
                "aria-hidden": "true",
                children: [
                    n.map((e, t) =>
                        (0, l.jsx)(
                            H.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, l.jsx)(er, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: en(e.tab, e, r),
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
                        children: (0, l.jsx)(es, { tabs: S, onTabSelect: a, selectedTab: r, selected: C }),
                    }),
                ],
            }),
            h &&
                (0, l.jsxs)(K.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: a,
                    className: ee.vR,
                    children: [
                        p.map((e) =>
                            (0, l.jsx)(
                                er,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: en(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== S.length
                            ? (0, l.jsx)(es, { tabs: S, onTabSelect: a, selectedTab: r, selected: C })
                            : null,
                    ],
                }),
        ],
    });
}
var eo = r(812729),
    ei = r.n(eo),
    ec = r(627363),
    eu = r(587895),
    ed = r(733391),
    eb = r(832163),
    em = r(44724),
    ep = r(486020);
r(801416);
var eS = r(518477),
    eE = r(478511);
function ef(e) {
    let { selectedTab: t, handleTransition: r } = e,
        A = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        y = (function (e) {
            let { location: t } = e;
            return p.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        O = (0, C.sk)("CollectiblesShopHeaderBar"),
        { searchQuery: x, itemTypeFilters: _ } = (0, g.v)(),
        v = s.useRef(null),
        [k, N] = s.useState(!1);
    (0, d.g)(
        v,
        s.useCallback((e) => {
            N(e.contentRect.width < 800);
        }, []),
    );
    let M = (function (e) {
            let { enabled: t } = e,
                r = (0, w.uM)(),
                l = (0, a.yK)(
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
                    l.length > 0 &&
                        ec.Ay.fetchApplications(
                            l.map((e) => e.applicationId),
                            !1,
                        );
                }, [l]);
            let n = s.useCallback(
                    (e) => {
                        $.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: r?.sessionId,
                            page_type: F.G2.GAME_SHOPS,
                            page_category: r?.pageCategory,
                            page_section: r?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, em.default)({ applicationId: e }).catch(() => {});
                    },
                    [r],
                ),
                o = (0, a.bG)(
                    [eu.A],
                    () =>
                        l.flatMap((e) => {
                            let t = eu.A.getApplication(e.applicationId),
                                r = t?.name;
                            return null == r
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: r,
                                          iconSrc:
                                              t?.icon != null
                                                  ? ep.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [l],
                    ei(),
                );
            return s.useMemo(() => o.map((e) => ({ ...e, onSelect: () => n(e.id) })), [o, n]);
        })({ enabled: y }),
        B = M.length > 0,
        H = s.useMemo(() => {
            let e = [
                { tab: F.G2.HOME, label: I.intl.string(I.t["xNiB/O"]) },
                {
                    tab: F.G2.CATALOG,
                    label: I.intl.string(I.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, l.jsx)(G, { handleTransition: r, onClose: s, selectedTab: t, itemTypeFilters: _ });
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
                                o = P(t, r);
                            return j
                                .filter((e) => {
                                    let { tab: t } = e;
                                    return s || t !== F.G2.PROFILE_FRAMES;
                                })
                                .map((e) => {
                                    let { tab: t, labelKey: r } = e,
                                        s = t === o;
                                    return (0, l.jsx)(
                                        T.Dr,
                                        {
                                            id: t,
                                            label: I.intl.string(r),
                                            badge: t === F.G2.PROFILE_FRAMES ? "new" : void 0,
                                            trailingIndicator: s ? { type: "icon", icon: R.U } : void 0,
                                            action: () => {
                                                n(t), a();
                                            },
                                        },
                                        t,
                                    );
                                });
                        })({ selectedTab: t, itemTypeFilters: _, canViewProfileFrames: O, onTabSelect: r, onClose: s });
                    },
                },
            ];
            return (
                e.push({ tab: F.G2.ORBS, label: I.intl.string(I.t.EBYkzk) }),
                y &&
                    B &&
                    e.push({
                        tab: F.G2.GAME_SHOPS,
                        label: I.intl.string(I.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, l.jsx)(L, { shops: M, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: r } = e;
                                return t.map((e) =>
                                    (0, l.jsx)(
                                        T.Dr,
                                        {
                                            id: e.id,
                                            label: e.label,
                                            leadingAccessory:
                                                null != e.iconSrc ? { type: "image", src: e.iconSrc } : void 0,
                                            action: () => {
                                                e.onSelect(), r();
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: M, onClose: t });
                        },
                    }),
                e
            );
        }, [r, M, t, _, O, y, B]),
        U = t === F.G2.ORBS ? D.liQ.SHOP_ORBS_TAB : D.liQ.COLLECTIBLES_SHOP,
        z = s.useCallback(() => {
            (0, E.Y)({ pageType: U, sectionType: D.JJy.ORBS_BALANCE_MENU, ctaObject: D.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.navigateToQuestHome)({ fromContent: n.u.ORBS_BALANCE_MENU });
        }, [U]),
        K = s.useCallback(() => {
            A?.id != null && (0, S.openUserProfileModal)({ userId: A.id, tabSection: eS.RP.WISHLIST });
        }, [A?.id]),
        V = s.useCallback(
            (e) => {
                r(e);
            },
            [r],
        );
    return (0, l.jsx)("div", {
        ref: v,
        children: (0, l.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eE.jr,
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(q, { handleTransition: r, selectedTab: t, isNarrow: k, hasText: "" !== x }),
                    (0, l.jsx)(o.D, {
                        className: eE.ij,
                        onClick: K,
                        "aria-label": I.intl.string(I.t["7lZ31J"]),
                        children: (0, l.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsx)(f.SS, {
                        analyticsPage: U,
                        cardAlignment: f.SS.CardAlignment.END,
                        ctaText: I.intl.string(I.t.VC4Mq0),
                        ctaOnClick: z,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(o.D, {
                    className: eE.sU,
                    onClick: () => r(F.G2.HOME),
                    "aria-label": I.intl.string(I.t["5upuqx"]),
                    children: (0, l.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(ea, { tabs: H, selectedTab: t, onTabSelect: V }),
            ],
        }),
    });
}
