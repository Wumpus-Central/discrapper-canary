l.d(n, { Z: () => x }), l(47120);
var t = l(200651),
    i = l(192379),
    r = l(120356),
    a = l.n(r),
    s = l(442837),
    o = l(40330),
    u = l(95398),
    c = l(169525),
    d = l(546432),
    m = l(944486),
    h = l(388032),
    p = l(572914);
function x(e) {
    let { file: n, name: l, size: r, spoiler: x } = e,
        v = (0, s.e7)([m.Z], () => m.Z.getChannelId()),
        f = i.useMemo(() => (null != n.contentType && -1 !== n.contentType.indexOf('/') ? n.contentType.split('/') : ['unknown', 'unknown']), [n.contentType]),
        [C, g] = i.useState(x),
        j = i.useMemo(
            () => () =>
                (0, t.jsx)(d.mz, {
                    mimeType: f,
                    downloadURL: n.url,
                    showDownload: !0,
                    showImageAppPicker: !1,
                    isVisualMediaType: !1,
                    channelId: v
                }),
            [n, f, v]
        ),
        N = (e) =>
            (0, t.jsx)(o.Z, {
                className: a()({ [p.fileHidden]: e }),
                url: n.url,
                fileName: null != l ? l : h.intl.string(h.t.GnuJ5u),
                fileSize: null != r ? r : 0,
                renderAdjacentContent: j
            });
    return (0, t.jsx)('div', {
        className: p.fileDisplayContainer,
        children: x
            ? (0, t.jsx)(u.Z, {
                  type: u.Z.Types.ATTACHMENT,
                  reason: c.wk.SPOILER,
                  obscured: C,
                  onToggleObscurity: () => g((e) => !e),
                  children: (e) => N(e)
              })
            : N(!1)
    });
}
