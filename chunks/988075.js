n.d(t, { Z: () => p }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(40330),
    l = n(936141),
    c = n(546432),
    u = n(411405),
    d = n(388032),
    f = n(885443);
function p(e) {
    let { file: t, name: n, size: a, spoiler: p } = e,
        _ = i.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [m, h] = i.useState(p),
        [g, E] = i.useState(p);
    p !== m && (h(p), E(p));
    let b = i.useMemo(
            () => () =>
                (0, r.jsx)(c.mz, {
                    mimeType: _,
                    downloadURL: t.url,
                    showDownload: !0,
                    isVisualMediaType: !1,
                }),
            [t, _],
        ),
        y = (e) =>
            (0, r.jsx)(s.Z, {
                className: o()({ [f.fileHidden]: e }),
                url: t.url,
                fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
                fileSize: null != a ? a : 0,
                renderAdjacentContent: b,
            });
    return (0, r.jsx)("div", {
        className: f.fileDisplayContainer,
        children: p
            ? (0, r.jsx)(u.ZP, {
                  type: u.ZP.Types.ATTACHMENT,
                  reason: l.wk.SPOILER,
                  obscured: g,
                  onToggleObscurity: () => E((e) => !e),
                  children: (e) => y(e),
              })
            : y(!1),
    });
}
