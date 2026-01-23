n.d(t, {
    Gs: () => h,
    N3: () => p,
    eE: () => m,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(934551),
    i = n(397927),
    s = n(993401),
    o = n(985018),
    c = n(423648);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e) {
    return (0, a.jsx)("div", {
        className: c.wE,
        children: (0, a.jsx)(
            i.W1t,
            d(
                {
                    "data-menu-migration-ready": !0,
                    variant: "fixed",
                    hideScroller: !0,
                    onSelect: void 0,
                },
                e,
            ),
        ),
    });
}

function p(e) {
    let { action: t, onClick: n, icon: m, label: p, sublabel: h, trailing: x, renderSubmenu: g, ref: f } = e,
        b = null != n,
        v = (0, s.rE)({
            action: t,
            onClick: n,
        }),
        [j, _] = l.useState(!1),
        y = l.useRef(null),
        A = null != f ? f : y,
        C = null != g,
        S = C && b,
        O = {
            offset: {
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
            },
        },
        E = l.useCallback(() => {
            _(!0);
        }, []),
        T = l.useCallback(() => {
            _(!1);
        }, []),
        N = () =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("div", {
                        className: c.iA,
                        children: (0, a.jsx)(m, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: c.$H,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(i.Text, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: c.W1,
                                        children: p,
                                    }),
                                    (0, a.jsx)(i.Text, {
                                        color: "currentColor",
                                        variant: "text-xs/medium",
                                        children: h,
                                    }),
                                ],
                            }),
                            x,
                        ],
                    }),
                ],
            }),
        w = (e) => {
            let t;
            return (
                (t = S
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(i.DUT, {
                                  className: c.ef,
                                  onClick: v,
                                  focusProps: {
                                      offset: u(d({}, O.offset), {
                                          right: 0,
                                      }),
                                  },
                                  children: N(),
                              }),
                              (0, a.jsx)(
                                  i.DUT,
                                  u(
                                      d(
                                          {
                                              className: c.ap,
                                              "aria-label": o.intl.string(o.t.PdRCRg),
                                          },
                                          e,
                                      ),
                                      {
                                          onClick: E,
                                          focusProps: O,
                                          children: (0, a.jsx)(r.ChevronSmallRightIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                          }),
                                      },
                                  ),
                              ),
                          ],
                      })
                    : C
                      ? (0, a.jsxs)(
                            i.DUT,
                            u(
                                d(
                                    {
                                        className: c.ef,
                                    },
                                    e,
                                ),
                                {
                                    onClick: E,
                                    focusProps: O,
                                    children: [
                                        N(),
                                        (0, a.jsx)("div", {
                                            className: c.ap,
                                            children: (0, a.jsx)(r.ChevronSmallRightIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                        }),
                                    ],
                                },
                            ),
                        )
                      : (0, a.jsx)(i.DUT, {
                            className: c.ef,
                            onClick: v,
                            focusProps: O,
                            children: N(),
                        })),
                (0, a.jsx)("div", {
                    ref: A,
                    className: c.jG,
                    children: t,
                })
            );
        };
    return C
        ? (0, a.jsx)("li", {
              className: c.j$,
              onMouseEnter: E,
              onMouseLeave: T,
              children: (0, a.jsx)(i.YNO, {
                  targetElementRef: A,
                  spacing: 0,
                  renderPopout: g,
                  shouldShow: j,
                  onRequestClose: T,
                  children: w,
              }),
          })
        : (0, a.jsx)("li", {
              className: c.j$,
              children: w(),
          });
}

function h(e) {
    let { children: t, "aria-label": n } = e;
    return (0, a.jsx)("ul", {
        "aria-label": n,
        children: t,
    });
}
