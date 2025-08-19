n.d(t, { Z: () => a }), n(388685);
var i = n(658722),
    l = n.n(i),
    o = n(28682);
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
function s(e, t) {
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
function a(e, t, n) {
    var i;
    let a = (function (e, t, n) {
        let i = new Set(),
            r = function (e) {
                var s;
                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    c = (null == (s = e.usePredicate) ? void 0 : s.call(e)) === !1 || a,
                    d =
                        (function (e, t, n, i) {
                            var o, r;
                            if (null != e.legacySearchKey) return i.has(e.legacySearchKey);
                            let s = "useTitle" in e ? (null == (o = e.useTitle) ? void 0 : o.call(e, !1)) : void 0,
                                a =
                                    "useSearchTerms" in e
                                        ? null == (r = e.useSearchTerms)
                                            ? void 0
                                            : r.call(e)
                                        : void 0;
                            if (n || (null == s && null == a)) return !1;
                            if ("" === t) return !0;
                            let u = t.toLowerCase();
                            for (let e of null != a ? a : []) if (l()(u, e.toLowerCase())) return !0;
                            return "string" == typeof s && l()(u, s.toLowerCase());
                        })(e, t, c, n) || u,
                    f = !1;
                if ((0, o.L)(e)) for (let t of e.layout) f = r(t, c, d) || f;
                return !c && (d || f) && i.add(e.key), d || f;
            };
        return r(e), i;
    })(e, null != t ? t : "", n);
    return null !=
        (i = (function e(t, n) {
            if (!n.has(t.key)) return null;
            if (!(0, o.L)(t)) return t;
            let i = t.layout.map((t) => e(t, n)).filter((e) => null != e);
            return 0 !== i.length || "render" in t ? s(r({}, t), { layout: i }) : null;
        })(e, a))
        ? i
        : s(r({}, e), { layout: [] });
}
