r.d(t, { Z: () => h }), r(388685);
var n = r(200651),
    i = r(192379),
    s = r(481060),
    o = r(585483),
    l = r(981631),
    a = r(388032),
    c = r(744053);
let h = function (e) {
    var t;
    let { message: r, errorMessage: h, submitting: v, onReset: u, onSave: f, onSaveText: p, onResetText: d, onSaveButtonColor: b, disabled: g, saveButtonTooltip: Z } = e,
        j = i.useRef(null),
        [M, O] = i.useState(!1);
    return (
        i.useEffect(() => {
            function e() {
                O(!0), setTimeout(() => O(!1), 1000);
            }
            return (
                o.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    o.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, n.jsx)('div', {
            className: c.container,
            'data-emphasized': M,
            children: (0, n.jsx)('div', {
                className: c.flexContainer,
                ref: j,
                children: (0, n.jsxs)(s.JcV, {
                    containerRef: j,
                    children: [
                        (0, n.jsx)('div', {
                            className: c.shrinkingContainer,
                            children: (0, n.jsx)('div', {
                                className: c.message,
                                children: null != (t = null != h ? h : r) ? t : a.NW.string(a.t.GP7JLC)
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: c.actions,
                            children: [
                                null != u &&
                                    (0, n.jsx)(s.zxk, {
                                        className: c.resetButton,
                                        size: s.zxk.Sizes.SMALL,
                                        color: s.zxk.Colors.PRIMARY,
                                        look: s.zxk.Looks.LINK,
                                        onClick: u,
                                        children: (0, n.jsx)('span', { children: null != d ? d : a.NW.string(a.t.yBZMsb) })
                                    }),
                                null != f
                                    ? (0, n.jsx)(s.ua7, {
                                          text: Z,
                                          children: (e) => {
                                              var t, r;
                                              return (0, n.jsx)(
                                                  s.zxk,
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
                                                          size: s.zxk.Sizes.SMALL,
                                                          color: null != b ? b : s.zxk.Colors.GREEN,
                                                          submitting: v,
                                                          disabled: g,
                                                          onClick: f
                                                      },
                                                      e
                                                  )),
                                                  (r = r = { children: null != p ? p : a.NW.string(a.t.K344S0) }),
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
