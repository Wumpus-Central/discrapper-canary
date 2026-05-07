"use strict";
n.d(t, {
    BB: () => X,
    B_: () => Y,
    D2: () => ee,
    Gc: () => B,
    IR: () => j,
    LP: () => H,
    SK: () => W,
    SN: () => G,
    Ub: () => Q,
    Yj: () => F,
    e2: () => q,
    hk: () => U,
    lG: () => J,
    px: () => K,
    qG: () => V,
    sq: () => Z,
    uM: () => $,
}),
    n(321073),
    n(938796),
    n(735438);
var i = n(567243),
    r = n(179771),
    s = n(636537),
    a = n(898467),
    o = n(720149),
    l = n(956518),
    u = n(587895),
    c = n(46054),
    d = n(763754),
    _ = n(395671),
    f = n(95701),
    h = n(889227),
    p = n(734057),
    E = n(71393),
    m = n(235058),
    g = n(232835),
    A = n(290863),
    I = n(287809),
    T = n(977997),
    S = n(927813),
    N = n(562153),
    y = n(257120),
    C = n(998218),
    v = n(636401),
    O = n(639621),
    R = n(613057),
    b = n(652215);
let D = C.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)?.host ?? "localhost",
    L = (function () {
        let e = D.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    w = RegExp(`^${y.A.escape("https://")}(?:[a-z]+\\.)?(${y.A.escape(L)}|discordapp.com|discord.com)$`),
    M = +S.A.Millis.MINUTE,
    P = {};
function x(e) {
    return (
        "customEmoji" === e.type && (e.type = "emoji"),
        "emoji" === e.type && e.src && (e.src = U(e.src)),
        Array.isArray(e.content) && (e.content = e.content.map(x)),
        e
    );
}
function U(e) {
    return /^http/.test(e) ? e : `${location.protocol}//${location.host}${"/" === e.charAt(0) ? "" : "/"}${e}`;
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function G(e, t) {
    let n = [],
        i = e.getGuildId();
    return (
        [b.rbe.GUILD_CATEGORY, ...f.OU].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    g.A.whenReady(e.id, () => t()), o.A.fetchMessages({ channelId: e.id, limit: b.EMb });
                }),
            ),
        Promise.all(n).then(() => {
            let n =
                    (!e.isNSFW() || I.default.getCurrentUser()?.nsfwAllowed === !0) && t
                        ? g.A.getMessages(e.id).toArray().map(F)
                        : [],
                r = Object.values(T.A.getVoiceStatesForChannel(e.id)).map((t) => V(i, e.id, t));
            return {
                id: e.id,
                name: e.name,
                type: e.type,
                topic: e.topic,
                bitrate: e.bitrate,
                user_limit: e.userLimit,
                guild_id: i,
                position: e.position,
                messages: n,
                voice_states: r,
            };
        })
    );
}
function F(e) {
    let t = c.A.parseToAST(e.content, !0, { channelId: e.channel_id }).map(x),
        n = p.A.getChannel(e.channel_id),
        i = null != e.author ? new h.A(e.author) : void 0,
        r = null != e.author ? (0, d.FT)(i, n) : void 0;
    return {
        id: e.id,
        blocked: e.blocked,
        bot: e.bot,
        content: e.content,
        content_parsed: t.length ? t : void 0,
        nick: r?.nick,
        author_color: r?.colorString,
        edited_timestamp: e.edited_timestamp || e.editedTimestamp,
        timestamp: e.timestamp,
        tts: e.tts,
        mentions: e.mentions,
        mention_everyone: e.mention_everyone || e.mentionEveryone,
        mention_roles: e.mention_roles || e.mentionRoles,
        embeds: e.embeds,
        attachments: e.attachments,
        author: null != i ? (0, O.A)(i) : void 0,
        pinned: e.pinned,
        type: e.type,
    };
}
function V(e, t, n) {
    let { mute: i, deaf: r, selfMute: s, selfDeaf: a, suppress: o, userId: l } = n,
        u = I.default.getUser(l);
    if (null == u) throw Error(`Invalid user id: ${l}`);
    return {
        nick: N.Ay.getName(e, t, u),
        mute: m.Ay.isLocalMute(u.id),
        volume: m.Ay.getLocalVolume(u.id),
        pan: m.Ay.getLocalPan(u.id),
        voice_state: { mute: i, deaf: r, self_mute: s, self_deaf: a, suppress: o },
        user: (0, O.A)(u),
    };
}
function B(e, t) {
    return { type: e, user: (0, O.A)(t), presence: { status: A.A.getStatus(t.id, null), activity: null } };
}
function H(e, t) {
    return null == t
        ? e
        : { ...e, presence: { ...e.presence, activity: A.A.getApplicationActivity(e.user.id, t) ?? null } };
}
function j(e) {
    let t;
    if (null == e) return !1;
    let n = window.location.origin;
    if (e === n) return !0;
    try {
        t = i.parse(e).hostname;
    } catch (e) {
        return !1;
    }
    return (
        (window.location.hostname === t && "localhost" === t) ||
        (null == e.match("staging") && !!(w.test(e) && w.test(n)))
    );
}
function Y(e, t, n) {
    let i = E.A.getGuild(e.getGuildId());
    return (null != i ? i.application_id : e.getApplicationId()) === t || n.indexOf(r.F.MESSAGES_READ) > -1;
}
function W(e) {
    switch (e) {
        case b.S7L.RTC_CONNECTED:
        case b.S7L.RTC_CONNECTING:
        case b.S7L.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, "VOICE_");
        default:
            return e;
    }
}
function K(e, t, n) {
    return e === b.xL.JOIN && null != t && null != t.id && null != n.join;
}
function z(e) {
    return s.Bo.get({ url: b.Rsh.APPLICATION_RPC(e), oldFormErrors: !0, retries: 3, rejectWithError: !0 }).then(
        (e) => {
            let { body: t } = e;
            return t;
        },
        () => {
            throw new v.A({ closeCode: b.YI$.INVALID_CLIENTID }, "Invalid Client ID");
        },
    );
}
async function $(e, t, n) {
    let i = u.A.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === R.z4.POST_MESSAGE) {
            let e = (0, l.Ay)(t);
            if (null == e || !k(n, [e])) throw new v.A({ closeCode: b.YI$.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await z(t);
            if (((i = _.Ay.createFromServer(e)), !k(n, e.rpc_origins)))
                throw new v.A({ closeCode: b.YI$.INVALID_ORIGIN }, "Invalid Origin");
        }
    null == i && (i = _.Ay.createFromServer(await z(t)));
    let { id: r, name: s, icon: a, coverImage: o, flags: c, parentId: d } = i;
    e.application = { id: r, parentId: d, name: s, icon: a, coverImage: o, flags: c };
}
async function q(e, t, n) {
    let i = P[e];
    null == i && ((i = new a.A(t ? 2 : 60, M)), (P[e] = i));
    try {
        await i.process(n);
    } catch (e) {
        throw new v.A({ closeCode: b.YI$.CLOSE_ABNORMAL }, "Socket closed during throttle");
    }
}
function Z(e, t) {
    null == t && (e.authorization.scopes = [R.hj]);
}
function X(e) {
    let t = m.Ay.getSettings(),
        n = (e) =>
            Object.values(e)
                .sort((e, t) => e.index - t.index)
                .map((e) => ({ id: e.id, name: e.name })),
        i = e(t);
    return {
        input: { available_devices: n(m.Ay.getInputDevices()), device_id: t.inputDeviceId, volume: t.inputVolume },
        output: { available_devices: n(m.Ay.getOutputDevices()), device_id: t.outputDeviceId, volume: t.outputVolume },
        mode: {
            type: t.mode,
            auto_threshold: t.modeOptions.autoThreshold,
            threshold: t.modeOptions.threshold,
            shortcut: i,
            delay: t.modeOptions.delay,
        },
        automatic_gain_control: t.automaticGainControl,
        echo_cancellation: t.echoCancellation,
        noise_suppression: t.noiseSuppression,
        qos: t.qos,
        silence_warning: t.silenceWarning,
        deaf: t.deaf,
        mute: t.mute,
    };
}
function Q(e, t) {
    let n = m.Ay.getSettings(e),
        i = t(n);
    return {
        input_mode: { type: n.mode, shortcut: i },
        local_mutes: Object.keys(n.localMutes),
        local_volumes: n.localVolumes,
        self_mute: n.mute,
        self_deaf: n.deaf,
    };
}
function J(e) {
    if (e !== R.z4.POST_MESSAGE)
        throw new v.A({ errorCode: b.Lw6.INVALID_COMMAND }, `command not available from "${e} transport`);
}
function ee(e) {
    if (null == e.id) throw new v.A({ errorCode: b.Lw6.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
