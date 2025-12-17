n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(915009),
    a = n(63063),
    o = n(695346),
    s = n(838436),
    l = n(51331),
    c = n(726985),
    u = n(981631),
    d = n(388032),
    f = n(517319);
function p() {
    let e = o.bh.useSetting(),
        t = (0, i.LN)(),
        n = d.t.sJYh5t,
        p = d.t.cf9mvV;
    return (0, r.jsx)(s.U, {
        setting: c.s6.PRIVACY_DATA_QUESTS_V2,
        children: (0, r.jsx)(l.ZP, {
            title: d.intl.string(n),
            note: d.intl.format(p, { helpdeskArticle: a.Z.getArticleURL(u.BhN.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => o.bh.updateSetting(!e),
            disabled: t,
            tooltipText: t ? d.intl.string(f.default["6Af/cw"]) : void 0,
        }),
    });
}
