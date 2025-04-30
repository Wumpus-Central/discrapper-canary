r.d(t, { Z: () => d }), r(388685);
var n = r(200651),
    A = r(192379),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
    i = r(313201),
    s = r(388032),
    c = r(815669);
function d(e) {
    let { disabled: t = !1, disabledTooltip: r, published: a, submitting: d = !1, onClick: u } = e,
        g = (0, i.Dt)(),
        [f, p] = A.useState(a);
    return (
        A.useEffect(() => {
            p((e) => e || a);
        }, [a]),
        (0, n.jsxs)('div', {
            className: l()(
                {
                    [c.publishable]: !t && !a,
                    [c.wasEverPublished]: f
                },
                c.container
            ),
            children: [
                (0, n.jsxs)('div', {
                    className: c.explanationColumn,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a ? s.intl.string(s.t.VaaagY) : s.intl.string(s.t.oI8aQU)
                        }),
                        (0, n.jsx)(o.Text, {
                            id: g,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: a ? s.intl.string(s.t['0r6pbG']) : s.intl.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, n.jsx)(o.ua7, {
                    text: t ? r : void 0,
                    children: (e) => {
                        var r, A;
                        return (0, n.jsxs)(
                            o.zxk,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
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
                                            ? (0, n.jsx)(o.kZF, {
                                                  size: 'md',
                                                  className: c.buttonIcon,
                                                  color: 'currentColor'
                                              })
                                            : (0, n.jsx)(o.T$Z, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: c.buttonIcon
                                              })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(A))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(A)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(A, e));
                                  }),
                            r)
                        );
                    }
                })
            ]
        })
    );
}
