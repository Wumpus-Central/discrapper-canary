n.d(t, {
    $: () => D,
    X: () => j,
});
var r = n(951288),
    i = n(647438),
    a = n(657707),
    o = n(756715),
    s = n(104140),
    l = n(830447),
    c = n(828214),
    u = n(327496),
    d = n(235874),
    f = n(21340),
    _ = n(417153),
    p = n(981729),
    h = n(159691),
    m = n(972959),
    g = n(665149),
    E = n(606669),
    b = n(53432),
    y = n(74869),
    O = n(572004),
    v = n(561134),
    I = n(988587),
    T = n(561466),
    S = n(231338),
    A = n(388032),
    C = n(624315);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = (0, m.H)(() => ({
    selectedCollection: null,
    selectedStory: null,
}));
function x() {
    let e = (0, b.Z)(),
        t = (0, E.Z)(),
        n = (0, y.Z)();
    return (0, r.jsxs)(l.v, {
        onSelect: S.dG,
        navId: "playground-settings-menu",
        onClose: S.dG,
        "aria-label": "Playground Settings",
        children: [
            (0, r.jsx)(c.sN, {
                id: "appearance",
                label: A.intl.string(A.t["iHH+k5"]),
                children: e.filter((e) => null != e),
            }),
            (0, r.jsx)(c.sN, {
                id: "accessibility",
                label: A.intl.string(A.t.G0neg4),
                children: t.filter((e) => null != e),
            }),
            (0, r.jsx)(c.sN, {
                id: "experiments",
                label: "Experiments",
                children: n.filter((e) => null != e),
            }),
        ],
    });
}
function L() {
    let e = i.useRef(null);
    return (0, r.jsx)(d.y, {
        targetElementRef: e,
        renderPopout: () => (0, r.jsx)(x, {}),
        position: "bottom",
        align: "center",
        animation: d.y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, r.jsx)(
                h.hU,
                w(
                    R(
                        {
                            size: "sm",
                            icon: a.ewm,
                            "aria-label": "Settings",
                            variant: "icon-only",
                        },
                        t,
                    ),
                    { buttonRef: e },
                ),
            ),
    });
}
function j(e) {
    var t;
    let { config: n } = e,
        l = D.useField("selectedCollection"),
        c = D.useField("selectedStory"),
        {
            collection: d,
            group: m,
            story: E,
        } = i.useMemo(() => {
            var e;
            let t = null != l ? n.collections.find((e) => e.id === l) : n.collections[0];
            if (null == t)
                return {
                    collection: null,
                    group: null,
                    story: null,
                };
            let r = t.groups.find((e) => e.stories.some((e) => e.id === c)),
                i = null != (e = null == r ? void 0 : r.stories.find((e) => e.id === c)) ? e : null;
            return {
                collection: t,
                group: r,
                story: i,
            };
        }, [l, c, n.collections]),
        b = (e) => {
            D.setState({
                selectedCollection: e,
                selectedStory: null,
            });
        },
        y = (e) => {
            D.setState({ selectedStory: e });
        },
        S = null != (t = null == d ? void 0 : d.name) ? t : "Design System",
        A = null == E ? void 0 : E.name,
        N = () => {
            let e = "dev://mana/".concat(null == E ? void 0 : E.id);
            (0, O.JG)(e, () =>
                (0, _.CF)({
                    id: "playground-link-copied",
                    message: "Copied playground link",
                    type: T.pC.SUCCESS,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        className: C.root,
        children: [
            (0, r.jsx)("div", {
                className: C.group,
                children: n.collections.map((e) =>
                    (0, r.jsx)(
                        s.a,
                        {
                            children: (0, r.jsx)(p.u, {
                                position: "right",
                                text: "".concat(e.name, " Design System"),
                                children: (t) => {
                                    var i;
                                    return (0, r.jsx)(
                                        u.L,
                                        w(R({}, t), {
                                            name: e.name,
                                            selected:
                                                (null != l ? l : null == (i = n.collections[0]) ? void 0 : i.id) ===
                                                e.id,
                                            onClick: () => b(e.id),
                                        }),
                                    );
                                },
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsxs)("div", {
                className: C.content,
                children: [
                    (0, r.jsxs)(g.ZP, {
                        className: C.header,
                        children: [
                            null != S ? (0, r.jsx)(g.ZP.Title, { children: S }) : null,
                            null != A
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          null != S ? (0, r.jsx)(g.ZP.Caret, { className: C.headerDivider }) : null,
                                          (0, r.jsx)(g.ZP.Title, { children: A }),
                                      ],
                                  })
                                : null,
                            (null == E ? void 0 : E.docs) != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(g.ZP.Divider, { className: C.headerDivider }),
                                          (0, r.jsx)(g.ZP.Title, {
                                              children: (0, r.jsx)(o.Anchor, {
                                                  href: E.docs,
                                                  children: "Docs",
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != E
                                ? (0, r.jsx)(h.hU, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: a.TIy,
                                      onClick: N,
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: C.headerRight,
                                children: (0, r.jsx)(L, {}),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.page,
                        children: [
                            (0, r.jsx)(f.zJ, {
                                fade: !0,
                                className: C.sidebar,
                                children:
                                    null != d
                                        ? (0, r.jsx)(v.N, {
                                              groups: d.groups,
                                              selectedStory: c,
                                              onStorySelect: y,
                                          })
                                        : null,
                            }),
                            (0, r.jsx)("div", {
                                className: C.content,
                                children:
                                    null != E && null != m
                                        ? (0, r.jsx)(I.b, {
                                              story: E,
                                              groupTitle: m.title,
                                          })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
