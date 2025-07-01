(A.d(t, { Z: () => c }), A(388685));
var n = A(255367),
    r = A(73800),
    a = A(481060),
    l = A(585483),
    i = A(981631),
    o = A(388032),
    s = A(744053);
let c = function (e) {
    var t;
    let { message: A, errorMessage: c, submitting: d, onReset: u, onSave: f, onSaveText: g, onResetText: p, onSaveButtonColor: h, disabled: m, saveButtonTooltip: b } = e,
        v = r.useRef(null),
        [C, q] = r.useState(!1);
    return (
        r.useEffect(() => {
            function e() {
                (q(!0), setTimeout(() => q(!1), 1000));
            }
            return (
                l.S.subscribe(i.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    l.S.unsubscribe(i.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, n.jsx)('div', {
            className: s.container,
            'data-emphasized': C,
            children: (0, n.jsx)('div', {
                className: s.flexContainer,
                ref: v,
                children: (0, n.jsxs)(a.JcV, {
                    containerRef: v,
                    children: [
                        (0, n.jsx)('div', {
                            className: s.shrinkingContainer,
                            children: (0, n.jsx)('div', {
                                className: s.message,
                                children: null != (t = null != c ? c : A) ? t : o.intl.string(o.t.GP7JLC)
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: s.actions,
                            children: [
                                null != u &&
                                    (0, n.jsx)(a.zxk, {
                                        className: s.resetButton,
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.PRIMARY,
                                        look: a.zxk.Looks.LINK,
                                        onClick: u,
                                        children: (0, n.jsx)('span', { children: null != p ? p : o.intl.string(o.t.yBZMsb) })
                                    }),
                                null != f
                                    ? (0, n.jsx)(a.ua7, {
                                          text: b,
                                          children: (e) => {
                                              var t, A;
                                              return (0, n.jsx)(
                                                  a.zxk,
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
                                                          size: a.zxk.Sizes.SMALL,
                                                          color: null != h ? h : a.zxk.Colors.GREEN,
                                                          submitting: d,
                                                          disabled: m,
                                                          onClick: f
                                                      },
                                                      e
                                                  )),
                                                  (A = A = { children: null != g ? g : o.intl.string(o.t.K344S0) }),
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
