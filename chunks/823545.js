t.d(n, { A: () => m });
var l = t(582128),
    r = t(310784),
    a = t.n(r);
t(440745);
var i = t(855986),
    s = t(317097),
    o = t(775602),
    u = t(654107),
    c = t(413599),
    d = t(646514);
let m = function (e) {
    var n;
    let t = (0, i.bG)([o.Ay], () => o.Ay.saturation),
        r =
            ((n = (0, i.bG)([c.A], () => c.A.theme)),
            d.A.colors.BACKGROUND_SURFACE_HIGH.resolve?.({ theme: n, saturation: t })?.hex?.() ?? "#000"),
        [m, h] = (0, u.rh)(e, r);
    return l.useMemo(() => {
        let e = (0, s.LX)(m),
            n = (0, s.LX)(h);
        for (let n = 1; n < 8 && !((0, s.OK)(e) >= 0.725); n++) e = a()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, s.OK)(n) >= 0.725); e++) n = a()(n).darken(0.5).num();
        return { primaryColor: (0, s.Hl)(e), secondaryColor: (0, s.Hl)(n) };
    }, [m, h]);
};
