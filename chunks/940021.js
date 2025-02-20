n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(63063),
    s = n(695346),
    a = n(838436),
    l = n(51331),
    o = n(726985),
    c = n(981631),
    d = n(388032);
function u() {
    let e = s.bh.useSetting();
    return (0, r.jsx)(a.U, {
        setting: o.s6.PRIVACY_DATA_QUESTS_V2,
        children: (0, r.jsx)(l.Z, {
            title: d.NW.string(d.t.VkS7YW),
            note: d.NW.format(d.t['7Q2yX1'], { helpdeskArticle: i.Z.getArticleURL(c.BhN.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => s.bh.updateSetting(!e)
        })
    });
}
