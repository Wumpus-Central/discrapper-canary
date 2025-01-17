r.d(n, {
    Z: function () {
        return A;
    },
    b: function () {
        return S;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(866442),
    c = r(442837),
    d = r(692547),
    f = r(481060),
    _ = r(220082),
    h = r(583405),
    p = r(313201),
    m = r(279745),
    g = r(695346),
    E = r(451478),
    v = r(768581),
    I = r(28660),
    T = r(462997),
    b = r(409728);
let y = (e) => {
    let { size: n, stroke: r } = (0, f.getAvatarSpecs)(e);
    return n / 2 + r;
};
function S(e) {
    var n;
    let { user: r, displayProfile: i, guildId: o, pendingBanner: T, children: S, className: A, avatarSize: N, avatarOffsetX: C, avatarOffsetY: R, bannerWidth: O, bannerHeight: D, themePadding: L, animateOnHover: x = !1 } = e,
        w = (0, p.Dt)(),
        [P, M] = s.useState(!1),
        k = (0, c.e7)([E.Z], () => E.Z.isFocused()),
        U = g.QK.getSetting(),
        { bannerSrc: B, status: G } = (0, I.Z)({
            displayProfile: i,
            pendingBanner: T,
            size: O,
            canAnimate: x || !U ? P : k
        }),
        Z = (0, f.useToken)(d.Z.unsafe_rawColors.PRIMARY_800).hex(),
        F = r.getAvatarURL(o, (0, f.getAvatarSize)(N)),
        V = (0, u._i)((0, _.ZP)(F, Z, !1)),
        j = (0, h.Z)(null !== (n = null == i ? void 0 : i.primaryColor) && void 0 !== n ? n : V).hex,
        H = y(N),
        Y = H + C - L,
        W = D - R - L;
    return (0, a.jsxs)('svg', {
        className: b.mask,
        viewBox: '0 0 '.concat(O, ' ').concat(D),
        style: {
            minWidth: O,
            minHeight: D
        },
        children: [
            (0, a.jsxs)('mask', {
                id: w,
                children: [
                    (0, a.jsx)('rect', {
                        fill: 'white',
                        x: '0',
                        y: '0',
                        width: '100%',
                        height: '100%'
                    }),
                    (0, a.jsx)('circle', {
                        fill: 'black',
                        cx: Y,
                        cy: W,
                        r: H
                    })
                ]
            }),
            (0, a.jsxs)('foreignObject', {
                x: '0',
                y: '0',
                width: '100%',
                height: '100%',
                overflow: 'visible',
                mask: 'url(#'.concat(w, ')'),
                children: [
                    S,
                    (0, a.jsxs)('div', {
                        className: l()(b.banner, A),
                        onMouseMove: () => M(!0),
                        onMouseLeave: () => M(!1),
                        style: {
                            height: D,
                            minHeight: D,
                            backgroundImage: null != B ? 'url('.concat(B, ')') : void 0,
                            backgroundColor: 'COMPLETE' !== G ? d.Z.unsafe_rawColors.PRIMARY_800.css : j
                        },
                        children: [!U && (0, v.F8)(B) && (0, a.jsx)(m.Z, { className: b.gifTag }), S]
                    })
                ]
            })
        ]
    });
}
function A(e) {
    let { profileType: n, displayProfile: r, canUsePremiumProfileCustomization: i = !1, ...s } = e,
        o = T.q[n],
        l = i || (null == r ? void 0 : r.canUsePremiumProfileCustomization) || !1;
    return (0, a.jsx)(S, {
        ...s,
        ...o,
        displayProfile: r,
        themePadding: l ? o.themePadding : 0
    });
}
