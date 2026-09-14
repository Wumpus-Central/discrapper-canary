n.d(t, { A: () => d });
var r = n(582128),
    l = n(17928),
    i = n(232835),
    a = n(403362),
    s = n(998218),
    u = n(915725),
    o = n(458977),
    c = n(110742);
function d(e) {
    let { attachment: t, messageId: n, channelId: d, guildId: m } = e,
        f = (0, l.bG)([i.A], () => (null != d && null != n ? i.A.getMessage(d, n) : void 0), [d, n]),
        g = r.useMemo(() => (0, c.Vi)(t), [t]),
        { enableDistributedClips: h } = o.A.useConfig({ location: "useMultiSourceConfig" }),
        p = (0, l.bG)([u.Ay], () => u.Ay.getMatchingPOVReferences(t.id), [t.id]),
        x = (0, l.yK)([i.A], () => p.map((e) => i.A.getMessage(e.channelId, e.messageId)).filter(a.Vq));
    return r.useMemo(() => {
        if (0 === p.length || !h) return;
        let e = s.A.toURLSafe(t.proxy_url);
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
                    let t = x.find((t) => t.id === e.messageId && t.channel_id === e.channelId);
                    if (null == t) return [];
                    let n = t.attachments.find((t) => t.id === e.attachmentId);
                    if (null == n) return [];
                    let r = s.A.toURLSafe(n.proxy_url);
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
    }, [p, t, m, x, f, g, h]);
}
