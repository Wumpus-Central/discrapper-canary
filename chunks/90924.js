n.d(t, {
    BB: () => Z,
    B_: () => Y,
    D2: () => ee,
    Gc: () => F,
    IR: () => B,
    LP: () => H,
    SK: () => $,
    SN: () => j,
    Ub: () => Q,
    Yj: () => k,
    e2: () => W,
    hk: () => U,
    lG: () => J,
    px: () => z,
    qG: () => V,
    sq: () => X,
    uM: () => K,
}),
    n(321073),
    n(938796),
    n(735438);
var i = n(567243),
    r = n(179771),
    a = n(636537),
    l = n(898467),
    s = n(720149),
    o = n(956518),
    d = n(587895),
    c = n(46054),
    u = n(763754),
    A = n(395671),
    h = n(95701),
    _ = n(889227),
    E = n(734057),
    p = n(71393),
    m = n(51760),
    I = n(232835),
    g = n(290863),
    C = n(287809),
    T = n(977997),
    f = n(927813),
    N = n(562153),
    S = n(257120),
    L = n(998218),
    O = n(636401),
    y = n(639621),
    b = n(613057),
    v = n(652215);
let P = L.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)?.host ?? "localhost",
    R = (function () {
        let e = P.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    D = RegExp(`^${S.A.escape("https://")}(?:[a-z]+\\.)?(${S.A.escape(R)}|discordapp.com|discord.com)$`),
    w = +f.A.Millis.MINUTE,
    M = {};
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
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function j(e, t) {
    let n = [],
        i = e.getGuildId();
    return (
        [v.rbe.GUILD_CATEGORY, ...h.OU].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    I.A.whenReady(e.id, () => t()), s.A.fetchMessages({ channelId: e.id, limit: v.EMb });
                }),
            ),
        Promise.all(n).then(() => {
            let n =
                    (!e.isNSFW() || C.default.getCurrentUser()?.nsfwAllowed === !0) && t
                        ? I.A.getMessages(e.id).toArray().map(k)
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
function k(e) {
    let t = c.A.parseToAST(e.content, !0, { channelId: e.channel_id }).map(x),
        n = E.A.getChannel(e.channel_id),
        i = null != e.author ? new _.A(e.author) : void 0,
        r = null != e.author ? (0, u.FT)(i, n) : void 0;
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
        author: null != i ? (0, y.A)(i) : void 0,
        pinned: e.pinned,
        type: e.type,
    };
}
function V(e, t, n) {
    let { mute: i, deaf: r, selfMute: a, selfDeaf: l, suppress: s, userId: o } = n,
        d = C.default.getUser(o);
    if (null == d) throw Error(`Invalid user id: ${o}`);
    return {
        nick: N.Ay.getName(e, t, d),
        mute: m.Ay.isLocalMute(d.id),
        volume: m.Ay.getLocalVolume(d.id),
        pan: m.Ay.getLocalPan(d.id),
        voice_state: { mute: i, deaf: r, self_mute: a, self_deaf: l, suppress: s },
        user: (0, y.A)(d),
    };
}
function F(e, t) {
    return { type: e, user: (0, y.A)(t), presence: { status: g.A.getStatus(t.id, null), activity: null } };
}
function H(e, t) {
    return null == t
        ? e
        : { ...e, presence: { ...e.presence, activity: g.A.getApplicationActivity(e.user.id, t) ?? null } };
}
function B(e) {
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
        (null == e.match("staging") && !!(D.test(e) && D.test(n)))
    );
}
function Y(e, t, n) {
    let i = p.A.getGuild(e.getGuildId());
    return (null != i ? i.application_id : e.getApplicationId()) === t || n.indexOf(r.F.MESSAGES_READ) > -1;
}
function $(e) {
    switch (e) {
        case v.S7L.RTC_CONNECTED:
        case v.S7L.RTC_CONNECTING:
        case v.S7L.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, "VOICE_");
        default:
            return e;
    }
}
function z(e, t, n) {
    return e === v.xL.JOIN && null != t && null != t.id && null != n.join;
}
function q(e) {
    return a.Bo.get({ url: v.Rsh.APPLICATION_RPC(e), oldFormErrors: !0, retries: 3, rejectWithError: !0 }).then(
        (e) => {
            let { body: t } = e;
            return t;
        },
        () => {
            throw new O.A({ closeCode: v.YI$.INVALID_CLIENTID }, "Invalid Client ID");
        },
    );
}
async function K(e, t, n) {
    let i = d.A.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === b.z4.POST_MESSAGE) {
            let e = (0, o.Ay)(t);
            if (null == e || !G(n, [e])) throw new O.A({ closeCode: v.YI$.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await q(t);
            if (((i = A.Ay.createFromServer(e)), !G(n, e.rpc_origins)))
                throw new O.A({ closeCode: v.YI$.INVALID_ORIGIN }, "Invalid Origin");
        }
    null == i && (i = A.Ay.createFromServer(await q(t)));
    let { id: r, name: a, icon: l, coverImage: s, flags: c, parentId: u } = i;
    e.application = { id: r, parentId: u, name: a, icon: l, coverImage: s, flags: c };
}
async function W(e, t, n) {
    let i = M[e];
    null == i && ((i = new l.A(t ? 2 : 60, w)), (M[e] = i));
    try {
        await i.process(n);
    } catch (e) {
        throw new O.A({ closeCode: v.YI$.CLOSE_ABNORMAL }, "Socket closed during throttle");
    }
}
function X(e, t) {
    null == t && (e.authorization.scopes = [b.hj]);
}
function Z(e) {
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
    if (e !== b.z4.POST_MESSAGE)
        throw new O.A({ errorCode: v.Lw6.INVALID_COMMAND }, `command not available from "${e} transport`);
}
function ee(e) {
    if (null == e.id) throw new O.A({ errorCode: v.Lw6.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
