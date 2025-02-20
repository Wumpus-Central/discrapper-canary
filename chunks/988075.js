r.d(t, { Z: () => O }), r(301563), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(442837),
    c = r(40330),
    s = r(95398),
    u = r(169525),
    d = r(546432),
    p = r(944486),
    b = r(388032),
    f = r(547576);
function O(e) {
    let { file: t, name: r, size: i, spoiler: O } = e,
        y = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
        m = l.useMemo(() => (null != t.contentType && -1 !== t.contentType.indexOf('/') ? t.contentType.split('/') : ['unknown', 'unknown']), [t.contentType]),
        [j, g] = l.useState(O),
        h = l.useMemo(
            () => () =>
                (0, n.jsx)(d.mz, {
                    mimeType: m,
                    downloadURL: t.url,
                    showDownload: !0,
                    showImageAppPicker: !1,
                    isVisualMediaType: !1,
                    channelId: y
                }),
            [t, m, y]
        ),
        v = (e) =>
            (0, n.jsx)(c.Z, {
                className: o()({ [f.fileHidden]: e }),
                url: t.url,
                fileName: null != r ? r : b.NW.string(b.t.GnuJ5u),
                fileSize: null != i ? i : 0,
                renderAdjacentContent: h
            });
    return (0, n.jsx)('div', {
        className: f.fileDisplayContainer,
        children: O
            ? (0, n.jsx)(s.Z, {
                  type: s.Z.Types.ATTACHMENT,
                  reason: u.wk.SPOILER,
                  obscured: j,
                  onToggleObscurity: () => g((e) => !e),
                  children: (e) => v(e)
              })
            : v(!1)
    });
}
