n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    A = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    i = n(313201),
    s = n(388032),
    c = n(815669);
function d(e) {
    let { disabled: t = !1, disabledTooltip: n, published: a, submitting: d = !1, onClick: u } = e,
        g = (0, i.Dt)(),
        [f, p] = A.useState(a);
    return (
        A.useEffect(() => {
            p((e) => e || a);
        }, [a]),
        (0, r.jsxs)('div', {
            className: l()(
                {
                    [c.publishable]: !t && !a,
                    [c.wasEverPublished]: f
                },
                c.container
            ),
            children: [
                (0, r.jsxs)('div', {
                    className: c.explanationColumn,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a ? s.intl.string(s.t.VaaagY) : s.intl.string(s.t.oI8aQU)
                        }),
                        (0, r.jsx)(o.Text, {
                            id: g,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: a ? s.intl.string(s.t['0r6pbG']) : s.intl.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, r.jsx)(o.ua7, {
                    text: t ? n : void 0,
                    children: (e) => {
                        var n, A;
                        return (0, r.jsxs)(
                            o.zxk,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (A = A =
                                {
                                    className: l()(c.button, {
                                        [c.wasEverPublished]: f,
                                        [c.publishButton]: !a,
                                        [c.disabledPublishButton]: t
                                    }),
                                    innerClassName: c.buttonContents,
                                    color: a ? o.zxk.Colors.RED : o.zxk.Colors.CUSTOM,
                                    'aria-describedby': g,
                                    'aria-disabled': t,
                                    grow: !1,
                                    onClick: t ? void 0 : u,
                                    submitting: d,
                                    children: [
                                        a ? s.intl.string(s.t.DlJOvr) : s.intl.string(s.t.X7YGXF),
                                        a
                                            ? (0, r.jsx)(o.kZF, {
                                                  size: 'md',
                                                  className: c.buttonIcon,
                                                  color: 'currentColor'
                                              })
                                            : (0, r.jsx)(o.T$Z, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: c.buttonIcon
                                              })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(A))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(A)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(A, e));
                                  }),
                            n)
                        );
                    }
                })
            ]
        })
    );
}
