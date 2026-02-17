"use strict";
n.d(t, { o: () => _ });
var r = n(956793),
    i = n(235393),
    a = n(376943),
    s = n(22007),
    o = n(734057),
    l = n(71393),
    u = n(449054),
    c = n(923257),
    d = n(652215);
async function _(e, t, n) {
    if (null == t) return;
    if ((i.A.trackDiscordLinkClicked({ guildId: e, channelId: t, messageId: n }), null != e)) {
        let r = l.A.getGuild(e);
        if (r?.joinedAt == null)
            try {
                await u.Z2(e, {}, { channelId: t, messageId: n });
                return;
            } catch {}
    }
    let _ = o.A.getChannel(t);
    if (null != _ && null == n && _.isGuildVocal() && (0, a.nc)(_)) {
        let { navigateOnly: e } = c.h.getConfig({ location: "channel_mention" });
        if (!e) return void r.default.selectVoiceChannel(_.id);
    }
    (0, s.A)(d.BVt.CHANNEL(e, t, n));
}
