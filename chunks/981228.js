n.d(t, { m: () => c });
var i = n(171316),
    s = n(419954),
    l = n(975571),
    a = n(253932),
    r = n(780964),
    o = n(652215),
    d = n(985018);
let c = (0, s.zD)(r.X.DATA_USAGE_QUESTS_3P_SETTING, {
    useTitle: () => d.intl.string(d.t.CyLYKZ),
    useSubtitle: () =>
        d.intl.format(d.t["2QFDU/"], { helpdeskArticle: l.A.getArticleURL(o.MVz.QUESTS_PRIVACY_CONTROLS) }),
    useValue: function () {
        return !a.vf.useSetting();
    },
    setValue: function (e) {
        a.vf.updateSetting(!e);
    },
    useDisabled: function () {
        let e = a.H1.useSetting(),
            t = (0, i.uM)();
        return e || t;
    },
    useSearchTerms: () => [d.intl.string(d.t.CyLYKZ)],
});
