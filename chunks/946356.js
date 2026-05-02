n.d(r, { A: () => c });
var l = n(627968),
    t = n(64700),
    i = n(503698),
    d = n.n(i),
    s = n(86182),
    u = n(486020),
    o = n(101928),
    a = n(920601),
    h = n(939496),
    m = n(41551);
let c = Object.assign(
    t.forwardRef(function (e, r) {
        let {
                user: n,
                displayProfile: t,
                themeType: i,
                className: c,
                pendingThemeColors: v,
                themeOverride: A,
                children: f,
                isPrivate: R = !1,
                forceShowPremium: p = !1,
                forceUserTheme: y = !1,
            } = e,
            {
                theme: C,
                primaryColor: N,
                secondaryColor: w,
            } = (0, o.A)({ user: n, displayProfile: t, pendingThemeColors: v, isPreview: p, forceUserTheme: y }),
            { profileThemeStyle: T, profileThemeClassName: b } = (0, a.A)({
                theme: A ?? C,
                themeType: i,
                primaryColor: N,
                secondaryColor: w,
                forceUserTheme: y,
            }),
            O = (0, u.VI)(t?.banner);
        return (0, l.jsx)("div", {
            className: d()(m.A7, b, c, R && m.Gw, O && "has-animated-banner"),
            style: T,
            ref: r,
            children: (0, l.jsx)("div", {
                className: m.vW,
                children: (0, l.jsx)(s.w, {
                    theme: A ?? C,
                    children: (0, l.jsx)(h.U, {
                        themeType: i,
                        theme: A ?? C,
                        primaryColor: N,
                        secondaryColor: w,
                        userId: n.id,
                        children: f,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: t.forwardRef(function (e, r) {
            let { children: n, className: t } = e;
            return (0, l.jsx)("div", { ref: r, className: d()(m.Lw, t), children: n });
        }),
    },
);
