n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(206248),
    s = n(265486),
    o = n(274372),
    d = n(372684),
    u = n(399925),
    c = n(665039),
    A = n(985018);
function h(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: h } = e,
        _ = (0, a.bG)([o.A], () => {
            let e = o.A.getLastClipsSession()?.newClipIds;
            if (null == e) return null;
            let t = o.A.getClipIds().find((t) => e.includes(t));
            return null == t ? null : o.A.getClipById(t);
        }),
        E = (0, c.j)(_),
        p = r.useCallback(() => {
            (0, u.jA)();
        }, []);
    return null == _
        ? null
        : _.type !== d.nQ.SCREENSHOT && _.type !== d.nQ.VOICE_CLIP && null != E
          ? (0, i.jsx)(l.H, {
                targetElementRef: { current: n },
                position: "bottom",
                title: A.intl.string(A.t.JugHO7),
                body: A.intl.format(A.t["+qxkzC"], { count: h.newClipIds.length }),
                assetUrl: E,
                disableMediaViewer: !0,
                caretConfig: { align: "center" },
                action: { text: A.intl.string(A.t.tQPBml), onClick: t },
                onRequestClose: p,
            })
          : (0, i.jsx)(s.A, {
                targetElementRef: { current: n },
                position: "bottom",
                title: A.intl.string(A.t.JugHO7),
                body: A.intl.format(A.t["+qxkzC"], { count: h.newClipIds.length }),
                graphic: null != _.thumbnail ? { type: "image", src: _.thumbnail } : void 0,
                caretConfig: { align: "center" },
                actions: [{ text: A.intl.string(A.t.tQPBml), onClick: t }],
                onRequestClose: p,
            });
}
