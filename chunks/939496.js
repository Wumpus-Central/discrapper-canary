var n = t(477900),
    u = t(582128),
    l = t(677313),
    o = t(413599);
let s = u.createContext({
    theme: o.A.themePreferenceForSystemTheme((0, l.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
t.d(
    r,
    {},
    {
        E: function () {
            return u.useContext(s);
        },
        U: function (e) {
            let { theme: r, themeType: t, primaryColor: l, secondaryColor: o, userId: c, children: h } = e,
                i = u.useMemo(
                    () => ({ theme: r, themeType: t, primaryColor: l, secondaryColor: o, userId: c }),
                    [r, t, l, o, c],
                );
            return (0, n.jsx)(s.Provider, { value: i, children: h });
        },
    },
);
