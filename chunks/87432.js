n.d(e, {
    Z: () =>
        function t(e, n, s) {
            var u, a, o, c, d, E;
            let S = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!n.has(e.key)) return null;
            if (!(0, i.Lk)(e))
                return (
                    s.register(
                        e,
                        null == (c = S.panel) ? void 0 : c.key,
                        null == (d = S.category) ? void 0 : d.key,
                        null == (E = S.accordion) ? void 0 : E.key,
                    ),
                    e
                );
            let T = S;
            e.type === i.Jq.SIDEBAR_ITEM && (T = l(r({}, S), { panel: e.layout[0] })),
                e.type === i.Jq.PANEL && (T = l(r({}, S), { panel: e })),
                e.type === i.Jq.CATEGORY && (T = l(r({}, S), { category: e })),
                e.type === i.Jq.ACCORDION && (T = l(r({}, S), { accordion: e }));
            let I = e.layout.map((e) => t(e, n, s, T)).filter((t) => null != t);
            if (0 === I.length && !("render" in e || (e.type === i.Jq.SIDEBAR_ITEM && "onClick" in e))) return null;
            let g = l(r({}, e), { layout: I });
            return (
                s.register(
                    g,
                    null == (u = T.panel) ? void 0 : u.key,
                    null == (a = T.category) ? void 0 : a.key,
                    null == (o = T.accordion) ? void 0 : o.key,
                ),
                g
            );
        },
});
var i = n(28682);
function r(t) {
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
function l(t, e) {
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
