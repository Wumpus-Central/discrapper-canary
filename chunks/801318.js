n.d(t, { Z: () => u }), n(388685);
var r = n(658722),
    l = n.n(r),
    i = n(904849),
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
                i = function (e) {
                    var s;
                    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        c = (null == (s = e.usePredicate) ? void 0 : s.call(e)) === !1 || a,
                        d =
                            (function (e, t, n, r) {
                                var i, o;
                                if (null != e.legacySearchKey) return t.length < 2 || r.has(e.legacySearchKey);
                                let s = "useTitle" in e ? (null == (i = e.useTitle) ? void 0 : i.call(e, !1)) : void 0,
                                    a =
                                        "useSearchTerms" in e
                                            ? null == (o = e.useSearchTerms)
                                                ? void 0
                                                : o.call(e)
                                            : void 0;
                                if (n || (null == s && null == a)) return !1;
                                if ("" === t) return !0;
                                let u = t.toLowerCase();
                                for (let e of null != a ? a : []) if (l()(u, e.toLowerCase())) return !0;
                                return "string" == typeof s && l()(u, s.toLowerCase());
                            })(e, t, c, n) || u,
                        g = !1;
                    if ((0, o.L)(e)) for (let t of e.layout) g = i(t, c, d) || g;
                    return !c && (d || g) && r.add(e.key), d || g;
                };
            return i(e), r;
        })(e, null != t ? t : "", n),
        c = new i.Z();
    return {
        node:
            null !=
            (r = (function e(t, n, r) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!n.has(t.key)) return null;
                if (!(0, o.L)(t)) return r.register(t, l.panel, l.category, l.accordion), t;
                let i = l;
                t.type === o.J.PANEL && (i = a(s({}, l), { panel: t })),
                    t.type === o.J.CATEGORY && (i = a(s({}, l), { category: t })),
                    t.type === o.J.ACCORDION && (i = a(s({}, l), { accordion: t }));
                let u = t.layout.map((t) => e(t, n, r, i)).filter((e) => null != e);
                return 0 !== u.length || "render" in t
                    ? (r.register(t, i.panel, i.category, i.accordion), a(s({}, t), { layout: u }))
                    : null;
            })(e, u, c))
                ? r
                : a(s({}, e), { layout: [] }),
        directory: c,
    };
}
