n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(518756),
    o = n(576749),
    c = n(388032);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = (0, l.Z)(e),
        u = (0, o.Z)();
    return a
        ? (0, r.jsx)(i.sNh, {
              id: "create-event",
              label: c.intl.string(c.t["60lJ0N"]),
              icon: t ? i.VZI : void 0,
              action: () => {
                  (0, i.ZDy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("36599"),
                          n.e("60962"),
                          n.e("82758"),
                          n.e("61"),
                          n.e("7082"),
                      ]).then(n.bind(n, 779250));
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
                              (l = l = { guildId: e }),
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
                  }, u);
              },
          })
        : null;
}
