r.d(t, { Z: () => d }), r(388685);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
    A = r(313201),
    s = r(388032),
    c = r(815669);
function d(e) {
    let { disabled: t = !1, disabledTooltip: r, published: a, submitting: d = !1, onClick: u } = e,
        f = (0, A.Dt)(),
        [g, h] = i.useState(a);
    return (
        i.useEffect(() => {
            h((e) => e || a);
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
                        (0, n.jsx)(o.X6q, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a ? s.intl.string(s.t.VaaagY) : s.intl.string(s.t.oI8aQU)
                        }),
                        (0, n.jsx)(o.Text, {
                            id: f,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: a ? s.intl.string(s.t['0r6pbG']) : s.intl.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, n.jsx)(o.ua7, {
                    text: t ? r : void 0,
                    children: (e) => {
                        var r, i;
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
                            (i = i =
                                {
                                    className: l()(c.button, {
                                        [c.wasEverPublished]: g,
                                        [c.publishButton]: !a,
                                        [c.disabledPublishButton]: t
                                    }),
                                    innerClassName: c.buttonContents,
                                    color: a ? o.zxk.Colors.RED : o.zxk.Colors.CUSTOM,
                                    'aria-describedby': f,
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
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            r)
                        );
                    }
                })
            ]
        })
    );
}
