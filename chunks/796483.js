r.d(t, { Z: () => s });
var i = r(951288);
r(647438);
var n = r(541699),
    l = r(835255);
function s(e) {
    var { item: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                i,
                n = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        i,
                        n = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (r = l[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (r = l[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            }
            return n;
        })(e, ["item"]);
    return (0, n.Q)(t)
        ? (0, i.jsx)(
              l.ZP,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                          i = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (i = i.concat(
                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                              }),
                          )),
                          i.forEach(function (t) {
                              var i;
                              (i = r[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = i);
                          });
                  }
                  return e;
              })({ item: t }, r),
          )
        : null;
}
