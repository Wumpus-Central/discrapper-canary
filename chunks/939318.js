i.d(t, { A: () => eE });
var n = i(627968),
    l = i(64700),
    s = i(540185),
    a = i(735321),
    r = i(17928),
    d = i(495544),
    o = i(841595),
    c = i(896170),
    u = i(990078),
    g = i(765178),
    m = i(922016),
    h = i(305866),
    x = i(732771),
    p = i(408278),
    j = i(499373),
    f = i(939249),
    A = i(663341),
    I = i(383329),
    S = i(183555),
    v = i(373842),
    E = i(375708),
    y = i(106037);
function b(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...d } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: u } = (0, S.NJ)(),
        [p, j] = l.useState(""),
        f = l.useRef(""),
        { options: A, matchSorterOptions: b, isServerSearchActive: w } = (0, I.R)({ query: p }),
        { applicationIds: C, onAddGame: T } = (0, v.S)(t),
        N = l.useCallback(
            (e) => {
                (0, a.ew)({ widgetType: t, game: { applicationId: e } }),
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
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (w) return [...e.values()];
            let t = C.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                i = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...i];
        }, [A, o, C, w]),
        k = l.useCallback((e) => e, []),
        O = l.useMemo(() => ({ ...b, threshold: c.Ht.rankings.CONTAINS, keys: ["label"] }), [b]),
        L = l.useCallback((e) => (w || "" === e.trim() ? R.length : (0, c.Ht)(R, e, O).length), [w, R, O]),
        P = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === p.trim() &&
                    "" !== i.trim() &&
                    u({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: L(i),
                    }),
                    j(i),
                    (f.current = i);
            },
            [p, u, t, L],
        );
    return (0, n.jsx)(m.Y, {
        ...d,
        onRequestOpen: () => {
            u({ action: "PRESS_ADD_GAME", widgetEdited: t }), j(""), (f.current = "");
        },
        onRequestClose: () => {
            u({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: f.current.trim().length,
                numResults: L(f.current),
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
                    customMatchSorter: w ? k : void 0,
                    children: [
                        (0, n.jsx)(x.a3, {
                            label: E.intl.string(E.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: E.intl.string(E.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: P,
                        }),
                        (0, n.jsx)(x.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function w(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(b, {
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
                    icon: j.T,
                    "aria-label": E.intl.string(E.t.SgTOtX),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function C(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(b, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(f.D, {
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
        s = (0, r.bG)([T.A], () => {
            let e = T.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, a.cv)(t);
            return i.games.length > n;
        }),
        [d, o] = l.useState(s);
    return (0, n.jsx)(N.Provider, { value: { expanded: d, setExpanded: o }, children: i });
}
function k() {
    let e = l.useContext(N);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var O = i(834730),
    L = i(946661);
function P(e) {
    let { widget: t } = e,
        i = (0, a.cv)(t.type),
        l = 1 === i,
        s = l ? E.intl.string(E.t["3FdPBT"]) : E.intl.format(E.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? L.O : L.k,
        children: [
            l && (0, n.jsx)(C, { widget: t, widgetType: t.type }),
            (0, n.jsx)(O.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var G = i(623280),
    M = i(823016),
    _ = i(683071),
    U = i(824307);
function D(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, a.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: U.l,
              children: (0, n.jsx)(_.w, {
                  type: "warning",
                  children: E.intl.formatToPlainString(E.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var W = i(551598);
function F(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(f.D, {
        onClick: t,
        className: W.x,
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
    B = i(522173);
function Y(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: a, manageFocusOnDelete: r } = (0, M.r)();
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
                        coverRef: a(e.applicationId),
                        onRemoveGame: r,
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
        { getManageButtonForWidget: a } = (0, V.r)(),
        r = a(t),
        { expanded: d, setExpanded: o } = k(),
        c = d ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(Y, { ...e, games: c }),
                u && (0, n.jsx)(F, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(M.B, { emptyListFallbackRef: r, children: g }),
              ],
          })
        : g;
}
function X(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...d } = e;
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        allowEditing: a,
        disableInteraction: r,
        ...d,
        children:
            i.games.length > 0
                ? (0, n.jsx)(z, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, n.jsx)(P, { widget: i }),
    });
}
function q(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...d } = e,
        o = i.games[0];
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        allowEditing: a,
        disableInteraction: r,
        ...d,
        children:
            null != o
                ? (0, n.jsx)(H.A, {
                      user: t,
                      widgetType: i.type,
                      game: o,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, n.jsx)(P, { widget: i }),
    });
}
var Q = i(199578);
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
    ei = i(220084),
    en = i(476863);
function el(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: d, children: o } = e,
        { manageFocusOnReorder: c } = (0, M.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(Z.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: d, getWidth: () => u.current?.offsetWidth },
        "aria-label": E.intl.formatToPlainString(E.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, a.Un)(i, e, t),
        onEnd: () => c(s.applicationId),
        className: en.kL,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        draggingClassName: en.Id,
        children: (0, n.jsx)("div", { ref: u, className: en.An, children: o }),
    });
}
function es(e) {
    let {
            game: t,
            userId: i,
            widgetType: l,
            allowEditing: s,
            disableInteraction: a = !1,
            index: r,
            onRemoveGame: d,
            coverRef: o,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, J.A)(t.applicationId),
        { registerDragHandleRef: m } = (0, M.r)(),
        h = s && !a,
        { isDragging: x } = (0, $.V)((e) => ({ isDragging: e.isDragging() }));
    function p() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ee.A, {
                    imageSrc: c,
                    gameName: u,
                    applicationId: t.applicationId,
                    userId: i,
                    disableInteraction: a,
                    className: null == c || a ? void 0 : ei.iL,
                    hideTooltip: x,
                    coverRef: o,
                }),
                h && (0, n.jsx)(Z.jV, { buttonRef: m(t.applicationId), className: en.BU }),
                h &&
                    (0, n.jsx)(et.A, {
                        game: t,
                        widgetType: l,
                        className: en.vS,
                        iconSize: "xs",
                        onRemove: () => d?.(t.applicationId),
                    }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: ei.mD })
        : h
          ? (0, n.jsx)(el, { widgetType: l, index: r ?? 0, game: t, coverImageUrl: c, gameName: u, children: p() })
          : (0, n.jsx)("div", { className: en.kL, children: p() });
}
function ea(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: a } = e,
        { registerItemRef: r, manageFocusOnDelete: d } = (0, M.r)();
    return (0, n.jsx)(K, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(es, {
                index: t,
                game: e,
                userId: i,
                widgetType: l,
                allowEditing: s,
                disableInteraction: a,
                coverRef: r(e.applicationId),
                onRemoveGame: d,
            }),
    });
}
function er(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: a } = (0, V.r)(),
        r = a(t),
        { expanded: d, setExpanded: o } = k(),
        c = d ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ea, { ...e, games: c }),
                u && (0, n.jsx)(F, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(M.B, { emptyListFallbackRef: r, children: g }),
              ],
          })
        : g;
}
function ed(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...d } = e;
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        allowEditing: a,
        disableInteraction: r,
        ...d,
        children:
            i.games.length > 0
                ? (0, n.jsx)(er, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, n.jsx)(P, { widget: i }),
    });
}
function eo(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...d } = e;
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        allowEditing: a,
        disableInteraction: r,
        ...d,
        children:
            i.games.length > 0
                ? (0, n.jsx)(er, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, n.jsx)(P, { widget: i }),
    });
}
var ec = i(503698),
    eu = i.n(ec),
    eg = i(661531),
    em = i(789645),
    eh = i(534514),
    ex = i(915089),
    ep = i(914341);
function ej(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: a, isLoading: d } = (0, J.A)(t),
        o = (0, r.bG)([T.A], () => T.A.suggestedFetchIsLoading),
        c = E.intl.formatToPlainString(E.t["3mb1s5"], { game: a });
    return d || o
        ? (0, n.jsx)("div", { className: ei.mD })
        : (0, n.jsx)(u.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(f.D, {
                  className: ep.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(ee.A, {
                          className: ep.Iv,
                          imageSrc: s,
                          gameName: a,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(A.p, { size: "md", className: ep.Xv, color: eg.A.colors.WHITE }),
                  ],
              }),
          });
}
function ef(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        r = (0, ex.GV)();
    return (0, n.jsxs)("aside", {
        className: eu()(ep.kL, a),
        "aria-labelledby": r,
        children: [
            (0, n.jsxs)("div", {
                className: ep.wx,
                children: [
                    (0, n.jsx)(f.D, {
                        className: ep.r,
                        "aria-label": E.intl.string(E.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(em.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(eh.D, {
                        id: r,
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
                        { children: (0, n.jsx)(ej, { onClick: () => s(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function eA(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = (0, v.S)(t),
        { setExpanded: d } = k(),
        { trackUserProfileEditAction: o } = (0, S.NJ)(),
        c = l.useCallback(
            (e) => {
                r(e),
                    d(!0),
                    (0, a.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, d],
        );
    return (0, n.jsx)(ef, { games: s, onClick: c, ...i });
}
var eI = i(890596);
function eS(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case s.x.FAVORITE_GAMES:
            return (0, n.jsx)(q, { widget: t, ...i });
        case s.x.CURRENT_GAMES:
            return (0, n.jsx)(X, { widget: t, ...i });
        case s.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(eo, { widget: t, ...i });
        case s.x.PLAYED_GAMES:
            return (0, n.jsx)(ed, { widget: t, ...i });
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
                s = (0, r.bG)([d.default, o.A], () => {
                    let e = d.default.getId();
                    if (null == e) return !1;
                    let t = o.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                c = (0, a.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !c,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        x = s && !c,
        p = x && m,
        j = (0, a.L)(t),
        f = (0, a.FM)(t, { showEditingControls: x }),
        A = (0, a.uA)(t),
        I = 1 === (0, a.cv)(t.type);
    return (0, n.jsx)(eS, {
        widget: t,
        user: i,
        allowEditing: s,
        disableInteraction: c,
        headerTitle: j,
        headerSubtitle: f,
        headerActionButtons:
            x && !I
                ? [
                      (0, n.jsx)(
                          w,
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
