n.d(t, { t: () => g });
var i = n(945276),
    s = n(639555),
    l = n(617641),
    a = n(546140),
    r = n(776038),
    o = n(419954),
    d = n(975571),
    c = n(780964),
    u = n(652215),
    m = n(985018);
let g = (0, o.zD)(c.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => m.intl.string(m.t.qFsx5q),
    useSubtitle: () => m.intl.format(m.t.lunaRv, { learnMoreLink: d.A.getArticleURL(u.MVz.SAFETY_ALERTS) }),
    useValue: a.L,
    setValue: r.a,
    usePredicate: function () {
        let e = (0, l.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, s.Rv)({ location: "DMSafetyAlertsSetting" }),
            n = (0, i.A)() ?? !0;
        return e && !n && !t;
    },
});
