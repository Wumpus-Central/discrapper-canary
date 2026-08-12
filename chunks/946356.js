n.d(r, { A: () => v });
var t = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(86182),
    o = n(77157),
    u = n(875741),
    d = n(486020),
    c = n(101928),
    m = n(920601),
    h = n(939496),
    f = n(518295);
let v = Object.assign(
    l.forwardRef(function (e, r) {
        let {
                user: n,
                displayProfile: l,
                themeType: i,
                profileFrameSkuIdOverride: v,
                className: A,
                innerClassName: C,
                style: y,
                pendingThemeColors: p,
                themeOverride: x,
                children: N,
                isPrivate: R = !1,
                forceShowPremium: b = !1,
                forceUserTheme: j = !1,
            } = e,
            {
                theme: T,
                primaryColor: g,
                secondaryColor: w,
            } = (0, c.A)({ user: n, displayProfile: l, pendingThemeColors: p, isPreview: b, forceUserTheme: j }),
            { profileThemeStyle: I, profileThemeClassName: P } = (0, m.A)({
                theme: x ?? T,
                themeType: i,
                primaryColor: g,
                secondaryColor: w,
                forceUserTheme: j,
            }),
            k = (0, o.A)(void 0 !== v ? v : l?.profileFrame?.skuId),
            { profileFrameStyle: D, profileFrameClassName: E } = (0, u.A)(k),
            K = (0, d.VI)(l?.banner);
        return (0, t.jsx)("div", {
            className: a()(f.A7, P, E, A, R && f.Gw, K && "has-animated-banner"),
            style: { ...I, ...D, ...y },
            ref: r,
            children: (0, t.jsx)("div", {
                className: a()(f.vW, C),
                children: (0, t.jsx)(s.w, {
                    theme: x ?? T,
                    children: (0, t.jsx)(h.U, {
                        themeType: i,
                        theme: x ?? T,
                        primaryColor: g,
                        secondaryColor: w,
                        userId: n.id,
                        children: N,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: l.forwardRef(function (e, r) {
            let { children: n, className: l } = e;
            return (0, t.jsx)("div", { ref: r, className: a()(f.Lw, l), children: n });
        }),
    },
);
