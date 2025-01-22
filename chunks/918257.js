n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(208049),
    s = n(242291),
    a = n(63063),
    l = n(36703),
    o = n(674343),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, s.pI)();
    return (0, i.jsx)(o.Z, {
        title: d.intl.string(d.t.xbMc8v),
        description: d.intl.format(d.t.BPbGq6, { helpCenterArticle: a.Z.getArticleURL(c.BhN.SOUNDBOARD) }),
        label: d.intl.string(d.t.kbFsAA),
        volume: n,
        onVolumeChange: function (e) {
            (n = (0, l.A)(e)), (0, r.xz)(n);
        },
        refreshStyles: t
    });
}
