n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(906732),
    s = n(208049),
    a = n(242291),
    l = n(63063),
    o = n(36703),
    c = n(674343),
    d = n(981631),
    u = n(388032);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.pI)(),
        { analyticsLocations: m } = (0, i.ZP)();
    return (0, r.jsx)(c.Z, {
        title: u.NW.string(u.t.xbMc8v),
        description: u.NW.format(u.t.BPbGq6, { helpCenterArticle: l.Z.getArticleURL(d.BhN.SOUNDBOARD) }),
        label: u.NW.string(u.t.kbFsAA),
        volume: n,
        onVolumeChange: function (e) {
            (n = (0, o.A)(e)), (0, s.xz)(n, m);
        },
        refreshStyles: t
    });
}
