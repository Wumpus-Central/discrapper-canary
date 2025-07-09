(A.d(t, { Z: () => u }), A(388685));
var n = A(255367),
    r = A(73800),
    a = A(120356),
    l = A.n(a),
    i = A(755721),
    o = A(481060),
    s = A(313201),
    c = A(388032),
    d = A(815669);
function u(e) {
    let { disabled: t = !1, disabledTooltip: A, published: a, submitting: u = !1, onClick: f } = e,
        g = (0, s.Dt)(),
        [p, h] = r.useState(a);
    return (
        r.useEffect(() => {
            h((e) => e || a);
        }, [a]),
        (0, n.jsxs)('div', {
            className: l()(
                {
                    [d.publishable]: !t && !a,
                    [d.wasEverPublished]: p
                },
                d.container
            ),
            children: [
                (0, n.jsxs)('div', {
                    className: d.explanationColumn,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a ? c.intl.string(c.t.VaaagY) : c.intl.string(c.t.oI8aQU)
                        }),
                        (0, n.jsx)(o.Text, {
                            id: g,
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: a ? c.intl.string(c.t['0r6pbG']) : c.intl.string(c.t['8MMHYG'])
                        })
                    ]
                }),
                (0, n.jsx)(o.ua7, {
                    text: t ? A : void 0,
                    children: (e) => {
                        var A, r;
                        return (0, n.jsxs)(
                            i.zx,
                            ((A = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var A = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(A);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(A).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            ((n = A[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n));
                                        }));
                                }
                                return e;
                            })({}, e)),
                            (r = r =
                                {
                                    className: l()(d.button, {
                                        [d.wasEverPublished]: p,
                                        [d.publishButton]: !a,
                                        [d.disabledPublishButton]: t
                                    }),
                                    innerClassName: d.buttonContents,
                                    color: a ? i.zx.Colors.RED : i.zx.Colors.CUSTOM,
                                    'aria-describedby': g,
                                    'aria-disabled': t,
                                    grow: !1,
                                    onClick: t ? void 0 : f,
                                    submitting: u,
                                    children: [
                                        a ? c.intl.string(c.t.DlJOvr) : c.intl.string(c.t.X7YGXF),
                                        a
                                            ? (0, n.jsx)(o.kZF, {
                                                  size: 'md',
                                                  className: d.buttonIcon,
                                                  color: 'currentColor'
                                              })
                                            : (0, n.jsx)(o.T$Z, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: d.buttonIcon
                                              })
                                    ]
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
                            A)
                        );
                    }
                })
            ]
        })
    );
}
