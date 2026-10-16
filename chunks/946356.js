t.d(r, { A: () => y });
var n = t(477900),
    l = t(582128),
    i = t(503698),
    u = t.n(i),
    s = t(38021),
    d = t(453903),
    o = t(86182),
    a = t(77157),
    h = t(875741),
    m = t(486020),
    c = t(101928),
    A = t(920601),
    v = t(939496),
    f = t(52020);
let y = Object.assign(
    function (e) {
        let {
                user: r,
                displayProfile: t,
                themeType: i,
                profileFrameSkuIdOverride: y,
                className: p,
                innerClassName: C,
                style: N,
                pendingThemeColors: T,
                themeOverride: b,
                children: w,
                isPrivate: x = !1,
                forceShowPremium: j = !1,
                forceUserTheme: O = !1,
                ref: P,
            } = e,
            {
                theme: g,
                primaryColor: J,
                secondaryColor: R,
            } = (0, c.A)({ user: r, displayProfile: t, pendingThemeColors: T, isPreview: j, forceUserTheme: O }),
            { profileThemeStyle: k, profileThemeClassName: I } = (0, A.A)({
                theme: b ?? g,
                themeType: i,
                primaryColor: J,
                secondaryColor: R,
                forceUserTheme: O,
            }),
            M = (0, a.A)(void 0 !== y ? y : t?.profileFrame?.skuId),
            { profileFrameStyle: S, profileFrameClassName: H } = (0, h.A)(M),
            L = (0, m.VI)(t?.banner),
            { theme: W } = (0, s.wR)(),
            q = l.useContext(d.NA) ?? W;
        return (0, n.jsx)("div", {
            className: u()(f.A7, I, H, p, x && f.Gw, L && "has-animated-banner"),
            style: { ...k, ...S, ...N },
            ref: P,
            children: (0, n.jsx)("div", {
                className: u()(f.vW, C),
                children: (0, n.jsx)(o.w, {
                    theme: b ?? g,
                    children: (0, n.jsx)(v.U, {
                        themeType: i,
                        theme: b ?? g,
                        primaryColor: J,
                        secondaryColor: R,
                        userId: r.id,
                        children: (0, n.jsx)(d.NA.Provider, { value: q, children: w }),
                    }),
                }),
            }),
        });
    },
    {
        Overlay: function (e) {
            let { children: r, className: t, ref: l } = e;
            return (0, n.jsx)("div", { ref: l, className: u()(f.Lw, t), children: r });
        },
    },
);
