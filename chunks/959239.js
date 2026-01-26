n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(969632),
    a = n(985018);

function o(e) {
    return null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, l.Gh)(e))
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "reactions",
              label: a.intl.string(a.t.wikODq),
              leadingAccessory: {
                  type: "icon",
                  icon: i.ShF,
              },
              icon: i.nm2,
              action: () =>
                  (0, i.mMO)(async () => {
                      let { default: t } = await Promise.resolve().then(n.bind(n, 112753));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              t,
                              ((i = (function (e) {
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
                              (l = l =
                                  {
                                      message: e,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i),
                          );
                      };
                  }),
          });
}
