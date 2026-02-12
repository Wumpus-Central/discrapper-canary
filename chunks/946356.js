"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(101928),
    u = n(195898),
    c = n(939496),
    d = n(436466);
let _ = Object.assign(
    i.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: i,
                themeType: a,
                className: _,
                pendingThemeColors: f,
                themeOverride: h,
                children: p,
                privateBanner: g,
                forceShowPremium: E = !1,
                forceUserTheme: A = !1,
            } = e,
            {
                theme: I,
                primaryColor: T,
                secondaryColor: y,
            } = (0, l.A)({ user: n, displayProfile: i, pendingThemeColors: f, isPreview: E, forceUserTheme: A }),
            { profileThemeStyle: S, profileThemeClassName: v } = (0, u.A)({
                theme: h ?? I,
                themeType: a,
                primaryColor: T,
                secondaryColor: y,
                forceUserTheme: A,
            });
        return (0, r.jsx)("div", {
            className: s()(d.A7, v, _, null != g && d.Gw),
            style: S,
            ref: t,
            children: (0, r.jsx)("div", {
                className: d.vW,
                children: (0, r.jsx)(o.wXn, {
                    theme: h ?? I,
                    children: (0, r.jsxs)(c.U, {
                        themeType: a,
                        theme: h ?? I,
                        primaryColor: T,
                        secondaryColor: y,
                        userId: n.id,
                        children: [g, p],
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: i.forwardRef(function (e, t) {
            let { children: n, className: i } = e;
            return (0, r.jsx)("div", { ref: t, className: s()(d.Lw, i), children: n });
        }),
    },
);
