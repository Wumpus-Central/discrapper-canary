n.d(t, { r: () => u });
var i = n(311907),
    s = n(936388),
    l = n(714763),
    a = n(814278),
    r = n(419954),
    o = n(780964),
    d = n(985018);
let u = (0, r.zD)(o.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => d.intl.string(d.t["opi/XK"]),
    useSubtitle: () => d.intl.format(d.t["/T+ZlP"], { helpArticle: (0, a.Lu)() }),
    useValue: function () {
        return (0, i.bG)([l.A], () => l.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        s.A.updatePersistentCodesEnabled(e);
    },
});
