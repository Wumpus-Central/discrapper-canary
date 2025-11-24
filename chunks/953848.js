n.d(t, {
    default: () => S,
    g: () => k,
}),
    n(388685),
    n(539854),
    n(953529),
    n(781311);
var l = n(54381),
    a = n(473749),
    i = n(990547),
    r = n(793030),
    s = n(442837),
    o = n(481060),
    u = n(812206),
    c = n(835473),
    d = n(594190),
    m = n(925329),
    p = n(810568),
    g = n(886118),
    h = n(301801),
    v = n(77498),
    b = n(626135),
    f = n(768581),
    x = n(483517),
    j = n(981631),
    _ = n(388032),
    O = n(90149);
let y = a.memo(function (e) {
        let { game: t } = e,
            n = (0, s.e7)([u.Z], () => {
                var e;
                return null != (e = u.Z.getApplicationByName(t.name)) ? e : u.Z.getApplication(t.id);
            }, [t.id, t.name]),
            a = (0, s.e7)([d.ZP], () => {
                var e;
                let n = d.ZP.getVisibleGame(),
                    l = null != n ? d.ZP.getGameOrTransformedSubgameForPID(n.pid) : null;
                return (null == l || null == (e = l.name) ? void 0 : e.toLowerCase()) === t.name.toLowerCase()
                    ? l
                    : d.ZP.getGameForName(t.name);
            }, [t]),
            [i] = (0, c.Z)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = u.Z.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != a) return a.id;
                })(),
            ]),
            r = null != i ? i : n;
        return (0, l.jsx)(m.Z, {
            pid: null == a ? void 0 : a.pid,
            game: null != r ? r : t,
            size: m.A.XSMALL,
            className: O.gameIcon,
        });
    }),
    w = {
        searchType: g.S.FUZZY,
        sortType: g.E.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: n } = e,
                l = [t.name, n, t.id.toString()];
            if (
                (t.aliases.length > 0 && l.push(...t.aliases),
                null != t.description && l.push(t.description),
                null != t.linkedApplications)
            )
                for (let e of t.linkedApplications) {
                    let t = u.Z.getApplication(e.application_id);
                    null != t && l.push(t.name);
                }
            return l;
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    k = a.memo(function (e) {
        var t;
        let { games: n, selectedGame: i, onGameSelected: r, onGameSearchQueryChange: s, placeholder: u } = e,
            [c, d] = a.useState(""),
            m = a.useCallback(
                (e) => {
                    d(e), null == s || s(e);
                },
                [s],
            ),
            p = a.useMemo(() => {
                let e = [];
                for (let t of (null != i &&
                    e.push({
                        value: i.id,
                        label: i.name,
                        game: i,
                    }),
                n))
                    (null == i || (i.id !== t.id && i.name.toLowerCase() !== t.name.toLowerCase())) &&
                        e.push({
                            value: t.id,
                            label: t.name,
                            game: t,
                        });
                return e;
            }, [n, i]),
            g = a.useMemo(() => p.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [p]),
            [v, b] = a.useState(p),
            f = a.useCallback((e) => {
                b(e);
            }, []),
            x = a.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = g[e.value];
                    if (null == t) return null;
                    let n = t.game;
                    return (
                        n.name !== (null == i ? void 0 : i.name) && n.id === (null == i || i.id),
                        (0, l.jsx)(y, { game: t.game })
                    );
                },
                [g, i],
            ),
            j = a.useCallback(
                (e) =>
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: e.label,
                    }),
                [],
            ),
            _ = a.useCallback(
                (e) => {
                    var t;
                    let n = g[e];
                    if (null == n) return;
                    let l = n.game;
                    r(null != l ? l : null), m(null != (t = null == l ? void 0 : l.name) ? t : "");
                },
                [g, r, m],
            ),
            k = a.useCallback(
                (e) => {
                    m(e), null != i && e !== i.name && r(null);
                },
                [i, r, m],
            ),
            S = a.useCallback(
                (e) => {
                    0 === v.length && ("ArrowDown" === e.key || "ArrowUp" === e.key) && e.preventDefault();
                },
                [v],
            );
        return (
            (0, h.BO)(c, p, f, w),
            (0, l.jsx)(o.VcW, {
                className: O.searchNoToggle,
                options: v,
                value: null != (t = null == i ? void 0 : i.id) ? t : null,
                onChange: _,
                onSearchChange: k,
                placeholder: u,
                clearable: !0,
                filter: !1,
                maxVisibleItems: 5,
                clearQueryOnSelect: !1,
                onKeyDown: S,
                renderOptionPrefix: x,
                renderOptionLabel: j,
            })
        );
    });
function S(e) {
    var t, n;
    let { onClose: c, transitionState: d, onSubmitted: m, detectedActivity: g, defaultStep: h = "issue_selection" } = e,
        [y, w] = a.useState(h),
        [S, C] = a.useState(null),
        [P, Z] = a.useState(""),
        [A, N] = a.useState(null),
        [D, G] = a.useState(""),
        T = a.useMemo(() => (0, p.fP)(), []),
        I = (0, s.e7)([v.Z], () => v.Z.games),
        E = null != g,
        L = (0, s.e7)([u.Z], () =>
            (null == g ? void 0 : g.application_id) != null ? u.Z.getApplication(g.application_id) : null,
        ),
        M = () => {
            var e, t;
            (0, p.MH)({
                viewId: T,
                applicationId: null != (e = null == g ? void 0 : g.application_id) ? e : "",
                suggestedGameName: "" !== P.trim() ? P.trim() : void 0,
                suggestedGameApplicationId: null != (t = null == A ? void 0 : A.id) ? t : null,
                feedback: "" !== D.trim() ? D.trim() : void 0,
                submitted: !0,
            }),
                null == m || m(null != A ? A : null),
                c();
        },
        F = (() => {
            switch (y) {
                case "issue_selection":
                    return {
                        title: _.intl.string(_.t["6tnjbD"]),
                        actions: [],
                    };
                case "game_search":
                    return {
                        title: E ? _.intl.string(_.t.TZgkxY) : _.intl.string(_.t["+ie+wX"]),
                        actions: [
                            {
                                text: _.intl.string(_.t.geKm7t),
                                onClick: M,
                                variant: "primary",
                                disabled: "" === P.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: _.intl.string(_.t.tdDpJj),
                        actions: [
                            {
                                text: _.intl.string(_.t.geKm7t),
                                onClick: M,
                                variant: "primary",
                                disabled: "" === D.trim(),
                            },
                        ],
                    };
                default:
                    return {
                        title: "",
                        actions: [],
                    };
            }
        })();
    return (0, l.jsx)(
        r.Modal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })({}, F)),
        (n = n =
            {
                transitionState: d,
                onClose: c,
                trackingProps: { impression: { impressionName: i.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
                children: (() => {
                    switch (y) {
                        case "issue_selection":
                            return (0, l.jsxs)("div", {
                                className: O.content,
                                children: [
                                    (0, l.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: _.intl.string(_.t.IQHicr),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: O.radioGroup,
                                        children: (0, l.jsx)(o.FXm, {
                                            value: null != S ? S : void 0,
                                            onChange: (e) => {
                                                var t;
                                                C(e),
                                                    b.default.track(j.rMx.GAME_DETECTION_FEEDBACK_MODAL, {
                                                        selected_option: e,
                                                        application_id:
                                                            null != (t = null == g ? void 0 : g.application_id)
                                                                ? t
                                                                : null,
                                                    }),
                                                    setTimeout(() => {
                                                        "game_not_detected" === e || "wrong_game_shown" === e
                                                            ? w("game_search")
                                                            : w("other_feedback");
                                                    }, 100);
                                            },
                                            options: E
                                                ? [
                                                      {
                                                          name: _.intl.string(_.t.TZgkxY),
                                                          value: "wrong_game_shown",
                                                      },
                                                      {
                                                          name: _.intl.string(_.t.tdDpJj),
                                                          value: "other_feedback",
                                                      },
                                                  ]
                                                : [
                                                      {
                                                          name: _.intl.string(_.t["+ie+wX"]),
                                                          value: "game_not_detected",
                                                      },
                                                      {
                                                          name: _.intl.string(_.t.tdDpJj),
                                                          value: "other_feedback",
                                                      },
                                                  ],
                                        }),
                                    }),
                                ],
                            });
                        case "game_search":
                            return (0, l.jsxs)("div", {
                                className: O.content,
                                children: [
                                    (0, l.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: E ? _.intl.string(_.t["79o/iq"]) : _.intl.string(_.t["r/2pZy"]),
                                    }),
                                    E &&
                                        (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: O.detectedGameFrame,
                                                    children: [
                                                        (() => {
                                                            var e, t, n;
                                                            let a = f.ZP.getApplicationIconURL({
                                                                id: null != (e = g.application_id) ? e : "",
                                                                icon:
                                                                    null != (t = null == L ? void 0 : L.icon)
                                                                        ? t
                                                                        : null,
                                                            });
                                                            return null != a
                                                                ? (0, l.jsx)("img", {
                                                                      src: a,
                                                                      alt:
                                                                          null != g.name && "" !== g.name
                                                                              ? g.name
                                                                              : null !=
                                                                                  (n = null == L ? void 0 : L.name)
                                                                                ? n
                                                                                : "",
                                                                      className: O.detectedGameIcon,
                                                                  })
                                                                : (0, l.jsx)("div", {
                                                                      className: ""
                                                                          .concat(O.detectedGameIcon, " ")
                                                                          .concat(O.detectedGameIconPlaceholder),
                                                                      children: (0, l.jsx)("div", {
                                                                          style: {
                                                                              fontSize: "28px",
                                                                              fontWeight: "bold",
                                                                              color: "var(--text-muted)",
                                                                              userSelect: "none",
                                                                          },
                                                                          children: "?",
                                                                      }),
                                                                  });
                                                        })(),
                                                        (0, l.jsx)(o.Text, {
                                                            variant: "text-md/semibold",
                                                            color: "header-primary",
                                                            children:
                                                                null != g.name && "" !== g.name
                                                                    ? g.name
                                                                    : null == L
                                                                      ? void 0
                                                                      : L.name,
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(x.Z, {}),
                                            ],
                                        }),
                                    (0, l.jsx)(k, {
                                        games: I,
                                        selectedGame: A,
                                        onGameSelected: N,
                                        onGameSearchQueryChange: Z,
                                        placeholder: E ? _.intl.string(_.t["/SGi7v"]) : _.intl.string(_.t.ss9Zwa),
                                    }),
                                ],
                            });
                        case "other_feedback":
                            return (0, l.jsxs)("div", {
                                className: O.content,
                                children: [
                                    (0, l.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: _.intl.string(_.t.IblYEw),
                                    }),
                                    (0, l.jsx)(o.Kx8, {
                                        value: D,
                                        onChange: G,
                                        placeholder: _.intl.string(_.t.aiPKV4),
                                        maxLength: 300,
                                        rows: 4,
                                    }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
