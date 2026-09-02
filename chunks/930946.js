"use strict";
n.d(t, { A: () => tA });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(305866),
    o = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    h = n(702841),
    m = n(594061),
    f = n(796774),
    p = n(209932);
n(30146);
var g = n(562708),
    x = n(17928),
    A = n(27232),
    E = n(406810),
    C = n(111159),
    I = n(7689),
    y = n(369606),
    S = n(939249),
    N = n(297264),
    v = n(358618),
    _ = n(983851),
    T = n(442433),
    j = n(537652),
    b = n(212245),
    R = n(139286),
    O = n(915089),
    M = n(724511),
    L = n(850992),
    k = n(887695),
    w = n(435558),
    P = n(962125),
    D = n(158045),
    U = n(240864),
    G = n(212633);
let V = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: r,
                listPadding: a,
                renderRow: o,
                renderSection: u,
                renderSectionHeader: c,
                renderSectionFooter: h,
                renderInspector: m,
                renderEmptySearchState: f,
                rowCount: p,
                rowCountBySection: g,
                rowHeight: x,
                sectionHeaderHeight: A,
                sectionFooterHeight: E,
                renderUpsell: C,
                onScroll: I,
            } = e,
            y = i.useRef(!1),
            S = i.useRef(null),
            N = (0, d.RQ)((e) => e.searchQuery),
            v = s.useStore((e) => e.activeCategoryIndex),
            _ = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, D.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            T = (0, k.Fk)({
                activeCategoryIndex: v,
                isScrolling: y,
                listRef: S,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: N,
            }),
            j = i.useCallback(
                (e) => {
                    T(e),
                        F({
                            listRef: S,
                            searchQuery: N,
                            nitroLockedSectionStates: _,
                            scrollTop: e,
                            sectionHeaderHeight: A,
                            sectionFooterHeight: E,
                        }),
                        I?.(e);
                },
                [T, N, _, A, E, I],
            );
        return (
            i.useEffect(() => {
                null != S.current && j(S.current.getScrollerNode()?.scrollTop ?? 0);
            }, [j, S]),
            (0, k.FV)({ searchQuery: N, activeCategoryIndex: v, listRef: S }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => S.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => S.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsxs)("div", {
                className: G.i,
                children: [
                    N.length > 0 && !r && null != f
                        ? f()
                        : (0, l.jsx)(P.A, {
                              role: "none presentation",
                              listPadding: a,
                              onScroll: j,
                              renderRow: o,
                              renderSection: u,
                              renderSectionHeader: c,
                              renderSectionFooter: h,
                              rowCount: p,
                              rowCountBySection: g,
                              rowHeight: x,
                              sectionHeaderHeight: A,
                              sectionFooterHeight: E,
                              stickyHeaders: !0,
                              ref: S,
                          }),
                    C?.(),
                    m?.(),
                ],
            })
        );
    }),
    F = (0, w.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: r,
            } = e;
            if (null == t.current) return;
            let a = (0, U.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: r,
            });
            d.RQ.setState({
                isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    );
var H = n(462180),
    B = n(602034),
    W = n(683438),
    K = n(642232);
let z = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: r,
            gridNavigatorId: a,
            expressionsListRef: o,
            defaultSearchPlaceholder: u,
            emptySearchPlaceholder: c,
        } = e,
        h = i.useRef(null),
        [m, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], H.x),
        p = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], H.x),
        A = i.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : L.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    o.current?.scrollTo(0);
            },
            [o, n],
        ),
        E = i.useCallback(() => {
            A("");
        }, [A]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => h.current?.focus() })),
        i.useLayoutEffect(() => {
            f && h.current?.focus();
        }, [f]),
        (0, l.jsx)("div", {
            className: K.i,
            children: (0, l.jsx)(W.I, {
                autoFocus: s,
                disabled: !s,
                query: m,
                ref: h,
                placeholder: null != p ? p : s || null == c ? u : c,
                onClear: E,
                onKeyDown: r,
                onChange: A,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": a,
                    "aria-expanded": !0,
                    ...(x ? { "aria-activedescendant": (0, B.Aq)(a, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var Z = n(904289);
function Y(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: r,
            onSelectItem: a,
            onSearchExpressions: o,
            onScroll: u,
            hasSearchResults: c,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: m,
            renderEmptyState: f,
            renderRow: p,
            renderSection: g,
            renderSectionHeader: x,
            renderSectionFooter: A,
            renderInspector: E,
            renderEmptySearchState: C,
            renderCategoryList: I,
            renderHeaderAccessories: y,
            rowHeight: S,
            sectionHeaderHeight: N,
            sectionFooterHeight: v,
            itemNodeWidth: _,
            listPaddingRight: T,
            itemNodeMargin: j,
            listPadding: b,
            gridNavigatorId: R,
            gridNotice: O,
            renderHeader: M,
            renderUpsell: L,
        } = e,
        w = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(null),
        U = 0 === t.length,
        G = (0, d.RQ)((e) => e.searchQuery),
        F = r.useStore((e) => e.inspectedExpressionPosition),
        H = (0, k.oV)({ gridWrapperRef: w, containerWidth: s, showingEmptyState: U }),
        {
            expressionsGrid: B,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: Y,
            gutterWidth: q,
        } = (0, k.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: T,
            itemNodeWidth: _,
            itemNodeMargin: j,
        }),
        {
            getItemProps: J,
            getRowProps: $,
            gridContainerProps: X,
            handleGridContainerKeyDown: Q,
            isUsingKeyboardNavigation: ee,
        } = (0, k.JZ)({
            columnCounts: Y,
            expressionsListRef: P,
            expressionsGrid: B,
            onSelectItem: a,
            store: r,
            gridNavigatorId: R,
        }),
        et = i.useCallback(
            (e, t) =>
                p(
                    B[e],
                    $(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => J(e, t),
                    (t) => r.setInspectedExpressionPosition(t, e),
                ),
            [B, J, $, q, ee, p, r, W],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => A?.(t[e], e), [t, A]),
        ei = i.useCallback(() => E?.(B?.[F.rowIndex]?.[F.columnIndex]), [B, F.columnIndex, F.rowIndex, E]);
    i.useEffect(() => {
        o(G);
    }, [o, G]),
        i.useEffect(() => {
            r.setBottomPosition(w.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => r.resetStoreState, [r.resetStoreState]),
        i.useLayoutEffect(() => {
            D.current?.focus();
        }, []);
    let es = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(z, {
                ref: D,
                store: r,
                hasSendableExpressions: !0,
                onKeyDown: Q,
                expressionsListRef: P,
                gridNavigatorId: R,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: m,
            }),
            y?.(),
        ],
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != M ? M(es) : (0, l.jsxs)("div", { className: Z.wx, children: [" ", es, " "] }),
            U && null != f
                ? f(Z.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          I(P),
                          null != O && (0, l.jsx)("div", { className: Z.Eb, children: O }),
                          (0, l.jsx)("div", {
                              ref: w,
                              className: Z.AD,
                              id: R,
                              ...X,
                              children:
                                  null != H
                                      ? (0, l.jsx)(V, {
                                            categories: t,
                                            ref: P,
                                            store: r,
                                            hasSearchResults: c,
                                            listPadding: b,
                                            renderRow: et,
                                            renderSection: g,
                                            renderSectionHeader: null != x ? en : void 0,
                                            renderSectionFooter: null != A ? el : void 0,
                                            renderInspector: null != E ? ei : void 0,
                                            renderEmptySearchState: C,
                                            rowCount: W,
                                            rowCountBySection: K,
                                            rowHeight: S,
                                            sectionHeaderHeight: N,
                                            sectionFooterHeight: v,
                                            renderUpsell: L,
                                            onScroll: u,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var q = n(89366),
    J = n(319993),
    $ = n(202639),
    X = n(414872),
    Q = n(285373),
    ee = n(2181),
    et = n(885386),
    en = n(763827),
    el = n(287809),
    ei = n(977997),
    es = n(147925),
    er = n(174459),
    ea = n(807348),
    eo = n(813564),
    eu = n(147472);
n(321073);
var ec = n(964486),
    ed = n(931991),
    eh = n(734057),
    em = n(71393),
    ef = n(576705),
    ep = n(309010),
    eg = n(473145),
    ex = n(636537),
    eA = n(228366),
    eE = n(463347),
    eC = n(125831),
    eI = n(945810);
let ey = (0, eI.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
(0, eI.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
var eS = n(652215),
    eN = n(805143),
    ev = n(935208);
function e_(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => ev.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eT = n(980504),
    ej = n(202541);
function eb(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: ea.uq.SOUND, sound: e, index: t }));
}
function eR(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: s, sortSoundsFn: r } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = eb(o, r);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function eO(e, t, n) {
    let { allSounds: l, topSoundIds: i } = n,
        s = {};
    for (let e of l.get(t.id) ?? []) s[e.soundId] = e;
    let r = [];
    for (let e of i) {
        let t = s[e];
        null != t && r.push(t);
    }
    0 !== r.length &&
        e.push({ key: ea.Cx.TOP_SOUNDS, categoryInfo: { type: ea.Cx.TOP_SOUNDS, guild: t }, items: eb(r) });
}
function eM(e, t) {
    let n = t.get("0") ?? eT.pD;
    e.push({ key: ea.Cx.DEFAULTS, categoryInfo: { type: ea.Cx.DEFAULTS }, items: eb(n, e_) });
}
var eL = n(837381),
    ek = n(866665),
    ew = n(88218),
    eP = n(407698),
    eD = n(698279),
    eU = n(375708),
    eG = n(120052);
let eV = [8, 8, 8, 8],
    eF = "soundboard_guild_",
    { itemIdForIndex: eH } = (0, ew.J)(eF);
function eB(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(S.D, {
        ...s,
        onClick: i,
        className: r()(eG.Yl, { [eG.wH]: n }),
        children: (0, l.jsx)(t, { className: eG.xi, color: "currentColor" }),
    });
}
function eW(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case ea.Cx.FAVORITES:
            return (0, l.jsx)(eB, { icon: A.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(eB, { icon: E.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.GUILD:
            return (0, l.jsx)(
                S.D,
                {
                    ...i,
                    className: eG.L1,
                    onClick: t,
                    children: (0, l.jsx)(M.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case ea.Cx.DEFAULTS:
            return (0, l.jsx)(eB, { icon: C.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.TOP_SOUNDS:
            return (0, l.jsx)(eB, { icon: y.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eK(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, eL.rm)(eH(n));
    return t.categoryInfo.type === ea.Cx.GUILD
        ? (0, l.jsx)(eP.Q, { guild: t.categoryInfo.guild, children: eW(t, i, s, a, r) })
        : (0, l.jsx)(ek.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case ea.Cx.FAVORITES:
                          return eU.intl.string(eU.t.k8fFjp);
                      case ea.Cx.FREQUENTLY_USED:
                          return eU.intl.string(eU.t["+cGVV6"]);
                      case ea.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case ea.Cx.DEFAULTS:
                          return eU.intl.string(eU.t.Rtvk9X);
                      case ea.Cx.TOP_SOUNDS:
                          return eU.intl.formatToPlainString(eU.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: eW(t, i, s, a, r),
          });
}
function ez(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = eV,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
        h = (0, D.TW)(d, ej.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let r = s && th(e.categoryInfo, h, o);
                return (0, l.jsx)(eK, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        er.default.track(eS.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eS.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eD.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    },
                    isSelected: i,
                    isNitroLocked: r,
                });
            },
            [o, s, h],
        );
    return (0, l.jsx)(ew.A, {
        className: r()(u ? eG.HZ : eG.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: L.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: eF,
    });
}
var eZ = n(554146),
    eY = n(191023),
    eq = n(192308),
    eJ = n(28863),
    e$ = n(695366),
    eX = n(834730),
    eQ = n(789645),
    e0 = n(565645),
    e1 = n(775602),
    e2 = n(826673),
    e3 = n(182922),
    e8 = n(532624),
    e5 = n(531685),
    e6 = n(723702),
    e7 = n(350535),
    e4 = n(115023);
function e9(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([em.A], () => em.A.getGuild(t?.guildId)),
        o = (0, h.bG)([e1.Ay], () => e1.Ay.useReducedMotion, []),
        u = (0, h.bG)([e5.A], () => e5.A.isFocused()),
        c = (0, h.bG)([e8.Ay], () => e8.Ay.getKeybindForAction(eS.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(e3.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e0.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: e4.Zg })
                    : (0, l.jsx)(eY.ImageIcon, { size: "md", color: "currentColor", className: e4.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(M.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    function m() {
        i(),
            (0, eq.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            });
    }
    let f = (0, e2.k8)(eZ.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != c && (0, e6.isWindows)() && !f
                ? eU.intl.format(eU.t.udMTth, {
                      keybind: (0, e7.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(eJ.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: e4.g,
              children: [
                  (0, l.jsx)(e$.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e4.QW }),
                  (0, l.jsx)(eX.E, { variant: "text-sm/medium", color: "text-default", className: e4.L5, children: g }),
                  (0, l.jsx)(S.D, {
                      className: e4.b,
                      onClick: function () {
                          return (0, e2.Dr)(eZ.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(eQ.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var te = n(805945),
    tt = n(890856),
    tn = n(307301),
    tl = n(468689);
function ti(e) {
    tl.A.open(e, eS.BEX.SOUNDBOARD),
        (0, eq.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("860350"),
                n.e("207998"),
                n.e("341659"),
                n.e("376991"),
                n.e("67491"),
                n.e("308555"),
                n.e("883952"),
                n.e("220287"),
                n.e("66580"),
                n.e("808979"),
                n.e("420643"),
                n.e("974049"),
                n.e("280559"),
                n.e("669006"),
                n.e("98913"),
                n.e("612811"),
            ]).then(n.bind(n, 191110));
            return (n) => (0, l.jsx)(t, { ...n, guildId: e });
        });
}
var ts = n(948611),
    tr = n(308078);
function ta(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, ed.nr)(t);
    return (0, l.jsx)(ek.m, {
        text: eU.intl.string(eU.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: ts.H,
            children: (0, l.jsxs)(tt.s, {
                ...s,
                "aria-label": eU.intl.formatToPlainString(eU.t.c1qVYh, { guildName: t.name }),
                className: r()(tr.n4, { [tr.in]: n, [tr.r9]: !a }),
                onClick: () => (null != i ? i() : ti(t.id)),
                children: [
                    (0, l.jsx)(tn.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(eX.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eU.intl.string(eU.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function to(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: l,
            columnIndex: s,
            isUsingKeyboardNavigation: r,
            suppressPlaySound: a,
            getItemProps: o,
            onSelectItem: u,
            onItemMouseEnter: c,
            buttonOverlay: d,
            isNitroLocked: h,
            showLockForDisabledSound: m,
            inExpressionPicker: f,
        } = e,
        p = L.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        x = r && p.rowIndex === l && p.columnIndex === s;
    switch (t.item.type) {
        case ea.uq.SOUND:
            return (0, i.createElement)(te.Ay, {
                ...o(s),
                ...n,
                key: g,
                sound: t.item.sound,
                suppressPlaySound: a,
                focused: x,
                onMouseEnter: () => c(s),
                onSelectItem: (e) => u(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: d,
                inNitroLockedSection: h,
                showLockForDisabledSound: m,
                isSoundmoji: !0 === f,
            });
        case ea.uq.ADD_SOUND:
            return (0, i.createElement)(ta, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tu = n(635799);
let tc = 32 + X.kg - 8,
    td = {
        [ea.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [ea.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [ea.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [ea.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [ea.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [ea.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function th(e, t, n) {
    return (null == n && e.type === ea.Cx.GUILD && !t) || (e.type === ea.Cx.GUILD && e.guild.id !== n && !t);
}
function tm(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: a } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a && (0, l.jsx)(X.Ay, { className: tu.yH }),
            (0, l.jsx)("div", {
                className: r()(tu.hd, { [tu.Jb]: s, [tu.VD]: s }),
                children: (0, l.jsx)(S.D, {
                    className: tu.bV,
                    onClick: i,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tu.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case ea.Cx.FAVORITES:
                                        return (0, l.jsx)(A.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tu.nr,
                                        });
                                    case ea.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(E.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tu.nr,
                                        });
                                    case ea.Cx.GUILD:
                                        return (0, l.jsx)(M.A, { guild: t.guild, height: 16, width: 16 });
                                    case ea.Cx.DEFAULTS:
                                        return (0, l.jsx)(C.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tu.nr,
                                        });
                                    case ea.Cx.SEARCH:
                                        return (0, l.jsx)(I.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tu.nr,
                                        });
                                    case ea.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(y.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tu.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(N.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tu.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case ea.Cx.FAVORITES:
                                            return eU.intl.string(eU.t.k8fFjp);
                                        case ea.Cx.FREQUENTLY_USED:
                                            return eU.intl.string(eU.t["+cGVV6"]);
                                        case ea.Cx.GUILD:
                                            return t.guild.name;
                                        case ea.Cx.DEFAULTS:
                                            return eU.intl.string(eU.t.Rtvk9X);
                                        case ea.Cx.SEARCH:
                                            return eU.intl.string(eU.t["zkoeq/"]);
                                        case ea.Cx.TOP_SOUNDS:
                                            return eU.intl.formatToPlainString(eU.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(es.A, {
                                className: tu.nr,
                                direction: n ? es.A.Directions.RIGHT : es.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tf() {
    return (0, l.jsx)(j.A, { message: eU.intl.string(eU.t.bgDdNK) });
}
function tp(e) {
    let { className: t } = e,
        n = (0, x.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? v._ : _.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tg(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: a,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: f = !1,
            shouldShowLockedSounds: A = !0,
            gridNotice: E,
            soundButtonOverlay: C,
            listPadding: I,
            renderHeader: y,
            defaultSoundsOnly: N = !1,
            inExpressionPicker: v,
            analyticsSource: j,
        } = e,
        { analyticsLocations: M } = (0, c.Ay)(),
        { analyticsLocations: k } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: w } = (0, b.p)(),
        P = i.useMemo(() => ({ ...w, section: eS.JJy.SOUNDBOARD_SOUND_PICKER }), [w]),
        [U, G] = i.useState(null),
        V = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
        F = (0, D.TW)(V, ej.PremiumTypes.TIER_2),
        H = (0, x.bG)([ei.A], () => ei.A.getVoiceState(t, V?.id ?? eS.dJq)),
        B = H?.selfDeaf || H?.mute || H?.suppress,
        W = (0, d.RQ)((e) => e.searchQuery),
        K = null != W && "" !== W,
        z = (0, O.GV)(),
        {
            categories: Z,
            availableSounds: X,
            soundCounts: es,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
                s = D.Ay.isPremium(l, ej.PremiumTypes.TIER_2),
                [r, a, o, u] = (0, x.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, eN.Y)(e, !1),
                d = (0, x.yK)([em.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = em.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                h = D.Ay.canUseSoundboardEverywhere(l),
                m = (0, x.bG)([em.A], () => em.A.getGuild(e?.guild_id)),
                f = (0, x.bG)([ef.A], () => {
                    let { canCreateExpressions: e } = (0, ed.ie)(m);
                    return e;
                }, [m]),
                g = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                A = (0, x.bG)([ep.Ay, eh.A, em.A], () => {
                    let e = ep.Ay.getVoiceChannelId(),
                        t = null != e ? eh.A.getChannel(e) : null;
                    return t?.guild_id != null ? em.A.getGuild(t.guild_id) : void 0;
                }),
                { enabled: E, topSoundsFirst: C } = ey.getConfig({ location: "useSoundGrid" });
            (0, ec.Ay)(() => {
                E &&
                    (function (e) {
                        var t;
                        if (
                            null == e ||
                            null == el.default.getCurrentUser() ||
                            !ey.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
                        )
                            return;
                        let n = p.A.getTopSoundboardSoundsMetadata(e);
                        if (null != n) {
                            let { topSoundsTTL: e } = n;
                            if (null == e || Date.now() < e) return;
                        }
                        eC.A.getIsFetching(e) ||
                            ((t = e),
                            (0, eE.tZ)(t) ||
                                (eA.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                                ex.Bo.get({
                                    url: eS.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }).then(
                                    (e) =>
                                        eA.h.dispatch({
                                            type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                            guildId: t,
                                            topSoundsMetadata: e.body.items
                                                .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                                .sort((e, t) => e.rank - t.rank),
                                        }),
                                    () => eA.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
                                )));
                    })(A?.id);
            });
            let I = (0, x.yK)([p.A], () => p.A.getTopSoundboardSoundIds(A?.id)),
                y = i.useMemo(() => I.slice(0, 3), [I]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                return n
                    ? (eM(i, r),
                      {
                          categories: i,
                          availableSounds: r.get("0") ?? eT.pD,
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (E && null != A && C && eO(i, A, { allSounds: r, topSoundIds: y }),
                      eR({
                          sections: i,
                          guildIds: c,
                          allSounds: r,
                          potentialSoundIdsForSection: Array.from(a),
                          sectionType: ea.Cx.FAVORITES,
                          sortSoundsFn: e_,
                      }),
                      g.length > 0 &&
                          eR({
                              sections: i,
                              guildIds: c,
                              allSounds: r,
                              potentialSoundIdsForSection: g,
                              sectionType: ea.Cx.FREQUENTLY_USED,
                          }),
                      E && null != A && !C && eO(i, A, { allSounds: r, topSoundIds: y }),
                      void 0 !== m &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: l,
                                      allSounds: i,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: r,
                                  } = n,
                                  a = i.get(t.id) ?? [],
                                  o = eb(a, r),
                                  u = a.length < (0, eg.fA)(t) && l,
                                  c = 0 === o.length;
                              (u || c) && !s && o.push({ type: ea.uq.ADD_SOUND, guild: t }),
                                  (s && c) ||
                                      e.push({
                                          categoryInfo: { type: ea.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(i, m, {
                              currentGuildHasAddPermissions: f,
                              allSounds: r,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: e_,
                          }),
                      h || eM(i, r),
                      !(function (e) {
                          let {
                              sections: t,
                              guilds: n,
                              currentGuildId: l,
                              allSounds: i,
                              hasNitro: s,
                              sortSoundsFn: r,
                          } = e;
                          for (let e of n) {
                              if (e.id === l) continue;
                              let n = eb(i.get(e.id) ?? [], r);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: ea.Cx.GUILD, guild: e, isNitroLocked: !s },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: i,
                          guilds: d,
                          currentGuildId: m?.id,
                          allSounds: r,
                          hasNitro: s,
                          sortSoundsFn: e_,
                      }),
                      h && eM(i, r),
                      i.forEach((t) => {
                          t.categoryInfo.type === ea.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (l += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: i,
                          availableSounds: Array.from(r.values()).flat(),
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: a.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: l,
                          },
                      });
            }, [c, r, a, !0, m, f, t, h, d, n, u, s, e_, g, A, y, E, C]);
        })(s, void 0, N),
        [eI, ev] = i.useState([]),
        eL = i.useMemo(
            () => (W.length > 0 ? [{ key: ea.Cx.SEARCH, categoryInfo: { type: ea.Cx.SEARCH }, items: eb(eI) }] : Z),
            [Z, W.length, eI],
        ),
        ek = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        ew = i.useMemo(() => eL.filter((e) => e.items.length > 0), [eL]),
        eP = i.useMemo(
            () => ew.findLastIndex((e) => !!(0, D.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ew],
        ),
        eG = !F && A && -1 !== eP,
        eV = !F && A && -1 !== eP,
        eF = et.b0.useSetting(),
        eH = i.useMemo(() => new Set(eF), [eF]),
        eB = null == s,
        eW = D.Ay.canUseCustomCallSounds(V),
        eK = i.useCallback(
            (e) => {
                eH.has(e) ? eH.delete(e) : eH.add(e), et.b0.updateSetting(Array.from(eH));
            },
            [eH],
        ),
        eZ = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eo.Ir)(V, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, eo.Au)(s))
                    (0, eo.Ak)(e, s?.id ?? eS.dJq, t, l),
                        K &&
                            er.default.track(eS.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eS.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: W,
                                location_stack: t,
                            });
                else {
                    if ((0, eo.Ir)(V, e, s)) return;
                    A && G(e);
                }
            },
            [f, V, s, A, K, W, h, m],
        ),
        eY = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case ea.uq.SOUND:
                        let n = td[e?.category] ?? null,
                            l = e?.item.index;
                        return eZ(e.item.sound, null == n ? M : [...M, n], t?.shiftKey !== !0, l);
                    case ea.uq.ADD_SOUND:
                        return o(), ti(e.item.guild.id);
                }
            },
            [M, eZ, o],
        ),
        eq = i.useCallback(
            (e, n, i, a, o) => {
                let u = ew[i.sectionIndex],
                    c = A && th(u.categoryInfo, F, t) && eG;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(tu.a, { [tu.uL]: c }),
                        children: e.map((e, t) =>
                            (0, l.jsx)(
                                to,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eB ? eW : !B,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: M,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: eY,
                                    onItemMouseEnter: o,
                                    buttonOverlay: C,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: A,
                                    inExpressionPicker: v,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [ew, A, F, t, f, eY, s, eB, eW, B, M, C, eG, v],
        ),
        eJ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !A) return !1;
                let n = ew[e],
                    l = ew[e - 1],
                    i = th(n.categoryInfo, F, t),
                    s = th(l.categoryInfo, F, t);
                return i && !s;
            },
            [ew, A, F],
        ),
        e$ = i.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && G(e);
        }, []),
        eX = i.useCallback(() => {
            let e = (0, D.Dd)(ej.PremiumTypes.TIER_2);
            return eU.intl.format(eU.t["tw/SSq"], { nitroTierName: e, onClick: e$ });
        }, [e$]),
        eQ = i.useCallback((e) => (eJ(e, t) ? tc : 32), [t, eJ]),
        e0 = i.useCallback(
            (e) => {
                let t = e === ew.length - 1;
                return eV && t ? 70 : eG && e === eP ? 20 : 0;
            },
            [ew.length, eG, eV, eP],
        ),
        e1 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e2 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = A && th(e.categoryInfo, F, t),
                    r = eJ(n, t),
                    a = eH.has(i);
                return (0, l.jsx)(
                    tm,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            er.default.track(eS.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eS.liQ.SOUNDBOARD_POPOUT },
                                tab: eD.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eK(i);
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && eG,
                        showNitroDivider: r && eG,
                    },
                    `header-${i}`,
                );
            },
            [eH, eK, t, eJ, A, F, eG],
        ),
        e3 = i.useCallback(
            (e, t) => {
                let n = t === ew.length - 1,
                    i = t === eP;
                return eV && n
                    ? (0, l.jsx)("div", { className: r()(tu.Lk, { [tu.Ns]: i }) })
                    : eG && t === eP
                      ? (0, l.jsx)("div", { className: r()(tu.a3, { [tu.Ns]: i }) })
                      : null;
            },
            [eP, eG, eV, ew.length],
        ),
        e8 = i.useCallback((e) => ev((0, eu.lG)(e, X, V, s, M)), [s, V, X, M]),
        e5 = i.useCallback(
            (e) => {
                (0, T.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: M, ...t });
                });
            },
            [M],
        ),
        e6 = i.useCallback(
            () =>
                v
                    ? (0, l.jsx)(J.Gq, {
                          renderPopout: () => (0, l.jsx)(J.qn, {}),
                          tooltipText: eU.intl.string(eU.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(tu.Jm, tu.Zz),
                          children: (0, l.jsx)(_.H, { size: "md", color: "currentColor", className: tu.By }),
                      })
                    : (0, l.jsx)(S.D, {
                          tabIndex: 0,
                          className: tu.Jm,
                          onClick: e5,
                          "aria-label": eU.intl.string(eU.t.kbFsAD),
                          children: (0, l.jsx)(tp, { className: tu.By }),
                      }),
            [v, e5],
        ),
        e7 = i.useCallback(
            (e) =>
                (0, l.jsx)(ez, {
                    soundboardListRef: e,
                    categories: Z,
                    shouldUpsellLockedCategories: eG,
                    listPadding: I,
                    guildId: t,
                    inExpressionPicker: v,
                }),
            [Z, I, eG, t, v],
        ),
        e4 = i.useCallback(() => {
            let e = (0, q.qD)();
            return (0, D.LE)(e, ej.pe.TIER_2) ?? eU.intl.string(eU.t.pj0XBN);
        }, []),
        te = i.useCallback(
            () =>
                eV
                    ? (0, l.jsx)($.d, {
                          showUpsell: ek,
                          text: eX(),
                          button: e4(),
                          buttonAnalyticsObject: { section: eS.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(Q.l, {
                              size: "sm",
                              className: tu.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [eX, e4, eV, ek],
        ),
        tt = i.useCallback(
            (e) =>
                e?.item.type === ea.uq.SOUND
                    ? (0, l.jsx)(e9, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tn = (0, x.bG)([en.A], () => en.A.getMediaSessionId());
    return (
        (0, R.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: j,
                guild_id: t,
                media_session_id: tn,
                available_custom_sounds_count: es.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: es.lockedCustomSoundCount,
                favorite_sounds_count: es.favoriteSoundCount,
                type: eT.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != U
                    ? (0, l.jsx)(ee.A, {
                          title: eU.intl.string(v ? eU.t.rZEEvU : eU.t.jGDYF0),
                          description: eU.intl.string(v ? eU.t.ZPNG5A : eU.t["grL/hg"]),
                          analyticsLocationSection: eS.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: ej.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...P, object: eS.ZSU.SOUNDBOARD_SOUND },
                              location_stack: k,
                              sku_id: D.Ay.getSkuIdForPremiumType(ej.PremiumTypes.TIER_2),
                          },
                          onClose: () => G(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)(Y, {
                    categories: ew,
                    collapsedCategories: eH,
                    containerWidth: a,
                    store: L.LW,
                    onSelectItem: eY,
                    onSearchExpressions: e8,
                    hasSearchResults: eI.length > 0,
                    defaultSearchPlaceholder: eU.intl.string(eU.t.sKt3xS),
                    renderRow: eq,
                    renderSectionHeader: e2,
                    renderSectionFooter: e3,
                    renderSection: e1,
                    renderCategoryList: e7,
                    renderHeaderAccessories: e6,
                    rowHeight: 48,
                    sectionHeaderHeight: eQ,
                    sectionFooterHeight: e0,
                    itemNodeWidth: 150,
                    gridNavigatorId: z,
                    renderEmptySearchState: tf,
                    renderInspector: tt,
                    gridNotice: E,
                    renderHeader: y,
                    renderUpsell: te,
                }),
            ],
        })
    );
}
var tx = n(70317);
function tA(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: g,
            onSelect: x,
            analyticsSource: A,
            suppressPlaySound: E,
            shouldValidateSelectedSound: C,
            shouldShowLockedSounds: I = !0,
            gridNotice: y,
            inExpressionPicker: S,
            soundButtonOverlay: N,
            listPadding: v,
            renderHeader: _,
            defaultSoundsOnly: T,
        } = e,
        { fetching: j, maybeFetchData: b } = {
            fetching: (0, h.bG)([p.A], () => p.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                f.E7(), m.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: R } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT),
        O = S ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            b();
        }, [b]),
        i.useEffect(() => {
            S || (0, d.Ri)("");
        }, [S]),
        (0, l.jsx)(c.f5, {
            value: R,
            children: (0, l.jsx)(a.l, {
                style: O,
                className: r()(tx.Nz, { [tx.Bg]: j, [tx.yV]: S }),
                children: j
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(tg, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: x,
                          shouldValidateSelectedSound: C,
                          containerWidth: s,
                          suppressPlaySound: E,
                          shouldShowLockedSounds: I,
                          gridNotice: y,
                          soundButtonOverlay: N,
                          listPadding: v,
                          renderHeader: _,
                          defaultSoundsOnly: T,
                          inExpressionPicker: S,
                          analyticsSource: A,
                      }),
            }),
        })
    );
}
