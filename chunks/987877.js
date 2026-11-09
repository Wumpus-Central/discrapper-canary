(t(323874), t(14289), t(35956));
var l = t(448741),
    a = t(235393),
    i = t(362280),
    r = t(696451),
    s = t(71393),
    o = t(449054),
    c = t(811091),
    u = t(652215),
    d = t(575279);
t.d(
    n,
    {},
    {
        o: async function (e, n, t, m) {
            if (null == n) return;
            if (
                (a.A.trackDiscordLinkClicked({ guildId: e, channelId: n, messageId: t }),
                null != e && !r.Ay.isCurrentUserGuest(e))
            ) {
                let a = s.A.getGuild(e);
                if (a?.joinedAt == null)
                    try {
                        await o.Z2(e, {}, { channelId: n, messageId: t });
                        return;
                    } catch (e) {
                        if (e instanceof l.w) return;
                    }
            }
            let h = new URLSearchParams();
            (null != m && c.default.isProbablyAValidSnowflake(m) && h.append(d.Nl, m),
                (0, i.A)(u.BVt.CHANNEL(e, n, t), { search: h.toString() }));
        },
    },
);
