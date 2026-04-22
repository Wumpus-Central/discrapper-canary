"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(86182),
    o = n(486020),
    c = n(101928),
    u = n(195898),
    d = n(939496),
    h = n(342607);
let _ = Object.assign(
    r.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: r,
                themeType: l,
                className: _,
                pendingThemeColors: p,
                themeOverride: A,
                children: f,
                privateBanner: m,
                forceShowPremium: g = !1,
                forceUserTheme: E = !1,
            } = e,
            {
                theme: I,
                primaryColor: v,
                secondaryColor: b,
            } = (0, c.A)({ user: n, displayProfile: r, pendingThemeColors: p, isPreview: g, forceUserTheme: E }),
            { profileThemeStyle: S, profileThemeClassName: T } = (0, u.A)({
                theme: A ?? I,
                themeType: l,
                primaryColor: v,
                secondaryColor: b,
                forceUserTheme: E,
            }),
            y = (0, o.VI)(r?.banner);
        return (0, i.jsx)("div", {
            className: a()(h.A7, T, _, null != m && h.Gw, y && "has-animated-banner"),
            style: S,
            ref: t,
            children: (0, i.jsx)("div", {
                className: h.vW,
                children: (0, i.jsx)(s.w, {
                    theme: A ?? I,
                    children: (0, i.jsxs)(d.U, {
                        themeType: l,
                        theme: A ?? I,
                        primaryColor: v,
                        secondaryColor: b,
                        userId: n.id,
                        children: [m, f],
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: r.forwardRef(function (e, t) {
            let { children: n, className: r } = e;
            return (0, i.jsx)("div", { ref: t, className: a()(h.Lw, r), children: n });
        }),
    },
);
