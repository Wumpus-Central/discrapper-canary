n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(906732),
    a = n(208049),
    o = n(242291),
    s = n(63063),
    l = n(36703),
    c = n(674343),
    u = n(981631),
    d = n(388032);
function f(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, o.pI)(),
        { analyticsLocations: f } = (0, i.ZP)();
    function _(e) {
        (n = (0, l.A)(e)), (0, a.xz)(n, f);
    }
    return (0, r.jsx)(c.Z, {
        title: d.intl.string(d.t.xbMc8v),
        description: d.intl.format(d.t.BPbGq6, { helpCenterArticle: s.Z.getArticleURL(u.BhN.SOUNDBOARD) }),
        label: d.intl.string(d.t.kbFsAA),
        volume: n,
        onVolumeChange: _,
        refreshStyles: t,
    });
}
