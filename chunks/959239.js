n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(969632),
    o = n(985018);
function a(e) {
    return null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, i.Gh)(e))
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "reactions",
              label: o.intl.string(o.t.wikODq),
              icon: l.nm2,
              action: () =>
                  (0, l.mMO)(async () => {
                      let { default: t } = await Promise.resolve().then(n.bind(n, 112753));
                      return (n) => {
                          var l, i;
                          return (0, r.jsx)(
                              t,
                              ((l = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (i = i = { message: e }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              l),
                          );
                      };
                  }),
          });
}
