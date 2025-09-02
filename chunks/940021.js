n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(63063),
    a = n(695346),
    o = n(695463),
    s = n(838436),
    l = n(51331),
    c = n(726985),
    u = n(981631),
    d = n(388032);
function f() {
    let e = a.bh.useSetting(),
        t = (0, o.W)("DataUsageQuestsSetting"),
        n = t ? d.t.sJYh5u : d.t.VkS7YW,
        f = t ? d.t.cf9mvb : d.t["7Q2yX1"];
    return (0, r.jsx)(s.U, {
        setting: c.s6.PRIVACY_DATA_QUESTS_V2,
        children: (0, r.jsx)(l.Z, {
            title: d.intl.string(n),
            note: d.intl.format(f, { helpdeskArticle: i.Z.getArticleURL(u.BhN.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => a.bh.updateSetting(!e),
        }),
    });
}
