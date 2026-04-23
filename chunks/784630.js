n.d(t, { t: () => m });
var i = n(945276),
    s = n(639555),
    l = n(617641),
    a = n(546140),
    r = n(776038),
    o = n(419954),
    d = n(975571),
    u = n(780964),
    c = n(652215),
    g = n(985018);
let m = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => g.intl.string(g.t.qFsx5q),
    useSubtitle: () => g.intl.format(g.t.lunaRv, { learnMoreLink: d.A.getArticleURL(c.MVz.SAFETY_ALERTS) }),
    useValue: a.L,
    setValue: r.a,
    usePredicate: function () {
        let e = (0, l.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, s.Rv)({ location: "DMSafetyAlertsSetting" }),
            n = (0, i.A)() ?? !0;
        return e && !n && !t;
    },
});
