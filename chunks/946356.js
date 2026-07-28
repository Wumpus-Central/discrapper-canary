"use strict";
n.d(t, { A: () => h });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(86182),
    o = n(77157),
    d = n(875741),
    c = n(486020),
    u = n(101928),
    _ = n(920601),
    E = n(939496),
    A = n(518295);
let h = Object.assign(
    r.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: r,
                themeType: a,
                profileFrameSkuIdOverride: h,
                className: I,
                innerClassName: f,
                style: p,
                pendingThemeColors: T,
                themeOverride: m,
                children: g,
                isPrivate: S = !1,
                forceShowPremium: N = !1,
                forceUserTheme: C = !1,
            } = e,
            {
                theme: O,
                primaryColor: R,
                secondaryColor: L,
            } = (0, u.A)({ user: n, displayProfile: r, pendingThemeColors: T, isPreview: N, forceUserTheme: C }),
            { profileThemeStyle: y, profileThemeClassName: D } = (0, _.A)({
                theme: m ?? O,
                themeType: a,
                primaryColor: R,
                secondaryColor: L,
                forceUserTheme: C,
            }),
            v = (0, o.A)(void 0 !== h ? h : r?.profileFrame?.skuId),
            { profileFrameStyle: b, profileFrameClassName: M } = (0, d.A)(v),
            P = (0, c.VI)(r?.banner);
        return (0, i.jsx)("div", {
            className: s()(A.A7, D, M, I, S && A.Gw, P && "has-animated-banner"),
            style: { ...y, ...b, ...p },
            ref: t,
            children: (0, i.jsx)("div", {
                className: s()(A.vW, f),
                children: (0, i.jsx)(l.w, {
                    theme: m ?? O,
                    children: (0, i.jsx)(E.U, {
                        themeType: a,
                        theme: m ?? O,
                        primaryColor: R,
                        secondaryColor: L,
                        userId: n.id,
                        children: g,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: r.forwardRef(function (e, t) {
            let { children: n, className: r } = e;
            return (0, i.jsx)("div", { ref: t, className: s()(A.Lw, r), children: n });
        }),
    },
);
