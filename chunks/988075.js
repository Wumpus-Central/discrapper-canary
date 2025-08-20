n.d(t, { Z: () => h }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(40330),
    c = n(95398),
    u = n(936141),
    d = n(546432),
    f = n(944486),
    _ = n(388032),
    p = n(382985);
function h(e) {
    let { file: t, name: n, size: a, spoiler: h } = e,
        m = (0, s.e7)([f.Z], () => f.Z.getChannelId()),
        g = i.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [E, b] = i.useState(h),
        y = i.useMemo(
            () => () =>
                (0, r.jsx)(d.mz, {
                    mimeType: g,
                    downloadURL: t.url,
                    showDownload: !0,
                    showImageAppPicker: !1,
                    isVisualMediaType: !1,
                    channelId: m,
                }),
            [t, g, m],
        ),
        O = (e) =>
            (0, r.jsx)(l.Z, {
                className: o()({ [p.fileHidden]: e }),
                url: t.url,
                fileName: null != n ? n : _.intl.string(_.t.GnuJ5u),
                fileSize: null != a ? a : 0,
                renderAdjacentContent: y,
            });
    return (0, r.jsx)("div", {
        className: p.fileDisplayContainer,
        children: h
            ? (0, r.jsx)(c.ZP, {
                  type: c.ZP.Types.ATTACHMENT,
                  reason: u.wk.SPOILER,
                  obscured: E,
                  onToggleObscurity: () => b((e) => !e),
                  children: (e) => O(e),
              })
            : O(!1),
    });
}
