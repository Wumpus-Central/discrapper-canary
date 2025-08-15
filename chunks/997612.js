n.d(t, {
    $: () => O,
    X: () => T,
});
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(972959),
    s = n(665149),
    l = n(606669),
    c = n(53432),
    u = n(74869),
    d = n(572004),
    f = n(561134),
    _ = n(988587),
    p = n(231338),
    h = n(388032),
    m = n(624315);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = (0, o.H)(() => ({ selected: null }));
function v() {
    let e = (0, c.Z)(),
        t = (0, l.Z)(),
        n = (0, u.Z)();
    return (0, r.jsxs)(a.v2r, {
        onSelect: p.dG,
        navId: "playground-settings-menu",
        onClose: p.dG,
        "aria-label": "Playground Settings",
        children: [
            (0, r.jsx)(a.sNh, {
                id: "appearance",
                label: h.intl.string(h.t["iHH+k5"]),
                children: e.filter((e) => null != e),
            }),
            (0, r.jsx)(a.sNh, {
                id: "accessibility",
                label: h.intl.string(h.t.G0neg4),
                children: t.filter((e) => null != e),
            }),
            (0, r.jsx)(a.sNh, {
                id: "experiments",
                label: "Experiments",
                children: n.filter((e) => null != e),
            }),
        ],
    });
}
function I() {
    let e = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: e,
        renderPopout: () => (0, r.jsx)(v, {}),
        position: "bottom",
        align: "center",
        animation: a.yRy.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, r.jsx)(
                a.hU,
                y(
                    E(
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
function T(e) {
    var t;
    let { config: n } = e,
        o = O.useField("selected"),
        { group: l, story: c } = i.useMemo(() => {
            var e;
            let t = n.groups.find((e) => e.stories.some((e) => e.id === o)),
                r = null != (e = null == t ? void 0 : t.stories.find((e) => e.id === o)) ? e : null;
            return {
                group: t,
                story: r,
            };
        }, [o, n.groups]),
        u = (e) => {
            O.setState({ selected: e });
        },
        p = null != (t = null == l ? void 0 : l.title) ? t : "Mana",
        h = null == c ? void 0 : c.name,
        g = () => {
            let e = "dev://mana/".concat(null == c ? void 0 : c.id);
            (0, d.JG)(e, () =>
                (0, a.showToast)({
                    id: "playground-link-copied",
                    message: "Copied playground link",
                    type: a.ToastType.SUCCESS,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        className: m.root,
        children: [
            (0, r.jsx)("div", {
                className: m.group,
                children: (0, r.jsx)(a.aRk, {
                    children: (0, r.jsx)(a.ua7, {
                        position: "right",
                        text: "Mana Design System",
                        children: (e) =>
                            (0, r.jsx)(
                                a.LYs,
                                y(E({}, e), {
                                    name: "Mana",
                                    selected: !0,
                                }),
                            ),
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: m.content,
                children: [
                    (0, r.jsxs)(s.ZP, {
                        className: m.header,
                        children: [
                            null != p ? (0, r.jsx)(s.ZP.Title, { children: p }) : null,
                            null != h
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          null != p ? (0, r.jsx)(s.ZP.Caret, { className: m.headerDivider }) : null,
                                          (0, r.jsx)(s.ZP.Title, { children: h }),
                                      ],
                                  })
                                : null,
                            (null == c ? void 0 : c.docs) != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(s.ZP.Divider, { className: m.headerDivider }),
                                          (0, r.jsx)(s.ZP.Title, {
                                              children: (0, r.jsx)(a.eee, {
                                                  href: c.docs,
                                                  children: "Docs",
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != c
                                ? (0, r.jsx)(a.hU, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: a.TIy,
                                      onClick: g,
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: m.headerRight,
                                children: (0, r.jsx)(I, {}),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: m.page,
                        children: [
                            (0, r.jsx)("div", {
                                className: m.sidebar,
                                children: (0, r.jsx)(f.N, {
                                    groups: n.groups,
                                    selectedStory: o,
                                    onStorySelect: u,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: m.content,
                                children:
                                    null != c && null != l
                                        ? (0, r.jsx)(_.b, {
                                              story: c,
                                              groupTitle: l.title,
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
