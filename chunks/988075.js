r.d(t, { Z: () => O }), r(301563), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(442837),
    c = r(40330),
    s = r(95398),
    u = r(169525),
    p = r(546432),
    d = r(944486),
    f = r(388032),
    b = r(823670);
function O(e) {
    let { file: t, name: r, size: i, spoiler: O } = e,
        y = (0, a.e7)([d.Z], () => d.Z.getChannelId()),
        m = l.useMemo(() => (null != t.contentType && -1 !== t.contentType.indexOf('/') ? t.contentType.split('/') : ['unknown', 'unknown']), [t.contentType]),
        [j, g] = l.useState(O),
        h = l.useMemo(
            () => () =>
                (0, n.jsx)(p.mz, {
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
                className: o()({ [b.fileHidden]: e }),
                url: t.url,
                fileName: null != r ? r : f.NW.string(f.t.GnuJ5u),
                fileSize: null != i ? i : 0,
                renderAdjacentContent: h
            });
    return (0, n.jsx)('div', {
        className: b.fileDisplayContainer,
        children: O
            ? (0, n.jsx)(s.ZP, {
                  type: s.ZP.Types.ATTACHMENT,
                  reason: u.wk.SPOILER,
                  obscured: j,
                  onToggleObscurity: () => g((e) => !e),
                  children: (e) => v(e)
              })
            : v(!1)
    });
}
