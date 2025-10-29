n.d(t, { Z: () => _ }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(40330),
    l = n(95398),
    c = n(936141),
    u = n(546432),
    d = n(388032),
    f = n(382985);
function _(e) {
    let { file: t, name: n, size: a, spoiler: _ } = e,
        p = i.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [h, m] = i.useState(_),
        g = i.useMemo(
            () => () =>
                (0, r.jsx)(u.mz, {
                    mimeType: p,
                    downloadURL: t.url,
                    showDownload: !0,
                    isVisualMediaType: !1,
                }),
            [t, p],
        ),
        E = (e) =>
            (0, r.jsx)(s.Z, {
                className: o()({ [f.fileHidden]: e }),
                url: t.url,
                fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
                fileSize: null != a ? a : 0,
                renderAdjacentContent: g,
            });
    return (0, r.jsx)("div", {
        className: f.fileDisplayContainer,
        children: _
            ? (0, r.jsx)(l.ZP, {
                  type: l.ZP.Types.ATTACHMENT,
                  reason: c.wk.SPOILER,
                  obscured: h,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => E(e),
              })
            : E(!1),
    });
}
