"use strict";
n.d(t, { A: () => o });
var r = n(734057),
    i = n(237774),
    s = n(652215),
    a = n(746080);
function o(e) {
    let { channelId: t } = e;
    switch (t) {
        case a.VV.CHANNEL_BROWSER:
        case a.VV.GUILD_HOME:
        case a.VV.GUILD_SHOP:
        case a.VV.GAME_SHOP:
        case a.VV.MEMBER_APPLICATIONS:
        case a.VV.ROLE_SUBSCRIPTIONS:
        case a.VV.CUSTOMIZE_COMMUNITY:
        case a.VV.MEMBER_SAFETY:
        case a.VV.GUILD_ONBOARDING:
        case a.VV.GUILD_BOOSTS:
            return;
    }
    (0, i.k)(s.HAw.CHANNEL_OPENED_CLICKSTREAM, {
        channel_id: t,
        channel_type: r.A.getChannel(t)?.type ?? s.rbe.UNKNOWN,
    });
}
