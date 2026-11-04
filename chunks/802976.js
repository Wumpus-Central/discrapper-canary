var l = n(582128),
    i = n(855986),
    a = n(596344),
    r = n(403362),
    s = n(419490),
    o = n(458977),
    u = n(110742),
    d = n(394039);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { attachment: t, messageId: n, channelId: c, guildId: m, width: h, height: f } = e,
                p = (0, i.bG)([a.A], () => (null != c && null != n ? a.A.getMessage(c, n) : void 0), [c, n]),
                g = l.useMemo(() => (0, u.Vi)(t), [t]),
                { enableDistributedClips: A } = o.A.useConfig({ location: "useMultiSourceConfig" }),
                v = (0, i.bG)([s.Ay], () => s.Ay.getMatchingPOVReferences(t.id), [t.id]),
                x = (0, i.yK)([a.A], () =>
                    v
                        .map((e) => a.A.getMessage(e.channelId, e.messageId))
                        .filter(r.Vq)
                        .sort((e, t) => e.id.localeCompare(t.id))
                        .slice(0, 3),
                );
            return l.useMemo(() => {
                if (0 !== v.length && A)
                    return {
                        original: {
                            id: t.id,
                            url: t.url,
                            durationSec: t.duration_secs,
                            startSec: 0,
                            poster: (0, d.s)(t.proxy_url ?? t.url, t, h, f, "webp"),
                            width: t.width,
                            height: t.height,
                            label: t.title,
                            owner: { avatarUrl: p?.author?.getAvatarURL(m, 48) ?? "", name: p?.author?.username ?? "" },
                        },
                        subSources: v.flatMap((e) => {
                            if (null == g) return [];
                            let t = x.find((t) => t.id === e.messageId && t.channel_id === e.channelId);
                            if (null == t) return [];
                            let n = t.attachments.find((t) => t.id === e.attachmentId);
                            return null == n
                                ? []
                                : {
                                      id: n.id,
                                      url: n.url,
                                      durationSec: e.endTimestamp / 1e3 - e.startTimestamp / 1e3,
                                      startSec: e.startTimestamp / 1e3 - g.startTimestamp / 1e3,
                                      poster: (0, d.s)(n.proxy_url, n, h, f, "webp"),
                                      width: n.width,
                                      height: n.height,
                                      label: n.title,
                                      owner: { avatarUrl: t.author.getAvatarURL(m, 48), name: t.author.username },
                                  };
                        }),
                        activeSourceId: t.id,
                    };
            }, [v, t, m, x, p, g, A, h, f]);
        },
    },
);
