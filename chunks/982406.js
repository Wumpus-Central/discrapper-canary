n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(776231),
    o = n(664111),
    d = n(67281),
    c = n(838541),
    u = n(878159);
function _(e) {
    let { attachment: t, posterUrl: n, guildId: r, className: _ } = e,
        m = t.width ?? 0,
        h = t.height ?? 0,
        p = m >= h ? "landscape" : "portrait",
        g = (0, s.AE)({ src: n, width: m, height: h }),
        A = a.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: a } = e;
                return (0, i.jsx)(d.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds:
                        t.clip_participants?.map((e) => {
                            let { id: t } = e;
                            return t;
                        }) ?? [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: r,
                    playerState: n,
                    isControlBarExpanded: a,
                });
            },
            [t, r],
        );
    return (0, i.jsx)("div", {
        className: l()(u.k, _),
        style: { aspectRatio: `${m} / ${h}`, maxHeight: c.Rk },
        children: (0, i.jsx)(o.A, {
            src: t.url,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: g,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: !1,
            orientation: p,
            renderPersistentOverlay: A,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onOptimisticProgressUpdate: () => {},
            performanceClockStartTime: 0,
        }),
    });
}
