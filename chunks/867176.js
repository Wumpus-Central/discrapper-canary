n.d(t, {
    Z: () => R,
    b: () => C
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(866442),
    l = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(220082),
    f = n(583405),
    _ = n(313201),
    p = n(279745),
    h = n(695346),
    m = n(451478),
    g = n(768581),
    E = n(28660),
    b = n(462997),
    y = n(738861);
function v(e, t, n) {
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
function O(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = (e) => {
    let { size: t, stroke: n } = (0, u.UCu)(e);
    return t / 2 + n;
};
function C(e) {
    var t;
    let { user: n, displayProfile: o, guildId: b, pendingBanner: v, children: O, className: I, avatarSize: S, avatarOffsetX: T, avatarOffsetY: N, bannerWidth: C, bannerHeight: R, themePadding: P, pendingAccentColor: w, animateOnHover: D = !1 } = e,
        L = (0, _.Dt)(),
        [x, M] = i.useState(!1),
        k = (0, l.e7)([m.Z], () => m.Z.isFocused()),
        j = h.QK.getSetting(),
        { bannerSrc: U, status: G } = (0, E.Z)({
            displayProfile: o,
            pendingBanner: v,
            size: C,
            canAnimate: D || !j ? x : k
        }),
        B = (0, u.dQu)(c.Z.unsafe_rawColors.PRIMARY_800).hex(),
        F = n.getAvatarURL(b, (0, u.pxk)(S)),
        V = (0, s._i)((0, d.ZP)(F, B, !1)),
        Z = (0, f.Z)(null != (t = null != w ? w : null == o ? void 0 : o.primaryColor) ? t : V).hex,
        H = A(S),
        W = H + T - P,
        Y = R - N - P;
    return (0, r.jsxs)('svg', {
        className: y.mask,
        viewBox: '0 0 '.concat(C, ' ').concat(R),
        style: {
            minWidth: C,
            minHeight: R
        },
        children: [
            (0, r.jsxs)('mask', {
                id: L,
                children: [
                    (0, r.jsx)('rect', {
                        fill: 'white',
                        x: '0',
                        y: '0',
                        width: '100%',
                        height: '100%'
                    }),
                    (0, r.jsx)('circle', {
                        fill: 'black',
                        cx: W,
                        cy: Y,
                        r: H
                    })
                ]
            }),
            (0, r.jsxs)('foreignObject', {
                x: '0',
                y: '0',
                width: '100%',
                height: '100%',
                overflow: 'visible',
                mask: 'url(#'.concat(L, ')'),
                children: [
                    O,
                    (0, r.jsxs)('div', {
                        className: a()(y.banner, I),
                        onMouseMove: () => M(!0),
                        onMouseLeave: () => M(!1),
                        style: {
                            height: R,
                            minHeight: R,
                            backgroundImage: null != U ? 'url('.concat(U, ')') : void 0,
                            backgroundColor: 'COMPLETE' !== G ? c.Z.unsafe_rawColors.PRIMARY_800.css : Z
                        },
                        children: [!j && (0, g.F8)(U) && (0, r.jsx)(p.Z, { className: y.gifTag }), O]
                    })
                ]
            })
        ]
    });
}
function R(e) {
    var { profileType: t, displayProfile: n, canUsePremiumProfileCustomization: i = !1 } = e,
        o = T(e, ['profileType', 'displayProfile', 'canUsePremiumProfileCustomization']);
    let a = b.q[t],
        s = i || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1;
    return (0, r.jsx)(
        C,
        S(O({}, o, a), {
            displayProfile: n,
            themePadding: s ? a.themePadding : 0
        })
    );
}
