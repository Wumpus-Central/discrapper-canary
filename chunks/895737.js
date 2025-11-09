r.d(t, { Z: () => C });
var n = r(951288),
    i = r(647438),
    o = r(159691),
    l = r(481060),
    s = r(891561),
    c = r(333866),
    a = r(388032),
    d = r(148906);
function u(e) {
    let { closePopout: t, sortOptionContext: r } = e,
        { sortOption: o, setSortOption: s, onReset: u } = r,
        C = i.useMemo(
            () =>
                c.kL.map((e) =>
                    (0, n.jsx)(
                        l.k5B,
                        {
                            id: "".concat(e),
                            group: "sort-by",
                            label: (0, c.eJ)(e),
                            action: () => s(e),
                            checked: o === e,
                        },
                        e,
                    ),
                ),
            [s, o],
        );
    return (0, n.jsx)("div", {
        children: (0, n.jsxs)(l.v2r, {
            navId: "sort-and-view",
            "aria-label": a.intl.string(a.t["4jfWTK"]),
            hideScroller: !0,
            onClose: t,
            onSelect: t,
            children: [
                (0, n.jsx)(l.kSQ, {
                    label: a.intl.string(a.t.mBvLev),
                    children: C,
                }),
                (0, n.jsx)(l.kSQ, {
                    children: (0, n.jsx)(l.sNh, {
                        id: "reset-all",
                        className: d.clearText,
                        label: (0, n.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "none",
                            children: a.intl.string(a.t["3b//lO"]),
                        }),
                        action: u,
                    }),
                }),
            ],
        }),
    });
}
function C() {
    let e = (0, s.s)(),
        t = (0, c.eJ)(e.sortOption),
        r = i.useRef(null);
    return (0, n.jsx)(l.yRy, {
        targetElementRef: r,
        renderPopout: (t) => {
            let { closePopout: r } = t;
            return (0, n.jsx)(u, {
                closePopout: r,
                sortOptionContext: e,
            });
        },
        position: "bottom",
        align: "left",
        children: (e) => {
            var i, s;
            return (0, n.jsx)(
                o.zxk,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (s = s =
                    {
                        text: t,
                        icon: l.uVW,
                        variant: "secondary",
                        buttonRef: r,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                i),
            );
        },
    });
}
