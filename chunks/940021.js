n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(568170),
    a = n(915009),
    o = n(63063),
    s = n(695346),
    l = n(838436),
    c = n(51331),
    u = n(726985),
    d = n(981631),
    f = n(388032),
    p = n(517319);
function _() {
    let e = s.bh.useSetting(),
        t = (0, a.LN)(),
        n = f.t.sJYh5t,
        _ = f.t.cf9mvV,
        m = (0, i.P)();
    return (0, r.jsx)(l.U, {
        setting: u.s6.PRIVACY_DATA_QUESTS_V2,
        children: (0, r.jsx)(c.ZP, {
            title: f.intl.string(n),
            note: f.intl.format(_, { helpdeskArticle: o.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => s.bh.updateSetting(!e),
            disabled: m || t,
            tooltipText: t ? f.intl.string(p.default["6Af/cw"]) : void 0,
        }),
    });
}
