r.d(t, { G: () => eE }), r(321073);
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
    h = r(371446),
    f = r(70926),
    C = r(287809),
    g = r(13875),
    A = r(23161),
    T = r(503698),
    y = r.n(T),
    x = r(477782),
    O = r(509434),
    I = r(980707),
    L = r(146919),
    _ = r(375708);
function R(e) {
    let { shops: t, onClose: r } = e,
        s = (0, L.yB)("CollectiblesGameShopsContextMenu");
    return (0, l.jsx)("div", {
        className: y()({ [L.jP]: s }),
        children: (0, l.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: y()({ [L.jP]: s }),
            onClose: r,
            "aria-label": _.intl.string(_.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, l.jsx)(
                    x.Dr,
                    { id: e.id, label: e.label, trailingIndicator: { type: "icon", icon: O.I }, action: e.onSelect },
                    e.id,
                ),
            ),
        }),
    });
}
var j = r(641150),
    v = r(478016),
    F = r(758836);
let k = [
        { tab: F.G2.AVATAR_DECORATIONS, labelKey: _.t.dRZYNE },
        { tab: F.G2.PROFILE_EFFECTS, labelKey: _.t["1cNjtx"] },
        { tab: F.G2.NAMEPLATES, labelKey: _.t.V68Fqz },
        { tab: F.G2.PROFILE_FRAMES, labelKey: _.t.ecTJkR },
        { tab: F.G2.BUNDLES, labelKey: _.t.FYFpps },
        { tab: F.G2.CATALOG, labelKey: _.t.xFcotU },
    ],
    P = {
        [j.q.ALL]: F.G2.CATALOG,
        [j.q.AVATAR_DECORATION]: F.G2.AVATAR_DECORATIONS,
        [j.q.PROFILE_EFFECT]: F.G2.PROFILE_EFFECTS,
        [j.q.NAMEPLATE]: F.G2.NAMEPLATES,
        [j.q.PROFILE_FRAME]: F.G2.PROFILE_FRAMES,
        [j.q.BUNDLE]: F.G2.BUNDLES,
    };
function G(e, t) {
    if (e !== F.G2.CATALOG || 0 === t.size) return e;
    let r = t.values().next().value;
    return null == r ? e : (P[r] ?? e);
}
function N(e) {
    let { handleTransition: t, onClose: r, selectedTab: s, itemTypeFilters: n } = e,
        a = (0, L.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, g.sk)("CollectiblesIndexPageContextMenu"),
        i = G(s, n),
        c = k.filter((e) => {
            let { tab: t } = e;
            return o || t !== F.G2.PROFILE_FRAMES;
        });
    return (0, l.jsx)("div", {
        className: y()({ [L.jP]: a }),
        children: (0, l.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: y()({ [L.jP]: a }),
            onClose: r,
            "aria-label": _.intl.string(_.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: r, labelKey: s } = e,
                    n = r === i;
                return (0, l.jsx)(
                    x.Dr,
                    {
                        id: r,
                        label: _.intl.string(s),
                        badge: r === F.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: n ? { type: "icon", icon: v.U } : void 0,
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
    H = r(652215),
    q = r(113960);
function U(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: n, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, A.v)(),
        [b, m] = s.useState(""),
        p = (0, B.uM)(),
        S = (0, a.bG)([w.default], () => w.default.locale),
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
                D.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            r !== F.G2.CATALOG && t(F.G2.CATALOG), g(F.uY.SEARCH_ICON), f(!0), setTimeout(() => E.current?.focus());
        }, [r, t, g]),
        x = s.useCallback(() => {
            r !== F.G2.CATALOG && t(F.G2.CATALOG), g(F.uY.SEARCH_BAR);
        }, [r, t, g]),
        O = s.useCallback(() => {
            m(""), d(""), g(F.uY.SEARCH_BAR_CLEAR), n && f(!1);
        }, [d, g, n]),
        I = s.useCallback(() => {
            n && "" === b && f(!1);
        }, [n, b]),
        L = n && !h,
        R = (0, l.jsx)(o.D, {
            className: q.qc,
            onClick: T,
            children: (0, l.jsx)(M.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        j = (0, l.jsx)($.I, {
            size: "sm",
            ref: E,
            onKeyDown: C,
            query: b,
            onChange: m,
            onClear: O,
            onBlur: I,
            placeholder: "en-US" === S ? _.intl.string(_.t.arz34K) : _.intl.string(_.t["hIt/Nm"]),
        }),
        v = { "--custom-search-bar-width": `${F.rr}px`, "--custom-search-bar-icon-width": `${F.Dy}px` };
    return L
        ? (0, l.jsx)("div", { style: v, children: R })
        : (0, l.jsx)("div", {
              className: y()(q.ON, { [q.Nz]: h }),
              style: v,
              children: (0, l.jsx)(o.D, { ignoreKeyPress: !0, onClick: x, children: j }),
          });
}
var z = r(3666),
    V = r(834730),
    W = r(777666),
    K = r(761508),
    Y = r(922016),
    Q = r(900797),
    J = r(847374),
    X = r(955572),
    Z = r(775602),
    ee = r(421773);
function et(e) {
    let { tabs: t, selectedTab: r, onTabSelect: s, onClose: n, showOrbRentalNewBadge: a } = e;
    return (0, l.jsx)(I.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": _.intl.string(_.t["UKOtz+"]),
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, l.jsx)(
            x.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, l.jsx)(x.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: n }) }, t);
                    let c = t === F.G2.ORBS && a;
                    return (0, l.jsx)(
                        x.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === r ? { type: "icon", icon: v.U } : void 0,
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
var er = r(584512);
function el(e) {
    let { label: t, icon: r, showNewBadge: s } = e;
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
            s && (0, l.jsx)(W.Lp, { text: _.intl.string(_.t.y2b7CA), className: er.Ad }),
        ],
    });
}
function es(e) {
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
        ? (0, l.jsx)(en, { tab: t, label: r, selected: s, handleTransition: n, renderSubmenu: a, submenuOnly: o })
        : (0, l.jsx)(K.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => n(t),
              className: er.Mf,
              "aria-label": r,
              children: (0, l.jsx)(el, { label: r, icon: c, showNewBadge: i }),
          });
}
function en(e) {
    let { tab: t, label: r, selected: n, handleTransition: a, renderSubmenu: i, submenuOnly: c } = e,
        u = s.useRef(null),
        d = s.useRef(null),
        b = s.useRef(!1),
        { isHovered: m, setIsHovered: p, onMouseEnter: S, onMouseLeave: E, cancelTimers: h } = (0, ee.A)(100, 100),
        f = s.useCallback(() => {
            (b.current = Z.A.keyboardModeEnabled), S();
        }, [S]),
        C = s.useCallback(() => {
            a(t);
        }, [a, t]),
        g = s.useCallback(() => {
            h(), (b.current = Z.A.keyboardModeEnabled), p(!m);
        }, [h, p, m]);
    return (0, l.jsx)(Y.Y, {
        targetElementRef: !0 === c ? u : d,
        shouldShow: m,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            h(), p(!0), (b.current = Z.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            b.current && !Z.A.keyboardModeEnabled && (0, X.uS)(),
                p(!1),
                requestAnimationFrame(() => {
                    (!0 === c ? u : d).current?.focus();
                });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)("div", { onMouseEnter: S, onMouseLeave: E, children: i({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: a } = s,
                i = a ? Q.t : J.a,
                b = _.intl.formatToPlainString(_.t.hd0b7t, {});
            return !0 === c
                ? (0, l.jsx)(K.V.Item, {
                      ...e,
                      id: t,
                      look: "brand",
                      disableItemStyles: !0,
                      selectedItem: n ? t : void 0,
                      onClick: g,
                      clickableRef: (e) => {
                          null != e && null != e.ref && (u.current = e.ref);
                      },
                      className: er.Mf,
                      "aria-label": r,
                      "aria-haspopup": "menu",
                      "aria-expanded": a,
                      children: (0, l.jsx)("div", {
                          "aria-hidden": "true",
                          className: er.Lj,
                          onMouseEnter: f,
                          onMouseLeave: E,
                          children: (0, l.jsx)(V.E, {
                              variant: "text-md/medium",
                              color: "none",
                              children: (0, l.jsxs)("span", {
                                  className: er.hP,
                                  children: [r, (0, l.jsx)(i, { size: "sm", color: "currentColor" })],
                              }),
                          }),
                      }),
                  })
                : (0, l.jsxs)("span", {
                      className: er.Jg,
                      onMouseEnter: f,
                      onMouseLeave: E,
                      children: [
                          (0, l.jsx)(K.V.Item, {
                              id: t,
                              look: "brand",
                              disableItemStyles: !0,
                              selectedItem: n ? t : void 0,
                              onClick: C,
                              clickableRef: (e) => {
                                  null != e && null != e.ref && (u.current = e.ref);
                              },
                              className: er.Mf,
                              "aria-label": r,
                              children: (0, l.jsx)("div", {
                                  "aria-hidden": "true",
                                  className: er.Lj,
                                  children: (0, l.jsx)(V.E, { variant: "text-md/medium", color: "none", children: r }),
                              }),
                          }),
                          (0, l.jsx)(o.D, {
                              ...e,
                              tag: "div",
                              className: er.AD,
                              "aria-label": b,
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              onClick: g,
                              innerRef: d,
                              children: (0, l.jsx)(i, { size: "sm", color: "currentColor" }),
                          }),
                      ],
                  });
        },
    });
}
function ea(e) {
    let { onTabSelect: t, tabs: r, selectedTab: n, selected: a } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, ee.A)(100, 100),
        p = s.useCallback(() => {
            (i.current = Z.A.keyboardModeEnabled), d();
        }, [d]),
        S = s.useCallback(() => {
            m(), u(!0), (i.current = Z.A.keyboardModeEnabled);
        }, [m, u]);
    return (0, l.jsx)(Y.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = Z.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !Z.A.keyboardModeEnabled && (0, X.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, l.jsx)(et, { selectedTab: n, onClose: s, tabs: r, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: r } = t,
                s = r ? Q.t : J.a;
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
                            children: [_.intl.string(_.t["UKOtz+"]), (0, l.jsx)(s, { size: "xs" })],
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
    let { className: t, selectedTab: r, tabs: n, onTabSelect: a } = e,
        [o, i] = s.useState(0),
        c = s.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, z.Wv)({ items: n, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = s.useMemo(() => n.slice(0, u + 1), [u, n]),
        S = s.useMemo(() => n.slice(u + 1), [u, n]),
        E = s.useRef(null),
        h = s.useCallback((e) => {
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
                    n.map((e, t) =>
                        (0, l.jsx)(
                            z.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, l.jsx)(es, {
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
                                es,
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
var ec = r(627363),
    eu = r(587895),
    ed = r(733391),
    eb = r(832163),
    em = r(44724);
r(801416);
var ep = r(518477),
    eS = r(773743);
function eE(e) {
    let { selectedTab: t, handleTransition: r } = e,
        T = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        { enabled: y } = (0, h.Z)({ location: "collectibles_shop_header_bar" }),
        I = (function (e) {
            let { location: t } = e;
            return p.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        L = (0, g.sk)("CollectiblesShopHeaderBar"),
        { searchQuery: j, itemTypeFilters: P } = (0, A.v)(),
        M = s.useRef(null),
        [$, w] = s.useState(!1);
    (0, d.g)(
        M,
        s.useCallback((e) => {
            w(e.contentRect.width < 800);
        }, []),
    );
    let q = (function (e) {
            let { enabled: t } = e,
                r = (0, B.uM)(),
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
                    D.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: r?.sessionId,
                        page_type: F.G2.GAME_SHOPS,
                        page_category: r?.pageCategory,
                        page_section: r?.pageSection,
                        tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                        cta_name: "go_to_game_shop",
                    }),
                        (0, em.default)({ guildId: e }).catch(() => {});
                },
                [r],
            );
            return (0, a.bG)(
                [eu.A],
                () =>
                    l.flatMap((e) => {
                        let t = eu.A.getApplication(e.applicationId)?.name;
                        return null == t ? [] : [{ id: e.guildId, label: t, onSelect: () => n(e.guildId) }];
                    }),
                [l, n],
            );
        })({ enabled: I }),
        z = q.length > 0,
        V = s.useMemo(() => {
            let e = [
                { tab: F.G2.HOME, label: _.intl.string(_.t["xNiB/O"]) },
                {
                    tab: F.G2.CATALOG,
                    label: _.intl.string(_.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, l.jsx)(N, { handleTransition: r, onClose: s, selectedTab: t, itemTypeFilters: P });
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
                                o = G(t, r);
                            return k
                                .filter((e) => {
                                    let { tab: t } = e;
                                    return s || t !== F.G2.PROFILE_FRAMES;
                                })
                                .map((e) => {
                                    let { tab: t, labelKey: r } = e,
                                        s = t === o;
                                    return (0, l.jsx)(
                                        x.Dr,
                                        {
                                            id: t,
                                            label: _.intl.string(r),
                                            badge: t === F.G2.PROFILE_FRAMES ? "new" : void 0,
                                            trailingIndicator: s ? { type: "icon", icon: v.U } : void 0,
                                            action: () => {
                                                n(t), a();
                                            },
                                        },
                                        t,
                                    );
                                });
                        })({ selectedTab: t, itemTypeFilters: P, canViewProfileFrames: L, onTabSelect: r, onClose: s });
                    },
                },
            ];
            return (
                y && e.push({ tab: F.G2.ORBS, label: _.intl.string(_.t.EBYkzk) }),
                I &&
                    z &&
                    e.push({
                        tab: F.G2.GAME_SHOPS,
                        label: _.intl.string(_.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, l.jsx)(R, { shops: q, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: r } = e;
                                return t.map((e) =>
                                    (0, l.jsx)(
                                        x.Dr,
                                        {
                                            id: e.id,
                                            label: e.label,
                                            trailingIndicator: { type: "icon", icon: O.I },
                                            action: () => {
                                                e.onSelect(), r();
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
        }, [y, r, q, t, P, L, I, z]),
        W = t === F.G2.ORBS ? H.liQ.SHOP_ORBS_TAB : H.liQ.COLLECTIBLES_SHOP,
        K = s.useCallback(() => {
            (0, E.Y)({ pageType: W, sectionType: H.JJy.ORBS_BALANCE_MENU, ctaObject: H.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.navigateToQuestHome)({ fromContent: n.u.ORBS_BALANCE_MENU });
        }, [W]),
        Y = s.useCallback(() => {
            T?.id != null && (0, S.openUserProfileModal)({ userId: T.id, tabSection: ep.RP.WISHLIST });
        }, [T?.id]),
        Q = s.useCallback(
            (e) => {
                r(e);
            },
            [r],
        );
    return (0, l.jsx)("div", {
        ref: M,
        children: (0, l.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eS.jr,
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(U, { handleTransition: r, selectedTab: t, isNarrow: $, hasText: "" !== j }),
                    (0, l.jsx)(o.D, {
                        className: eS.ij,
                        onClick: Y,
                        "aria-label": _.intl.string(_.t["7lZ31J"]),
                        children: (0, l.jsx)(i.C, { size: "xs", color: "currentColor" }),
                    }),
                    y &&
                        (0, l.jsx)(f.SS, {
                            analyticsPage: W,
                            cardAlignment: f.SS.CardAlignment.END,
                            ctaText: _.intl.string(_.t.VC4Mq0),
                            ctaOnClick: K,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(o.D, {
                    className: eS.sU,
                    onClick: () => r(F.G2.HOME),
                    "aria-label": _.intl.string(_.t["5upuqx"]),
                    children: (0, l.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(ei, { tabs: V, selectedTab: t, onTabSelect: Q }),
            ],
        }),
    });
}
