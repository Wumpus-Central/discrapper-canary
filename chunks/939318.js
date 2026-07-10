i.d(t, { A: () => eE });
var n = i(627968),
    l = i(64700),
    s = i(540185),
    r = i(735321),
    a = i(17928),
    o = i(280450),
    d = i(321191),
    c = i(896170),
    u = i(990078),
    g = i(765178),
    m = i(922016),
    h = i(305866),
    x = i(732771),
    p = i(408278),
    f = i(499373),
    j = i(939249),
    A = i(663341),
    I = i(383329),
    S = i(183555),
    v = i(373842),
    E = i(375708),
    y = i(804981);
function w(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: a, ...o } = e,
        d = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: u } = (0, S.NJ)(),
        [p, f] = l.useState(""),
        j = l.useRef(""),
        { options: A, matchSorterOptions: w, isServerSearchActive: b } = (0, I.R)({ query: p }),
        { applicationIds: C, onAddGame: T } = (0, v.S)(t),
        N = l.useCallback(
            (e) => {
                (0, r.ew)({ widgetType: t, game: { applicationId: e } }),
                    g.O.announce(E.intl.string(E.t.q0U3DE)),
                    u({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    C.includes(e) && T(e),
                    s?.();
            },
            [t, u, s, C, T],
        ),
        R = l.useMemo(() => {
            let e = new Map(
                A.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: d.has(e.value) },
                ]),
            );
            if (b) return [...e.values()];
            let t = C.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                i = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...i];
        }, [A, d, C, b]),
        k = l.useCallback((e) => e, []),
        O = l.useMemo(() => ({ ...w, threshold: c.Ht.rankings.CONTAINS, keys: ["label"] }), [w]),
        P = l.useCallback((e) => (b || "" === e.trim() ? R.length : (0, c.Ht)(R, e, O).length), [b, R, O]),
        L = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === p.trim() &&
                    "" !== i.trim() &&
                    u({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: P(i),
                    }),
                    f(i),
                    (j.current = i);
            },
            [p, u, t, P],
        );
    return (0, n.jsx)(m.Y, {
        ...o,
        onRequestOpen: () => {
            u({ action: "PRESS_ADD_GAME", widgetEdited: t }), f(""), (j.current = "");
        },
        onRequestClose: () => {
            u({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: j.current.trim().length,
                numResults: P(j.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(h.l, {
                className: y.C,
                "aria-label": E.intl.string(E.t.uqw8wK),
                children: (0, n.jsxs)(x.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (N(e), t());
                    },
                    options: R,
                    matchSorterOptions: O,
                    customMatchSorter: b ? k : void 0,
                    children: [
                        (0, n.jsx)(x.a3, {
                            label: E.intl.string(E.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: E.intl.string(E.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: L,
                        }),
                        (0, n.jsx)(x.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function b(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(w, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(u.m, {
                text: E.intl.string(E.t.SgTOtX),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(p.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: f.T,
                    "aria-label": E.intl.string(E.t.SgTOtX),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function C(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(w, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(j.D, {
                innerRef: t,
                className: y.c,
                "aria-label": E.intl.string(E.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(A.p, { color: "currentColor" }),
            }),
    });
}
var T = i(61881);
let N = l.createContext(null);
function R(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([T.A], () => {
            let e = T.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, r.cv)(t);
            return i.games.length > n;
        }),
        [o, d] = l.useState(s);
    return (0, n.jsx)(N.Provider, { value: { expanded: o, setExpanded: d }, children: i });
}
function k() {
    let e = l.useContext(N);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var O = i(834730),
    P = i(300517);
function L(e) {
    let { widget: t } = e,
        i = (0, r.cv)(t.type),
        l = 1 === i,
        s = l ? E.intl.string(E.t["3FdPBT"]) : E.intl.format(E.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? P.O : P.k,
        children: [
            l && (0, n.jsx)(C, { widget: t, widgetType: t.type }),
            (0, n.jsx)(O.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var _ = i(623280),
    G = i(823016),
    M = i(683071),
    U = i(529523);
function D(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, r.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: U.l,
              children: (0, n.jsx)(M.w, {
                  type: "warning",
                  children: E.intl.formatToPlainString(E.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var F = i(635694);
function W(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(j.D, {
        onClick: t,
        className: F.x,
        "aria-expanded": i,
        children: (0, n.jsx)(O.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? E.intl.string(E.t["6MwJo/"]) : E.intl.string(E.t.lBeKY2),
        }),
    });
}
var H = i(908683),
    V = i(192),
    B = i(714813);
function Y(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, G.r)();
    return (0, n.jsx)("ul", {
        className: B.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(H.A, {
                        index: t,
                        user: i,
                        game: e,
                        widgetType: l,
                        coverRef: r(e.applicationId),
                        onRemoveGame: a,
                        ...s,
                    }),
                },
                e.applicationId,
            ),
        ),
    });
}
function z(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, V.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = k(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(Y, { ...e, games: c }),
                u && (0, n.jsx)(W, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(G.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function X(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(_.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(z, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(L, { widget: i }),
    });
}
function q(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(_.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(H.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(L, { widget: i }),
    });
}
var Q = i(281050);
function K(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: Q.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var $ = i(688807),
    J = i(201438),
    Z = i(451395),
    ee = i(788593),
    et = i(858808),
    ei = i(442356),
    en = i(163391);
function el(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: a, gameName: o, children: d } = e,
        { manageFocusOnReorder: c } = (0, G.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(Z.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: o, getWidth: () => u.current?.offsetWidth },
        "aria-label": E.intl.formatToPlainString(E.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, r.Un)(i, e, t),
        onEnd: () => c(s.applicationId),
        className: en.kL,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        draggingClassName: en.Id,
        children: (0, n.jsx)("div", { ref: u, className: en.An, children: d }),
    });
}
function es(e) {
    let {
            game: t,
            userId: i,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, J.A)(t.applicationId),
        { registerDragHandleRef: m } = (0, G.r)(),
        h = s && !r,
        { isDragging: x } = (0, $.V)((e) => ({ isDragging: e.isDragging() }));
    function p() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ee.A, {
                    imageSrc: c,
                    gameName: u,
                    applicationId: t.applicationId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : ei.iL,
                    hideTooltip: x,
                    coverRef: d,
                }),
                h && (0, n.jsx)(Z.jV, { buttonRef: m(t.applicationId), className: en.BU }),
                h &&
                    (0, n.jsx)(et.A, {
                        game: t,
                        widgetType: l,
                        className: en.vS,
                        iconSize: "xs",
                        onRemove: () => o?.(t.applicationId),
                    }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: ei.mD })
        : h
          ? (0, n.jsx)(el, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: p() })
          : (0, n.jsx)("div", { className: en.kL, children: p() });
}
function er(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, G.r)();
    return (0, n.jsx)(K, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(es, {
                index: t,
                game: e,
                userId: i,
                widgetType: l,
                allowEditing: s,
                disableInteraction: r,
                coverRef: a(e.applicationId),
                onRemoveGame: o,
            }),
    });
}
function ea(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, V.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = k(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(er, { ...e, games: c }),
                u && (0, n.jsx)(W, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(G.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function eo(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(_.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ea, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(L, { widget: i }),
    });
}
function ed(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(_.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ea, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(L, { widget: i }),
    });
}
var ec = i(503698),
    eu = i.n(ec),
    eg = i(661531),
    em = i(789645),
    eh = i(534514),
    ex = i(915089),
    ep = i(5477);
function ef(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, J.A)(t),
        d = (0, a.bG)([T.A], () => T.A.suggestedFetchIsLoading),
        c = E.intl.formatToPlainString(E.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: ei.mD })
        : (0, n.jsx)(u.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(j.D, {
                  className: ep.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(ee.A, {
                          className: ep.Iv,
                          imageSrc: s,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(A.p, { size: "md", className: ep.Xv, color: eg.A.colors.WHITE }),
                  ],
              }),
          });
}
function ej(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: r } = e,
        a = (0, ex.GV)();
    return (0, n.jsxs)("aside", {
        className: eu()(ep.kL, r),
        "aria-labelledby": a,
        children: [
            (0, n.jsxs)("div", {
                className: ep.wx,
                children: [
                    (0, n.jsx)(j.D, {
                        className: ep.r,
                        "aria-label": E.intl.string(E.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(em.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(eh.D, {
                        id: a,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: E.intl.string(E.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: ep.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(ef, { onClick: () => s(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function eA(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: a } = (0, v.S)(t),
        { setExpanded: o } = k(),
        { trackUserProfileEditAction: d } = (0, S.NJ)(),
        c = l.useCallback(
            (e) => {
                a(e),
                    o(!0),
                    (0, r.ew)({ widgetType: t, game: { applicationId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [a, t, d, o],
        );
    return (0, n.jsx)(ej, { games: s, onClick: c, ...i });
}
var eI = i(465380);
function eS(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case s.x.FAVORITE_GAMES:
            return (0, n.jsx)(q, { widget: t, ...i });
        case s.x.CURRENT_GAMES:
            return (0, n.jsx)(X, { widget: t, ...i });
        case s.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(ed, { widget: t, ...i });
        case s.x.PLAYED_GAMES:
            return (0, n.jsx)(eo, { widget: t, ...i });
        default:
            return null;
    }
}
function ev(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: c, ...u } = e,
        { setExpanded: g } = k(),
        { shouldShowSuggestions: m, handleDismissSuggestions: h } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([o.default, d.A], () => {
                    let e = o.default.getId();
                    if (null == e) return !1;
                    let t = d.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                c = (0, r.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !c,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        x = s && !c,
        p = x && m,
        f = (0, r.L)(t),
        j = (0, r.FM)(t, { showEditingControls: x }),
        A = (0, r.uA)(t),
        I = 1 === (0, r.cv)(t.type);
    return (0, n.jsx)(eS, {
        widget: t,
        user: i,
        allowEditing: s,
        disableInteraction: c,
        headerTitle: f,
        headerSubtitle: j,
        headerActionButtons:
            x && !I
                ? [
                      (0, n.jsx)(
                          b,
                          { disabled: A, widgetType: t.type, widget: t, onAddGame: () => g(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: p && (0, n.jsx)(eA, { userId: i.id, widgetType: t.type, onDismiss: h, className: eI.r }),
        ...u,
    });
}
function eE(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(R, { widgetType: t.type, children: (0, n.jsx)(ev, { widget: t, ...i }) });
}
