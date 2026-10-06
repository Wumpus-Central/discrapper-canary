t.d(r, { A: () => f });
var n = t(477900),
    l = t(582128),
    i = t(503698),
    u = t.n(i),
    s = t(86182),
    d = t(77157),
    o = t(875741),
    a = t(486020),
    h = t(101928),
    m = t(920601),
    c = t(939496),
    A = t(52020);
let f = Object.assign(
    l.forwardRef(function (e, r) {
        let {
                user: t,
                displayProfile: l,
                themeType: i,
                profileFrameSkuIdOverride: f,
                className: v,
                innerClassName: y,
                style: p,
                pendingThemeColors: C,
                themeOverride: N,
                children: w,
                isPrivate: T = !1,
                forceShowPremium: b = !1,
                forceUserTheme: O = !1,
            } = e,
            {
                theme: R,
                primaryColor: g,
                secondaryColor: j,
            } = (0, h.A)({ user: t, displayProfile: l, pendingThemeColors: C, isPreview: b, forceUserTheme: O }),
            { profileThemeStyle: x, profileThemeClassName: J } = (0, m.A)({
                theme: N ?? R,
                themeType: i,
                primaryColor: g,
                secondaryColor: j,
                forceUserTheme: O,
            }),
            P = (0, d.A)(void 0 !== f ? f : l?.profileFrame?.skuId),
            { profileFrameStyle: k, profileFrameClassName: I } = (0, o.A)(P),
            M = (0, a.VI)(l?.banner);
        return (0, n.jsx)("div", {
            className: u()(A.A7, J, I, v, T && A.Gw, M && "has-animated-banner"),
            style: { ...x, ...k, ...p },
            ref: r,
            children: (0, n.jsx)("div", {
                className: u()(A.vW, y),
                children: (0, n.jsx)(s.w, {
                    theme: N ?? R,
                    children: (0, n.jsx)(c.U, {
                        themeType: i,
                        theme: N ?? R,
                        primaryColor: g,
                        secondaryColor: j,
                        userId: t.id,
                        children: w,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: l.forwardRef(function (e, r) {
            let { children: t, className: l } = e;
            return (0, n.jsx)("div", { ref: r, className: u()(A.Lw, l), children: t });
        }),
    },
);
