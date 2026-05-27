"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(86182),
    l = n(486020),
    u = n(101928),
    c = n(920601),
    d = n(939496),
    _ = n(41551);
let h = Object.assign(
    r.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: r,
                themeType: s,
                className: h,
                innerClassName: f,
                pendingThemeColors: p,
                themeOverride: E,
                children: m,
                isPrivate: g = !1,
                forceShowPremium: A = !1,
                forceUserTheme: I = !1,
            } = e,
            {
                theme: T,
                primaryColor: S,
                secondaryColor: y,
            } = (0, u.A)({ user: n, displayProfile: r, pendingThemeColors: p, isPreview: A, forceUserTheme: I }),
            { profileThemeStyle: N, profileThemeClassName: v } = (0, c.A)({
                theme: E ?? T,
                themeType: s,
                primaryColor: S,
                secondaryColor: y,
                forceUserTheme: I,
            }),
            C = (0, l.VI)(r?.banner);
        return (0, i.jsx)("div", {
            className: a()(_.A7, v, h, g && _.Gw, C && "has-animated-banner"),
            style: N,
            ref: t,
            children: (0, i.jsx)("div", {
                className: a()(_.vW, f),
                children: (0, i.jsx)(o.w, {
                    theme: E ?? T,
                    children: (0, i.jsx)(d.U, {
                        themeType: s,
                        theme: E ?? T,
                        primaryColor: S,
                        secondaryColor: y,
                        userId: n.id,
                        children: m,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: r.forwardRef(function (e, t) {
            let { children: n, className: r } = e;
            return (0, i.jsx)("div", { ref: t, className: a()(_.Lw, r), children: n });
        }),
    },
);
