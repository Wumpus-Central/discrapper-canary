A.d(t, { Z: () => u }), A(388685);
var n = A(255367),
    r = A(73800),
    l = A(120356),
    a = A.n(l),
    o = A(755721),
    i = A(481060),
    s = A(313201),
    d = A(388032),
    c = A(750404);
function u(e) {
    let { disabled: t = !1, disabledTooltip: A, published: l, submitting: u = !1, onClick: f } = e,
        g = (0, s.Dt)(),
        [p, m] = r.useState(l);
    return (
        r.useEffect(() => {
            m((e) => e || l);
        }, [l]),
        (0, n.jsxs)("div", {
            className: a()(
                {
                    [c.publishable]: !t && !l,
                    [c.wasEverPublished]: p,
                },
                c.container,
            ),
            children: [
                (0, n.jsxs)("div", {
                    className: c.explanationColumn,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: l ? d.intl.string(d.t.VaaagY) : d.intl.string(d.t.oI8aQU),
                        }),
                        (0, n.jsx)(i.Text, {
                            id: g,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"]),
                        }),
                    ],
                }),
                (0, n.jsx)(i.ua7, {
                    text: t ? A : void 0,
                    children: (e) => {
                        var A, r;
                        return (0, n.jsxs)(
                            o.zx,
                            ((A = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var A = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(A);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(A).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = A[t]),
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
                            (r = r =
                                {
                                    className: a()(c.button, {
                                        [c.wasEverPublished]: p,
                                        [c.publishButton]: !l,
                                        [c.disabledPublishButton]: t,
                                    }),
                                    innerClassName: c.buttonContents,
                                    color: l ? o.zx.Colors.RED : o.zx.Colors.CUSTOM,
                                    "aria-describedby": g,
                                    "aria-disabled": t,
                                    grow: !1,
                                    onClick: t ? void 0 : f,
                                    submitting: u,
                                    children: [
                                        l ? d.intl.string(d.t.DlJOvr) : d.intl.string(d.t.X7YGXF),
                                        l
                                            ? (0, n.jsx)(i.kZF, {
                                                  size: "md",
                                                  className: c.buttonIcon,
                                                  color: "currentColor",
                                              })
                                            : (0, n.jsx)(i.T$Z, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: c.buttonIcon,
                                              }),
                                    ],
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var A = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          A.push.apply(A, n);
                                      }
                                      return A;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            A),
                        );
                    },
                }),
            ],
        })
    );
}
