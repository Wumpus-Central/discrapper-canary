"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(86182),
    o = n(875741),
    d = n(486020),
    c = n(101928),
    u = n(920601),
    _ = n(939496),
    E = n(41551);
let A = Object.assign(
    r.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: r,
                themeType: a,
                profileFrameSkuIdOverride: A,
                className: h,
                innerClassName: I,
                style: f,
                pendingThemeColors: p,
                themeOverride: T,
                children: m,
                isPrivate: g = !1,
                forceShowPremium: S = !1,
                forceUserTheme: N = !1,
            } = e,
            {
                theme: C,
                primaryColor: R,
                secondaryColor: O,
            } = (0, c.A)({ user: n, displayProfile: r, pendingThemeColors: p, isPreview: S, forceUserTheme: N }),
            { profileThemeStyle: L, profileThemeClassName: D } = (0, u.A)({
                theme: T ?? C,
                themeType: a,
                primaryColor: R,
                secondaryColor: O,
                forceUserTheme: N,
            }),
            { profileFrameStyle: y, profileFrameClassName: v } = (0, o.A)(void 0 !== A ? A : r?.profileFrame?.skuId),
            b = (0, d.VI)(r?.banner);
        return (0, i.jsx)("div", {
            className: s()(E.A7, D, v, h, g && E.Gw, b && "has-animated-banner"),
            style: { ...L, ...y, ...f },
            ref: t,
            children: (0, i.jsx)("div", {
                className: s()(E.vW, I),
                children: (0, i.jsx)(l.w, {
                    theme: T ?? C,
                    children: (0, i.jsx)(_.U, {
                        themeType: a,
                        theme: T ?? C,
                        primaryColor: R,
                        secondaryColor: O,
                        userId: n.id,
                        children: m,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: r.forwardRef(function (e, t) {
            let { children: n, className: r } = e;
            return (0, i.jsx)("div", { ref: t, className: s()(E.Lw, r), children: n });
        }),
    },
);
