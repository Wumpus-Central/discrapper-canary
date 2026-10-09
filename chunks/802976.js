n.d(t, { A: () => d });
var r = n(582128),
    l = n(17928),
    a = n(232835),
    i = n(403362),
    u = n(915725),
    s = n(458977),
    c = n(110742),
    o = n(394039);
function d(e) {
    let { attachment: t, messageId: n, channelId: d, guildId: m, width: f, height: h } = e,
        g = (0, l.bG)([a.A], () => (null != d && null != n ? a.A.getMessage(d, n) : void 0), [d, n]),
        p = r.useMemo(() => (0, c.Vi)(t), [t]),
        { enableDistributedClips: v } = s.A.useConfig({ location: "useMultiSourceConfig" }),
        x = (0, l.bG)([u.Ay], () => u.Ay.getMatchingPOVReferences(t.id), [t.id]),
        S = (0, l.yK)([a.A], () =>
            x
                .map((e) => a.A.getMessage(e.channelId, e.messageId))
                .filter(i.Vq)
                .sort((e, t) => e.id.localeCompare(t.id))
                .slice(0, 3),
        );
    return r.useMemo(() => {
        if (0 !== x.length && v)
            return {
                original: {
                    id: t.id,
                    url: t.url,
                    durationSec: t.duration_secs,
                    startSec: 0,
                    poster: (0, o.s)(t.proxy_url ?? t.url, t, f, h, "webp"),
                    width: t.width,
                    height: t.height,
                    label: t.title,
                    owner: { avatarUrl: g?.author?.getAvatarURL(m, 48) ?? "", name: g?.author?.username ?? "" },
                },
                subSources: x.flatMap((e) => {
                    if (null == p) return [];
                    let t = S.find((t) => t.id === e.messageId && t.channel_id === e.channelId);
                    if (null == t) return [];
                    let n = t.attachments.find((t) => t.id === e.attachmentId);
                    return null == n
                        ? []
                        : {
                              id: n.id,
                              url: n.url,
                              durationSec: e.endTimestamp / 1e3 - e.startTimestamp / 1e3,
                              startSec: e.startTimestamp / 1e3 - p.startTimestamp / 1e3,
                              poster: (0, o.s)(n.proxy_url, n, f, h, "webp"),
                              width: n.width,
                              height: n.height,
                              label: n.title,
                              owner: { avatarUrl: t.author.getAvatarURL(m, 48), name: t.author.username },
                          };
                }),
                activeSourceId: t.id,
            };
    }, [x, t, m, S, g, p, v, f, h]);
}
