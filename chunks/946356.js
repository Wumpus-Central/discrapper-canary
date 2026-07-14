n.d(r, { A: () => v });
var t = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(86182),
    s = n(875741),
    u = n(486020),
    d = n(101928),
    c = n(920601),
    m = n(939496),
    h = n(41551);
let v = Object.assign(
    l.forwardRef(function (e, r) {
        let {
                user: n,
                displayProfile: l,
                themeType: i,
                profileFrameSkuIdOverride: v,
                className: f,
                innerClassName: C,
                style: y,
                pendingThemeColors: A,
                themeOverride: p,
                children: x,
                isPrivate: N = !1,
                forceShowPremium: R = !1,
                forceUserTheme: b = !1,
            } = e,
            {
                theme: j,
                primaryColor: T,
                secondaryColor: w,
            } = (0, d.A)({ user: n, displayProfile: l, pendingThemeColors: A, isPreview: R, forceUserTheme: b }),
            { profileThemeStyle: I, profileThemeClassName: k } = (0, c.A)({
                theme: p ?? j,
                themeType: i,
                primaryColor: T,
                secondaryColor: w,
                forceUserTheme: b,
            }),
            { profileFrameStyle: D, profileFrameClassName: E } = (0, s.A)(void 0 !== v ? v : l?.profileFrame?.skuId),
            K = (0, u.VI)(l?.banner);
        return (0, t.jsx)("div", {
            className: a()(h.A7, k, E, f, N && h.Gw, K && "has-animated-banner"),
            style: { ...I, ...D, ...y },
            ref: r,
            children: (0, t.jsx)("div", {
                className: a()(h.vW, C),
                children: (0, t.jsx)(o.w, {
                    theme: p ?? j,
                    children: (0, t.jsx)(m.U, {
                        themeType: i,
                        theme: p ?? j,
                        primaryColor: T,
                        secondaryColor: w,
                        userId: n.id,
                        children: x,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: l.forwardRef(function (e, r) {
            let { children: n, className: l } = e;
            return (0, t.jsx)("div", { ref: r, className: a()(h.Lw, l), children: n });
        }),
    },
);
