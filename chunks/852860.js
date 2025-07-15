(n.d(t, { Z: () => d }), n(388685));
var r = n(255367),
    s = n(73800),
    i = n(755721),
    l = n(481060),
    o = n(585483),
    a = n(981631),
    c = n(388032),
    u = n(744053);
let d = function (e) {
    var t;
    let { message: n, errorMessage: d, submitting: f, onReset: p, onSave: g, onSaveText: b, onResetText: v, onSaveButtonColor: m, disabled: h, saveButtonTooltip: O } = e,
        y = s.useRef(null),
        [j, S] = s.useState(!1);
    return (
        s.useEffect(() => {
            function e() {
                (S(!0), setTimeout(() => S(!1), 1000));
            }
            return (
                o.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    o.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, r.jsx)('div', {
            className: u.container,
            'data-emphasized': j,
            children: (0, r.jsx)('div', {
                className: u.flexContainer,
                ref: y,
                children: (0, r.jsxs)(l.JcV, {
                    containerRef: y,
                    children: [
                        (0, r.jsx)('div', {
                            className: u.shrinkingContainer,
                            children: (0, r.jsx)('div', {
                                className: u.message,
                                children: null != (t = null != d ? d : n) ? t : c.intl.string(c.t.GP7JLC)
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: u.actions,
                            children: [
                                null != p &&
                                    (0, r.jsx)(i.zx, {
                                        className: u.resetButton,
                                        size: i.zx.Sizes.SMALL,
                                        color: i.zx.Colors.PRIMARY,
                                        look: i.zx.Looks.LINK,
                                        onClick: p,
                                        children: (0, r.jsx)('span', { children: null != v ? v : c.intl.string(c.t.yBZMsb) })
                                    }),
                                null != g
                                    ? (0, r.jsx)(l.ua7, {
                                          text: O,
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  i.zx,
                                                  ((t = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              r = Object.keys(n);
                                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                  })
                                                              )),
                                                              r.forEach(function (t) {
                                                                  var r;
                                                                  ((r = n[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: r,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0
                                                                            })
                                                                          : (e[t] = r));
                                                              }));
                                                      }
                                                      return e;
                                                  })(
                                                      {
                                                          size: i.zx.Sizes.SMALL,
                                                          color: null != m ? m : i.zx.Colors.GREEN,
                                                          submitting: f,
                                                          disabled: h,
                                                          onClick: g
                                                      },
                                                      e
                                                  )),
                                                  (n = n = { children: null != b ? b : c.intl.string(c.t.K344S0) }),
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
