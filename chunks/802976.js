var i = n(582128),
    l = n(855986),
    r = n(596344),
    a = n(403362),
    s = n(419490),
    o = n(458977),
    u = n(110742),
    c = n(394039);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { attachment: t, messageId: n, channelId: d, guildId: m, width: f, height: p } = e,
                h = (0, l.bG)([r.A], () => (null != d && null != n ? r.A.getMessage(d, n) : void 0), [d, n]),
                g = i.useMemo(() => (0, u.Vi)(t), [t]),
                { enableDistributedClips: A } = o.A.useConfig({ location: "useMultiSourceConfig" }),
                C = (0, l.bG)([s.Ay], () => s.Ay.getMatchingPOVReferences(t.id), [t.id]),
                E = (0, l.yK)([r.A], () =>
                    C.map((e) => r.A.getMessage(e.channelId, e.messageId))
                        .filter(a.Vq)
                        .sort((e, t) => e.id.localeCompare(t.id))
                        .slice(0, 3),
                );
            return i.useMemo(() => {
                if (0 !== C.length && A)
                    return {
                        original: {
                            id: t.id,
                            url: t.url,
                            durationSec: t.duration_secs,
                            startSec: 0,
                            poster: (0, c.s)(t.proxy_url ?? t.url, t, f, p, "webp"),
                            width: t.width,
                            height: t.height,
                            label: t.title,
                            owner: { avatarUrl: h?.author?.getAvatarURL(m, 48) ?? "", name: h?.author?.username ?? "" },
                        },
                        subSources: C.flatMap((e) => {
                            if (null == g) return [];
                            let t = E.find((t) => t.id === e.messageId && t.channel_id === e.channelId);
                            if (null == t) return [];
                            let n = t.attachments.find((t) => t.id === e.attachmentId);
                            return null == n
                                ? []
                                : {
                                      id: n.id,
                                      url: n.url,
                                      durationSec: e.endTimestamp / 1e3 - e.startTimestamp / 1e3,
                                      startSec: e.startTimestamp / 1e3 - g.startTimestamp / 1e3,
                                      poster: (0, c.s)(n.proxy_url, n, f, p, "webp"),
                                      width: n.width,
                                      height: n.height,
                                      label: n.title,
                                      owner: { avatarUrl: t.author.getAvatarURL(m, 48), name: t.author.username },
                                  };
                        }),
                        activeSourceId: t.id,
                    };
            }, [C, t, m, E, h, g, A, f, p]);
        },
    },
);
