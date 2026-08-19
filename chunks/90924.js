n.d(t, {
    BB: () => H,
    B_: () => B,
    D2: () => ee,
    Gc: () => x,
    IR: () => U,
    LP: () => F,
    SK: () => Y,
    SN: () => V,
    Ub: () => X,
    Yj: () => j,
    e2: () => J,
    hk: () => P,
    lG: () => Z,
    px: () => z,
    qG: () => q,
    sq: () => K,
    uM: () => W,
}),
    n(321073),
    n(938796),
    n(435558);
var i = n(567243),
    o = n(179771),
    r = n(636537),
    l = n(898467),
    s = n(148494),
    a = n(956518),
    u = n(587895),
    c = n(46054),
    d = n(763754),
    p = n(395671),
    h = n(95701),
    _ = n(889227),
    m = n(734057),
    A = n(71393),
    f = n(453028),
    I = n(232835),
    v = n(290863),
    y = n(287809),
    g = n(977997),
    C = n(927813),
    w = n(562153),
    O = n(257120),
    E = n(998218),
    S = n(636401),
    D = n(639621),
    N = n(613057),
    L = n(652215);
let b = E.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)?.host ?? "localhost",
    T = (function () {
        let e = b.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    k = RegExp(`^${O.A.escape("https://")}(?:[a-z]+\\.)?(${O.A.escape(T)}|discordapp.com|discord.com)$`),
    M = +C.A.Millis.MINUTE,
    G = {};
function R(e) {
    return (
        "customEmoji" === e.type && (e.type = "emoji"),
        "emoji" === e.type && e.src && (e.src = P(e.src)),
        Array.isArray(e.content) && (e.content = e.content.map(R)),
        e
    );
}
function P(e) {
    return /^http/.test(e) ? e : `${location.protocol}//${location.host}${"/" === e.charAt(0) ? "" : "/"}${e}`;
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function V(e, t) {
    let n = [],
        i = e.getGuildId();
    return (
        [L.rbe.GUILD_CATEGORY, ...h.OU].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    I.A.whenReady(e.id, () => t()), s.A.fetchMessages({ channelId: e.id, limit: L.EMb });
                }),
            ),
        Promise.all(n).then(() => {
            let n =
                    (!e.isNSFW() || y.default.getCurrentUser()?.nsfwAllowed === !0) && t
                        ? I.A.getMessages(e.id).toArray().map(j)
                        : [],
                o = Object.values(g.A.getVoiceStatesForChannel(e.id)).map((t) => q(i, e.id, t));
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
                voice_states: o,
            };
        })
    );
}
function j(e) {
    let t = c.A.parseToAST(e.content, !0, { channelId: e.channel_id }).map(R),
        n = m.A.getChannel(e.channel_id),
        i = null != e.author ? new _.A(e.author) : void 0,
        o = null != e.author ? (0, d.FT)(i, n) : void 0;
    return {
        id: e.id,
        blocked: e.blocked,
        bot: e.bot,
        content: e.content,
        content_parsed: t.length ? t : void 0,
        nick: o?.nick,
        author_color: o?.colorString,
        edited_timestamp: e.edited_timestamp || e.editedTimestamp,
        timestamp: e.timestamp,
        tts: e.tts,
        mentions: e.mentions,
        mention_everyone: e.mention_everyone || e.mentionEveryone,
        mention_roles: e.mention_roles || e.mentionRoles,
        embeds: e.embeds,
        attachments: e.attachments,
        author: null != i ? (0, D.A)(i) : void 0,
        pinned: e.pinned,
        type: e.type,
    };
}
function q(e, t, n) {
    let { mute: i, deaf: o, selfMute: r, selfDeaf: l, suppress: s, userId: a } = n,
        u = y.default.getUser(a);
    if (null == u) throw Error(`Invalid user id: ${a}`);
    return {
        nick: w.Ay.getName(e, t, u),
        mute: f.Ay.isLocalMute(u.id),
        volume: f.Ay.getLocalVolume(u.id),
        pan: f.Ay.getLocalPan(u.id),
        voice_state: { mute: i, deaf: o, self_mute: r, self_deaf: l, suppress: s },
        user: (0, D.A)(u),
    };
}
function x(e, t) {
    return { type: e, user: (0, D.A)(t), presence: { status: v.A.getStatus(t.id, null), activity: null } };
}
function F(e, t) {
    return null == t
        ? e
        : { ...e, presence: { ...e.presence, activity: v.A.getApplicationActivity(e.user.id, t) ?? null } };
}
function U(e) {
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
        (null == e.match("staging") && !!(k.test(e) && k.test(n)))
    );
}
function B(e, t, n) {
    let i = A.A.getGuild(e.getGuildId());
    return (null != i ? i.application_id : e.getApplicationId()) === t || n.indexOf(o.F.MESSAGES_READ) > -1;
}
function Y(e) {
    switch (e) {
        case L.S7L.RTC_CONNECTED:
        case L.S7L.RTC_CONNECTING:
        case L.S7L.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, "VOICE_");
        default:
            return e;
    }
}
function z(e, t, n) {
    return e === L.xL.JOIN && null != t && null != t.id && null != n.join;
}
function Q(e) {
    return r.Bo.get({ url: L.Rsh.APPLICATION_RPC(e), oldFormErrors: !0, retries: 3, rejectWithError: !0 }).then(
        (e) => {
            let { body: t } = e;
            return t;
        },
        () => {
            throw new S.A({ closeCode: L.YI$.INVALID_CLIENTID }, "Invalid Client ID");
        },
    );
}
async function W(e, t, n) {
    let i = u.A.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === N.z4.POST_MESSAGE) {
            let e = (0, a.Ay)(t);
            if (null == e || !$(n, [e])) throw new S.A({ closeCode: L.YI$.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await Q(t);
            if (((i = p.Ay.createFromServer(e)), !$(n, e.rpc_origins)))
                throw new S.A({ closeCode: L.YI$.INVALID_ORIGIN }, "Invalid Origin");
        }
    null == i && (i = p.Ay.createFromServer(await Q(t)));
    let { id: o, name: r, icon: l, coverImage: s, flags: c, parentId: d } = i;
    e.application = { id: o, parentId: d, name: r, icon: l, coverImage: s, flags: c };
}
async function J(e, t, n) {
    let i = G[e];
    null == i && ((i = new l.A(t ? 2 : 60, M)), (G[e] = i));
    try {
        await i.process(n);
    } catch (e) {
        throw new S.A({ closeCode: L.YI$.CLOSE_ABNORMAL }, "Socket closed during throttle");
    }
}
function K(e, t) {
    null == t && (e.authorization.scopes = [N.hj]);
}
function H(e) {
    let t = f.Ay.getSettings();
    function n(e) {
        return Object.values(e)
            .sort((e, t) => e.index - t.index)
            .map((e) => ({ id: e.id, name: e.name }));
    }
    let i = e(t);
    return {
        input: { available_devices: n(f.Ay.getInputDevices()), device_id: t.inputDeviceId, volume: t.inputVolume },
        output: { available_devices: n(f.Ay.getOutputDevices()), device_id: t.outputDeviceId, volume: t.outputVolume },
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
function X(e, t) {
    let n = f.Ay.getSettings(e),
        i = t(n);
    return {
        input_mode: { type: n.mode, shortcut: i },
        local_mutes: Object.keys(n.localMutes),
        local_volumes: n.localVolumes,
        self_mute: n.mute,
        self_deaf: n.deaf,
    };
}
function Z(e) {
    if (e !== N.z4.POST_MESSAGE)
        throw new S.A({ errorCode: L.Lw6.INVALID_COMMAND }, `command not available from "${e} transport`);
}
function ee(e) {
    if (null == e.id) throw new S.A({ errorCode: L.Lw6.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
