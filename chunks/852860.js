t.d(n, { Z: () => d }), t(47120);
var r = t(200651),
    o = t(192379),
    i = t(481060),
    s = t(585483),
    a = t(981631),
    l = t(388032),
    c = t(20714);
let d = function (e) {
    var n;
    let { message: t, errorMessage: d, submitting: u, onReset: m, onSave: h, onSaveText: p, onResetText: x, onSaveButtonColor: _, disabled: f, saveButtonTooltip: b } = e,
        C = o.useRef(null),
        [j, N] = o.useState(!1);
    return (
        o.useEffect(() => {
            function e() {
                N(!0), setTimeout(() => N(!1), 1000);
            }
            return (
                s.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    s.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, r.jsx)('div', {
            className: c.container,
            'data-emphasized': j,
            children: (0, r.jsx)('div', {
                className: c.flexContainer,
                ref: C,
                children: (0, r.jsxs)(i.JcV, {
                    containerRef: C,
                    children: [
                        (0, r.jsx)('div', {
                            className: c.shrinkingContainer,
                            children: (0, r.jsx)('div', {
                                className: c.message,
                                children: null !== (n = null != d ? d : t) && void 0 !== n ? n : l.NW.string(l.t.GP7JLC)
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: c.actions,
                            children: [
                                null != m &&
                                    (0, r.jsx)(i.zxk, {
                                        className: c.resetButton,
                                        size: i.zxk.Sizes.SMALL,
                                        color: i.zxk.Colors.PRIMARY,
                                        look: i.zxk.Looks.LINK,
                                        onClick: m,
                                        children: (0, r.jsx)('span', { children: null != x ? x : l.NW.string(l.t.yBZMsb) })
                                    }),
                                null != h
                                    ? (0, r.jsx)(i.ua7, {
                                          text: b,
                                          children: (e) => {
                                              var n, t;
                                              return (0, r.jsx)(
                                                  i.zxk,
                                                  ((n = (function (e) {
                                                      for (var n = 1; n < arguments.length; n++) {
                                                          var t = null != arguments[n] ? arguments[n] : {},
                                                              r = Object.keys(t);
                                                          'function' == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                  })
                                                              )),
                                                              r.forEach(function (n) {
                                                                  var r;
                                                                  (r = t[n]),
                                                                      n in e
                                                                          ? Object.defineProperty(e, n, {
                                                                                value: r,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0
                                                                            })
                                                                          : (e[n] = r);
                                                              });
                                                      }
                                                      return e;
                                                  })(
                                                      {
                                                          size: i.zxk.Sizes.SMALL,
                                                          color: null != _ ? _ : i.zxk.Colors.GREEN,
                                                          submitting: u,
                                                          disabled: f,
                                                          onClick: h
                                                      },
                                                      e
                                                  )),
                                                  (t = t = { children: null != p ? p : l.NW.string(l.t.K344S0) }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                                                      : (function (e, n) {
                                                            var t = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                t.push.apply(t, r);
                                                            }
                                                            return t;
                                                        })(Object(t)).forEach(function (e) {
                                                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                                                        }),
                                                  n)
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
