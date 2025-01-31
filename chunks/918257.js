n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(208049),
    r = n(242291),
    l = n(63063),
    a = n(36703),
    o = n(674343),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, r.pI)();
    return (0, i.jsx)(o.Z, {
        title: d.intl.string(d.t.xbMc8v),
        description: d.intl.format(d.t.BPbGq6, { helpCenterArticle: l.Z.getArticleURL(c.BhN.SOUNDBOARD) }),
        label: d.intl.string(d.t.kbFsAA),
        volume: n,
        onVolumeChange: function (e) {
            (n = (0, a.A)(e)), (0, s.xz)(n);
        },
        refreshStyles: t
    });
}
