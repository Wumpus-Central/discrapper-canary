n.d(t, {
    A: () => m,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(451988),
    o = n(397927),
    c = n(487329),
    u = n(540999),
    d = n(975571),
    f = n(447404),
    p = n(652215),
    b = n(985018),
    g = n(156255);

function m(e) {
    let { errorMessage: t, className: n, avError: i } = e,
        m = r.useRef(null),
        h = "",
        { text: A, node: y } = (function (e) {
            var t;
            if (null == e)
                return {
                    text: null,
                    node: null,
                };
            let n = null == (t = (0, c.B1)(e)) ? void 0 : t.errorCode,
                r = b.intl.formatToPlainString(b.t.ejOT95, {
                    errorCode: n,
                }),
                i = b.intl.format(b.t.If5Q0h, {
                    errorCode: n,
                    helpDeskURL: d.A.getArticleURL(p.MVz.AV_ERROR_CODES),
                }),
                a = u.A.isDeveloper;
            return {
                text: a ? "".concat(r, " (").concat(e, ")") : r,
                node: a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [i, " (", e, ")"],
                      })
                    : i,
            };
        })(i);
    h = null != A ? "".concat(t, " ").concat(A) : t;
    let [_] = r.useState(new s.Ep()),
        [E, v] = r.useState(!1),
        [O, x] = r.useState(!1),
        S = r.useCallback(() => {
            _.start(
                250,
                () => {
                    v(!1);
                },
                !1,
            );
        }, [_, v]),
        N = r.useCallback(() => {
            _.stop(), v(!0);
        }, [_, v]),
        C = r.useCallback(() => {
            x(!0);
        }, []),
        j = r.useCallback(() => {
            x(!1);
        }, []);
    return (0, l.jsx)(o.YNO, {
        renderPopout: () =>
            (0, l.jsx)(f.A, {
                children: (0, l.jsxs)("div", {
                    className: g.SW,
                    onMouseEnter: N,
                    onMouseLeave: S,
                    children: [
                        t,
                        null != y &&
                            (0, l.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                className: g.F1,
                                children: y,
                            }),
                    ],
                }),
            }),
        targetElementRef: m,
        shouldShow: O || E,
        position: "bottom",
        children: (e) => {
            var t, r;
            return (0, l.jsx)(f.A, {
                children: (0, l.jsx)(o.vN3, {
                    children: (0, l.jsx)(
                        "div",
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
                        })(
                            {
                                ref: m,
                                tabIndex: 0,
                                onMouseEnter: N,
                                onMouseLeave: S,
                                onFocus: C,
                                onBlur: j,
                                className: a()(n, g.zr),
                                "aria-label": h,
                            },
                            e,
                        )),
                        (r = r =
                            {
                                children: (0, l.jsx)(o.EpV, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                    className: g.QW,
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        t),
                    ),
                }),
            });
        },
    });
}
