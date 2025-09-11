n.d(t, { default: () => m }), n(388685), n(781311);
var r = n(951288),
    l = n(647438),
    a = n(442837),
    i = n(82659),
    o = n(481060),
    s = n(77498),
    c = n(768581),
    u = n(388032),
    d = n(543733);
function m(e) {
    var t, n;
    let { onClose: m, transitionState: g, onSubmitted: p } = e,
        [h, b] = l.useState("issue_selection"),
        [f, x] = l.useState(null),
        [v, j] = l.useState(""),
        [O, y] = l.useState(null),
        [w, _] = l.useState(""),
        k = (0, a.e7)([s.Z], () => s.Z.games),
        P = l.useMemo(
            () =>
                v.trim().length < 1
                    ? []
                    : k
                          .filter((e) => e.name.toLowerCase().includes(v.toLowerCase()))
                          .slice(0, 20)
                          .map((e) => ({
                              value: e.id,
                              label: e.name,
                              game: e,
                          })),
            [k, v],
        ),
        S = () => {
            null == p || p(), m();
        },
        C = (() => {
            switch (h) {
                case "issue_selection":
                    return {
                        title: u.intl.string(u.t["6tnjbG"]),
                        actions: [],
                    };
                case "game_search":
                    return {
                        title: u.intl.string(u.t["+ie+wc"]),
                        actions: [
                            {
                                text: u.intl.string(u.t.geKm7u),
                                onClick: S,
                                variant: "primary",
                                disabled: "" === v.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: u.intl.string(u.t.tdDpJi),
                        actions: [
                            {
                                text: u.intl.string(u.t.geKm7u),
                                onClick: S,
                                variant: "primary",
                                disabled: "" === w.trim(),
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
        i.Modal,
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
        })({}, C)),
        (n = n =
            {
                transitionState: g,
                onClose: m,
                children: (() => {
                    switch (h) {
                        case "issue_selection":
                            return (0, r.jsxs)("div", {
                                className: d.content,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: u.intl.string(u.t.IQHicn),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: d.radioGroup,
                                        children: (0, r.jsx)(o.FXm, {
                                            value: f,
                                            onChange: (e) => {
                                                let { value: t } = e;
                                                x(t),
                                                    setTimeout(() => {
                                                        "game_not_detected" === t
                                                            ? b("game_search")
                                                            : b("other_feedback");
                                                    }, 100);
                                            },
                                            options: [
                                                {
                                                    name: u.intl.string(u.t["+ie+wc"]),
                                                    value: "game_not_detected",
                                                },
                                                {
                                                    name: u.intl.string(u.t.tdDpJi),
                                                    value: "other_feedback",
                                                },
                                            ],
                                        }),
                                    }),
                                ],
                            });
                        case "game_search":
                            var e;
                            return (0, r.jsxs)("div", {
                                className: d.content,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: u.intl.string(u.t.bx9jeX),
                                    }),
                                    (0, r.jsx)(o.VcW, {
                                        className: d.searchNoToggle,
                                        options: P,
                                        value: null != (e = null == O ? void 0 : O.id) ? e : null,
                                        onChange: (e) => {
                                            var t;
                                            let n = k.find((t) => t.id === e);
                                            y(null != n ? n : null),
                                                j(null != (t = null == n ? void 0 : n.name) ? t : "");
                                        },
                                        onSearchChange: (e) => {
                                            j(e), null != O && e !== O.name && y(null);
                                        },
                                        placeholder: u.intl.string(u.t.wEntnZ),
                                        clearable: !0,
                                        filter: !1,
                                        maxVisibleItems: 5,
                                        clearQueryOnSelect: !1,
                                        onKeyDown: (e) => {
                                            0 === P.length &&
                                                ("ArrowDown" === e.key || "ArrowUp" === e.key) &&
                                                e.preventDefault();
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = k.find((t) => t.id === e.value);
                                            return null != t
                                                ? (0, r.jsx)("img", {
                                                      src: c.ZP.getApplicationIconURL({
                                                          id: t.id,
                                                          icon: t.icon,
                                                      }),
                                                      alt: t.name,
                                                      className: d.gameIcon,
                                                  })
                                                : null;
                                        },
                                        renderOptionLabel: (e) =>
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children: e.label,
                                            }),
                                    }),
                                ],
                            });
                        case "other_feedback":
                            return (0, r.jsxs)("div", {
                                className: d.content,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: u.intl.string(u.t.IblYEx),
                                    }),
                                    (0, r.jsx)(o.Kx8, {
                                        value: w,
                                        onChange: _,
                                        placeholder: u.intl.string(u.t.ld3FmJ),
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
