"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(486020),
    u = n(101928),
    c = n(195898),
    d = n(939496),
    _ = n(20927);
let f = Object.assign(
    i.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: i,
                themeType: s,
                className: f,
                pendingThemeColors: p,
                themeOverride: h,
                children: m,
                privateBanner: E,
                forceShowPremium: g = !1,
                forceUserTheme: A = !1,
            } = e,
            {
                theme: I,
                primaryColor: T,
                secondaryColor: S,
            } = (0, u.A)({ user: n, displayProfile: i, pendingThemeColors: p, isPreview: g, forceUserTheme: A }),
            { profileThemeStyle: y, profileThemeClassName: v } = (0, c.A)({
                theme: h ?? I,
                themeType: s,
                primaryColor: T,
                secondaryColor: S,
                forceUserTheme: A,
            }),
            N = (0, l.VI)(i?.banner);
        return (0, r.jsx)("div", {
            className: a()(_.A7, v, f, null != E && _.Gw, N && "has-animated-banner"),
            style: y,
            ref: t,
            children: (0, r.jsx)("div", {
                className: _.vW,
                children: (0, r.jsx)(o.wXn, {
                    theme: h ?? I,
                    children: (0, r.jsxs)(d.U, {
                        themeType: s,
                        theme: h ?? I,
                        primaryColor: T,
                        secondaryColor: S,
                        userId: n.id,
                        children: [E, m],
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: i.forwardRef(function (e, t) {
            let { children: n, className: i } = e;
            return (0, r.jsx)("div", { ref: t, className: a()(_.Lw, i), children: n });
        }),
    },
);
