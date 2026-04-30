"use strict";
n.d(t, { A: () => f });
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
let f = Object.assign(
    r.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: r,
                themeType: s,
                className: f,
                pendingThemeColors: h,
                themeOverride: p,
                children: E,
                isPrivate: m = !1,
                forceShowPremium: g = !1,
                forceUserTheme: A = !1,
            } = e,
            {
                theme: I,
                primaryColor: T,
                secondaryColor: S,
            } = (0, u.A)({ user: n, displayProfile: r, pendingThemeColors: h, isPreview: g, forceUserTheme: A }),
            { profileThemeStyle: N, profileThemeClassName: y } = (0, c.A)({
                theme: p ?? I,
                themeType: s,
                primaryColor: T,
                secondaryColor: S,
                forceUserTheme: A,
            }),
            C = (0, l.VI)(r?.banner);
        return (0, i.jsx)("div", {
            className: a()(_.A7, y, f, m && _.Gw, C && "has-animated-banner"),
            style: N,
            ref: t,
            children: (0, i.jsx)("div", {
                className: _.vW,
                children: (0, i.jsx)(o.w, {
                    theme: p ?? I,
                    children: (0, i.jsx)(d.U, {
                        themeType: s,
                        theme: p ?? I,
                        primaryColor: T,
                        secondaryColor: S,
                        userId: n.id,
                        children: E,
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
