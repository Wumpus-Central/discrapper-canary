n.d(t, { default: () => p }), n(388685), n(781311);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    a = n(82659),
    c = n(481060),
    o = n(812206),
    s = n(77498),
    d = n(768581),
    u = n(483517),
    m = n(388032),
    g = n(90149);
function p(e) {
    var t, n;
    let { onClose: p, transitionState: h, onSubmitted: x, detectedActivity: v } = e,
        [b, j] = l.useState("issue_selection"),
        [f, y] = l.useState(null),
        [w, O] = l.useState(""),
        [_, P] = l.useState(null),
        [k, G] = l.useState(""),
        I = (0, i.e7)([s.Z], () => s.Z.games),
        S = null != v,
        N = (0, i.e7)([o.Z], () =>
            (null == v ? void 0 : v.application_id) != null ? o.Z.getApplication(v.application_id) : null,
        ),
        C = l.useMemo(
            () =>
                w.trim().length < 1
                    ? []
                    : I.filter((e) => e.name.toLowerCase().includes(w.toLowerCase()))
                          .slice(0, 20)
                          .map((e) => ({
                              value: e.id,
                              label: e.name,
                              game: e,
                          })),
            [I, w],
        ),
        T = () => {
            null == x || x(), p();
        },
        Z = (() => {
            switch (b) {
                case "issue_selection":
                    return {
                        title: m.intl.string(m.t["6tnjbG"]),
                        actions: [],
                    };
                case "game_search":
                    return {
                        title: S ? m.intl.string(m.t.TZgkxc) : m.intl.string(m.t["+ie+wc"]),
                        actions: [
                            {
                                text: m.intl.string(m.t.geKm7u),
                                onClick: T,
                                variant: "primary",
                                disabled: "" === w.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: m.intl.string(m.t.tdDpJi),
                        actions: [
                            {
                                text: m.intl.string(m.t.geKm7u),
                                onClick: T,
                                variant: "primary",
                                disabled: "" === k.trim(),
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
    return (0, r.jsx)(
        a.Modal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, Z)),
        (n = n =
            {
                transitionState: h,
                onClose: p,
                children: (() => {
                    switch (b) {
                        case "issue_selection":
                            return (0, r.jsxs)("div", {
                                className: g.content,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: m.intl.string(m.t.IQHicn),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: g.radioGroup,
                                        children: (0, r.jsx)(c.FXm, {
                                            value: f,
                                            onChange: (e) => {
                                                let { value: t } = e;
                                                y(t),
                                                    setTimeout(() => {
                                                        "missed" === t || "wrong" === t
                                                            ? j("game_search")
                                                            : j("other_feedback");
                                                    }, 100);
                                            },
                                            options: S
                                                ? [
                                                      {
                                                          name: m.intl.string(m.t.TZgkxc),
                                                          value: "wrong",
                                                      },
                                                      {
                                                          name: m.intl.string(m.t.tdDpJi),
                                                          value: "other",
                                                      },
                                                  ]
                                                : [
                                                      {
                                                          name: m.intl.string(m.t["+ie+wc"]),
                                                          value: "missed",
                                                      },
                                                      {
                                                          name: m.intl.string(m.t.tdDpJi),
                                                          value: "other",
                                                      },
                                                  ],
                                        }),
                                    }),
                                ],
                            });
                        case "game_search":
                            var e;
                            return (0, r.jsxs)("div", {
                                className: g.content,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: S ? m.intl.string(m.t["79o/io"]) : m.intl.string(m.t["r/2pZ2"]),
                                    }),
                                    S &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: g.detectedGameFrame,
                                                    children: [
                                                        (() => {
                                                            var e, t, n;
                                                            let l = d.ZP.getApplicationIconURL({
                                                                id: null != (e = v.application_id) ? e : "",
                                                                icon:
                                                                    null != (t = null == N ? void 0 : N.icon)
                                                                        ? t
                                                                        : null,
                                                            });
                                                            return null != l
                                                                ? (0, r.jsx)("img", {
                                                                      src: l,
                                                                      alt: null != (n = v.name) ? n : "",
                                                                      className: g.detectedGameIcon,
                                                                  })
                                                                : (0, r.jsx)("div", {
                                                                      className: ""
                                                                          .concat(g.detectedGameIcon, " ")
                                                                          .concat(g.detectedGameIconPlaceholder),
                                                                      children: (0, r.jsx)("div", {
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
                                                        (0, r.jsx)(c.Text, {
                                                            variant: "text-md/semibold",
                                                            color: "header-primary",
                                                            children: v.name,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(u.Z, {}),
                                            ],
                                        }),
                                    (0, r.jsx)(c.VcW, {
                                        className: g.searchNoToggle,
                                        options: C,
                                        value: null != (e = null == _ ? void 0 : _.id) ? e : null,
                                        onChange: (e) => {
                                            var t;
                                            let n = I.find((t) => t.id === e);
                                            P(null != n ? n : null),
                                                O(null != (t = null == n ? void 0 : n.name) ? t : "");
                                        },
                                        onSearchChange: (e) => {
                                            O(e), null != _ && e !== _.name && P(null);
                                        },
                                        placeholder: S ? m.intl.string(m.t["/SGi7u"]) : m.intl.string(m.t.ss9Zwc),
                                        clearable: !0,
                                        filter: !1,
                                        maxVisibleItems: 5,
                                        clearQueryOnSelect: !1,
                                        onKeyDown: (e) => {
                                            0 === C.length &&
                                                ("ArrowDown" === e.key || "ArrowUp" === e.key) &&
                                                e.preventDefault();
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = I.find((t) => t.id === e.value);
                                            return null != t
                                                ? (0, r.jsx)("img", {
                                                      src: d.ZP.getApplicationIconURL({
                                                          id: t.id,
                                                          icon: t.icon,
                                                      }),
                                                      alt: t.name,
                                                      className: g.gameIcon,
                                                  })
                                                : null;
                                        },
                                        renderOptionLabel: (e) =>
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                children: e.label,
                                            }),
                                    }),
                                ],
                            });
                        case "other_feedback":
                            return (0, r.jsxs)("div", {
                                className: g.content,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: m.intl.string(m.t.IblYEx),
                                    }),
                                    (0, r.jsx)(c.Kx8, {
                                        value: k,
                                        onChange: G,
                                        placeholder: m.intl.string(m.t.aiPKV1),
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
