i.d(t, { A: () => eN });
var n = i(627968),
    l = i(64700),
    s = i(540185),
    a = i(17928),
    r = i(495544),
    d = i(735321),
    o = i(841595),
    c = i(896170),
    u = i(765178),
    g = i(922016),
    m = i(305866),
    h = i(732771),
    x = i(821609),
    p = i(307301),
    j = i(939249),
    A = i(663341),
    f = i(383329),
    I = i(183555),
    S = i(373842),
    v = i(985018),
    b = i(804981);
function y(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: a, ...r } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: x } = (0, I.NJ)(),
        [p, j] = l.useState(""),
        A = l.useRef(""),
        { options: y, matchSorterOptions: E } = (0, f.R)(),
        { applicationIds: N, onAddGame: T } = (0, S.S)(t),
        C = l.useCallback(
            (e) => {
                (0, d.ew)({ widgetType: t, game: { applicationId: e } }),
                    u.O.announce(v.intl.string(v.t.q0U3DE)),
                    x({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    N.includes(e) && T(e),
                    s?.();
            },
            [t, x, s, N, T],
        ),
        w = l.useMemo(() => {
            let e = new Map(
                    y.map((e) => [
                        String(e.value),
                        { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                    ]),
                ),
                t = N.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                i = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...i];
        }, [y, o, N]),
        R = l.useMemo(() => ({ ...E, threshold: c.Ht.rankings.CONTAINS, keys: ["label"] }), [E]),
        O = l.useCallback((e) => ("" === e.trim() ? w.length : (0, c.Ht)(w, e, R).length), [w, R]),
        k = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === p.trim() &&
                    "" !== i.trim() &&
                    x({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: O(i),
                    }),
                    j(i),
                    (A.current = i);
            },
            [p, x, t, O],
        );
    return (0, n.jsx)(g.Y, {
        ...r,
        onRequestOpen: () => {
            x({ action: "PRESS_ADD_GAME", widgetEdited: t }), j(""), (A.current = "");
        },
        onRequestClose: () => {
            x({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: A.current.trim().length,
                numResults: O(A.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(m.l, {
                className: b.C,
                "aria-label": v.intl.string(v.t.uqw8wK),
                children: (0, n.jsxs)(h.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (C(e), t());
                    },
                    options: w,
                    matchSorterOptions: R,
                    children: [
                        (0, n.jsx)(h.a3, {
                            label: v.intl.string(v.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: v.intl.string(v.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: k,
                        }),
                        (0, n.jsx)(h.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function E(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(y, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(x.$, {
                buttonRef: s,
                variant: "secondary",
                size: "sm",
                icon: p.j,
                text: v.intl.string(v.t.SgTOtX),
                disabled: t,
                ...e,
            }),
    });
}
function N(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(y, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(j.D, {
                innerRef: t,
                className: b.c,
                "aria-label": v.intl.string(v.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(A.p, { color: "currentColor" }),
            }),
    });
}
var T = i(61881);
let C = l.createContext(null);
function w(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([T.A], () => {
            let e = T.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, d.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(C.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function R() {
    let e = l.useContext(C);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var O = i(834730),
    k = i(300517);
function L(e) {
    let { widget: t } = e,
        i = (0, d.cv)(t.type),
        l = 1 === i,
        s = l ? v.intl.string(v.t["3FdPBT"]) : v.intl.format(v.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? k.O : k.k,
        children: [
            l && (0, n.jsx)(N, { widget: t, widgetType: t.type }),
            (0, n.jsx)(O.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var G = i(623280),
    P = i(823016),
    _ = i(683071),
    M = i(529523);
function D(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, d.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: M.l,
              children: (0, n.jsx)(_.w, {
                  type: "warning",
                  children: v.intl.formatToPlainString(v.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var U = i(635694);
function F(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(j.D, {
        onClick: t,
        className: U.x,
        "aria-expanded": i,
        children: (0, n.jsx)(O.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? v.intl.string(v.t["6MwJo/"]) : v.intl.string(v.t.lBeKY2),
        }),
    });
}
var W = i(908683),
    H = i(192),
    V = i(714813);
function B(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: a, manageFocusOnDelete: r } = (0, P.r)();
    return (0, n.jsx)("ul", {
        className: V.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(W.A, {
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
    let { user: t, widgetType: i, disableInteraction: l, games: s } = e,
        d = (0, a.bG)([r.default], () => r.default.getId() === t.id),
        { getManageButtonForWidget: o } = (0, H.r)(),
        c = o(i),
        { expanded: u, setExpanded: g } = R(),
        m = u ? s : s.slice(0, 2),
        h = s.length > 2,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(B, { ...e, games: m }),
                h && (0, n.jsx)(F, { expanded: u, onClick: () => g((e) => !e) }),
            ],
        });
    return d && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D, { widgetType: i, gameCount: s.length }),
                  (0, n.jsx)(P.B, { emptyListFallbackRef: c, children: x }),
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
                ? (0, n.jsx)(z, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(L, { widget: i }),
    });
}
function X(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e,
        d = i.games[0];
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            null != d
                ? (0, n.jsx)(W.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(L, { widget: i }),
    });
}
var q = i(281050);
function K(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: q.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var Q = i(503698),
    $ = i.n(Q),
    J = i(688807),
    Z = i(201438),
    ee = i(287809),
    et = i(451395),
    ei = i(788593),
    en = i(858808),
    el = i(390877),
    es = i(617086),
    ea = i(442356),
    er = i(163391);
function ed(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: a, gameName: r, children: o } = e,
        { manageFocusOnReorder: c } = (0, P.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(et.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => u.current?.offsetWidth },
        "aria-label": v.intl.formatToPlainString(v.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, d.Un)(i, e, t),
        onEnd: () => c(s.applicationId),
        className: er.kL,
        dropBeforeClassName: er.A,
        dropAfterClassName: er.Ze,
        draggingClassName: er.Id,
        children: (0, n.jsx)("div", { ref: u, className: er.An, children: o }),
    });
}
function eo(e) {
    let {
            game: t,
            userId: i,
            widgetType: l,
            guildId: s,
            channelId: a,
            disableInteraction: r = !1,
            index: d,
            onRemoveGame: o,
            coverRef: c,
        } = e,
        { coverImageUrl: u, gameName: g, isLoading: m } = (0, Z.A)(t.applicationId),
        { registerDragHandleRef: h } = (0, P.r)(),
        x = (0, es.A)(t.applicationId).length > 0,
        p = ee.default.getCurrentUser(),
        j = p?.id === i,
        A = !r && j,
        { isDragging: f } = (0, J.V)((e) => ({ isDragging: e.isDragging() })),
        I = () =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(ei.A, {
                        imageSrc: u,
                        gameName: g,
                        applicationId: t.applicationId,
                        userId: i,
                        disableInteraction: r,
                        className: $()(x ? er.kO : void 0, null == u || r ? void 0 : ea.iL),
                        hideTooltip: f,
                        coverRef: c,
                    }),
                    A && (0, n.jsx)(et.jV, { buttonRef: h(t.applicationId), className: er.BU }),
                    !r &&
                        (0, n.jsx)(el.d, {
                            userId: i,
                            applicationId: t.applicationId,
                            guildId: s,
                            channelId: a,
                            className: er.Ez,
                        }),
                    A &&
                        (0, n.jsx)(en.A, {
                            game: t,
                            widgetType: l,
                            className: er.vS,
                            iconSize: "xs",
                            onRemove: () => o?.(t.applicationId),
                        }),
                ],
            });
    return m
        ? (0, n.jsx)("div", { className: ea.mD })
        : A
          ? (0, n.jsx)(ed, { widgetType: l, index: d ?? 0, game: t, coverImageUrl: u, gameName: g, children: I() })
          : (0, n.jsx)("div", { className: er.kL, children: I() });
}
function ec(e) {
    let { games: t, ...i } = e,
        { registerItemRef: l, manageFocusOnDelete: s } = (0, P.r)();
    return (0, n.jsx)(K, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(eo, { index: t, game: e, coverRef: l(e.applicationId), onRemoveGame: s, ...i }),
    });
}
function eu(e) {
    let { userId: t, widgetType: i, disableInteraction: l, games: s } = e,
        d = (0, a.bG)([r.default], () => r.default.getId() === t),
        { getManageButtonForWidget: o } = (0, H.r)(),
        c = o(i),
        { expanded: u, setExpanded: g } = R(),
        m = u ? s : s.slice(0, 8),
        h = s.length > 8,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ec, { ...e, games: m }),
                h && (0, n.jsx)(F, { expanded: u, onClick: () => g((e) => !e) }),
            ],
        });
    return d && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D, { widgetType: i, gameCount: s.length }),
                  (0, n.jsx)(P.B, { emptyListFallbackRef: c, children: x }),
              ],
          })
        : x;
}
function eg(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(eu, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(L, { widget: i }),
    });
}
function em(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(G.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(eu, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(L, { widget: i }),
    });
}
var eh = i(990078),
    ex = i(661531),
    ep = i(789645),
    ej = i(534514),
    eA = i(915089),
    ef = i(5477);
function eI(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: d } = (0, Z.A)(t),
        o = (0, a.bG)([T.A], () => T.A.suggestedFetchIsLoading),
        c = v.intl.formatToPlainString(v.t["3mb1s5"], { game: r });
    return d || o
        ? (0, n.jsx)("div", { className: ea.mD })
        : (0, n.jsx)(eh.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(j.D, {
                  className: ef.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(ei.A, {
                          className: ef.Iv,
                          imageSrc: s,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(A.p, { size: "md", className: ef.Xv, color: ex.A.colors.WHITE }),
                  ],
              }),
          });
}
function eS(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        r = (0, eA.GV)();
    return (0, n.jsxs)("aside", {
        className: $()(ef.kL, a),
        "aria-labelledby": r,
        children: [
            (0, n.jsxs)("div", {
                className: ef.wx,
                children: [
                    (0, n.jsx)(j.D, {
                        className: ef.r,
                        "aria-label": v.intl.string(v.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(ep.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ej.D, {
                        id: r,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(v.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: ef.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(eI, { onClick: () => s(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function ev(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: a } = (0, S.S)(t),
        { setExpanded: r } = R(),
        { trackUserProfileEditAction: o } = (0, I.NJ)(),
        c = l.useCallback(
            (e) => {
                a(e),
                    r(!0),
                    (0, d.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [a, t, o, r],
        );
    return (0, n.jsx)(eS, { games: s, onClick: c, ...i });
}
var eb = i(465380);
function ey(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case s.x.FAVORITE_GAMES:
            return (0, n.jsx)(X, { widget: t, ...i });
        case s.x.CURRENT_GAMES:
            return (0, n.jsx)(Y, { widget: t, ...i });
        case s.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(em, { widget: t, ...i });
        case s.x.PLAYED_GAMES:
            return (0, n.jsx)(eg, { widget: t, ...i });
        default:
            return null;
    }
}
function eE(e) {
    let { widget: t, user: i, disableInteraction: s, ...c } = e,
        { setExpanded: u } = R(),
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
        A = (0, d.uA)(t),
        f = 1 === (0, d.cv)(t.type);
    return (0, n.jsx)(ey, {
        widget: t,
        user: i,
        disableInteraction: s,
        headerTitle: p,
        headerSubtitle: j,
        headerActionButtons:
            h && !f
                ? [
                      (0, n.jsx)(
                          E,
                          { disabled: A, widgetType: t.type, widget: t, onAddGame: () => u(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: x && (0, n.jsx)(ev, { userId: i.id, widgetType: t.type, onDismiss: m, className: eb.r }),
        ...c,
    });
}
function eN(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(w, { widgetType: t.type, children: (0, n.jsx)(eE, { widget: t, ...i }) });
}
