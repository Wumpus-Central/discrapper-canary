"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(86182),
    l = n(875741),
    u = n(486020),
    c = n(101928),
    d = n(920601),
    _ = n(939496),
    h = n(41551);
let f = Object.assign(
    r.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: r,
                themeType: s,
                profileFrameSkuIdOverride: f,
                className: E,
                innerClassName: p,
                style: m,
                pendingThemeColors: g,
                themeOverride: A,
                children: I,
                isPrivate: T = !1,
                forceShowPremium: S = !1,
                forceUserTheme: N = !1,
            } = e,
            {
                theme: C,
                primaryColor: y,
                secondaryColor: O,
            } = (0, c.A)({ user: n, displayProfile: r, pendingThemeColors: g, isPreview: S, forceUserTheme: N }),
            { profileThemeStyle: R, profileThemeClassName: v } = (0, d.A)({
                theme: A ?? C,
                themeType: s,
                primaryColor: y,
                secondaryColor: O,
                forceUserTheme: N,
            }),
            { profileFrameStyle: b, profileFrameClassName: L } = (0, l.A)(void 0 !== f ? f : r?.profileFrame?.skuId),
            D = (0, u.VI)(r?.banner);
        return (0, i.jsx)("div", {
            className: a()(h.A7, v, L, E, T && h.Gw, D && "has-animated-banner"),
            style: { ...R, ...b, ...m },
            ref: t,
            children: (0, i.jsx)("div", {
                className: a()(h.vW, p),
                children: (0, i.jsx)(o.w, {
                    theme: A ?? C,
                    children: (0, i.jsx)(_.U, {
                        themeType: s,
                        theme: A ?? C,
                        primaryColor: y,
                        secondaryColor: O,
                        userId: n.id,
                        children: I,
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
