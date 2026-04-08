n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(342494),
    s = n(274372),
    o = n(372684),
    d = n(399925),
    c = n(665039),
    u = n(985018);
function A(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: A } = e,
        h = (0, a.bG)([s.A], () => {
            let e = s.A.getLastClipsSession()?.newClipIds;
            if (null == e) return null;
            let t = s.A.getClipIds().find((t) => e.includes(t));
            return null == t ? null : s.A.getClipById(t);
        }),
        _ = (0, c.j)(h),
        m = r.useCallback(() => {
            (0, d.jA)();
        }, []);
    return null == h
        ? null
        : h.type !== o.nQ.SCREENSHOT && h.type !== o.nQ.VOICE_CLIP && null != _
          ? (0, i.jsx)(l.HZ, {
                targetElementRef: { current: n },
                position: "bottom",
                title: u.intl.string(u.t.JugHO7),
                body: u.intl.format(u.t["+qxkzC"], { count: A.newClipIds.length }),
                assetUrl: _,
                disableMediaViewer: !0,
                caretConfig: { align: "center" },
                action: { text: u.intl.string(u.t.tQPBml), onClick: t },
                onRequestClose: m,
            })
          : (0, i.jsx)(l.AM, {
                targetElementRef: { current: n },
                position: "bottom",
                title: u.intl.string(u.t.JugHO7),
                body: u.intl.format(u.t["+qxkzC"], { count: A.newClipIds.length }),
                graphic: null != h.thumbnail ? { type: "image", src: h.thumbnail } : void 0,
                caretConfig: { align: "center" },
                actions: [{ text: u.intl.string(u.t.tQPBml), onClick: t }],
                onRequestClose: m,
            });
}
