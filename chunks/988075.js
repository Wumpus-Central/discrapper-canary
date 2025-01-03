t.d(n, {
    Z: function () {
        return h;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(442837),
    s = t(40330),
    c = t(95398),
    u = t(169525),
    d = t(546432),
    m = t(944486),
    f = t(388032),
    p = t(116803);
function h(e) {
    let { file: n, name: t, size: r, spoiler: h } = e,
        x = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
        v = i.useMemo(() => (null != n.contentType && -1 !== n.contentType.indexOf('/') ? n.contentType.split('/') : ['unknown', 'unknown']), [n.contentType]),
        [g, C] = i.useState(h),
        _ = i.useMemo(
            () => () =>
                (0, l.jsx)(d.mz, {
                    mimeType: v,
                    downloadURL: n.url,
                    showDownload: !0,
                    showImageAppPicker: !1,
                    isVisualMediaType: !1,
                    channelId: x
                }),
            [n, v, x]
        ),
        b = (e) =>
            (0, l.jsx)(s.Z, {
                className: a()({ [p.fileHidden]: e }),
                url: n.url,
                fileName: null != t ? t : f.intl.string(f.t.GnuJ5u),
                fileSize: null != r ? r : 0,
                renderAdjacentContent: _
            });
    return (0, l.jsx)('div', {
        className: p.fileDisplayContainer,
        children: h
            ? (0, l.jsx)(c.Z, {
                  type: c.Z.Types.ATTACHMENT,
                  reason: u.wk.SPOILER,
                  obscured: g,
                  onToggleObscurity: () => C((e) => !e),
                  children: (e) => b(e)
              })
            : b(!1)
    });
}
