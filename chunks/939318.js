i.d(t, { A: () => ey });
var n = i(627968),
    l = i(64700),
    s = i(540185),
    a = i(17928),
    r = i(495544),
    d = i(735321),
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
    b = i(375708),
    y = i(804981);
function E(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: a, ...r } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: u } = (0, S.NJ)(),
        [p, j] = l.useState(""),
        f = l.useRef(""),
        { options: A, matchSorterOptions: E, isServerSearchActive: C } = (0, I.R)({ query: p }),
        { applicationIds: w, onAddGame: N } = (0, v.S)(t),
        T = l.useCallback(
            (e) => {
                (0, d.ew)({ widgetType: t, game: { applicationId: e } }),
                    g.O.announce(b.intl.string(b.t.q0U3DE)),
                    u({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    w.includes(e) && N(e),
                    s?.();
            },
            [t, u, s, w, N],
        ),
        R = l.useMemo(() => {
            let e = new Map(
                A.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (C) return [...e.values()];
            let t = w.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                i = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...i];
        }, [A, o, w, C]),
        k = l.useCallback((e) => e, []),
        O = l.useMemo(() => ({ ...E, threshold: c.Ht.rankings.CONTAINS, keys: ["label"] }), [E]),
        L = l.useCallback((e) => (C || "" === e.trim() ? R.length : (0, c.Ht)(R, e, O).length), [C, R, O]),
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
        ...r,
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
                "aria-label": b.intl.string(b.t.uqw8wK),
                children: (0, n.jsxs)(x.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (T(e), t());
                    },
                    options: R,
                    matchSorterOptions: O,
                    customMatchSorter: C ? k : void 0,
                    children: [
                        (0, n.jsx)(x.a3, {
                            label: b.intl.string(b.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: b.intl.string(b.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: P,
                        }),
                        (0, n.jsx)(x.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function C(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(E, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(u.m, {
                text: b.intl.string(b.t.SgTOtX),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(p.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: j.T,
                    "aria-label": b.intl.string(b.t.SgTOtX),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function w(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(E, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(f.D, {
                innerRef: t,
                className: y.c,
                "aria-label": b.intl.string(b.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(A.p, { color: "currentColor" }),
            }),
    });
}
var N = i(61881);
let T = l.createContext(null);
function R(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([N.A], () => {
            let e = N.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, d.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(T.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function k() {
    let e = l.useContext(T);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var O = i(834730),
    L = i(300517);
function P(e) {
    let { widget: t } = e,
        i = (0, d.cv)(t.type),
        l = 1 === i,
        s = l ? b.intl.string(b.t["3FdPBT"]) : b.intl.format(b.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? L.O : L.k,
        children: [
            l && (0, n.jsx)(w, { widget: t, widgetType: t.type }),
            (0, n.jsx)(O.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var G = i(623280),
    M = i(823016),
    _ = i(683071),
    U = i(529523);
function D(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, d.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: U.l,
              children: (0, n.jsx)(_.w, {
                  type: "warning",
                  children: b.intl.formatToPlainString(b.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var W = i(635694);
function F(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(f.D, {
        onClick: t,
        className: W.x,
        "aria-expanded": i,
        children: (0, n.jsx)(O.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? b.intl.string(b.t["6MwJo/"]) : b.intl.string(b.t.lBeKY2),
        }),
    });
}
var H = i(908683),
    V = i(192),
    B = i(714813);
function z(e) {
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
function X(e) {
    let { user: t, widgetType: i, disableInteraction: l, games: s } = e,
        d = (0, a.bG)([r.default], () => r.default.getId() === t.id),
        { getManageButtonForWidget: o } = (0, V.r)(),
        c = o(i),
        { expanded: u, setExpanded: g } = k(),
        m = u ? s : s.slice(0, 2),
        h = s.length > 2,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(z, { ...e, games: m }),
                h && (0, n.jsx)(F, { expanded: u, onClick: () => g((e) => !e) }),
            ],
        });
    return d && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D, { widgetType: i, gameCount: s.length }),
                  (0, n.jsx)(M.B, { emptyListFallbackRef: c, children: x }),
              ],
          })
        : x;
}
function Y(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(X, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(P, { widget: i }),
    });
}
function q(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e,
        d = i.games[0];
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            null != d
                ? (0, n.jsx)(H.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(P, { widget: i }),
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
    Z = i(287809),
    ee = i(451395),
    et = i(788593),
    ei = i(858808),
    en = i(442356),
    el = i(163391);
function es(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: a, gameName: r, children: o } = e,
        { manageFocusOnReorder: c } = (0, M.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(ee.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => u.current?.offsetWidth },
        "aria-label": b.intl.formatToPlainString(b.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, d.Un)(i, e, t),
        onEnd: () => c(s.applicationId),
        className: el.kL,
        dropBeforeClassName: el.A,
        dropAfterClassName: el.Ze,
        draggingClassName: el.Id,
        children: (0, n.jsx)("div", { ref: u, className: el.An, children: o }),
    });
}
function ea(e) {
    let { game: t, userId: i, widgetType: l, disableInteraction: s = !1, index: a, onRemoveGame: r, coverRef: d } = e,
        { coverImageUrl: o, gameName: c, isLoading: u } = (0, J.A)(t.applicationId),
        { registerDragHandleRef: g } = (0, M.r)(),
        m = Z.default.getCurrentUser(),
        h = m?.id === i,
        x = !s && h,
        { isDragging: p } = (0, $.V)((e) => ({ isDragging: e.isDragging() })),
        j = () =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(et.A, {
                        imageSrc: o,
                        gameName: c,
                        applicationId: t.applicationId,
                        userId: i,
                        disableInteraction: s,
                        className: null == o || s ? void 0 : en.iL,
                        hideTooltip: p,
                        coverRef: d,
                    }),
                    x && (0, n.jsx)(ee.jV, { buttonRef: g(t.applicationId), className: el.BU }),
                    x &&
                        (0, n.jsx)(ei.A, {
                            game: t,
                            widgetType: l,
                            className: el.vS,
                            iconSize: "xs",
                            onRemove: () => r?.(t.applicationId),
                        }),
                ],
            });
    return u
        ? (0, n.jsx)("div", { className: en.mD })
        : x
          ? (0, n.jsx)(es, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: o, gameName: c, children: j() })
          : (0, n.jsx)("div", { className: el.kL, children: j() });
}
function er(e) {
    let { games: t, ...i } = e,
        { registerItemRef: l, manageFocusOnDelete: s } = (0, M.r)();
    return (0, n.jsx)(K, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(ea, { index: t, game: e, coverRef: l(e.applicationId), onRemoveGame: s, ...i }),
    });
}
function ed(e) {
    let { userId: t, widgetType: i, disableInteraction: l, games: s } = e,
        d = (0, a.bG)([r.default], () => r.default.getId() === t),
        { getManageButtonForWidget: o } = (0, V.r)(),
        c = o(i),
        { expanded: u, setExpanded: g } = k(),
        m = u ? s : s.slice(0, 8),
        h = s.length > 8,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(er, { ...e, games: m }),
                h && (0, n.jsx)(F, { expanded: u, onClick: () => g((e) => !e) }),
            ],
        });
    return d && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D, { widgetType: i, gameCount: s.length }),
                  (0, n.jsx)(M.B, { emptyListFallbackRef: c, children: x }),
              ],
          })
        : x;
}
function eo(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ed, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(P, { widget: i }),
    });
}
function ec(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ed, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(P, { widget: i }),
    });
}
var eu = i(503698),
    eg = i.n(eu),
    em = i(661531),
    eh = i(789645),
    ex = i(534514),
    ep = i(915089),
    ej = i(5477);
function ef(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: d } = (0, J.A)(t),
        o = (0, a.bG)([N.A], () => N.A.suggestedFetchIsLoading),
        c = b.intl.formatToPlainString(b.t["3mb1s5"], { game: r });
    return d || o
        ? (0, n.jsx)("div", { className: en.mD })
        : (0, n.jsx)(u.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(f.D, {
                  className: ej.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(et.A, {
                          className: ej.Iv,
                          imageSrc: s,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(A.p, { size: "md", className: ej.Xv, color: em.A.colors.WHITE }),
                  ],
              }),
          });
}
function eA(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        r = (0, ep.GV)();
    return (0, n.jsxs)("aside", {
        className: eg()(ej.kL, a),
        "aria-labelledby": r,
        children: [
            (0, n.jsxs)("div", {
                className: ej.wx,
                children: [
                    (0, n.jsx)(f.D, {
                        className: ej.r,
                        "aria-label": b.intl.string(b.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(eh.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ex.D, {
                        id: r,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: b.intl.string(b.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: ej.Vg,
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
function eI(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: a } = (0, v.S)(t),
        { setExpanded: r } = k(),
        { trackUserProfileEditAction: o } = (0, S.NJ)(),
        c = l.useCallback(
            (e) => {
                a(e),
                    r(!0),
                    (0, d.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [a, t, o, r],
        );
    return (0, n.jsx)(eA, { games: s, onClick: c, ...i });
}
var eS = i(465380);
function ev(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case s.x.FAVORITE_GAMES:
            return (0, n.jsx)(q, { widget: t, ...i });
        case s.x.CURRENT_GAMES:
            return (0, n.jsx)(Y, { widget: t, ...i });
        case s.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(ec, { widget: t, ...i });
        case s.x.PLAYED_GAMES:
            return (0, n.jsx)(eo, { widget: t, ...i });
        default:
            return null;
    }
}
function eb(e) {
    let { widget: t, user: i, disableInteraction: s, ...c } = e,
        { setExpanded: u } = k(),
        { shouldShowSuggestions: g, handleDismissSuggestions: m } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([r.default, o.A], () => {
                    let e = r.default.getId();
                    if (null == e) return !1;
                    let t = o.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                c = (0, d.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !c,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        h = (0, a.bG)([r.default], () => r.default.getId() === i.id),
        x = h && !s && g,
        p = (0, d.L)(t),
        j = (0, d.FM)(t, { isCurrentUser: h }),
        f = (0, d.uA)(t),
        A = 1 === (0, d.cv)(t.type);
    return (0, n.jsx)(ev, {
        widget: t,
        user: i,
        disableInteraction: s,
        headerTitle: p,
        headerSubtitle: j,
        headerActionButtons:
            h && !A
                ? [
                      (0, n.jsx)(
                          C,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => u(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: x && (0, n.jsx)(eI, { userId: i.id, widgetType: t.type, onDismiss: m, className: eS.r }),
        ...c,
    });
}
function ey(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(R, { widgetType: t.type, children: (0, n.jsx)(eb, { widget: t, ...i }) });
}
