(A.d(t, { Z: () => d }), A(388685));
var n = A(255367),
    r = A(73800),
    a = A(755721),
    l = A(481060),
    i = A(585483),
    o = A(981631),
    s = A(388032),
    c = A(744053);
let d = function (e) {
    var t;
    let { message: A, errorMessage: d, submitting: u, onReset: f, onSave: g, onSaveText: p, onResetText: h, onSaveButtonColor: m, disabled: b, saveButtonTooltip: v } = e,
        C = r.useRef(null),
        [q, x] = r.useState(!1);
    return (
        r.useEffect(() => {
            function e() {
                (x(!0), setTimeout(() => x(!1), 1000));
            }
            return (
                i.S.subscribe(o.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    i.S.unsubscribe(o.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, n.jsx)('div', {
            className: c.container,
            'data-emphasized': q,
            children: (0, n.jsx)('div', {
                className: c.flexContainer,
                ref: C,
                children: (0, n.jsxs)(l.JcV, {
                    containerRef: C,
                    children: [
                        (0, n.jsx)('div', {
                            className: c.shrinkingContainer,
                            children: (0, n.jsx)('div', {
                                className: c.message,
                                children: null != (t = null != d ? d : A) ? t : s.intl.string(s.t.GP7JLC)
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: c.actions,
                            children: [
                                null != f &&
                                    (0, n.jsx)(a.zx, {
                                        className: c.resetButton,
                                        size: a.zx.Sizes.SMALL,
                                        color: a.zx.Colors.PRIMARY,
                                        look: a.zx.Looks.LINK,
                                        onClick: f,
                                        children: (0, n.jsx)('span', { children: null != h ? h : s.intl.string(s.t.yBZMsb) })
                                    }),
                                null != g
                                    ? (0, n.jsx)(l.ua7, {
                                          text: v,
                                          children: (e) => {
                                              var t, A;
                                              return (0, n.jsx)(
                                                  a.zx,
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
                                                          size: a.zx.Sizes.SMALL,
                                                          color: null != m ? m : a.zx.Colors.GREEN,
                                                          submitting: u,
                                                          disabled: b,
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
