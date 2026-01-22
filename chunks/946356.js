n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(101928),
    c = n(195898),
    u = n(939496),
    d = n(436466);
let f = Object.assign(
    i.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: i,
                themeType: a,
                className: f,
                pendingThemeColors: p,
                themeOverride: _,
                children: h,
                forceShowPremium: m = !1,
                forceUserTheme: g = !1,
            } = e,
            {
                theme: E,
                primaryColor: b,
                secondaryColor: y,
            } = (0, l.A)({
                user: n,
                displayProfile: i,
                pendingThemeColors: p,
                isPreview: m,
                forceUserTheme: g,
            }),
            { profileThemeStyle: O, profileThemeClassName: A } = (0, c.A)({
                theme: null != _ ? _ : E,
                themeType: a,
                primaryColor: b,
                secondaryColor: y,
                forceUserTheme: g,
            });
        return (0, r.jsx)("div", {
            className: s()(d.A7, A, f),
            style: O,
            ref: t,
            children: (0, r.jsx)("div", {
                className: d.vW,
                children: (0, r.jsx)(o.wXn, {
                    theme: null != _ ? _ : E,
                    children: (0, r.jsx)(u.U, {
                        themeType: a,
                        theme: null != _ ? _ : E,
                        primaryColor: b,
                        secondaryColor: y,
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
            return (0, r.jsx)("div", {
                ref: t,
                className: s()(d.Lw, i),
                children: n,
            });
        }),
    },
);
