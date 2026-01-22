n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(632553),
    a = n(171316),
    s = n(975571),
    o = n(253932),
    l = n(871930),
    c = n(578746),
    u = n(531525),
    d = n(652215),
    f = n(985018),
    p = n(842130);
function _() {
    let e = o.vf.useSetting(),
        t = o.H1.useSetting(),
        n = (0, a.uM)(),
        _ = (0, i.g)();
    return (0, r.jsx)(l.h, {
        setting: u.H.PRIVACY_DATA_QUESTS_3P,
        children: (0, r.jsx)(c.Ay, {
            title: f.intl.string(f.t.CyLYKZ),
            note: f.intl.format(f.t["2QFDU/"], { helpdeskArticle: s.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => o.vf.updateSetting(!e),
            disabled: _ || t || n,
            tooltipText: n ? f.intl.string(p.default["6Af/cw"]) : void 0,
        }),
    });
}
