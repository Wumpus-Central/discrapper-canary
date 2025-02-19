r.d(t, { Z: () => d }), r(47120);
var A = r(200651),
    n = r(192379),
    o = r(120356),
    a = r.n(o),
    l = r(481060),
    i = r(313201),
    s = r(388032),
    c = r(696305);
function d(e) {
    let { disabled: t = !1, disabledTooltip: r, published: o, submitting: d = !1, onClick: u } = e,
        f = (0, i.Dt)(),
        [g, p] = n.useState(o);
    return (
        n.useEffect(() => {
            p((e) => e || o);
        }, [o]),
        (0, A.jsxs)('div', {
            className: a()(
                {
                    [c.publishable]: !t && !o,
                    [c.wasEverPublished]: g
                },
                c.container
            ),
            children: [
                (0, A.jsxs)('div', {
                    className: c.explanationColumn,
                    children: [
                        (0, A.jsx)(l.X6q, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: o ? s.NW.string(s.t.VaaagY) : s.NW.string(s.t.oI8aQU)
                        }),
                        (0, A.jsx)(l.Text, {
                            id: f,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: o ? s.NW.string(s.t['0r6pbG']) : s.NW.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, A.jsx)(l.ua7, {
                    text: t ? r : void 0,
                    children: (e) => {
                        var r, n;
                        return (0, A.jsxs)(
                            l.zxk,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        A = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (A = A.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        A.forEach(function (t) {
                                            var A;
                                            (A = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: A,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = A);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (n = n =
                                {
                                    className: a()(c.button, {
                                        [c.wasEverPublished]: g,
                                        [c.publishButton]: !o,
                                        [c.disabledPublishButton]: t
                                    }),
                                    innerClassName: c.buttonContents,
                                    color: o ? l.zxk.Colors.RED : l.zxk.Colors.CUSTOM,
                                    'aria-describedby': f,
                                    'aria-disabled': t,
                                    grow: !1,
                                    onClick: t ? void 0 : u,
                                    submitting: d,
                                    children: [
                                        o ? s.NW.string(s.t.DlJOvr) : s.NW.string(s.t.X7YGXF),
                                        o
                                            ? (0, A.jsx)(l.kZF, {
                                                  size: 'md',
                                                  className: c.buttonIcon,
                                                  color: 'currentColor'
                                              })
                                            : (0, A.jsx)(l.T$Z, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: c.buttonIcon
                                              })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var A = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, A);
                                      }
                                      return r;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            r)
                        );
                    }
                })
            ]
        })
    );
}
