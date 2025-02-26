t.d(n, { Z: () => u });
var r = t(200651),
    i = t(120356),
    o = t.n(i),
    a = t(481060),
    s = t(413335),
    c = t(783684),
    l = t(388032),
    d = t(963158);
function u(e) {
    let { className: n, active: t, onPrimaryClick: i, onSecondaryClick: u } = e;
    return (0, r.jsxs)('div', {
        className: o()(d.container, n),
        children: [
            t &&
                (0, r.jsx)(a.ua7, {
                    text: l.NW.string(c.Z.TZsu1d),
                    children: (e) => {
                        var n, t;
                        return (0, r.jsx)(
                            a.zxk,
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
                            })({}, e)),
                            (t = t =
                                {
                                    className: d.secondaryButton,
                                    color: a.Ttl.PRIMARY,
                                    'aria-label': l.NW.string(c.Z.TZsu1d),
                                    grow: !1,
                                    onClick: u,
                                    children: (0, r.jsx)(s.Z, {})
                                }),
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
                }),
            (0, r.jsx)(a.zxk, {
                className: d.primaryButton,
                grow: !0,
                onClick: i,
                children: t ? l.NW.string(c.Z['g5Ds6+']) : l.NW.string(c.Z.gSxlHR)
            })
        ]
    });
}
