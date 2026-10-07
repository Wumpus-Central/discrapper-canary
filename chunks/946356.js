t.d(r, { A: () => A });
var n = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    u = t(86182),
    s = t(77157),
    d = t(875741),
    o = t(486020),
    a = t(101928),
    h = t(920601),
    m = t(939496),
    c = t(52020);
let A = Object.assign(
    function (e) {
        let {
                user: r,
                displayProfile: t,
                themeType: l,
                profileFrameSkuIdOverride: A,
                className: v,
                innerClassName: f,
                style: y,
                pendingThemeColors: p,
                themeOverride: C,
                children: N,
                isPrivate: T = !1,
                forceShowPremium: b = !1,
                forceUserTheme: w = !1,
                ref: O,
            } = e,
            {
                theme: g,
                primaryColor: j,
                secondaryColor: x,
            } = (0, a.A)({ user: r, displayProfile: t, pendingThemeColors: p, isPreview: b, forceUserTheme: w }),
            { profileThemeStyle: J, profileThemeClassName: P } = (0, h.A)({
                theme: C ?? g,
                themeType: l,
                primaryColor: j,
                secondaryColor: x,
                forceUserTheme: w,
            }),
            k = (0, s.A)(void 0 !== A ? A : t?.profileFrame?.skuId),
            { profileFrameStyle: I, profileFrameClassName: M } = (0, d.A)(k),
            R = (0, o.VI)(t?.banner);
        return (0, n.jsx)("div", {
            className: i()(c.A7, P, M, v, T && c.Gw, R && "has-animated-banner"),
            style: { ...J, ...I, ...y },
            ref: O,
            children: (0, n.jsx)("div", {
                className: i()(c.vW, f),
                children: (0, n.jsx)(u.w, {
                    theme: C ?? g,
                    children: (0, n.jsx)(m.U, {
                        themeType: l,
                        theme: C ?? g,
                        primaryColor: j,
                        secondaryColor: x,
                        userId: r.id,
                        children: N,
                    }),
                }),
            }),
        });
    },
    {
        Overlay: function (e) {
            let { children: r, className: t, ref: l } = e;
            return (0, n.jsx)("div", { ref: l, className: i()(c.Lw, t), children: r });
        },
    },
);
