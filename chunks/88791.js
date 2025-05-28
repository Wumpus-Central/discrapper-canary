n.d(t, { Z: () => o });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(79390),
    a = n(388032);
function o(e) {
    return null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, l.eQ)(e))
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'reactions',
              label: a.intl.string(a.t.wikODg),
              icon: r.EO4,
              action: () =>
                  (0, r.ZDy)(async () => {
                      let { default: t } = await Promise.resolve().then(n.bind(n, 785388));
                      return (n) => {
                          var r, l;
                          return (0, i.jsx)(
                              t,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (l = l = { message: e }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              r)
                          );
                      };
                  })
          });
}
