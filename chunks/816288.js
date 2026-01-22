n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(108531),
    o = n(158954),
    c = n(311907),
    u = n(397927),
    d = n(442433),
    f = n(793574),
    p = n(230135),
    h = n(552836),
    b = n(147925),
    g = n(363487),
    m = n(267771),
    A = n(828162),
    y = n(333354),
    O = n(985018),
    j = n(375395);

function v(e) {
    let { guild: t, withMargin: i } = e,
        v = (0, m.A)(t),
        x = (0, g.A)(t.id),
        E = l.useCallback(() => {
            (0, A.A)(t.id, f.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        _ = (0, c.bG)([h.A], () => {
            var e;
            return null != (e = h.A.getCountForGuild(t.id)) ? e : 0;
        });
    l.useEffect(() => {
        _ !== t.premiumSubscriberCount && (0, p.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, _, t.premiumSubscriberCount]);
    let C = Math.min((_ / v) * 100, 100),
        [S, I] = (0, u.zhh)(
            () => ({
                width: _ === t.premiumSubscriberCount ? "calc(".concat(C, "% - 4px)") : "0%",
                config: {
                    tension: 250,
                    damping: 5,
                    mass: 1,
                },
            }),
            "respect-motion-settings",
            [_, t.premiumSubscriberCount],
        );
    l.useEffect(() => {
        I({
            width: "calc(".concat(C, "% - 4px)"),
        });
    }, [C, I]);
    let N = _ >= v;
    return (0, r.jsx)(u.DUT, {
        "aria-label": void 0,
        role: "button",
        focusProps: {
            offset: {
                left: 10,
                right: 4,
            },
        },
        onClick: () => {
            E();
        },
        className: a()(j.kL, {
            [j.aF]: i,
        }),
        onContextMenu: (e) => {
            x &&
                (0, d.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => {
                        var l, i;
                        return (0, r.jsx)(
                            e,
                            ((l = (function (e) {
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
                            })({}, n)),
                            (i = i =
                                {
                                    guild: t,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            l),
                        );
                    };
                });
        },
        children: (0, r.jsxs)("div", {
            className: j.hQ,
            children: [
                (0, r.jsx)("div", {
                    className: j.L$,
                }),
                (0, r.jsx)(s.animated.div, {
                    className: a()(j.qB, {
                        [j.mu]: C <= 5,
                    }),
                    style: S,
                }),
                (0, r.jsxs)("div", {
                    className: j.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.Ui,
                            children: [
                                (0, r.jsx)(o.EYj, {
                                    className: j.Qq,
                                    variant: "text-xs/semibold",
                                    children: O.intl.string(y.default.NI6Ihe),
                                }),
                                t.premiumSubscriberCount >= v &&
                                    (0, r.jsx)(o.EYj, {
                                        className: j.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: j.Ui,
                            children: [
                                (0, r.jsx)(o.EYj, {
                                    className: a()(j.Qq, j.ue),
                                    variant: "text-xs/semibold",
                                    children: N
                                        ? O.intl.formatToPlainString(y.default["Ehpq+7"], {
                                              appliedBoostCount: _,
                                          })
                                        : O.intl.formatToPlainString(y.default["/rbPDs"], {
                                              appliedBoostCount: _,
                                              maxBoostCount: v,
                                          }),
                                }),
                                (0, r.jsx)(b.A, {
                                    width: 12,
                                    height: 12,
                                    direction: b.A.Directions.RIGHT,
                                    className: a()(j.Qq, j.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}

function x(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(v, {
        guild: t,
        withMargin: n,
    });
}
