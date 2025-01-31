n.d(t, {
    KL: () => l,
    Lc: () => u,
    Lw: () => p,
    Ry: () => f,
    X3: () => s,
    YE: () => c,
    al: () => d,
    bJ: () => a,
    e8: () => _,
    tA: () => o
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(243814),
    r = n(981631);
let a = 'xbox://communitylinking/donut/audio',
    s = 'https://www.xbox.com/en-US/apps/xbox-app-for-mobile',
    o = [i.x.VOICE, i.x.DM_CHANNELS_READ, i.x.GUILDS, i.x.GUILDS_MEMBERS_READ, i.x.IDENTIFY, i.x.CONNECTIONS, i.x.ACTIVITIES_READ],
    l = [i.x.VOICE, i.x.DM_CHANNELS_READ, i.x.GUILDS, i.x.GUILDS_MEMBERS_READ, i.x.IDENTIFY, i.x.CONNECTIONS],
    u = (e) => {
        let { guildId: t, channelName: n, guildName: i, channelId: r, muted: a, deafened: s, nonce: o } = e,
            l = {
                channelid: r,
                guildid: t,
                channelname: n,
                guildname: i,
                muted: String(a),
                deafened: String(s)
            };
        return null != o && (l.nonce = o), new URLSearchParams(l);
    };
var c = (function (e) {
    return (e.PLAYSTATION = 'playstation'), (e.XBOX = 'xbox'), e;
})({});
let d = new Set(['xbox', 'playstation']);
r.M7m.XBOX, r.M7m.PS5;
var f = (function (e) {
    return (e[(e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 270000)] = 'CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED'), (e[(e.CONSOLE_DEVICE_UNAVAILABLE = 270001)] = 'CONSOLE_DEVICE_UNAVAILABLE'), (e[(e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002)] = 'CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS'), (e[(e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003)] = 'CONSOLE_DEVICE_COMMUNICATION_RESTRICTED'), (e[(e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004)] = 'CONSOLE_DEVICE_INVALID_POWER_MODE'), (e[(e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005)] = 'CONSOLE_DEVICE_ACCOUNT_LINK_ERROR'), (e[(e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006)] = 'CONSOLE_DEVICE_MAX_MEMBERS_REACHED'), (e[(e.CONSOLE_DEVICE_BAD_COMMAND = 270007)] = 'CONSOLE_DEVICE_BAD_COMMAND'), e;
})({});
let _ = new Set([270000]),
    p = 'console error alert';
