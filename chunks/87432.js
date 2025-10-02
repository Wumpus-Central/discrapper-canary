n.d(t, {
    Z: () =>
        function e(t, n, u) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!n.has(t.key)) return null;
            if (!(0, i.Lk)(t)) return u.register(t, s.panel, s.category, s.accordion), t;
            let a = s;
            t.type === i.Jq.PANEL && (a = l(r({}, s), { panel: t })),
                t.type === i.Jq.CATEGORY && (a = l(r({}, s), { category: t })),
                t.type === i.Jq.ACCORDION && (a = l(r({}, s), { accordion: t }));
            let o = t.layout.map((t) => e(t, n, u, a)).filter((e) => null != e);
            return 0 !== o.length || "render" in t
                ? (u.register(t, a.panel, a.category, a.accordion), l(r({}, t), { layout: o }))
                : null;
        },
});
var i = n(28682);
function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
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
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
