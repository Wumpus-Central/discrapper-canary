"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(73153),
    c = n(334738),
    d = n(835369),
    u = n(218152),
    h = n(970278),
    A = n(747926),
    p = n(734057),
    g = n(403362),
    m = n(661191),
    _ = n(652215),
    f = n(37411),
    x = n(357976);
function C(e) {
    let { channel: t, channelRecord: n, deleteChannel: l } = e,
        C = (0, a.yK)(
            [h.A, p.A],
            () =>
                r()(h.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return m.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return p.A.getChannel(t);
                    })
                    .filter(g.Vq)
                    .sort((e, t) => m.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        E = s.useCallback((e, t) => {
            (0, A.JA)(e, t, f.H9.INBOX);
        }, []);
    return (
        s.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== C.length ||
                o.h.wait(() => {
                    (0, c.ack)(
                        t.channelId,
                        {
                            section: _.JJy.INBOX,
                            object: _.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: _.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        l(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: x.k,
            children: C.map((e) =>
                (0, i.jsx)(
                    u.Cp,
                    { channel: n, children: (0, i.jsx)(d.Ay, { className: x.u, threadId: e.id, goToThread: E }) },
                    e.id,
                ),
            ),
        })
    );
}
