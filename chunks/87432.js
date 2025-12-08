n.d(t, { Z: () => l });
var r = n(28682);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e, t, n) {
    var i, o, c, u, d, f;
    let p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, r.L)(e))
        return (
            n.register(
                e,
                null == (u = p.panel) ? void 0 : u.key,
                null == (d = p.category) ? void 0 : d.key,
                null == (f = p.accordion) ? void 0 : f.key,
            ),
            e
        );
    let _ = p;
    e.type === r.J.SIDEBAR_ITEM && (_ = s(a({}, p), { panel: e.layout[0] })),
        e.type === r.J.PANEL && (_ = s(a({}, p), { panel: e })),
        e.type === r.J.CATEGORY && (_ = s(a({}, p), { category: e })),
        e.type === r.J.ACCORDION && (_ = s(a({}, p), { accordion: e }));
    let m = e.layout.map((e) => l(e, t, n, _)).filter((e) => null != e);
    if (0 === m.length && !("render" in e || (e.type === r.J.SIDEBAR_ITEM && "onClick" in e))) return null;
    let h = s(a({}, e), { layout: m });
    return (
        n.register(
            h,
            null == (i = _.panel) ? void 0 : i.key,
            null == (o = _.category) ? void 0 : o.key,
            null == (c = _.accordion) ? void 0 : c.key,
        ),
        h
    );
}
