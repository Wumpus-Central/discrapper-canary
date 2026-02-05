n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(73153),
    d = n(334738),
    c = n(835369),
    u = n(218152),
    h = n(970278),
    A = n(747926),
    g = n(734057),
    m = n(403362),
    p = n(661191),
    _ = n(652215),
    x = n(37411),
    f = n(357976);
function E(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        E = (0, r.yK)(
            [h.A, g.A],
            () =>
                a()(h.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return p.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return g.A.getChannel(t);
                    })
                    .filter(m.Vq)
                    .sort((e, t) => p.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        C = l.useCallback((e, t) => {
            (0, A.JA)(e, t, x.H9.INBOX);
        }, []);
    return (
        l.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== E.length ||
                o.h.wait(() => {
                    (0, d.ack)(
                        t.channelId,
                        {
                            section: _.JJy.INBOX,
                            object: _.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: _.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: f.k,
            children: E.map((e) =>
                (0, i.jsx)(
                    u.Cp,
                    { channel: n, children: (0, i.jsx)(c.Ay, { className: f.u, threadId: e.id, goToThread: C }) },
                    e.id,
                ),
            ),
        })
    );
}
