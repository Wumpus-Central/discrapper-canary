n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(73153),
    c = n(334738),
    d = n(835369),
    u = n(218152),
    h = n(970278),
    A = n(747926),
    _ = n(734057),
    m = n(403362),
    g = n(661191),
    p = n(652215),
    f = n(37411),
    x = n(440649);
function E(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        E = (0, r.yK)(
            [h.A, _.A],
            () =>
                a()(h.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return g.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return _.A.getChannel(t);
                    })
                    .filter(m.Vq)
                    .sort((e, t) => g.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        I = l.useCallback((e, t) => {
            (0, A.JA)(e, t, f.H9.INBOX);
        }, []);
    return (
        l.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== E.length ||
                o.h.wait(() => {
                    (0, c.ack)(
                        t.channelId,
                        {
                            section: p.JJy.INBOX,
                            object: p.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: p.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: x.k,
            children: E.map((e) =>
                (0, i.jsx)(
                    u.Cp,
                    { channel: n, children: (0, i.jsx)(d.Ay, { className: x.u, threadId: e.id, goToThread: I }) },
                    e.id,
                ),
            ),
        })
    );
}
