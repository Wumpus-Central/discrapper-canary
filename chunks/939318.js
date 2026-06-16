i.d(t, { A: () => ey });
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
    f = i(663341),
    A = i(383329),
    I = i(183555),
    v = i(373842),
    S = i(375708),
    b = i(804981);
function y(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: a, ...r } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: x } = (0, I.NJ)(),
        [p, j] = l.useState(""),
        f = l.useRef(""),
        { options: y, matchSorterOptions: E, isServerSearchActive: C } = (0, A.R)({ query: p }),
        { applicationIds: w, onAddGame: N } = (0, v.S)(t),
        T = l.useCallback(
            (e) => {
                (0, d.ew)({ widgetType: t, game: { applicationId: e } }),
                    u.O.announce(S.intl.string(S.t.q0U3DE)),
                    x({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    w.includes(e) && N(e),
                    s?.();
            },
            [t, x, s, w, N],
        ),
        R = l.useMemo(() => {
            let e = new Map(
                y.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (C) return [...e.values()];
            let t = w.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                i = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...i];
        }, [y, o, w, C]),
        k = l.useCallback((e) => e, []),
        O = l.useMemo(() => ({ ...E, threshold: c.Ht.rankings.CONTAINS, keys: ["label"] }), [E]),
        L = l.useCallback((e) => (C || "" === e.trim() ? R.length : (0, c.Ht)(R, e, O).length), [C, R, O]),
        P = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === p.trim() &&
                    "" !== i.trim() &&
                    x({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: L(i),
                    }),
                    j(i),
                    (f.current = i);
            },
            [p, x, t, L],
        );
    return (0, n.jsx)(g.Y, {
        ...r,
        onRequestOpen: () => {
            x({ action: "PRESS_ADD_GAME", widgetEdited: t }), j(""), (f.current = "");
        },
        onRequestClose: () => {
            x({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: f.current.trim().length,
                numResults: L(f.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(m.l, {
                className: b.C,
                "aria-label": S.intl.string(S.t.uqw8wK),
                children: (0, n.jsxs)(h.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (T(e), t());
                    },
                    options: R,
                    matchSorterOptions: O,
                    customMatchSorter: C ? k : void 0,
                    children: [
                        (0, n.jsx)(h.a3, {
                            label: S.intl.string(S.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: S.intl.string(S.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: P,
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
                text: S.intl.string(S.t.SgTOtX),
                disabled: t,
                ...e,
            }),
    });
}
function C(e) {
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
                "aria-label": S.intl.string(S.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(f.p, { color: "currentColor" }),
            }),
    });
}
var w = i(61881);
let N = l.createContext(null);
function T(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([w.A], () => {
            let e = w.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, d.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(N.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function R() {
    let e = l.useContext(N);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var k = i(834730),
    O = i(300517);
function L(e) {
    let { widget: t } = e,
        i = (0, d.cv)(t.type),
        l = 1 === i,
        s = l ? S.intl.string(S.t["3FdPBT"]) : S.intl.format(S.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? O.O : O.k,
        children: [
            l && (0, n.jsx)(C, { widget: t, widgetType: t.type }),
            (0, n.jsx)(k.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var P = i(623280),
    G = i(823016),
    M = i(683071),
    _ = i(529523);
function U(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, d.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: _.l,
              children: (0, n.jsx)(M.w, {
                  type: "warning",
                  children: S.intl.formatToPlainString(S.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var D = i(635694);
function W(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(j.D, {
        onClick: t,
        className: D.x,
        "aria-expanded": i,
        children: (0, n.jsx)(k.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? S.intl.string(S.t["6MwJo/"]) : S.intl.string(S.t.lBeKY2),
        }),
    });
}
var F = i(908683),
    H = i(192),
    V = i(714813);
function B(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: a, manageFocusOnDelete: r } = (0, G.r)();
    return (0, n.jsx)("ul", {
        className: V.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(F.A, {
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
                h && (0, n.jsx)(W, { expanded: u, onClick: () => g((e) => !e) }),
            ],
        });
    return d && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(U, { widgetType: i, gameCount: s.length }),
                  (0, n.jsx)(G.B, { emptyListFallbackRef: c, children: x }),
              ],
          })
        : x;
}
function Y(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(P.A, {
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
    return (0, n.jsx)(P.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            null != d
                ? (0, n.jsx)(F.A, {
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
function Q(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: q.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var K = i(688807),
    $ = i(201438),
    J = i(287809),
    Z = i(451395),
    ee = i(788593),
    et = i(858808),
    ei = i(442356),
    en = i(163391);
function el(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: a, gameName: r, children: o } = e,
        { manageFocusOnReorder: c } = (0, G.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(Z.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => u.current?.offsetWidth },
        "aria-label": S.intl.formatToPlainString(S.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, d.Un)(i, e, t),
        onEnd: () => c(s.applicationId),
        className: en.kL,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        draggingClassName: en.Id,
        children: (0, n.jsx)("div", { ref: u, className: en.An, children: o }),
    });
}
function es(e) {
    let { game: t, userId: i, widgetType: l, disableInteraction: s = !1, index: a, onRemoveGame: r, coverRef: d } = e,
        { coverImageUrl: o, gameName: c, isLoading: u } = (0, $.A)(t.applicationId),
        { registerDragHandleRef: g } = (0, G.r)(),
        m = J.default.getCurrentUser(),
        h = m?.id === i,
        x = !s && h,
        { isDragging: p } = (0, K.V)((e) => ({ isDragging: e.isDragging() })),
        j = () =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(ee.A, {
                        imageSrc: o,
                        gameName: c,
                        applicationId: t.applicationId,
                        userId: i,
                        disableInteraction: s,
                        className: null == o || s ? void 0 : ei.iL,
                        hideTooltip: p,
                        coverRef: d,
                    }),
                    x && (0, n.jsx)(Z.jV, { buttonRef: g(t.applicationId), className: en.BU }),
                    x &&
                        (0, n.jsx)(et.A, {
                            game: t,
                            widgetType: l,
                            className: en.vS,
                            iconSize: "xs",
                            onRemove: () => r?.(t.applicationId),
                        }),
                ],
            });
    return u
        ? (0, n.jsx)("div", { className: ei.mD })
        : x
          ? (0, n.jsx)(el, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: o, gameName: c, children: j() })
          : (0, n.jsx)("div", { className: en.kL, children: j() });
}
function ea(e) {
    let { games: t, ...i } = e,
        { registerItemRef: l, manageFocusOnDelete: s } = (0, G.r)();
    return (0, n.jsx)(Q, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(es, { index: t, game: e, coverRef: l(e.applicationId), onRemoveGame: s, ...i }),
    });
}
function er(e) {
    let { userId: t, widgetType: i, disableInteraction: l, games: s } = e,
        d = (0, a.bG)([r.default], () => r.default.getId() === t),
        { getManageButtonForWidget: o } = (0, H.r)(),
        c = o(i),
        { expanded: u, setExpanded: g } = R(),
        m = u ? s : s.slice(0, 8),
        h = s.length > 8,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ea, { ...e, games: m }),
                h && (0, n.jsx)(W, { expanded: u, onClick: () => g((e) => !e) }),
            ],
        });
    return d && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(U, { widgetType: i, gameCount: s.length }),
                  (0, n.jsx)(G.B, { emptyListFallbackRef: c, children: x }),
              ],
          })
        : x;
}
function ed(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(P.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(er, {
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
function eo(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(P.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(er, {
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
var ec = i(503698),
    eu = i.n(ec),
    eg = i(990078),
    em = i(661531),
    eh = i(789645),
    ex = i(534514),
    ep = i(915089),
    ej = i(5477);
function ef(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: d } = (0, $.A)(t),
        o = (0, a.bG)([w.A], () => w.A.suggestedFetchIsLoading),
        c = S.intl.formatToPlainString(S.t["3mb1s5"], { game: r });
    return d || o
        ? (0, n.jsx)("div", { className: ei.mD })
        : (0, n.jsx)(eg.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(j.D, {
                  className: ej.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(ee.A, {
                          className: ej.Iv,
                          imageSrc: s,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(f.p, { size: "md", className: ej.Xv, color: em.A.colors.WHITE }),
                  ],
              }),
          });
}
function eA(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        r = (0, ep.GV)();
    return (0, n.jsxs)("aside", {
        className: eu()(ej.kL, a),
        "aria-labelledby": r,
        children: [
            (0, n.jsxs)("div", {
                className: ej.wx,
                children: [
                    (0, n.jsx)(j.D, {
                        className: ej.r,
                        "aria-label": S.intl.string(S.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(eh.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ex.D, {
                        id: r,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: S.intl.string(S.t.zMUr6Z),
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
    return (0, n.jsx)(eA, { games: s, onClick: c, ...i });
}
var ev = i(465380);
function eS(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case s.x.FAVORITE_GAMES:
            return (0, n.jsx)(X, { widget: t, ...i });
        case s.x.CURRENT_GAMES:
            return (0, n.jsx)(Y, { widget: t, ...i });
        case s.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(eo, { widget: t, ...i });
        case s.x.PLAYED_GAMES:
            return (0, n.jsx)(ed, { widget: t, ...i });
        default:
            return null;
    }
}
function eb(e) {
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
        f = (0, d.uA)(t),
        A = 1 === (0, d.cv)(t.type);
    return (0, n.jsx)(eS, {
        widget: t,
        user: i,
        disableInteraction: s,
        headerTitle: p,
        headerSubtitle: j,
        headerActionButtons:
            h && !A
                ? [
                      (0, n.jsx)(
                          E,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => u(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: x && (0, n.jsx)(eI, { userId: i.id, widgetType: t.type, onDismiss: m, className: ev.r }),
        ...c,
    });
}
function ey(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(T, { widgetType: t.type, children: (0, n.jsx)(eb, { widget: t, ...i }) });
}
