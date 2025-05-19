n.d(t, {
    o: () => b,
    y: () => y
});
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(493773),
    l = n(819640),
    c = n(751648),
    u = n(479766),
    d = n(970815),
    f = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b() {
    let e = (0, a.e7)([u.Z], () => u.Z.balancePillOverlay);
    return (
        (0, s.ZP)(() => {
            setTimeout(() => {
                e || (0, c.qD)(!0);
            }, 300);
        }),
        (0, i.useEffect)(
            () => () => {
                !(0, o.$sL)() && e && (0, c.qD)(!1);
            },
            [e]
        ),
        null
    );
}
function y(e) {
    var { pillRef: t, anchorPillType: n } = e,
        s = g(e, ['pillRef', 'anchorPillType']);
    let { balancePillOverlay: c } = (0, a.cj)([u.Z], () => ({ balancePillOverlay: u.Z.balancePillOverlay })),
        _ = (0, r.jsx)(d.A4, p({ ref: t }, s)),
        h = (0, r.jsx)(
            d.A4,
            m(p({}, s), {
                isInModalOverlay: !0,
                disabled: !0
            })
        ),
        { isAnyLayerOpen: E, isLastLayerShopFullScreen: b } = (0, a.cj)([l.Z], () => {
            let e = l.Z.getLayers();
            return {
                isLastLayerShopFullScreen: e.length > 0 && e[e.length - 1] === f.S9g.COLLECTIBLES_SHOP,
                isAnyLayerOpen: l.Z.hasLayers()
            };
        }),
        y = i.useMemo(() => !!c && (!E || (b && 'SHOP_FULLSCREEN' === n)), [c, E, b, n]),
        O = null != t.current ? t.current.offsetHeight : 36;
    return (0, r.jsx)(o.yRy, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => h,
        position: 'bottom',
        align: 'right',
        shouldShow: y,
        spacing: -O,
        animation: o.yRy.Animation.NONE,
        targetElementRef: t,
        positionKey: ''.concat(s.balance, '-').concat(c),
        children: () => _
    });
}
