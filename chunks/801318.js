n.d(t, { Z: () => u }), n(388685);
var r = n(658722),
    i = n.n(r),
    l = n(904849),
    o = n(28682);
function s(e) {
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
}
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t, n) {
    var r;
    let u = (function (e, t, n) {
            let r = new Set(),
                l = function (e) {
                    var s;
                    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        c = (null == (s = e.usePredicate) ? void 0 : s.call(e)) === !1 || a,
                        d =
                            (function (e, t, n, r) {
                                var l, s;
                                if (null != e.legacySearchKey) return t.length < 2 || r.has(e.legacySearchKey);
                                if (e.type === o.J.SECTION && e.hoisted) return !0;
                                let a = "useTitle" in e ? (null == (l = e.useTitle) ? void 0 : l.call(e, !1)) : void 0,
                                    u =
                                        "useSearchTerms" in e
                                            ? null == (s = e.useSearchTerms)
                                                ? void 0
                                                : s.call(e)
                                            : void 0;
                                if (n || (null == a && null == u)) return !1;
                                if ("" === t) return !0;
                                let c = t.toLowerCase();
                                for (let e of null != u ? u : []) if (i()(c, e.toLowerCase())) return !0;
                                return "string" == typeof a && i()(c, a.toLowerCase());
                            })(e, t, c, n) || u,
                        g = !1;
                    if ((0, o.L)(e)) for (let t of e.layout) g = l(t, c, d) || g;
                    return !c && (d || g) && r.add(e.key), d || g;
                };
            return l(e), r;
        })(e, null != t ? t : "", n),
        c = new l.Z();
    return {
        node:
            null !=
            (r = (function e(t, n, r) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!n.has(t.key)) return null;
                if (!(0, o.L)(t)) return r.register(t, i.panel, i.category, i.accordion), t;
                let l = i;
                t.type === o.J.PANEL && (l = a(s({}, i), { panel: t })),
                    t.type === o.J.CATEGORY && (l = a(s({}, i), { category: t })),
                    t.type === o.J.ACCORDION && (l = a(s({}, i), { accordion: t }));
                let u = t.layout.map((t) => e(t, n, r, l)).filter((e) => null != e);
                return 0 !== u.length || "render" in t
                    ? (r.register(t, l.panel, l.category, l.accordion), a(s({}, t), { layout: u }))
                    : null;
            })(e, u, c))
                ? r
                : a(s({}, e), { layout: [] }),
        directory: c,
    };
}
