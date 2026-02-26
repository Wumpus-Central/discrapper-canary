"use strict";
n.d(t, { o: () => f });
var r = n(956793),
    i = n(235393),
    s = n(376943),
    a = n(22007),
    o = n(734057),
    l = n(696451),
    u = n(71393),
    c = n(449054),
    d = n(923257),
    _ = n(652215);
async function f(e, t, n) {
    if (null == t) return;
    if (
        (i.A.trackDiscordLinkClicked({ guildId: e, channelId: t, messageId: n }),
        null != e && !l.Ay.isCurrentUserGuest(e))
    ) {
        let r = u.A.getGuild(e);
        if (r?.joinedAt == null)
            try {
                await c.Z2(e, {}, { channelId: t, messageId: n });
                return;
            } catch {}
    }
    let f = o.A.getChannel(t);
    if (null != f && null == n && f.isGuildVocal() && (0, s.nc)(f)) {
        let { navigateOnly: e } = d.h.getConfig({ location: "channel_mention" });
        if (!e) return void r.default.selectVoiceChannel(f.id);
    }
    (0, a.A)(_.BVt.CHANNEL(e, t, n));
}
