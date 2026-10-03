t.d(r, { A: () => f });
var n = t(477900),
    l = t(582128),
    i = t(503698),
    u = t.n(i),
    o = t(86182),
    s = t(77157),
    d = t(875741),
    a = t(486020),
    m = t(101928),
    h = t(920601),
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
                style: C,
                pendingThemeColors: p,
                themeOverride: T,
                children: N,
                isPrivate: w = !1,
                forceShowPremium: x = !1,
                forceUserTheme: b = !1,
            } = e,
            {
                theme: P,
                primaryColor: j,
                secondaryColor: O,
            } = (0, m.A)({ user: t, displayProfile: l, pendingThemeColors: p, isPreview: x, forceUserTheme: b }),
            { profileThemeStyle: R, profileThemeClassName: g } = (0, h.A)({
                theme: T ?? P,
                themeType: i,
                primaryColor: j,
                secondaryColor: O,
                forceUserTheme: b,
            }),
            I = (0, s.A)(void 0 !== f ? f : l?.profileFrame?.skuId),
            { profileFrameStyle: J, profileFrameClassName: M } = (0, d.A)(I),
            S = (0, a.VI)(l?.banner);
        return (0, n.jsx)("div", {
            className: u()(A.A7, g, M, v, w && A.Gw, S && "has-animated-banner"),
            style: { ...R, ...J, ...C },
            ref: r,
            children: (0, n.jsx)("div", {
                className: u()(A.vW, y),
                children: (0, n.jsx)(o.w, {
                    theme: T ?? P,
                    children: (0, n.jsx)(c.U, {
                        themeType: i,
                        theme: T ?? P,
                        primaryColor: j,
                        secondaryColor: O,
                        userId: t.id,
                        children: N,
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
