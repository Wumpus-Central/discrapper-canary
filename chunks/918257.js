n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(906732),
    s = n(208049),
    l = n(242291),
    a = n(63063),
    o = n(36703),
    c = n(674343),
    d = n(981631),
    u = n(388032);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, l.pI)(),
        { analyticsLocations: m } = (0, r.ZP)();
    return (0, i.jsx)(c.Z, {
        title: u.intl.string(u.t.xbMc8v),
        description: u.intl.format(u.t.BPbGq6, { helpCenterArticle: a.Z.getArticleURL(d.BhN.SOUNDBOARD) }),
        label: u.intl.string(u.t.kbFsAA),
        volume: n,
        onVolumeChange: function (e) {
            (n = (0, o.A)(e)), (0, s.xz)(n, m);
        },
        refreshStyles: t
    });
}
