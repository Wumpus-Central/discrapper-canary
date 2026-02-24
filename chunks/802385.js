i.d(e, { Q: () => A });
var n = i(311907),
    l = i(554146),
    s = i(955572),
    r = i(775602),
    a = i(379848),
    u = i(419954),
    o = i(780964),
    d = i(985018);
let A = (0, u.zD)(o.X.HIGH_CONTRAST_MODE, {
    useTitle: () => d.intl.string(d.t.aZlePv),
    useSubtitle: () => d.intl.string(d.t["v2qF8+"]),
    useValue: () => (0, n.bG)([r.A], () => r.A.isHighContrastModeEnabled),
    setValue: (t) => (0, s.uh)(t ? r._.HIGH : r._.DEFAULT),
    useBadge: () => {
        let [t] = (0, a.kn)([l.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE]);
        return t === l.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0;
    },
});
