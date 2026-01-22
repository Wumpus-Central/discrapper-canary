i.d(e, {
    X: () => T,
});
var n = i(171316),
    l = i(419954),
    s = i(975571),
    r = i(253932),
    u = i(780964),
    a = i(652215),
    o = i(985018);
let T = (0, l.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
    useTitle: () => o.intl.string(o.t.sJYh5t),
    useSubtitle: () =>
        o.intl.format(o.t.cf9mvV, {
            helpdeskArticle: s.A.getArticleURL(a.MVz.QUESTS_PRIVACY_CONTROLS),
        }),
    useValue: function () {
        return !r.H1.useSetting();
    },
    setValue: function (t) {
        r.H1.updateSetting(!t);
    },
    useSearchTerms: () => [o.intl.string(o.t.VkS7Yd)],
    useDisabled: n.uM,
});
