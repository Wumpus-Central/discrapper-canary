(A.d(t, { Z: () => d }), A(388685));
var n = A(255367),
    r = A(73800),
    a = A(120356),
    l = A.n(a),
    i = A(481060),
    o = A(313201),
    s = A(388032),
    c = A(815669);
function d(e) {
    let { disabled: t = !1, disabledTooltip: A, published: a, submitting: d = !1, onClick: u } = e,
        f = (0, o.Dt)(),
        [g, p] = r.useState(a);
    return (
        r.useEffect(() => {
            p((e) => e || a);
        }, [a]),
        (0, n.jsxs)('div', {
            className: l()(
                {
                    [c.publishable]: !t && !a,
                    [c.wasEverPublished]: g
                },
                c.container
            ),
            children: [
                (0, n.jsxs)('div', {
                    className: c.explanationColumn,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a ? s.intl.string(s.t.VaaagY) : s.intl.string(s.t.oI8aQU)
                        }),
                        (0, n.jsx)(i.Text, {
                            id: f,
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: a ? s.intl.string(s.t['0r6pbG']) : s.intl.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, n.jsx)(i.ua7, {
                    text: t ? A : void 0,
                    children: (e) => {
                        var A, r;
                        return (0, n.jsxs)(
                            i.zxk,
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
                                    className: l()(c.button, {
                                        [c.wasEverPublished]: g,
                                        [c.publishButton]: !a,
                                        [c.disabledPublishButton]: t
                                    }),
                                    innerClassName: c.buttonContents,
                                    color: a ? i.zxk.Colors.RED : i.zxk.Colors.CUSTOM,
                                    'aria-describedby': f,
                                    'aria-disabled': t,
                                    grow: !1,
                                    onClick: t ? void 0 : u,
                                    submitting: d,
                                    children: [
                                        a ? s.intl.string(s.t.DlJOvr) : s.intl.string(s.t.X7YGXF),
                                        a
                                            ? (0, n.jsx)(i.kZF, {
                                                  size: 'md',
                                                  className: c.buttonIcon,
                                                  color: 'currentColor'
                                              })
                                            : (0, n.jsx)(i.T$Z, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: c.buttonIcon
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
