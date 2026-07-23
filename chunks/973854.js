"use strict";
n.d(t, { A: () => l });
var i = n(734057),
    r = n(311964),
    a = n(652215),
    s = n(746080);
function l(e) {
    let { channelId: t } = e;
    switch (t) {
        case s.VV.VIBEGRATIONS:
        case s.VV.CHANNEL_BROWSER:
        case s.VV.GUILD_HOME:
        case s.VV.GUILD_SHOP:
        case s.VV.GAME_SHOP:
        case s.VV.MEMBER_APPLICATIONS:
        case s.VV.ROLE_SUBSCRIPTIONS:
        case s.VV.CUSTOMIZE_COMMUNITY:
        case s.VV.MEMBER_SAFETY:
        case s.VV.GUILD_ONBOARDING:
        case s.VV.GUILD_BOOSTS:
            return;
    }
    (0, r.k)(a.HAw.CHANNEL_OPENED_CLICKSTREAM, {
        channel_id: t,
        channel_type: i.A.getChannel(t)?.type ?? a.rbe.UNKNOWN,
    });
}
