(r.d(t, { Z: () => m }), r(35282), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(442837),
    c = r(40330),
    s = r(95398),
    u = r(936141),
    d = r(546432),
    p = r(944486),
    f = r(388032),
    b = r(823670);
function m(e) {
    let { file: t, name: r, size: i, spoiler: m } = e,
        O = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
        y = l.useMemo(() => (null != t.contentType && -1 !== t.contentType.indexOf('/') ? t.contentType.split('/') : ['unknown', 'unknown']), [t.contentType]),
        [j, g] = l.useState(m),
        h = l.useMemo(
            () => () =>
                (0, n.jsx)(d.mz, {
                    mimeType: y,
                    downloadURL: t.url,
                    showDownload: !0,
                    showImageAppPicker: !1,
                    isVisualMediaType: !1,
                    channelId: O
                }),
            [t, y, O]
        ),
        v = (e) =>
            (0, n.jsx)(c.Z, {
                className: o()({ [b.fileHidden]: e }),
                url: t.url,
                fileName: null != r ? r : f.intl.string(f.t.GnuJ5u),
                fileSize: null != i ? i : 0,
                renderAdjacentContent: h
            });
    return (0, n.jsx)('div', {
        className: b.fileDisplayContainer,
        children: m
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
