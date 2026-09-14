n.d(t, { A: () => u });
var i = n(582128),
    l = n(17928),
    a = n(232835),
    s = n(403362),
    r = n(998218),
    o = n(915725),
    d = n(458977),
    c = n(110742);
function u(e) {
    let { attachment: t, messageId: n, channelId: u, guildId: h } = e,
        m = (0, l.bG)([a.A], () => (null != u && null != n ? a.A.getMessage(u, n) : void 0), [u, n]),
        p = i.useMemo(() => (0, c.Vi)(t), [t]),
        { enableDistributedClips: f } = d.A.useConfig({ location: "useMultiSourceConfig" }),
        g = (0, l.bG)([o.Ay], () => o.Ay.getMatchingPOVReferences(t.id), [t.id]),
        A = (0, l.yK)([a.A], () =>
            g
                .map((e) => a.A.getMessage(e.channelId, e.messageId))
                .filter(s.Vq)
                .sort((e, t) => e.id.localeCompare(t.id))
                .slice(0, 3),
        );
    return i.useMemo(() => {
        if (0 === g.length || !f) return;
        let e = r.A.toURLSafe(t.proxy_url);
        return (
            e?.searchParams.append("format", "webp"),
            {
                original: {
                    id: t.id,
                    url: t.url,
                    durationSec: t.duration_secs,
                    startSec: 0,
                    poster: e?.toString(),
                    label: t.title,
                    owner: { avatarUrl: m?.author?.getAvatarURL(h, 48) ?? "", name: m?.author?.username ?? "" },
                },
                subSources: g.flatMap((e) => {
                    if (null == p) return [];
                    let t = A.find((t) => t.id === e.messageId && t.channel_id === e.channelId);
                    if (null == t) return [];
                    let n = t.attachments.find((t) => t.id === e.attachmentId);
                    if (null == n) return [];
                    let i = r.A.toURLSafe(n.proxy_url);
                    return (
                        i?.searchParams.append("format", "webp"),
                        {
                            id: n.id,
                            url: n.url,
                            durationSec: e.endTimestamp / 1e3 - e.startTimestamp / 1e3,
                            startSec: e.startTimestamp / 1e3 - p.startTimestamp / 1e3,
                            poster: i?.toString(),
                            label: n.title,
                            owner: { avatarUrl: t.author.getAvatarURL(h, 48), name: t.author.username },
                        }
                    );
                }),
                activeSourceId: t.id,
            }
        );
    }, [g, t, h, A, m, p, f]);
}
