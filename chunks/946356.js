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
    _ = n(342607);
let h = Object.assign(
    r.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: r,
                themeType: s,
                className: h,
                innerClassName: f,
                style: p,
                pendingThemeColors: E,
                themeOverride: m,
                children: g,
                isPrivate: A = !1,
                forceShowPremium: I = !1,
                forceUserTheme: T = !1,
            } = e,
            {
                theme: S,
                primaryColor: y,
                secondaryColor: C,
            } = (0, u.A)({ user: n, displayProfile: r, pendingThemeColors: E, isPreview: I, forceUserTheme: T }),
            { profileThemeStyle: N, profileThemeClassName: v } = (0, c.A)({
                theme: m ?? S,
                themeType: s,
                primaryColor: y,
                secondaryColor: C,
                forceUserTheme: T,
            }),
            R = (0, l.VI)(r?.banner);
        return (0, i.jsx)("div", {
            className: a()(_.A7, v, h, A && _.Gw, R && "has-animated-banner"),
            style: { ...N, ...p },
            ref: t,
            children: (0, i.jsx)("div", {
                className: a()(_.vW, f),
                children: (0, i.jsx)(o.w, {
                    theme: m ?? S,
                    children: (0, i.jsx)(d.U, {
                        themeType: s,
                        theme: m ?? S,
                        primaryColor: y,
                        secondaryColor: C,
                        userId: n.id,
                        children: g,
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
