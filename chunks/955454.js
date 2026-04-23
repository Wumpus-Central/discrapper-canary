n.d(t, { A: () => p });
var s = n(627968),
    a = n(64700),
    l = n(735438),
    i = n.n(l),
    r = n(311907),
    o = n(73153),
    d = n(334738),
    c = n(835369),
    u = n(218152),
    h = n(970278),
    _ = n(747926),
    A = n(734057),
    m = n(403362),
    g = n(661191),
    f = n(652215),
    E = n(37411),
    N = n(791641);
function p(e) {
    let { channel: t, channelRecord: n, deleteChannel: l } = e,
        p = (0, r.yK)(
            [h.A, A.A],
            () =>
                i()(h.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return g.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return A.A.getChannel(t);
                    })
                    .filter(m.Vq)
                    .sort((e, t) => g.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        I = a.useCallback((e, t) => {
            (0, _.JA)(e, t, E.H9.INBOX);
        }, []);
    return (
        a.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== p.length ||
                o.h.wait(() => {
                    (0, d.ack)(
                        t.channelId,
                        {
                            section: f.JJy.INBOX,
                            object: f.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: f.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        l(t.channelId);
                });
        }),
        (0, s.jsx)("div", {
            className: N.k,
            children: p.map((e) =>
                (0, s.jsx)(
                    u.Cp,
                    { channel: n, children: (0, s.jsx)(c.Ay, { className: N.u, threadId: e.id, goToThread: I }) },
                    e.id,
                ),
            ),
        })
    );
}
