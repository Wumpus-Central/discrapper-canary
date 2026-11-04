a.d(t, { default: () => $ });
var n = a(477900),
    l = a(582128),
    r = a(812729),
    i = a.n(r),
    u = a(855986),
    d = a(499979),
    s = a(189213),
    o = a(192308),
    m = a(568602),
    c = a(834730),
    g = a(691885),
    f = a(103557),
    y = a(684013),
    v = a(56562),
    p = a(964486),
    h = a(77729),
    b = a(343446),
    _ = a(495867),
    I = a(228342),
    N = a(129230),
    A = a(220478),
    G = a(9302),
    S = a(41984),
    x = a(181435),
    E = a(78878),
    w = a(651930);
a(321073);
var k = a(986322),
    D = a(760751),
    j = a(811091),
    T = a(861862),
    P = a(243612);
let M = new j.g(),
    O = {};
function C(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [T.default];
    for (let a of Object.values(t.getClosedTrackedGamesHistory()))
        if (a.gameId === e.id || a.gameName === e.name) return a;
    return null;
}
function F(e) {
    let [t, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [k.Ay, T.default],
        n = C(e, [a]),
        l = null != e.name ? (t.getGameForName(e.name) ?? void 0) : void 0;
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: l?.pid ?? n?.pid ?? void 0,
        fullscreenType: l?.fullscreenType ?? n?.fullscreenType ?? void 0,
        trackedGame: n ?? void 0,
        persistentGame: e,
        runningGame: l,
    };
}
function L(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [D.A];
    if (null != e.gameId) {
        let a = t.getDetectableGame(e.gameId);
        if (null != a) return a;
    }
    let a = e.runningGame ?? e.persistentGame;
    if (null != a) {
        let e = t.findGame(a);
        if (null != e) return e;
    }
    if (null != e.gameName) {
        let a = t.searchGamesByName(e.gameName);
        if (1 === a.length) return t.getDetectableGame(a[0]) ?? null;
    }
    if (null == e.gameName) return null;
    let n =
        e.gameId ??
        (function (e) {
            if (null != O[e]) return O[e];
            let t = Date.now(),
                a = null;
            try {
                (M.willOverflowNext() && M.reset(), (a = j.default.fromTimestampWithSequence(t, M)));
            } catch {
                (M.reset(), (a = j.default.fromTimestampWithSequence(t, M)));
            }
            if (null == a) throw Error("Failed to generate snowflake id");
            return ((O[e] = a), a);
        })(e.gameName);
    return { id: j.default.cast(n), name: e.gameName, aliases: [], executables: [], thirdPartySkus: [] };
}
function W(e) {
    let { selectedGame: t, setSelectedGame: a, placeholder: l } = e,
        r = (0, u.yK)(
            [D.A, k.Ay, T.default],
            () => {
                let e = D.A.games,
                    t = e.reduce((e, t) => ((e[t.id] = t), e), {}),
                    a = k.Ay.getGamesSeen(!1).reduce((e, a) => {
                        let n = a.id;
                        if (null != n && null != t[n]) return e;
                        let l = L(F(a, [k.Ay, T.default]), [D.A]);
                        if (null != l) {
                            if (null != t[l.id]) return e;
                            e.push(l);
                        }
                        return e;
                    }, []);
                return [...e, ...a];
            },
            [],
        ),
        i = (0, u.bG)([D.A], () => (null == t ? null : L(t, [D.A])), [t]);
    return (0, n.jsx)(w.i, {
        games: r,
        selectedGame: i ?? null,
        onGameSelected: function (e) {
            null != e
                ? a(
                      (function (e) {
                          let [t, a] =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [k.Ay, T.default],
                              n = C(e, [a]);
                          return {
                              gameId: e.id,
                              gameName: e.name,
                              gamePid: n?.pid ?? void 0,
                              fullscreenType: n?.fullscreenType ?? void 0,
                              trackedGame: n ?? void 0,
                              runningGame: null != e.name ? (t.getGameForName(e.name) ?? void 0) : void 0,
                          };
                      })(e),
                  )
                : a(null);
        },
        placeholder: l,
    });
}
var B = a(661886),
    U = a(887287),
    R = a(127242),
    H = a(244055);
a(672396);
var K = a(652215),
    z = a(792996),
    q = a(582830);
function J(e, t) {
    return i()(e, t);
}
let Z = new Set([
        v.aI.BORDERLESS_FULLSCREEN,
        v.aI.FULLSCREEN,
        v.aI.WINDOWED,
        v.aI.MAXIMIZED,
        v.aI.MINIMIZED,
        v.aI.UNKNOWN,
    ]),
    X = {
        HandleFocusChanged: (e, t) => {
            if (!(0, x.$8)(e, "HandleFocusChanged")) return !0;
            let a = null != t ? (U.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set(),
                { focusedPid: n, focusedWindowHandle: l } = e.data;
            return null != l && null != n && -1 !== n && !!a.has(l) && n === t;
        },
        EventHook: (e, t) => {
            if (!(0, x.$8)(e, "EventHook")) return !0;
            let a = null != t ? (U.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set();
            try {
                let { receivedWindow: n, targetPid: l } = e.data;
                if (null != n && a.has(n)) return null != l && l === t;
            } finally {
                return !1;
            }
        },
    };
function $(e) {
    let t,
        r,
        i,
        w,
        D,
        { onClose: j, transitionState: M, location: O, appContext: L } = e,
        U = (0, u.bG)([I.default], () => I.default.getFocusedPID()) ?? (0, G.getPID)(),
        $ = (0, u.bG)([T.default], () => T.default.getTrackedGameByPid(U), [U]),
        [V, Y] = l.useState(null),
        [Q, ee] = l.useState(""),
        et =
            ((t = (0, P.b4)()),
            (r = (0, u.bG)([I.default], () => I.default.getFocusedPID()) ?? (0, G.getPID)()),
            (i = (0, u.bG)([T.default], () => T.default.getTrackedGameByPid(r), [r])),
            (w = (0, u.bG)([k.Ay], () => k.Ay.getVisibleGame())),
            (D = (0, u.bG)([k.Ay], () => k.Ay.getGamesSeen(!1)[0])),
            (0, u.bG)(
                [k.Ay, T.default],
                () => {
                    switch (!0) {
                        case null != i:
                            return (function (e) {
                                let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [k.Ay];
                                return {
                                    gameId: e.gameId ?? void 0,
                                    gameName: e.gameName ?? void 0,
                                    gamePid: e.pid,
                                    fullscreenType: e.fullscreenType,
                                    trackedGame: e,
                                    runningGame: null != e.gameName ? (t.getGameForName(e.gameName) ?? void 0) : void 0,
                                };
                            })(i, [k.Ay]);
                        case null != t:
                            return (function (e) {
                                let [t, a] =
                                        arguments.length > 1 && void 0 !== arguments[1]
                                            ? arguments[1]
                                            : [k.Ay, T.default],
                                    n = t.getGameForName(e.name),
                                    l = n?.pid;
                                return {
                                    gameId: e.id,
                                    gameName: e.name,
                                    gamePid: n?.pid,
                                    fullscreenType: n?.fullscreenType ?? void 0,
                                    runningGame: n ?? void 0,
                                    trackedGame: null != l ? (a.getTrackedGameByPid(l) ?? void 0) : void 0,
                                };
                            })(t, [k.Ay, T.default]);
                        case null != w:
                            return (function (e) {
                                let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [T.default];
                                return {
                                    gameId: e.id,
                                    gameName: e.name,
                                    gamePid: e.pid,
                                    fullscreenType: e.fullscreenType,
                                    trackedGame: C(e, [t]) ?? void 0,
                                    runningGame: e,
                                };
                            })(w, [T.default]);
                        case null != D:
                            return F(D, [k.Ay, T.default]);
                        default:
                            return null;
                    }
                },
                [t, i, w, D],
            )),
        [ea, en] = l.useState(et?.fullscreenType ?? $?.fullscreenType ?? null),
        [el, er] = l.useState(et),
        [ei, eu] = l.useState(!1),
        [ed, es] = l.useState(!1),
        [eo, em] = l.useState(!1),
        {
            nativeState: ec,
            breadcrumbs: [eg],
        } =
            ((0, p.Ay)(
                () => (
                    y.A.setModuleLogging(!0),
                    y.A.setStateDebugging(!0),
                    () => {
                        (y.A.setModuleLogging(!1), y.A.setStateDebugging(!1));
                    }
                ),
            ),
            (0, u.bG)(
                [R.A],
                () => ({ nativeState: R.A.getDebuggingState(), breadcrumbs: R.A.getOverlayLoggingBreadcrumbs() }),
                [],
                J,
            )),
        ef = l.useMemo(() => {
            let e = {
                game_crashes_occurred: z.t["1UWmCV"],
                poor_performance: z.t["4owu+4"],
                overlay_unresponsive: z.t.Q8Z0xo,
                keybindings_not_working: z.t.UnzaZs,
                alt_tabbing_issues: z.t["/sG9Sf"],
                game_not_interactable: z.t["+18gq6"],
                game_forced_minimized: z.t.dabM8C,
                other: z.t["UhbPA+"],
            };
            return Object.keys(e).map((t) => ({ id: t, label: z.intl.string(e[t]), value: t }));
        }, []),
        ey = l.useMemo(() => {
            let e = {
                [v.aI.FULLSCREEN]: z.t.AjBsPe,
                [v.aI.WINDOWED]: z.t["0oYq2i"],
                [v.aI.BORDERLESS_FULLSCREEN]: z.t.NwNvjf,
                [v.aI.MINIMIZED]: z.t.Wypflu,
                [v.aI.MAXIMIZED]: z.t["MUX2+G"],
                [v.aI.UNKNOWN]: z.t.QPOep8,
            };
            return [...Z].map((t) => ({ id: t.toString(), label: z.intl.string(e[t]), value: t }));
        }, []);
    return (
        (0, p.Ay)(() => {
            N.default.track(K.HAw.OPEN_MODAL, { type: "overlay_bug_reporter_modal", location: O });
        }),
        (0, n.jsx)(s.a, {
            transitionState: M,
            title: z.intl.string(z.t.OKmenM),
            actions: [
                { text: z.intl.string(z.t["ETE/oC"]), onClick: j, variant: "secondary", disabled: ei },
                {
                    text: z.intl.string(z.t.geKm7t),
                    onClick: async function () {
                        if (null === V && 0 === Q.length) {
                            (em(!0),
                                (async function () {
                                    (es(!0), await (0, d.yy)(500), es(!1));
                                })());
                            return;
                        }
                        eu(!0);
                        let e = I.default.getFocusedPID() ?? (0, G.getPID)(),
                            t = T.default.getTrackedGameByPid(e),
                            l = B.A.getPopoutInitializationStages(),
                            r = t?.overlayMethod != null ? S.Ue[t.overlayMethod] : null,
                            i = t?.fullscreenType ?? v.aI.UNKNOWN,
                            u = (0, x.tn)(eg, (t) => {
                                for (let a of Object.values(X))
                                    try {
                                        if (!a(t, e)) return !1;
                                    } catch (e) {
                                        return !1;
                                    }
                                return !0;
                            }),
                            s = E.A.getRecentActions(10),
                            m = A.A.getRecentExperimentBuckets(
                                b.A.getAllExperimentAssignments(),
                                new Date(Date.now() - 7776e6),
                            ),
                            c =
                                t?.fullscreenHistory == null
                                    ? null
                                    : Object.entries(t.fullscreenHistory)
                                          .sort((e, t) => {
                                              let [a] = e,
                                                  [n] = t;
                                              return Number(n) - Number(a);
                                          })
                                          .map((e) => {
                                              let [t, a] = e;
                                              return `${t}:${v.aI[a]}`;
                                          }),
                            g = {
                                issue_category: V,
                                details: Q,
                                overlay_render_method: r,
                                hardware_display_count: (await h.A?.hardware?.getDisplayCount?.()) ?? null,
                                detected_fullscreen_type: v.aI[i],
                                application_id: t?.gameId,
                                application_name: t?.gameName,
                                game_pid: t?.pid,
                                recent_overlay_flux_actions: s,
                                overlay_module_state: t?.state,
                                overlay_native_state: JSON.stringify(ec),
                                overlay_module_oop_initialization_state: JSON.stringify(l),
                                overlay_module_error_message: H.A.errorMessage,
                                overlay_module_breadcrumbs: JSON.stringify(u),
                                fullscreen_history_for_pid: c,
                                media_session_id: _.A.getMediaSessionId(),
                                recent_experiment_buckets: JSON.stringify(m),
                                location: O,
                            };
                        (await N.default.track(K.HAw.OVERLAY_BUG_REPORT, g),
                            await (0, d.yy)(1e3),
                            eu(!1),
                            j?.(),
                            (0, o.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([a.e(216656), a.e(836058)]).then(
                                        a.bind(a, 823777),
                                    );
                                    return (t) => (0, n.jsx)(e, { ...t });
                                },
                                { contextKey: (0, o.TI)(L) },
                            ));
                    },
                    variant: "primary",
                    loading: ei,
                },
            ],
            onClose: j,
            children: (0, n.jsxs)("div", {
                className: q.jE,
                children: [
                    (0, n.jsxs)("div", {
                        className: q.DB,
                        children: [
                            (0, n.jsx)(m.b, {
                                isShaking: ed,
                                intensity: 1.5,
                                children: (0, n.jsx)(c.E, {
                                    variant: "body-md/medium",
                                    color: eo ? "text-feedback-critical" : "text-strong",
                                    children: z.intl.string(z.t.Trx7eJ),
                                }),
                            }),
                            (0, n.jsx)(g.l, {
                                label: z.intl.string(z.t.mKTzjI),
                                hideLabel: !0,
                                placeholder: z.intl.string(z.t.mKTzjI),
                                options: ef,
                                value: V,
                                onSelectionChange: function (e) {
                                    (Y(e), em(!1), es(!1));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            eo &&
                                (0, n.jsx)(c.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: z.intl.string(z.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: q.DB,
                        children: [
                            (0, n.jsx)(c.E, {
                                variant: "body-md/medium",
                                color: "text-strong",
                                children: z.intl.string(z.t.iZufAY),
                            }),
                            (0, n.jsx)(f.f, {
                                autosize: !0,
                                value: Q,
                                maxLength: 1e3,
                                showCharacterCount: !1,
                                placeholder: z.intl.string(z.t["68mJXW"]),
                                onChange: ee,
                            }),
                            (0, n.jsx)(c.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: z.intl.string(z.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: q.hr }),
                    (0, n.jsxs)("div", {
                        className: q.DB,
                        children: [
                            (0, n.jsx)(c.E, {
                                variant: "body-md/medium",
                                color: "text-strong",
                                children: z.intl.string(z.t["8+SU+a"]),
                            }),
                            (0, n.jsx)(W, {
                                selectedGame: el,
                                setSelectedGame: er,
                                placeholder: z.intl.string(z.t.b1IW2e),
                            }),
                            (0, n.jsx)(g.l, {
                                label: z.intl.string(z.t.IjlqrF),
                                hideLabel: !0,
                                placeholder: z.intl.string(z.t.IjlqrF),
                                options: ey,
                                value: ea,
                                onSelectionChange: en,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
