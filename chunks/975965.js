n.d(t, { Q: () => u });
var i = n(311907),
    s = n(554146),
    l = n(955572),
    a = n(775602),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(985018);
let u = (0, r.zD)(d.X.HIGH_CONTRAST_MODE, {
    useTitle: () => c.intl.string(c.t.aZlePv),
    useSubtitle: () => c.intl.string(c.t["v2qF8+"]),
    useValue: () => (0, i.bG)([a.A], () => a.A.isHighContrastModeEnabled),
    setValue: (e) => (0, l.uh)(e ? a._.HIGH : a._.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: o.Xi.NEW, dismissibleContent: s.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
