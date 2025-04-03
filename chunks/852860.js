r.d(t, { Z: () => c }), r(47120);
var n = r(200651),
    A = r(192379),
    a = r(481060),
    o = r(585483),
    l = r(981631),
    i = r(388032),
    s = r(744053);
let c = function (e) {
    var t;
    let { message: r, errorMessage: c, submitting: d, onReset: u, onSave: g, onSaveText: f, onResetText: p, onSaveButtonColor: h, disabled: m, saveButtonTooltip: b } = e,
        v = A.useRef(null),
        [C, q] = A.useState(!1);
    return (
        A.useEffect(() => {
            function e() {
                q(!0), setTimeout(() => q(!1), 1000);
            }
            return (
                o.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    o.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e);
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
                                children: null != (t = null != c ? c : r) ? t : i.NW.string(i.t.GP7JLC)
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
                                        children: (0, n.jsx)('span', { children: null != p ? p : i.NW.string(i.t.yBZMsb) })
                                    }),
                                null != g
                                    ? (0, n.jsx)(a.ua7, {
                                          text: b,
                                          children: (e) => {
                                              var t, r;
                                              return (0, n.jsx)(
                                                  a.zxk,
                                                  ((t = (function (e) {
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
                                                  })(
                                                      {
                                                          size: a.zxk.Sizes.SMALL,
                                                          color: null != h ? h : a.zxk.Colors.GREEN,
                                                          submitting: d,
                                                          disabled: m,
                                                          onClick: g
                                                      },
                                                      e
                                                  )),
                                                  (r = r = { children: null != f ? f : i.NW.string(i.t.K344S0) }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                                      : (function (e, t) {
                                                            var r = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var n = Object.getOwnPropertySymbols(e);
                                                                r.push.apply(r, n);
                                                            }
                                                            return r;
                                                        })(Object(r)).forEach(function (e) {
                                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
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
