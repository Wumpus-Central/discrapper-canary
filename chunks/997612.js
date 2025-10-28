t.d(l, {
    $: () => k,
    X: () => M,
});
var a = t(951288),
    n = t(647438),
    o = t(657707),
    i = t(793030),
    r = t(756715),
    s = t(104140),
    u = t(830447),
    d = t(828214),
    c = t(327496),
    b = t(235874),
    p = t(417153),
    y = t(28664),
    m = t(159691),
    f = t(972959),
    v = t(665149),
    h = t(606669),
    x = t(53432),
    g = t(74869),
    O = t(572004),
    j = t(561134),
    V = t(988587),
    w = t(561466),
    S = t(231338),
    C = t(388032),
    P = t(624315);
let k = (0, f.H)(() => ({
    selectedCollection: null,
    selectedStory: null,
}));
function T() {
    let e = (0, x.Z)(),
        l = (0, h.Z)(),
        t = (0, g.Z)();
    return (0, a.jsxs)(u.v, {
        onSelect: S.dG,
        navId: "playground-settings-menu",
        onClose: S.dG,
        "aria-label": "Playground Settings",
        children: [
            (0, a.jsx)(d.sN, {
                id: "appearance",
                label: C.intl.string(C.t["iHH+ky"]),
                children: e.filter((e) => null != e),
            }),
            (0, a.jsx)(d.sN, {
                id: "accessibility",
                label: C.intl.string(C.t.G0neg7),
                children: l.filter((e) => null != e),
            }),
            (0, a.jsx)(d.sN, {
                id: "experiments",
                label: "Experiments",
                children: t.filter((e) => null != e),
            }),
        ],
    });
}
function D() {
    let e = n.useRef(null);
    return (0, a.jsx)(b.y, {
        targetElementRef: e,
        renderPopout: () => (0, a.jsx)(T, {}),
        position: "bottom",
        align: "center",
        animation: b.y.Animation.SCALE,
        onRequestClose: () => {},
        children: (l) => {
            var t, n;
            return (0, a.jsx)(
                m.hU,
                ((t = (function (e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = null != arguments[l] ? arguments[l] : {},
                            a = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            a.forEach(function (l) {
                                var a;
                                (a = t[l]),
                                    l in e
                                        ? Object.defineProperty(e, l, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[l] = a);
                            });
                    }
                    return e;
                })(
                    {
                        size: "sm",
                        icon: o.ewm,
                        "aria-label": "Settings",
                        variant: "icon-only",
                    },
                    l,
                )),
                (n = n = { buttonRef: e }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, l) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, a);
                          }
                          return t;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
}
function M(e) {
    var l;
    let { config: t } = e,
        u = k.useField("selectedCollection"),
        d = k.useField("selectedStory"),
        {
            collection: b,
            group: f,
            story: h,
        } = n.useMemo(() => {
            var e;
            let l = null != u ? t.collections.find((e) => e.id === u) : t.collections[0];
            if (null == l)
                return {
                    collection: null,
                    group: null,
                    story: null,
                };
            let a = l.groups.find((e) => e.stories.some((e) => e.id === d)),
                n = null != (e = null == a ? void 0 : a.stories.find((e) => e.id === d)) ? e : null;
            return {
                collection: l,
                group: a,
                story: n,
            };
        }, [u, d, t.collections]),
        x = null != (l = null == b ? void 0 : b.name) ? l : "Design System",
        g = null == h ? void 0 : h.name;
    return (0, a.jsxs)("div", {
        className: P.root,
        children: [
            (0, a.jsx)("div", {
                className: P.group,
                children: t.collections.map((e) => {
                    var l;
                    return (0, a.jsx)(
                        s.a,
                        {
                            children: (0, a.jsx)(y.u, {
                                position: "right",
                                text: "".concat(e.name, " Design System"),
                                children: (0, a.jsx)(c.L, {
                                    name: e.name,
                                    selected: (null != u ? u : null == (l = t.collections[0]) ? void 0 : l.id) === e.id,
                                    onClick: () => {
                                        var l;
                                        return (
                                            (l = e.id),
                                            void k.setState({
                                                selectedCollection: l,
                                                selectedStory: null,
                                            })
                                        );
                                    },
                                }),
                            }),
                        },
                        e.id,
                    );
                }),
            }),
            (0, a.jsxs)("div", {
                className: P.content,
                children: [
                    (0, a.jsxs)(v.ZP, {
                        className: P.header,
                        children: [
                            null != x ? (0, a.jsx)(v.ZP.Title, { children: x }) : null,
                            null != g
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          null != x ? (0, a.jsx)(v.ZP.Caret, { className: P.headerDivider }) : null,
                                          (0, a.jsx)(v.ZP.Title, { children: g }),
                                      ],
                                  })
                                : null,
                            (null == h ? void 0 : h.docs) != null
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)(v.ZP.Divider, { className: P.headerDivider }),
                                          (0, a.jsx)(v.ZP.Title, {
                                              children: (0, a.jsx)(r.Anchor, {
                                                  href: h.docs,
                                                  children: "Docs",
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != h
                                ? (0, a.jsx)(m.hU, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: o.TIy,
                                      onClick: () => {
                                          var e;
                                          let l = "dev://"
                                              .concat(null != (e = t.playgroundBaseUrl) ? e : "mana", "/")
                                              .concat(null == h ? void 0 : h.id);
                                          (0, O.JG)(l, () =>
                                              (0, p.CF)({
                                                  id: "playground-link-copied",
                                                  message: "Copied playground link",
                                                  type: w.pC.SUCCESS,
                                              }),
                                          );
                                      },
                                  })
                                : null,
                            (0, a.jsx)("div", {
                                className: P.headerRight,
                                children: (0, a.jsx)(D, {}),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: P.page,
                        children: [
                            (0, a.jsx)(i.zJl, {
                                fade: !0,
                                className: P.sidebar,
                                children:
                                    null != b
                                        ? (0, a.jsx)(j.N, {
                                              groups: b.groups,
                                              selectedStory: d,
                                              onStorySelect: (e) => {
                                                  k.setState({ selectedStory: e });
                                              },
                                          })
                                        : null,
                            }),
                            (0, a.jsx)("div", {
                                className: P.content,
                                children:
                                    null != h && null != f
                                        ? (0, a.jsx)(V.b, {
                                              story: h,
                                              groupTitle: f.title,
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
