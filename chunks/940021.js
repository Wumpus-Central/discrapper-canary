n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(63063),
    l = n(695346),
    r = n(838436),
    a = n(51331),
    o = n(726985),
    c = n(981631),
    d = n(388032);
function u() {
    let e = l.bh.useSetting();
    return (0, i.jsx)(r.U, {
        setting: o.s6.PRIVACY_DATA_QUESTS_V2,
        children: (0, i.jsx)(a.Z, {
            title: d.intl.string(d.t.VkS7YW),
            note: d.intl.format(d.t['7Q2yX1'], { helpdeskArticle: s.Z.getArticleURL(c.BhN.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => l.bh.updateSetting(!e)
        })
    });
}
