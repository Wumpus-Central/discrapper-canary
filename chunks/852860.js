(A.d(t, { Z: () => c }), A(388685));
var n = A(255367),
    r = A(73800),
    l = A(755721),
    a = A(481060),
    o = A(585483),
    i = A(981631),
    s = A(388032),
    d = A(744053);
let c = function (e) {
    var t;
    let { message: A, errorMessage: c, submitting: u, onReset: f, onSave: g, onSaveText: p, onResetText: m, onSaveButtonColor: h, disabled: C, saveButtonTooltip: q } = e,
        b = r.useRef(null),
        [v, x] = r.useState(!1);
    return (
        r.useEffect(() => {
            function e() {
                (x(!0), setTimeout(() => x(!1), 1000));
            }
            return (
                o.S.subscribe(i.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    o.S.unsubscribe(i.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, n.jsx)('div', {
            className: d.container,
            'data-emphasized': v,
            children: (0, n.jsx)('div', {
                className: d.flexContainer,
                ref: b,
                children: (0, n.jsxs)(a.JcV, {
                    containerRef: b,
                    children: [
                        (0, n.jsx)('div', {
                            className: d.shrinkingContainer,
                            children: (0, n.jsx)('div', {
                                className: d.message,
                                children: null != (t = null != c ? c : A) ? t : s.intl.string(s.t.GP7JLC)
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: d.actions,
                            children: [
                                null != f &&
                                    (0, n.jsx)(l.zx, {
                                        className: d.resetButton,
                                        size: l.zx.Sizes.SMALL,
                                        color: l.zx.Colors.PRIMARY,
                                        look: l.zx.Looks.LINK,
                                        onClick: f,
                                        children: (0, n.jsx)('span', { children: null != m ? m : s.intl.string(s.t.yBZMsb) })
                                    }),
                                null != g
                                    ? (0, n.jsx)(a.ua7, {
                                          text: q,
                                          children: (e) => {
                                              var t, A;
                                              return (0, n.jsx)(
                                                  l.zx,
                                                  ((t = (function (e) {
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
                                                  })(
                                                      {
                                                          size: l.zx.Sizes.SMALL,
                                                          color: null != h ? h : l.zx.Colors.GREEN,
                                                          submitting: u,
                                                          disabled: C,
                                                          onClick: g
                                                      },
                                                      e
                                                  )),
                                                  (A = A = { children: null != p ? p : s.intl.string(s.t.K344S0) }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(A))
                                                      : (function (e, t) {
                                                            var A = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var n = Object.getOwnPropertySymbols(e);
                                                                A.push.apply(A, n);
                                                            }
                                                            return A;
                                                        })(Object(A)).forEach(function (e) {
                                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(A, e));
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
