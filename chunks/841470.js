n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(692547),
    s = n(481060),
    a = n(355011),
    l = n(388032),
    o = n(193);
let c = (e) => {
    let { title: t, subtext: n = l.NW.string(l.t.jHpxws), localizedNumber: c, isTrendingUp: d, isTrendingDown: u, tooltipText: m } = e,
        g =
            null != m
                ? (0, r.jsx)(s.ua7, {
                      text: m,
                      position: 'top',
                      'aria-label': 'string' == typeof m ? m : t,
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              s.d3s,
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
                                      size: 'xs',
                                      color: 'currentColor'
                                  },
                                  e
                              )),
                              (n = n = { className: o.infoIcon }),
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
                : null;
    return (0, r.jsxs)('div', {
        className: o.analyticsCard,
        children: [
            (0, r.jsxs)(s.vwX, {
                className: o.analyticsCardTitle,
                children: [t, g]
            }),
            (0, r.jsx)('div', {
                className: o.analyticsCardContent,
                children: (0, r.jsx)(s.X6q, {
                    className: null != c ? o.analyticsCardNumber : o.analyticsCardNumberNotAvailable,
                    variant: 'heading-xl/semibold',
                    children: null != c ? c : l.NW.string(l.t.jHpxws)
                })
            }),
            (0, r.jsxs)('div', {
                className: o.analyticsCardArrowSubText,
                children: [
                    d
                        ? (0, r.jsx)(a.Z, {
                              className: o.trendingArrow,
                              color: i.Z.unsafe_rawColors.GREEN_360.css,
                              'aria-label': l.NW.string(l.t['8mcccX']),
                              width: 14,
                              height: 12
                          })
                        : null,
                    u
                        ? (0, r.jsx)(a.Z, {
                              className: o.trendingArrowIconDown,
                              color: i.Z.unsafe_rawColors.RED_400.css,
                              'aria-label': l.NW.string(l.t.NLl6Q0),
                              width: 14,
                              height: 12
                          })
                        : null,
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        children: n
                    })
                ]
            })
        ]
    });
};
