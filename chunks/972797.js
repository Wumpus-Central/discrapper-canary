r.d(t, { Z: () => d }), r(47120);
var n = r(200651),
    A = r(192379),
    a = r(120356),
    o = r.n(a),
    l = r(481060),
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
            className: o()(
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
                        (0, n.jsx)(l.X6q, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a ? s.NW.string(s.t.VaaagY) : s.NW.string(s.t.oI8aQU)
                        }),
                        (0, n.jsx)(l.Text, {
                            id: g,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: a ? s.NW.string(s.t['0r6pbG']) : s.NW.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, n.jsx)(l.ua7, {
                    text: t ? r : void 0,
                    children: (e) => {
                        var r, A;
                        return (0, n.jsxs)(
                            l.zxk,
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
                                    className: o()(c.button, {
                                        [c.wasEverPublished]: f,
                                        [c.publishButton]: !a,
                                        [c.disabledPublishButton]: t
                                    }),
                                    innerClassName: c.buttonContents,
                                    color: a ? l.zxk.Colors.RED : l.zxk.Colors.CUSTOM,
                                    'aria-describedby': g,
                                    'aria-disabled': t,
                                    grow: !1,
                                    onClick: t ? void 0 : u,
                                    submitting: d,
                                    children: [
                                        a ? s.NW.string(s.t.DlJOvr) : s.NW.string(s.t.X7YGXF),
                                        a
                                            ? (0, n.jsx)(l.kZF, {
                                                  size: 'md',
                                                  className: c.buttonIcon,
                                                  color: 'currentColor'
                                              })
                                            : (0, n.jsx)(l.T$Z, {
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
