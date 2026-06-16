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
                style: A,
                pendingThemeColors: f,
                themeOverride: y,
                children: C,
                isPrivate: p = !1,
                forceShowPremium: R = !1,
                forceUserTheme: T = !1,
            } = e,
            {
                theme: N,
                primaryColor: w,
                secondaryColor: x,
            } = (0, s.A)({ user: n, displayProfile: t, pendingThemeColors: f, isPreview: R, forceUserTheme: T }),
            { profileThemeStyle: b, profileThemeClassName: j } = (0, a.A)({
                theme: y ?? N,
                themeType: i,
                primaryColor: w,
                secondaryColor: x,
                forceUserTheme: T,
            }),
            O = (0, d.VI)(t?.banner);
        return (0, l.jsx)("div", {
            className: o()(m.A7, j, c, p && m.Gw, O && "has-animated-banner"),
            style: { ...b, ...A },
            ref: r,
            children: (0, l.jsx)("div", {
                className: o()(m.vW, v),
                children: (0, l.jsx)(u.w, {
                    theme: y ?? N,
                    children: (0, l.jsx)(h.U, {
                        themeType: i,
                        theme: y ?? N,
                        primaryColor: w,
                        secondaryColor: x,
                        userId: n.id,
                        children: C,
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
