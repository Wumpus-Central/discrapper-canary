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
    f = n(52020);
let v = Object.assign(
    l.forwardRef(function (e, r) {
        let {
                user: n,
                displayProfile: l,
                themeType: i,
                profileFrameSkuIdOverride: v,
                className: A,
                innerClassName: C,
                style: p,
                pendingThemeColors: N,
                themeOverride: x,
                children: y,
                isPrivate: b = !1,
                forceShowPremium: j = !1,
                forceUserTheme: R = !1,
            } = e,
            {
                theme: T,
                primaryColor: g,
                secondaryColor: w,
            } = (0, c.A)({ user: n, displayProfile: l, pendingThemeColors: N, isPreview: j, forceUserTheme: R }),
            { profileThemeStyle: k, profileThemeClassName: I } = (0, m.A)({
                theme: x ?? T,
                themeType: i,
                primaryColor: g,
                secondaryColor: w,
                forceUserTheme: R,
            }),
            _ = (0, o.A)(void 0 !== v ? v : l?.profileFrame?.skuId),
            { profileFrameStyle: J, profileFrameClassName: L } = (0, u.A)(_),
            M = (0, d.VI)(l?.banner);
        return (0, t.jsx)("div", {
            className: a()(f.A7, I, L, A, b && f.Gw, M && "has-animated-banner"),
            style: { ...k, ...J, ...p },
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
                        children: y,
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
