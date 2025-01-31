n.d(t, {
    Z: () => T,
    b: () => b
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(866442),
    l = n(442837),
    u = n(692547),
    c = n(481060),
    d = n(220082),
    f = n(583405),
    _ = n(313201),
    p = n(279745),
    h = n(695346),
    m = n(451478),
    g = n(768581),
    E = n(28660),
    v = n(462997),
    y = n(409728);
let I = (e) => {
    let { size: t, stroke: n } = (0, c.UCu)(e);
    return t / 2 + n;
};
function b(e) {
    var t;
    let { user: n, displayProfile: a, guildId: v, pendingBanner: b, children: T, className: S, avatarSize: A, avatarOffsetX: N, avatarOffsetY: C, bannerWidth: R, bannerHeight: O, themePadding: D, animateOnHover: x = !1 } = e,
        L = (0, _.Dt)(),
        [P, w] = r.useState(!1),
        M = (0, l.e7)([m.Z], () => m.Z.isFocused()),
        k = h.QK.getSetting(),
        { bannerSrc: U, status: G } = (0, E.Z)({
            displayProfile: a,
            pendingBanner: b,
            size: R,
            canAnimate: x || !k ? P : M
        }),
        B = (0, c.dQu)(u.Z.unsafe_rawColors.PRIMARY_800).hex(),
        Z = n.getAvatarURL(v, (0, c.pxk)(A)),
        F = (0, o._i)((0, d.ZP)(Z, B, !1)),
        V = (0, f.Z)(null !== (t = null == a ? void 0 : a.primaryColor) && void 0 !== t ? t : F).hex,
        j = I(A),
        H = j + N - D,
        Y = O - C - D;
    return (0, i.jsxs)('svg', {
        className: y.mask,
        viewBox: '0 0 '.concat(R, ' ').concat(O),
        style: {
            minWidth: R,
            minHeight: O
        },
        children: [
            (0, i.jsxs)('mask', {
                id: L,
                children: [
                    (0, i.jsx)('rect', {
                        fill: 'white',
                        x: '0',
                        y: '0',
                        width: '100%',
                        height: '100%'
                    }),
                    (0, i.jsx)('circle', {
                        fill: 'black',
                        cx: H,
                        cy: Y,
                        r: j
                    })
                ]
            }),
            (0, i.jsxs)('foreignObject', {
                x: '0',
                y: '0',
                width: '100%',
                height: '100%',
                overflow: 'visible',
                mask: 'url(#'.concat(L, ')'),
                children: [
                    T,
                    (0, i.jsxs)('div', {
                        className: s()(y.banner, S),
                        onMouseMove: () => w(!0),
                        onMouseLeave: () => w(!1),
                        style: {
                            height: O,
                            minHeight: O,
                            backgroundImage: null != U ? 'url('.concat(U, ')') : void 0,
                            backgroundColor: 'COMPLETE' !== G ? u.Z.unsafe_rawColors.PRIMARY_800.css : V
                        },
                        children: [!k && (0, g.F8)(U) && (0, i.jsx)(p.Z, { className: y.gifTag }), T]
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { profileType: t, displayProfile: n, canUsePremiumProfileCustomization: r = !1, ...a } = e,
        s = v.q[t],
        o = r || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1;
    return (0, i.jsx)(b, {
        ...a,
        ...s,
        displayProfile: n,
        themePadding: o ? s.themePadding : 0
    });
}
