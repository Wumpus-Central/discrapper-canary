n.d(e, {
    Z: () =>
        function t(e, n, r) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!n.has(e.key)) return null;
            if (!(0, i.Lk)(e)) return r.register(e, s.panel, s.category, s.accordion), e;
            let a = s;
            e.type === i.Jq.SIDEBAR_ITEM && (a = u(l({}, s), { panel: e.layout[0] })),
                e.type === i.Jq.PANEL && (a = u(l({}, s), { panel: e })),
                e.type === i.Jq.CATEGORY && (a = u(l({}, s), { category: e })),
                e.type === i.Jq.ACCORDION && (a = u(l({}, s), { accordion: e }));
            let o = e.layout.map((e) => t(e, n, r, a)).filter((t) => null != t);
            return 0 !== o.length || "render" in e || (e.type === i.Jq.SIDEBAR_ITEM && "onClick" in e)
                ? (r.register(e, a.panel, a.category, a.accordion), u(l({}, e), { layout: o }))
                : null;
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
