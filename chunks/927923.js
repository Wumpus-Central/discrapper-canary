n.d(t, {
    KL: () => l,
    Lc: () => c,
    Lw: () => p,
    Ry: () => f,
    X3: () => a,
    YE: () => u,
    al: () => d,
    bJ: () => o,
    e8: () => _,
    tA: () => s
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(243814),
    i = n(981631);
let o = 'xbox://communitylinking/donut/audio',
    a = 'https://www.xbox.com/en-US/apps/xbox-app-for-mobile',
    s = [r.x.VOICE, r.x.DM_CHANNELS_READ, r.x.GUILDS, r.x.GUILDS_MEMBERS_READ, r.x.IDENTIFY, r.x.CONNECTIONS, r.x.ACTIVITIES_READ],
    l = [r.x.VOICE, r.x.DM_CHANNELS_READ, r.x.GUILDS, r.x.GUILDS_MEMBERS_READ, r.x.IDENTIFY, r.x.CONNECTIONS],
    c = (e) => {
        let { guildId: t, channelName: n, guildName: r, channelId: i, muted: o, deafened: a, nonce: s } = e,
            l = {
                channelid: i,
                guildid: t,
                channelname: n,
                guildname: r,
                muted: String(o),
                deafened: String(a)
            };
        return null != s && (l.nonce = s), new URLSearchParams(l);
    };
var u = (function (e) {
    return (e.PLAYSTATION = 'playstation'), (e.XBOX = 'xbox'), e;
})({});
let d = new Set(['xbox', 'playstation']);
i.M7m.XBOX, i.M7m.PS5;
var f = (function (e) {
    return (e[(e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 270000)] = 'CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED'), (e[(e.CONSOLE_DEVICE_UNAVAILABLE = 270001)] = 'CONSOLE_DEVICE_UNAVAILABLE'), (e[(e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002)] = 'CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS'), (e[(e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003)] = 'CONSOLE_DEVICE_COMMUNICATION_RESTRICTED'), (e[(e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004)] = 'CONSOLE_DEVICE_INVALID_POWER_MODE'), (e[(e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005)] = 'CONSOLE_DEVICE_ACCOUNT_LINK_ERROR'), (e[(e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006)] = 'CONSOLE_DEVICE_MAX_MEMBERS_REACHED'), (e[(e.CONSOLE_DEVICE_BAD_COMMAND = 270007)] = 'CONSOLE_DEVICE_BAD_COMMAND'), e;
})({});
let _ = new Set([270000]),
    p = 'console error alert';
