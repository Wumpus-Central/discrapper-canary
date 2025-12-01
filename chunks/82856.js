n.d(t, { y: () => _ });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060);
n(493773), n(751648);
var o = n(479766),
    s = n(970815);
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e) {
    var { pillRef: t } = e,
        n = f(e, ["pillRef"]);
    let { balancePillOverlay: l } = (0, i.cj)([o.Z], () => ({ balancePillOverlay: o.Z.balancePillOverlay })),
        u = (0, r.jsx)(s.A4, c({ ref: t }, n)),
        p = (0, r.jsx)(
            s.A4,
            d(c({}, n), {
                isInModalOverlay: !0,
                disabled: !0,
            }),
        ),
        _ = null != t.current ? t.current.offsetHeight : 36;
    return (0, r.jsx)(a.yRy, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => p,
        position: "bottom",
        align: "right",
        shouldShow: l,
        spacing: -_,
        animation: a.yRy.Animation.NONE,
        targetElementRef: t,
        positionKey: "".concat(n.balance, "-").concat(l),
        children: () => u,
    });
}
