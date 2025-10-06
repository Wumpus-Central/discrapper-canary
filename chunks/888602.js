n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(722687),
    a = n(838436),
    o = n(51331),
    s = n(63063),
    l = n(652262),
    c = n(981631),
    u = n(345909),
    d = n(388032);
function f() {
    var e;
    let t = null != (e = (0, l.M)()) ? e : void 0,
        n = i.O8.useControlledSetting(t);
    return (0, r.jsx)(a.U, {
        children: (0, r.jsx)(o.Z, {
            title: d.intl.string(u.default.ZhaNu7),
            note: d.intl.format(u.default.cnCK6e, {
                helpdeskArticle: s.Z.getArticleURL(c.BhN.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !n,
            onChange: (e) => i.O8.updateControlledSetting(t, !e),
        }),
    });
}
