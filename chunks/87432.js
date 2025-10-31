n.d(e, {
    Z: () =>
        function t(e, n, u) {
            var s, a, o, c, d, E;
            let O = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!n.has(e.key)) return null;
            if (!(0, i.Lk)(e))
                return (
                    u.register(
                        e,
                        null == (c = O.panel) ? void 0 : c.key,
                        null == (d = O.category) ? void 0 : d.key,
                        null == (E = O.accordion) ? void 0 : E.key,
                    ),
                    e
                );
            let T = O;
            e.type === i.Jq.SIDEBAR_ITEM && (T = r(l({}, O), { panel: e.layout[0] })),
                e.type === i.Jq.PANEL && (T = r(l({}, O), { panel: e })),
                e.type === i.Jq.CATEGORY && (T = r(l({}, O), { category: e })),
                e.type === i.Jq.ACCORDION && (T = r(l({}, O), { accordion: e }));
            let S = e.layout.map((e) => t(e, n, u, T)).filter((t) => null != t);
            if (0 === S.length && !("render" in e || (e.type === i.Jq.SIDEBAR_ITEM && "onClick" in e))) return null;
            let g = r(l({}, e), { layout: S });
            return (
                u.register(
                    g,
                    null == (s = T.panel) ? void 0 : s.key,
                    null == (a = T.category) ? void 0 : a.key,
                    null == (o = T.accordion) ? void 0 : o.key,
                ),
                g
            );
        },
});
var i = n(28682);
function l(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                var i;
                (i = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
function r(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
