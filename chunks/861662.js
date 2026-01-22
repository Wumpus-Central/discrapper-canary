n.d(t, { B: () => c });
var l,
    r,
    a = n(627968);
n(64700);
var i = n(280230),
    s = n.n(i),
    o = n(397927);
let c =
    ((l = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
                (l = l.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }),
                )),
                l.forEach(function (t) {
                    var l;
                    (l = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: l,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (e[t] = l);
                });
        }
        return e;
    })({}, s().defaultRules.link)),
    (r = r =
        {
            react: function (e, t, n) {
                return (0, a.jsx)(o.MzZ, {
                    href: e.target,
                    target: "_blank",
                    children: t(e.content, n),
                });
            },
        }),
    Object.getOwnPropertyDescriptors
        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
        : (function (e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l);
              }
              return n;
          })(Object(r)).forEach(function (e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
          }),
    l);
