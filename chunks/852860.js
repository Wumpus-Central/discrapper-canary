n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    A = n(73800),
    a = n(481060),
    l = n(585483),
    o = n(981631),
    i = n(388032),
    s = n(744053);
let c = function (e) {
    var t;
    let { message: n, errorMessage: c, submitting: d, onReset: u, onSave: g, onSaveText: f, onResetText: p, onSaveButtonColor: m, disabled: h, saveButtonTooltip: b } = e,
        v = A.useRef(null),
        [C, q] = A.useState(!1);
    return (
        A.useEffect(() => {
            function e() {
                q(!0), setTimeout(() => q(!1), 1000);
            }
            return (
                l.S.subscribe(o.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    l.S.unsubscribe(o.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, r.jsx)('div', {
            className: s.container,
            'data-emphasized': C,
            children: (0, r.jsx)('div', {
                className: s.flexContainer,
                ref: v,
                children: (0, r.jsxs)(a.JcV, {
                    containerRef: v,
                    children: [
                        (0, r.jsx)('div', {
                            className: s.shrinkingContainer,
                            children: (0, r.jsx)('div', {
                                className: s.message,
                                children: null != (t = null != c ? c : n) ? t : i.intl.string(i.t.GP7JLC)
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: s.actions,
                            children: [
                                null != u &&
                                    (0, r.jsx)(a.zxk, {
                                        className: s.resetButton,
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.PRIMARY,
                                        look: a.zxk.Looks.LINK,
                                        onClick: u,
                                        children: (0, r.jsx)('span', { children: null != p ? p : i.intl.string(i.t.yBZMsb) })
                                    }),
                                null != g
                                    ? (0, r.jsx)(a.ua7, {
                                          text: b,
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  a.zxk,
                                                  ((t = (function (e) {
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
                                                  })(
                                                      {
                                                          size: a.zxk.Sizes.SMALL,
                                                          color: null != m ? m : a.zxk.Colors.GREEN,
                                                          submitting: d,
                                                          disabled: h,
                                                          onClick: g
                                                      },
                                                      e
                                                  )),
                                                  (n = n = { children: null != f ? f : i.intl.string(i.t.K344S0) }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(n)).forEach(function (e) {
                                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                        }),
                                                  t)
                                              );
                                          }
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            })
        })
    );
};
