n.d(t, { V: () => A });
var i = n(366010),
    s = n(311907),
    l = n(955572),
    a = n(775602),
    r = n(47671),
    o = n(419954),
    d = n(97469),
    u = n(544028),
    c = n(253932),
    g = n(780964),
    m = n(818348),
    _ = n(985018);
let A = (0, o.zD)(g.X.APPEARANCE_DARK_SIDEBAR, {
    useTitle: () => _.intl.string(_.t.EpSHAQ),
    useSearchTerms: () => [_.intl.string(_.t.Ksh3ik)],
    useValue: function () {
        let e = (0, d.qo)();
        return (0, s.bG)([u.A, a.A], () => {
            let t = u.A.theme,
                n = a.A.useForcedColors;
            return e && (0, i.q)(t) && !n;
        });
    },
    usePredicate: function () {
        let e = null != c.eh.useSetting().customUserThemeSettings;
        return (0, s.bG)([u.A, r.A], () => {
            let t = u.A.theme,
                n = r.A.gradientPreset;
            return (0, i.q)(t) && null == n && !e;
        });
    },
    useDisabled: function () {
        return (0, s.bG)([u.A, a.A], () => {
            let e = u.A.theme,
                t = a.A.useForcedColors;
            return e !== m.NJ.LIGHT || t;
        });
    },
    setValue: l.LO,
});
