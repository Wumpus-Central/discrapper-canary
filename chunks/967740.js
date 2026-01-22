n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(201275),
    l = n(657048),
    a = n(63104);
function s(e) {
    let { guildId: t, role: n, size: s, className: o } = e,
        c = (0, i.$7)({
            guildId: t,
            roleId: n.id,
            size: s,
        });
    return null != c
        ? (0, r.jsx)(
              l.A,
              (function (e) {
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
              })({ className: o }, c),
          )
        : (0, r.jsx)(a.A, {
              color: n.colorString,
              className: o,
              size: s,
          });
}
