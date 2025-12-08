n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(722687),
    a = n(838436),
    o = n(51331),
    s = n(63063),
    l = n(652262),
    c = n(981631),
    u = n(225753),
    d = n(388032);
function f() {
    var e;
    let t = null != (e = (0, l.M)()) ? e : void 0,
        n = i.O8.useControlledSetting(t);
    return (0, r.jsx)(a.U, {
        children: (0, r.jsx)(o.ZP, {
            title: d.intl.string(u.default.ZhaNu8),
            note: d.intl.format(u.default.cnCK6b, {
                helpdeskArticle: s.Z.getArticleURL(c.BhN.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !n,
            onChange: (e) => i.O8.updateControlledSetting(t, !e),
        }),
    });
}
