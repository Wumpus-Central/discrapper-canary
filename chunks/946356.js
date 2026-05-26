n.d(r, { A: () => c });
var l = n(627968),
    t = n(64700),
    i = n(503698),
    o = n.n(i),
    u = n(86182),
    d = n(486020),
    s = n(101928),
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
                innerClassName: v,
                pendingThemeColors: A,
                themeOverride: f,
                children: y,
                isPrivate: C = !1,
                forceShowPremium: p = !1,
                forceUserTheme: R = !1,
            } = e,
            {
                theme: T,
                primaryColor: N,
                secondaryColor: w,
            } = (0, s.A)({ user: n, displayProfile: t, pendingThemeColors: A, isPreview: p, forceUserTheme: R }),
            { profileThemeStyle: x, profileThemeClassName: b } = (0, a.A)({
                theme: f ?? T,
                themeType: i,
                primaryColor: N,
                secondaryColor: w,
                forceUserTheme: R,
            }),
            j = (0, d.VI)(t?.banner);
        return (0, l.jsx)("div", {
            className: o()(m.A7, b, c, C && m.Gw, j && "has-animated-banner"),
            style: x,
            ref: r,
            children: (0, l.jsx)("div", {
                className: o()(m.vW, v),
                children: (0, l.jsx)(u.w, {
                    theme: f ?? T,
                    children: (0, l.jsx)(h.U, {
                        themeType: i,
                        theme: f ?? T,
                        primaryColor: N,
                        secondaryColor: w,
                        userId: n.id,
                        children: y,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: t.forwardRef(function (e, r) {
            let { children: n, className: t } = e;
            return (0, l.jsx)("div", { ref: r, className: o()(m.Lw, t), children: n });
        }),
    },
);
