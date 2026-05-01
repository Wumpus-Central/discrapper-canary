i.d(t, { A: () => eO });
var n = i(627968),
    l = i(64700),
    s = i(540185),
    a = i(17928),
    r = i(495544),
    d = i(735321),
    o = i(841595),
    c = i(111956),
    u = i.n(c),
    g = i(896170),
    m = i(765178),
    h = i(922016),
    x = i(305866),
    p = i(732771),
    j = i(821609),
    A = i(307301),
    f = i(939249),
    I = i(663341),
    S = i(383329),
    v = i(174459),
    E = i(183555),
    y = i(373842),
    b = i(652215),
    T = i(375708),
    C = i(804981);
function N(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: a, ...r } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: c } = (0, E.NJ)(),
        [j, A] = l.useState(""),
        f = l.useRef(""),
        { options: I, matchSorterOptions: N } = (0, S.R)(),
        { applicationIds: w, onAddGame: R } = (0, y.S)(t),
        O = l.useCallback(
            (e) => {
                (0, d.ew)({ widgetType: t, game: { applicationId: e } }),
                    m.O.announce(T.intl.string(T.t.q0U3DE)),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    w.includes(e) && R(e),
                    s?.();
            },
            [t, c, s, w, R],
        ),
        k = l.useMemo(() => {
            let e = new Map(
                    I.map((e) => [
                        String(e.value),
                        { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                    ]),
                ),
                t = w.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                i = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...i];
        }, [I, o, w]),
        L = l.useMemo(() => ({ ...N, threshold: g.Ht.rankings.CONTAINS, keys: ["label"] }), [N]),
        G = l.useCallback((e) => ("" === e.trim() ? k.length : (0, g.Ht)(k, e, L).length), [k, L]),
        _ = l.useMemo(
            () =>
                u()((e, t) => {
                    let i = e.trim();
                    0 !== i.length &&
                        v.default.track(b.HAw.DETECTABLE_GAME_SEARCHED, {
                            surface: "profile_widget",
                            query_length: i.length,
                            result_count: t,
                        });
                }, 1e3),
            [],
        );
    l.useEffect(() => () => _.cancel(), [_]);
    let P = l.useCallback(
        (e) => {
            let i = e.target.value;
            "" === j.trim() &&
                "" !== i.trim() &&
                c({
                    action: "GAME_SEARCH_SESSION_STARTED",
                    widgetEdited: t,
                    numCharacters: i.trim().length,
                    numResults: G(i),
                }),
                _(i, G(i)),
                A(i),
                (f.current = i);
        },
        [j, c, t, G, _],
    );
    return (0, n.jsx)(h.Y, {
        ...r,
        onRequestOpen: () => {
            c({ action: "PRESS_ADD_GAME", widgetEdited: t }), A(""), (f.current = "");
        },
        onRequestClose: () => {
            c({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: f.current.trim().length,
                numResults: G(f.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(x.l, {
                className: C.C,
                "aria-label": T.intl.string(T.t.uqw8wK),
                children: (0, n.jsxs)(p.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (O(e), t());
                    },
                    options: k,
                    matchSorterOptions: L,
                    children: [
                        (0, n.jsx)(p.a3, {
                            label: T.intl.string(T.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: T.intl.string(T.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: P,
                        }),
                        (0, n.jsx)(p.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function w(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(N, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(j.$, {
                buttonRef: s,
                variant: "secondary",
                size: "sm",
                icon: A.j,
                text: T.intl.string(T.t.SgTOtX),
                disabled: t,
                ...e,
            }),
    });
}
function R(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(N, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(f.D, {
                innerRef: t,
                className: C.c,
                "aria-label": T.intl.string(T.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(I.p, { color: "currentColor" }),
            }),
    });
}
var O = i(61881);
let k = l.createContext(null);
function L(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([O.A], () => {
            let e = O.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, d.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(k.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function G() {
    let e = l.useContext(k);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var _ = i(834730),
    P = i(300517);
function M(e) {
    let { widget: t } = e,
        i = (0, d.cv)(t.type),
        l = 1 === i,
        s = l ? T.intl.string(T.t["3FdPBT"]) : T.intl.format(T.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? P.O : P.k,
        children: [
            l && (0, n.jsx)(R, { widget: t, widgetType: t.type }),
            (0, n.jsx)(_.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var D = i(623280),
    U = i(823016),
    F = i(683071),
    W = i(529523);
function H(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, d.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: W.l,
              children: (0, n.jsx)(F.w, {
                  type: "warning",
                  children: T.intl.formatToPlainString(T.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var B = i(635694);
function V(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(f.D, {
        onClick: t,
        className: B.x,
        "aria-expanded": i,
        children: (0, n.jsx)(_.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? T.intl.string(T.t["6MwJo/"]) : T.intl.string(T.t.lBeKY2),
        }),
    });
}
var z = i(908683),
    Y = i(192),
    X = i(714813);
function q(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: a, manageFocusOnDelete: r } = (0, U.r)();
    return (0, n.jsx)("ul", {
        className: X.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(z.A, {
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
function K(e) {
    let { user: t, widgetType: i, disableInteraction: l, games: s } = e,
        d = (0, a.bG)([r.default], () => r.default.getId() === t.id),
        { getManageButtonForWidget: o } = (0, Y.r)(),
        c = o(i),
        { expanded: u, setExpanded: g } = G(),
        m = u ? s : s.slice(0, 2),
        h = s.length > 2,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(q, { ...e, games: m }),
                h && (0, n.jsx)(V, { expanded: u, onClick: () => g((e) => !e) }),
            ],
        });
    return d && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(H, { widgetType: i, gameCount: s.length }),
                  (0, n.jsx)(U.B, { emptyListFallbackRef: c, children: x }),
              ],
          })
        : x;
}
function Q(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(D.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(K, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(M, { widget: i }),
    });
}
function $(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e,
        d = i.games[0];
    return (0, n.jsx)(D.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            null != d
                ? (0, n.jsx)(z.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(M, { widget: i }),
    });
}
var J = i(281050);
function Z(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: J.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var ee = i(503698),
    et = i.n(ee),
    ei = i(688807),
    en = i(201438),
    el = i(287809),
    es = i(510466),
    ea = i(451395),
    er = i(788593),
    ed = i(858808),
    eo = i(390877),
    ec = i(617086),
    eu = i(442356),
    eg = i(163391);
function em(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: a, gameName: r, children: o } = e,
        { manageFocusOnReorder: c } = (0, U.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(ea.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => u.current?.offsetWidth },
        "aria-label": T.intl.formatToPlainString(T.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, d.Un)(i, e, t),
        onEnd: () => c(s.applicationId),
        className: eg.kL,
        dropBeforeClassName: eg.A,
        dropAfterClassName: eg.Ze,
        draggingClassName: eg.Id,
        children: (0, n.jsx)("div", { ref: u, className: eg.An, children: o }),
    });
}
function eh(e) {
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
        { coverImageUrl: u, gameName: g, isLoading: m } = (0, en.A)(t.applicationId),
        { registerDragHandleRef: h } = (0, U.r)(),
        x = (0, ec.A)(t.applicationId),
        p = (0, es.S)("UserProfileWidgetGameCoverItem"),
        j = x.length > 0 && !p,
        A = el.default.getCurrentUser(),
        f = A?.id === i,
        I = !r && f,
        { isDragging: S } = (0, ei.V)((e) => ({ isDragging: e.isDragging() })),
        v = () =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(er.A, {
                        imageSrc: u,
                        gameName: g,
                        applicationId: t.applicationId,
                        userId: i,
                        disableInteraction: r,
                        className: et()(j ? eg.kO : void 0, null == u || r ? void 0 : eu.iL),
                        hideTooltip: S,
                        coverRef: c,
                    }),
                    I && (0, n.jsx)(ea.jV, { buttonRef: h(t.applicationId), className: eg.BU }),
                    !r &&
                        (0, n.jsx)(eo.d, {
                            userId: i,
                            applicationId: t.applicationId,
                            guildId: s,
                            channelId: a,
                            className: eg.Ez,
                        }),
                    I &&
                        (0, n.jsx)(ed.A, {
                            game: t,
                            widgetType: l,
                            className: eg.vS,
                            iconSize: "xs",
                            onRemove: () => o?.(t.applicationId),
                        }),
                ],
            });
    return m
        ? (0, n.jsx)("div", { className: eu.mD })
        : I
          ? (0, n.jsx)(em, { widgetType: l, index: d ?? 0, game: t, coverImageUrl: u, gameName: g, children: v() })
          : (0, n.jsx)("div", { className: eg.kL, children: v() });
}
function ex(e) {
    let { games: t, ...i } = e,
        { registerItemRef: l, manageFocusOnDelete: s } = (0, U.r)();
    return (0, n.jsx)(Z, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(eh, { index: t, game: e, coverRef: l(e.applicationId), onRemoveGame: s, ...i }),
    });
}
function ep(e) {
    let { userId: t, widgetType: i, disableInteraction: l, games: s } = e,
        d = (0, a.bG)([r.default], () => r.default.getId() === t),
        { getManageButtonForWidget: o } = (0, Y.r)(),
        c = o(i),
        { expanded: u, setExpanded: g } = G(),
        m = u ? s : s.slice(0, 8),
        h = s.length > 8,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ex, { ...e, games: m }),
                h && (0, n.jsx)(V, { expanded: u, onClick: () => g((e) => !e) }),
            ],
        });
    return d && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(H, { widgetType: i, gameCount: s.length }),
                  (0, n.jsx)(U.B, { emptyListFallbackRef: c, children: x }),
              ],
          })
        : x;
}
function ej(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(D.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ep, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(M, { widget: i }),
    });
}
function eA(e) {
    let { user: t, widget: i, guildId: l, channelId: s, disableInteraction: a, ...r } = e;
    return (0, n.jsx)(D.A, {
        userId: t.id,
        widget: i,
        disableInteraction: a,
        ...r,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ep, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(M, { widget: i }),
    });
}
var ef = i(990078),
    eI = i(661531),
    eS = i(789645),
    ev = i(534514),
    eE = i(915089),
    ey = i(5477);
function eb(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: d } = (0, en.A)(t),
        o = (0, a.bG)([O.A], () => O.A.suggestedFetchIsLoading),
        c = T.intl.formatToPlainString(T.t["3mb1s5"], { game: r });
    return d || o
        ? (0, n.jsx)("div", { className: eu.mD })
        : (0, n.jsx)(ef.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(f.D, {
                  className: ey.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(er.A, {
                          className: ey.Iv,
                          imageSrc: s,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(I.p, { size: "md", className: ey.Xv, color: eI.A.colors.WHITE }),
                  ],
              }),
          });
}
function eT(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        r = (0, eE.GV)();
    return (0, n.jsxs)("aside", {
        className: et()(ey.kL, a),
        "aria-labelledby": r,
        children: [
            (0, n.jsxs)("div", {
                className: ey.wx,
                children: [
                    (0, n.jsx)(f.D, {
                        className: ey.r,
                        "aria-label": T.intl.string(T.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(eS.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ev.D, {
                        id: r,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: T.intl.string(T.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: ey.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(eb, { onClick: () => s(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function eC(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: a } = (0, y.S)(t),
        { setExpanded: r } = G(),
        { trackUserProfileEditAction: o } = (0, E.NJ)(),
        c = l.useCallback(
            (e) => {
                a(e),
                    r(!0),
                    (0, d.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [a, t, o, r],
        );
    return (0, n.jsx)(eT, { games: s, onClick: c, ...i });
}
var eN = i(465380);
function ew(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case s.x.FAVORITE_GAMES:
            return (0, n.jsx)($, { widget: t, ...i });
        case s.x.CURRENT_GAMES:
            return (0, n.jsx)(Q, { widget: t, ...i });
        case s.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(eA, { widget: t, ...i });
        case s.x.PLAYED_GAMES:
            return (0, n.jsx)(ej, { widget: t, ...i });
        default:
            return null;
    }
}
function eR(e) {
    let { widget: t, user: i, disableInteraction: s, ...c } = e,
        { setExpanded: u } = G(),
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
    return (0, n.jsx)(ew, {
        widget: t,
        user: i,
        disableInteraction: s,
        headerTitle: p,
        headerSubtitle: j,
        headerActionButtons:
            h && !f
                ? [
                      (0, n.jsx)(
                          w,
                          { disabled: A, widgetType: t.type, widget: t, onAddGame: () => u(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: x && (0, n.jsx)(eC, { userId: i.id, widgetType: t.type, onDismiss: m, className: eN.r }),
        ...c,
    });
}
function eO(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(L, { widgetType: t.type, children: (0, n.jsx)(eR, { widget: t, ...i }) });
}
