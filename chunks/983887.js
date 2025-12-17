n.d(t, { Q: () => p }), n(415506);
var r = n(473749),
    i = n(602188),
    a = n(98736),
    o = n(531430),
    s = n(966327);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = r.createElement("span");
function p(e) {
    var { children: t, targetElementRef: n, asContainer: l = !1, containerTag: d = "span", ariaHidden: p = !1 } = e,
        _ = u(e, ["children", "targetElementRef", "asContainer", "containerTag", "ariaHidden"]);
    let m = (0, s.c)(n),
        h = r.useId(),
        { isVisible: g, triggerProps: E } = (0, o.B)(c({ targetElementRef: m.targetElementRef }, _)),
        b = p ? void 0 : h,
        y = (0, i.X)(r.isValidElement(t) ? t : f, E, b, m.triggerRef),
        O = (0, a.j)(l, t, E, m.triggerRef, h, p, d),
        v = null != O ? O : y;
    return {
        tooltipId: h,
        isVisible: g,
        targetElementRef: m.targetElementRef,
        trigger: v,
        describedById: b,
    };
}
