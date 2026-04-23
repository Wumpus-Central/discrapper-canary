i.d(t, { A: () => m });
var r = i(627968),
    l = i(64700),
    a = i(503698),
    n = i.n(a),
    s = i(86182),
    o = i(486020),
    d = i(101928),
    c = i(195898),
    u = i(939496),
    _ = i(342607);
let m = Object.assign(
    l.forwardRef(function (e, t) {
        let {
                user: i,
                displayProfile: l,
                themeType: a,
                className: m,
                pendingThemeColors: f,
                themeOverride: p,
                children: A,
                privateBanner: h,
                forceShowPremium: v = !1,
                forceUserTheme: E = !1,
            } = e,
            {
                theme: I,
                primaryColor: x,
                secondaryColor: y,
            } = (0, d.A)({ user: i, displayProfile: l, pendingThemeColors: f, isPreview: v, forceUserTheme: E }),
            { profileThemeStyle: b, profileThemeClassName: g } = (0, c.A)({
                theme: p ?? I,
                themeType: a,
                primaryColor: x,
                secondaryColor: y,
                forceUserTheme: E,
            }),
            R = (0, o.VI)(l?.banner);
        return (0, r.jsx)("div", {
            className: n()(_.A7, g, m, null != h && _.Gw, R && "has-animated-banner"),
            style: b,
            ref: t,
            children: (0, r.jsx)("div", {
                className: _.vW,
                children: (0, r.jsx)(s.w, {
                    theme: p ?? I,
                    children: (0, r.jsxs)(u.U, {
                        themeType: a,
                        theme: p ?? I,
                        primaryColor: x,
                        secondaryColor: y,
                        userId: i.id,
                        children: [h, A],
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: l.forwardRef(function (e, t) {
            let { children: i, className: l } = e;
            return (0, r.jsx)("div", { ref: t, className: n()(_.Lw, l), children: i });
        }),
    },
);
