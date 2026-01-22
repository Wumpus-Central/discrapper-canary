i.d(e, {
    m: () => T,
});
var n = i(171316),
    l = i(419954),
    s = i(975571),
    r = i(253932),
    u = i(780964),
    a = i(652215),
    o = i(985018);
let T = (0, l.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
    useTitle: () => o.intl.string(o.t.CyLYKZ),
    useSubtitle: () =>
        o.intl.format(o.t["2QFDU/"], {
            helpdeskArticle: s.A.getArticleURL(a.MVz.QUESTS_PRIVACY_CONTROLS),
        }),
    useValue: function () {
        return !r.vf.useSetting();
    },
    setValue: function (t) {
        r.vf.updateSetting(!t);
    },
    useDisabled: function () {
        let t = r.H1.useSetting(),
            e = (0, n.uM)();
        return t || e;
    },
    useSearchTerms: () => [o.intl.string(o.t.CyLYKZ)],
});
