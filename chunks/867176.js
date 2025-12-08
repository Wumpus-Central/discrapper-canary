n.d(t, {
    Z: () => P,
    b: () => N,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(866442),
    l = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(220082),
    f = n(583405),
    p = n(313201),
    _ = n(279745),
    m = n(695346),
    h = n(451478),
    g = n(768581),
    E = n(28660),
    b = n(934424),
    y = n(572425);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = (e) => {
    let { size: t, stroke: n } = (0, u.UCu)(e);
    return t / 2 + n;
};
function N(e) {
    var t;
    let {
            user: n,
            displayProfile: a,
            guildId: b,
            pendingBanner: O,
            children: v,
            className: S,
            avatarSize: I,
            avatarOffsetX: T,
            avatarOffsetY: A,
            bannerWidth: N,
            bannerHeight: P,
            themePadding: R,
            pendingAccentColor: w,
            animateOnHoverOrFocusOnly: D = !1,
        } = e,
        x = (0, p.Dt)(),
        [L, j] = i.useState(!1),
        M = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        k = m.QK.getSetting(),
        { bannerSrc: U, status: G } = (0, E.Z)({
            displayProfile: a,
            pendingBanner: O,
            size: N,
            canAnimate: D || !k ? L : M,
        }),
        Z = (0, u.dQu)(c.Z.unsafe_rawColors.PRIMARY_800).hex(),
        B = n.getAvatarURL(b, (0, u.dcp)(I)),
        F = (0, s._i)((0, d.ZP)(B, Z, !1)),
        V = (0, f.Z)(null != (t = null != w ? w : null == a ? void 0 : a.primaryColor) ? t : F).hex,
        H = C(I),
        Y = H + T - R,
        W = P - A - R;
    return (0, r.jsxs)("svg", {
        className: y.mask,
        viewBox: "0 0 ".concat(N, " ").concat(P),
        style: {
            minWidth: N,
            minHeight: P,
        },
        children: [
            (0, r.jsxs)("mask", {
                id: x,
                children: [
                    (0, r.jsx)("rect", {
                        fill: "white",
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                    }),
                    (0, r.jsx)("circle", {
                        fill: "black",
                        cx: Y,
                        cy: W,
                        r: H,
                    }),
                ],
            }),
            (0, r.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: "url(#".concat(x, ")"),
                children: [
                    v,
                    (0, r.jsx)("div", {
                        className: o()(y.banner, S),
                        onMouseMove: () => j(!0),
                        onMouseLeave: () => j(!1),
                        style: {
                            height: P,
                            minHeight: P,
                            backgroundImage: null != U ? "url(".concat(U, ")") : void 0,
                            backgroundColor: "COMPLETE" !== G ? c.Z.unsafe_rawColors.PRIMARY_800.css : V,
                        },
                        children: !k && (0, g.F8)(U) && (0, r.jsx)(_.Z, { className: y.gifTag }),
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    var { themeType: t, displayProfile: n, canUsePremiumProfileCustomization: i = !1 } = e,
        a = T(e, ["themeType", "displayProfile", "canUsePremiumProfileCustomization"]);
    let o = b.q[t],
        s = i || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1;
    return (0, r.jsx)(
        N,
        I(v({}, a, o), {
            displayProfile: n,
            themePadding: s ? o.themePadding : 0,
        }),
    );
}
