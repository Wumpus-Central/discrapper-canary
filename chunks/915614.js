n.d(t, {
    A: () => R,
    o: () => N,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(317097),
    l = n(311907),
    c = n(827734),
    u = n(397927),
    d = n(654107),
    f = n(450373),
    p = n(915089),
    _ = n(693875),
    h = n(253932),
    m = n(531685),
    g = n(486020),
    E = n(686189),
    b = n(985253),
    y = n(166212);
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
function A(e) {
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
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let C = (e) => {
    let { size: t, stroke: n } = (0, u.KjH)(e);
    return t / 2 + n;
};
function N(e) {
    var t;
    let {
            user: n,
            displayProfile: a,
            guildId: b,
            pendingBanner: O,
            children: A,
            className: v,
            avatarSize: S,
            avatarOffsetX: I,
            avatarOffsetY: T,
            bannerWidth: N,
            bannerHeight: R,
            themePadding: w,
            pendingAccentColor: P,
            animateOnHoverOrFocusOnly: D = !1,
        } = e,
        x = (0, p.GV)(),
        [L, j] = i.useState(!1),
        M = (0, l.bG)([m.A], () => m.A.isFocused()),
        k = h.kt.getSetting(),
        { bannerSrc: U, status: G } = (0, E.A)({
            displayProfile: a,
            pendingBanner: O,
            size: N,
            canAnimate: D || !k ? L : M,
        }),
        V = (0, u.rdh)(c.A.unsafe_rawColors.PRIMARY_800).hex(),
        F = n.getAvatarURL(b, (0, u.FT9)(S)),
        B = (0, o.LX)((0, d.Ay)(F, V, !1)),
        H = (0, f.A)(null != (t = null != P ? P : null == a ? void 0 : a.primaryColor) ? t : B).hex,
        Y = C(S),
        W = Y + I - w,
        K = R - T - w;
    return (0, r.jsxs)("svg", {
        className: y.dK,
        viewBox: "0 0 ".concat(N, " ").concat(R),
        style: {
            minWidth: N,
            minHeight: R,
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
                        cx: W,
                        cy: K,
                        r: Y,
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
                    A,
                    (0, r.jsx)("div", {
                        className: s()(y.vK, v),
                        onMouseMove: () => j(!0),
                        onMouseLeave: () => j(!1),
                        style: {
                            height: R,
                            minHeight: R,
                            backgroundImage: null != U ? "url(".concat(U, ")") : void 0,
                            backgroundColor: "COMPLETE" !== G ? c.A.unsafe_rawColors.PRIMARY_800.css : H,
                        },
                        children: !k && (0, g.o4)(U) && (0, r.jsx)(_.A, { className: y.pH }),
                    }),
                ],
            }),
        ],
    });
}
function R(e) {
    let { themeType: t, displayProfile: n, canUsePremiumProfileCustomization: i = !1 } = e,
        a = I(e, ["themeType", "displayProfile", "canUsePremiumProfileCustomization"]),
        s = b.T[t],
        o = i || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1;
    return (0, r.jsx)(
        N,
        S(A({}, a, s), {
            displayProfile: n,
            themePadding: o ? s.themePadding : 0,
        }),
    );
}
