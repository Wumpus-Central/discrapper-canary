n.d(t, { w: () => m });
var i = n(311907),
    s = n(955572),
    l = n(775602),
    r = n(688810),
    a = n(259065),
    o = n(419954),
    d = n(780964),
    c = n(985018),
    u = n(864386);
let m = (0, o.zD)(d.X.DISPLAY_NAME_STYLES, {
    useTitle: () => c.intl.string(u.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, r.Ay)();
        return c.intl.format(u.default.aEax6P, {
            onClickOpenModal() {
                (0, a.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, i.bG)([l.A], () => l.A.displayNameStylesEnabled),
    setValue: (e) => (0, s.Dm)(e),
});
