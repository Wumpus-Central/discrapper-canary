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
                themeOverride: p,
                children: h,
                forceShowPremium: m = !1,
                forceUserTheme: g = !1,
            } = e,
            {
                theme: E,
                primaryColor: A,
                secondaryColor: I,
            } = (0, l.A)({ user: n, displayProfile: i, pendingThemeColors: f, isPreview: m, forceUserTheme: g }),
            { profileThemeStyle: T, profileThemeClassName: y } = (0, u.A)({
                theme: p ?? E,
                themeType: a,
                primaryColor: A,
                secondaryColor: I,
                forceUserTheme: g,
            });
        return (0, r.jsx)("div", {
            className: s()(d.A7, y, _),
            style: T,
            ref: t,
            children: (0, r.jsx)("div", {
                className: d.vW,
                children: (0, r.jsx)(o.wXn, {
                    theme: p ?? E,
                    children: (0, r.jsx)(c.U, {
                        themeType: a,
                        theme: p ?? E,
                        primaryColor: A,
                        secondaryColor: I,
                        userId: n.id,
                        children: h,
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
