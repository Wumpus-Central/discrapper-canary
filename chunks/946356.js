n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(86182),
    s = n(486020),
    c = n(101928),
    d = n(920601),
    u = n(939496),
    _ = n(41551);
let h = Object.assign(
    r.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: r,
                themeType: a,
                className: h,
                pendingThemeColors: p,
                themeOverride: f,
                children: m,
                privateBanner: A,
                forceShowPremium: g = !1,
                forceUserTheme: b = !1,
            } = e,
            {
                theme: y,
                primaryColor: E,
                secondaryColor: v,
            } = (0, c.A)({ user: n, displayProfile: r, pendingThemeColors: p, isPreview: g, forceUserTheme: b }),
            { profileThemeStyle: S, profileThemeClassName: I } = (0, d.A)({
                theme: f ?? y,
                themeType: a,
                primaryColor: E,
                secondaryColor: v,
                forceUserTheme: b,
            }),
            T = (0, s.VI)(r?.banner);
        return (0, i.jsx)("div", {
            className: l()(_.A7, I, h, null != A && _.Gw, T && "has-animated-banner"),
            style: S,
            ref: t,
            children: (0, i.jsx)("div", {
                className: _.vW,
                children: (0, i.jsx)(o.w, {
                    theme: f ?? y,
                    children: (0, i.jsxs)(u.U, {
                        themeType: a,
                        theme: f ?? y,
                        primaryColor: E,
                        secondaryColor: v,
                        userId: n.id,
                        children: [A, m],
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: r.forwardRef(function (e, t) {
            let { children: n, className: r } = e;
            return (0, i.jsx)("div", { ref: t, className: l()(_.Lw, r), children: n });
        }),
    },
);
