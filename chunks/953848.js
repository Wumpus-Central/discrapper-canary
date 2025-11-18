n.d(t, { default: () => b }), n(388685), n(781311);
var l = n(54381),
    a = n(473749),
    i = n(990547),
    r = n(793030),
    o = n(442837),
    c = n(481060),
    s = n(812206),
    d = n(810568),
    u = n(77498),
    m = n(626135),
    p = n(768581),
    g = n(483517),
    h = n(981631),
    v = n(388032),
    x = n(543733);
function b(e) {
    var t, n;
    let { onClose: b, transitionState: _, onSubmitted: f, detectedActivity: j, defaultStep: O = "issue_selection" } = e,
        [w, y] = a.useState(O),
        [P, k] = a.useState(null),
        [I, G] = a.useState(""),
        [N, D] = a.useState(null),
        [T, S] = a.useState(""),
        C = a.useMemo(() => (0, d.fP)(), []),
        E = (0, o.e7)([u.Z], () => u.Z.games),
        A = null != j,
        Z = (0, o.e7)([s.Z], () =>
            (null == j ? void 0 : j.application_id) != null ? s.Z.getApplication(j.application_id) : null,
        ),
        M = a.useMemo(
            () =>
                I.trim().length < 1
                    ? []
                    : E.filter((e) => e.name.toLowerCase().includes(I.toLowerCase()))
                          .slice(0, 20)
                          .map((e) => ({
                              value: e.id,
                              label: e.name,
                              game: e,
                          })),
            [E, I],
        ),
        L = () => {
            var e, t;
            (0, d.MH)({
                viewId: C,
                applicationId: null != (e = null == j ? void 0 : j.application_id) ? e : "",
                suggestedGameName: "" !== I.trim() ? I.trim() : void 0,
                suggestedGameApplicationId: null != (t = null == N ? void 0 : N.id) ? t : null,
                feedback: "" !== T.trim() ? T.trim() : void 0,
                submitted: !0,
            }),
                null == f || f(null != N ? N : null),
                b();
        },
        F = (() => {
            switch (w) {
                case "issue_selection":
                    return {
                        title: v.intl.string(v.t["6tnjbD"]),
                        actions: [],
                    };
                case "game_search":
                    return {
                        title: A ? v.intl.string(v.t.TZgkxY) : v.intl.string(v.t["+ie+wX"]),
                        actions: [
                            {
                                text: v.intl.string(v.t.geKm7t),
                                onClick: L,
                                variant: "primary",
                                disabled: "" === I.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: v.intl.string(v.t.tdDpJj),
                        actions: [
                            {
                                text: v.intl.string(v.t.geKm7t),
                                onClick: L,
                                variant: "primary",
                                disabled: "" === T.trim(),
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
                transitionState: _,
                onClose: b,
                trackingProps: { impression: { impressionName: i.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
                children: (() => {
                    switch (w) {
                        case "issue_selection":
                            return (0, l.jsxs)("div", {
                                className: x.content,
                                children: [
                                    (0, l.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: v.intl.string(v.t.IQHicr),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: x.radioGroup,
                                        children: (0, l.jsx)(c.FXm, {
                                            value: null != P ? P : void 0,
                                            onChange: (e) => {
                                                var t;
                                                k(e),
                                                    m.default.track(h.rMx.GAME_DETECTION_FEEDBACK_MODAL, {
                                                        selected_option: e,
                                                        application_id:
                                                            null != (t = null == j ? void 0 : j.application_id)
                                                                ? t
                                                                : null,
                                                    }),
                                                    setTimeout(() => {
                                                        "game_not_detected" === e || "wrong_game_shown" === e
                                                            ? y("game_search")
                                                            : y("other_feedback");
                                                    }, 100);
                                            },
                                            options: A
                                                ? [
                                                      {
                                                          name: v.intl.string(v.t.TZgkxY),
                                                          value: "wrong_game_shown",
                                                      },
                                                      {
                                                          name: v.intl.string(v.t.tdDpJj),
                                                          value: "other_feedback",
                                                      },
                                                  ]
                                                : [
                                                      {
                                                          name: v.intl.string(v.t["+ie+wX"]),
                                                          value: "game_not_detected",
                                                      },
                                                      {
                                                          name: v.intl.string(v.t.tdDpJj),
                                                          value: "other_feedback",
                                                      },
                                                  ],
                                        }),
                                    }),
                                ],
                            });
                        case "game_search":
                            var e;
                            return (0, l.jsxs)("div", {
                                className: x.content,
                                children: [
                                    (0, l.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: A ? v.intl.string(v.t["79o/iq"]) : v.intl.string(v.t["r/2pZy"]),
                                    }),
                                    A &&
                                        (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: x.detectedGameFrame,
                                                    children: [
                                                        (() => {
                                                            var e, t, n;
                                                            let a = p.ZP.getApplicationIconURL({
                                                                id: null != (e = j.application_id) ? e : "",
                                                                icon:
                                                                    null != (t = null == Z ? void 0 : Z.icon)
                                                                        ? t
                                                                        : null,
                                                            });
                                                            return null != a
                                                                ? (0, l.jsx)("img", {
                                                                      src: a,
                                                                      alt:
                                                                          null != j.name && "" !== j.name
                                                                              ? j.name
                                                                              : null !=
                                                                                  (n = null == Z ? void 0 : Z.name)
                                                                                ? n
                                                                                : "",
                                                                      className: x.detectedGameIcon,
                                                                  })
                                                                : (0, l.jsx)("div", {
                                                                      className: ""
                                                                          .concat(x.detectedGameIcon, " ")
                                                                          .concat(x.detectedGameIconPlaceholder),
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
                                                        (0, l.jsx)(c.Text, {
                                                            variant: "text-md/semibold",
                                                            color: "header-primary",
                                                            children:
                                                                null != j.name && "" !== j.name
                                                                    ? j.name
                                                                    : null == Z
                                                                      ? void 0
                                                                      : Z.name,
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(g.Z, {}),
                                            ],
                                        }),
                                    (0, l.jsx)(c.VcW, {
                                        className: x.searchNoToggle,
                                        options: M,
                                        value: null != (e = null == N ? void 0 : N.id) ? e : null,
                                        onChange: (e) => {
                                            var t;
                                            let n = E.find((t) => t.id === e);
                                            D(null != n ? n : null),
                                                G(null != (t = null == n ? void 0 : n.name) ? t : "");
                                        },
                                        onSearchChange: (e) => {
                                            G(e), null != N && e !== N.name && D(null);
                                        },
                                        placeholder: A ? v.intl.string(v.t["/SGi7v"]) : v.intl.string(v.t.ss9Zwa),
                                        clearable: !0,
                                        filter: !1,
                                        maxVisibleItems: 5,
                                        clearQueryOnSelect: !1,
                                        onKeyDown: (e) => {
                                            0 === M.length &&
                                                ("ArrowDown" === e.key || "ArrowUp" === e.key) &&
                                                e.preventDefault();
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = E.find((t) => t.id === e.value);
                                            return null != t
                                                ? (0, l.jsx)("img", {
                                                      src: p.ZP.getApplicationIconURL({
                                                          id: t.id,
                                                          icon: t.icon,
                                                      }),
                                                      alt: t.name,
                                                      className: x.gameIcon,
                                                  })
                                                : null;
                                        },
                                        renderOptionLabel: (e) =>
                                            (0, l.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                children: e.label,
                                            }),
                                    }),
                                ],
                            });
                        case "other_feedback":
                            return (0, l.jsxs)("div", {
                                className: x.content,
                                children: [
                                    (0, l.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: v.intl.string(v.t.IblYEw),
                                    }),
                                    (0, l.jsx)(c.Kx8, {
                                        value: T,
                                        onChange: S,
                                        placeholder: v.intl.string(v.t.aiPKV4),
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
