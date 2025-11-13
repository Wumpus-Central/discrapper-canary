n.d(e, {
    Z: () =>
        function t(e, n, r) {
            var s, a, o, c, E, S;
            let d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!n.has(e.key)) return null;
            if (!(0, i.Lk)(e))
                return (
                    r.register(
                        e,
                        null == (c = d.panel) ? void 0 : c.key,
                        null == (E = d.category) ? void 0 : E.key,
                        null == (S = d.accordion) ? void 0 : S.key,
                    ),
                    e
                );
            let T = d;
            e.type === i.Jq.SIDEBAR_ITEM && (T = u(l({}, d), { panel: e.layout[0] })),
                e.type === i.Jq.PANEL && (T = u(l({}, d), { panel: e })),
                e.type === i.Jq.CATEGORY && (T = u(l({}, d), { category: e })),
                e.type === i.Jq.ACCORDION && (T = u(l({}, d), { accordion: e }));
            let I = e.layout.map((e) => t(e, n, r, T)).filter((t) => null != t);
            if (0 === I.length && !("render" in e || (e.type === i.Jq.SIDEBAR_ITEM && "onClick" in e))) return null;
            let O = u(l({}, e), { layout: I });
            return (
                r.register(
                    O,
                    null == (s = T.panel) ? void 0 : s.key,
                    null == (a = T.category) ? void 0 : a.key,
                    null == (o = T.accordion) ? void 0 : o.key,
                ),
                O
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
