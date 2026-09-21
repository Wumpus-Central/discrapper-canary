n.d(t, { A: () => d });
var r = n(582128),
    l = n(17928),
    a = n(232835),
    i = n(403362),
    u = n(998218),
    s = n(915725),
    c = n(458977),
    o = n(110742);
function d(e) {
    let { attachment: t, messageId: n, channelId: d, guildId: m } = e,
        f = (0, l.bG)([a.A], () => (null != d && null != n ? a.A.getMessage(d, n) : void 0), [d, n]),
        g = r.useMemo(() => (0, o.Vi)(t), [t]),
        { enableDistributedClips: h } = c.A.useConfig({ location: "useMultiSourceConfig" }),
        p = (0, l.bG)([s.Ay], () => s.Ay.getMatchingPOVReferences(t.id), [t.id]),
        v = (0, l.yK)([a.A], () =>
            p
                .map((e) => a.A.getMessage(e.channelId, e.messageId))
                .filter(i.Vq)
                .sort((e, t) => e.id.localeCompare(t.id))
                .slice(0, 3),
        );
    return r.useMemo(() => {
        if (0 === p.length || !h) return;
        let e = u.A.toURLSafe(t.proxy_url ?? t.url);
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
                    owner: { avatarUrl: f?.author?.getAvatarURL(m, 48) ?? "", name: f?.author?.username ?? "" },
                },
                subSources: p.flatMap((e) => {
                    if (null == g) return [];
                    let t = v.find((t) => t.id === e.messageId && t.channel_id === e.channelId);
                    if (null == t) return [];
                    let n = t.attachments.find((t) => t.id === e.attachmentId);
                    if (null == n) return [];
                    let r = u.A.toURLSafe(n.proxy_url);
                    return (
                        r?.searchParams.append("format", "webp"),
                        {
                            id: n.id,
                            url: n.url,
                            durationSec: e.endTimestamp / 1e3 - e.startTimestamp / 1e3,
                            startSec: e.startTimestamp / 1e3 - g.startTimestamp / 1e3,
                            poster: r?.toString(),
                            label: n.title,
                            owner: { avatarUrl: t.author.getAvatarURL(m, 48), name: t.author.username },
                        }
                    );
                }),
                activeSourceId: t.id,
            }
        );
    }, [p, t, m, v, f, g, h]);
}
