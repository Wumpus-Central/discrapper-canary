a.d(t, { A: () => u });
var n = a(627968),
    r = a(64700),
    o = a(503698),
    i = a.n(o),
    c = a(776231),
    l = a(664111),
    _ = a(67281),
    s = a(838541),
    d = a(878159);
function u(e) {
    let { attachment: t, posterUrl: a, guildId: o, className: u } = e,
        p = t.width ?? 0,
        m = t.height ?? 0,
        b = p >= m ? "landscape" : "portrait",
        f = (0, c.AE)({ src: a, width: p, height: m }),
        C = r.useCallback(
            (e) => {
                let { playerState: a, isControlBarExpanded: r } = e;
                return (0, n.jsx)(_.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds:
                        t.clip_participants?.map((e) => {
                            let { id: t } = e;
                            return t;
                        }) ?? [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: o,
                    playerState: a,
                    isControlBarExpanded: r,
                });
            },
            [t, o],
        );
    return (0, n.jsx)("div", {
        className: i()(d.k, u),
        style: { aspectRatio: `${p} / ${m}`, maxHeight: s.Rk },
        children: (0, n.jsx)(l.A, {
            src: t.url,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: f,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: !1,
            orientation: b,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: C,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onOptimisticProgressUpdate: () => {},
            performanceClockStartTime: 0,
        }),
    });
}
