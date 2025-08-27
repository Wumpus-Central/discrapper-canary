n.d(t, { Z: () => o }), n(388685);
var i = n(658722),
    l = n.n(i),
    r = n(28682);
function s(e) {
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
function a(e, t) {
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
function o(e, t, n) {
    var i;
    let o = (function (e, t, n) {
        let i = new Set(),
            s = function (e) {
                var a;
                let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    c = (null == (a = e.usePredicate) ? void 0 : a.call(e)) === !1 || o,
                    d =
                        (function (e, t, n, i) {
                            var r, s;
                            if (null != e.legacySearchKey) return t.length < 2 || i.has(e.legacySearchKey);
                            let a = "useTitle" in e ? (null == (r = e.useTitle) ? void 0 : r.call(e, !1)) : void 0,
                                o =
                                    "useSearchTerms" in e
                                        ? null == (s = e.useSearchTerms)
                                            ? void 0
                                            : s.call(e)
                                        : void 0;
                            if (n || (null == a && null == o)) return !1;
                            if ("" === t) return !0;
                            let u = t.toLowerCase();
                            for (let e of null != o ? o : []) if (l()(u, e.toLowerCase())) return !0;
                            return "string" == typeof a && l()(u, a.toLowerCase());
                        })(e, t, c, n) || u,
                    _ = !1;
                if ((0, r.L)(e)) for (let t of e.layout) _ = s(t, c, d) || _;
                return !c && (d || _) && i.add(e.key), d || _;
            };
        return s(e), i;
    })(e, null != t ? t : "", n);
    return null !=
        (i = (function e(t, n) {
            if (!n.has(t.key)) return null;
            if (!(0, r.L)(t)) return t;
            let i = t.layout.map((t) => e(t, n)).filter((e) => null != e);
            return 0 !== i.length || "render" in t ? a(s({}, t), { layout: i }) : null;
        })(e, o))
        ? i
        : a(s({}, e), { layout: [] });
}
