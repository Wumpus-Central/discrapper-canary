n.d(e, {
    Z: () =>
        function t(e, n, r) {
            var s, o, a, c, E, d;
            let T = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!n.has(e.key)) return null;
            if (!(0, i.Lk)(e))
                return (
                    r.register(
                        e,
                        null == (c = T.panel) ? void 0 : c.key,
                        null == (E = T.category) ? void 0 : E.key,
                        null == (d = T.accordion) ? void 0 : d.key,
                    ),
                    e
                );
            let I = T;
            e.type === i.Jq.SIDEBAR_ITEM && (I = u(l({}, T), { panel: e.layout[0] })),
                e.type === i.Jq.PANEL && (I = u(l({}, T), { panel: e })),
                e.type === i.Jq.CATEGORY && (I = u(l({}, T), { category: e })),
                e.type === i.Jq.ACCORDION && (I = u(l({}, T), { accordion: e }));
            let O = e.layout.map((e) => t(e, n, r, I)).filter((t) => null != t);
            if (0 === O.length && !("render" in e || (e.type === i.Jq.SIDEBAR_ITEM && "onClick" in e))) return null;
            let y = u(l({}, e), { layout: O });
            return (
                r.register(
                    y,
                    null == (s = I.panel) ? void 0 : s.key,
                    null == (o = I.category) ? void 0 : o.key,
                    null == (a = I.accordion) ? void 0 : a.key,
                ),
                y
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
function u(t, e) {
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
