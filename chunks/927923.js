r.d(n, {
    KL: function () {
        return m;
    },
    Lc: function () {
        return g;
    },
    Lw: function () {
        return y;
    },
    Ry: function () {
        return a;
    },
    X3: function () {
        return h;
    },
    YE: function () {
        return i;
    },
    al: function () {
        return E;
    },
    bJ: function () {
        return p;
    },
    e8: function () {
        return v;
    },
    tA: function () {
        return _;
    }
});
var i,
    a,
    o = r(610138);
var s = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(47120);
var d = r(243814),
    f = r(981631);
let p = 'xbox://communitylinking/donut/audio',
    h = 'https://www.xbox.com/en-US/apps/xbox-app-for-mobile',
    _ = [d.x.VOICE, d.x.DM_CHANNELS_READ, d.x.GUILDS, d.x.GUILDS_MEMBERS_READ, d.x.IDENTIFY, d.x.CONNECTIONS, d.x.ACTIVITIES_READ],
    m = [d.x.VOICE, d.x.DM_CHANNELS_READ, d.x.GUILDS, d.x.GUILDS_MEMBERS_READ, d.x.IDENTIFY, d.x.CONNECTIONS],
    g = (e) => {
        let { guildId: n, channelName: r, guildName: i, channelId: a, muted: o, deafened: s, nonce: l } = e,
            u = {
                channelid: a,
                guildid: n,
                channelname: r,
                guildname: i,
                muted: String(o),
                deafened: String(s)
            };
        return null != l && (u.nonce = l), new URLSearchParams(u);
    };
!(function (e) {
    (e.PLAYSTATION = 'playstation'), (e.XBOX = 'xbox');
})(i || (i = {}));
let E = new Set(['xbox', 'playstation']);
f.M7m.XBOX,
    f.M7m.PS5,
    !(function (e) {
        (e[(e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 270000)] = 'CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED'), (e[(e.CONSOLE_DEVICE_UNAVAILABLE = 270001)] = 'CONSOLE_DEVICE_UNAVAILABLE'), (e[(e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002)] = 'CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS'), (e[(e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003)] = 'CONSOLE_DEVICE_COMMUNICATION_RESTRICTED'), (e[(e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004)] = 'CONSOLE_DEVICE_INVALID_POWER_MODE'), (e[(e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005)] = 'CONSOLE_DEVICE_ACCOUNT_LINK_ERROR'), (e[(e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006)] = 'CONSOLE_DEVICE_MAX_MEMBERS_REACHED'), (e[(e.CONSOLE_DEVICE_BAD_COMMAND = 270007)] = 'CONSOLE_DEVICE_BAD_COMMAND');
    })(a || (a = {}));
let v = new Set([270000]),
    y = 'console error alert';
