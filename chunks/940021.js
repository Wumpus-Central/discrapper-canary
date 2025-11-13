n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(915009),
    a = n(63063),
    o = n(695346),
    s = n(695463),
    l = n(838436),
    c = n(51331),
    u = n(726985),
    d = n(981631),
    f = n(388032),
    _ = n(597754);
function p() {
    let e = o.bh.useSetting(),
        t = (0, s.W)("DataUsageQuestsSetting"),
        n = (0, i.LN)(),
        p = t ? f.t.sJYh5t : f.t.VkS7Yd,
        h = t ? f.t.cf9mvV : f.t["7Q2yX9"];
    return (0, r.jsx)(l.U, {
        setting: u.s6.PRIVACY_DATA_QUESTS_V2,
        children: (0, r.jsx)(c.ZP, {
            title: f.intl.string(p),
            note: f.intl.format(h, { helpdeskArticle: a.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => o.bh.updateSetting(!e),
            disabled: n,
            tooltipText: n ? f.intl.string(_.default["6Af/cw"]) : void 0,
        }),
    });
}
