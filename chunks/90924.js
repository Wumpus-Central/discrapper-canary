n.d(t, {
    BB: () => X,
    B_: () => Y,
    D2: () => ee,
    Gc: () => B,
    IR: () => F,
    LP: () => H,
    SK: () => W,
    SN: () => G,
    Ub: () => Z,
    Yj: () => k,
    e2: () => $,
    hk: () => M,
    lG: () => J,
    px: () => q,
    qG: () => V,
    sq: () => Q,
    uM: () => K,
}),
    n(321073),
    n(938796),
    n(735438);
var i = n(567243),
    r = n(179771),
    a = n(562465),
    l = n(898467),
    s = n(843472),
    o = n(956518),
    d = n(587895),
    c = n(46054),
    u = n(763754),
    A = n(611010),
    h = n(95701),
    _ = n(427157),
    m = n(734057),
    p = n(71393),
    g = n(430452),
    E = n(320501),
    I = n(290863),
    f = n(287809),
    C = n(977997),
    N = n(927813),
    T = n(562153),
    S = n(257120),
    x = n(998218),
    v = n(636401),
    b = n(639621),
    y = n(613057),
    L = n(652215);
let O = x.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)?.host ?? "localhost",
    R = (function () {
        let e = O.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    P = RegExp(`^${S.A.escape("https://")}(?:[a-z]+\\.)?(${S.A.escape(R)}|discordapp.com|discord.com)$`),
    j = +N.A.Millis.MINUTE,
    D = {};
function w(e) {
    return (
        "customEmoji" === e.type && (e.type = "emoji"),
        "emoji" === e.type && e.src && (e.src = M(e.src)),
        Array.isArray(e.content) && (e.content = e.content.map(w)),
        e
    );
}
function M(e) {
    return /^http/.test(e) ? e : `${location.protocol}//${location.host}${"/" === e.charAt(0) ? "" : "/"}${e}`;
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function G(e, t) {
    let n = [],
        i = e.getGuildId();
    return (
        [L.rbe.GUILD_CATEGORY, ...h.OU].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    E.A.whenReady(e.id, () => t()), s.A.fetchMessages({ channelId: e.id, limit: L.EMb });
                }),
            ),
        Promise.all(n).then(() => {
            let n =
                    (!e.isNSFW() || f.default.getCurrentUser()?.nsfwAllowed === !0) && t
                        ? E.A.getMessages(e.id).toArray().map(k)
                        : [],
                r = Object.values(C.A.getVoiceStatesForChannel(e.id)).map((t) => V(i, e.id, t));
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
    let t = c.A.parseToAST(e.content, !0, { channelId: e.channel_id }).map(w),
        n = m.A.getChannel(e.channel_id),
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
        author: null != i ? (0, b.A)(i) : void 0,
        pinned: e.pinned,
        type: e.type,
    };
}
function V(e, t, n) {
    let { mute: i, deaf: r, selfMute: a, selfDeaf: l, suppress: s, userId: o } = n,
        d = f.default.getUser(o);
    if (null == d) throw Error(`Invalid user id: ${o}`);
    return {
        nick: T.Ay.getName(e, t, d),
        mute: g.Ay.isLocalMute(d.id),
        volume: g.Ay.getLocalVolume(d.id),
        pan: g.Ay.getLocalPan(d.id),
        voice_state: { mute: i, deaf: r, self_mute: a, self_deaf: l, suppress: s },
        user: (0, b.A)(d),
    };
}
function B(e, t) {
    return { type: e, user: (0, b.A)(t), presence: { status: I.A.getStatus(t.id, null), activity: null } };
}
function H(e, t) {
    return null == t
        ? e
        : { ...e, presence: { ...e.presence, activity: I.A.getApplicationActivity(e.user.id, t) ?? null } };
}
function F(e) {
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
        (null == e.match("staging") && !!(P.test(e) && P.test(n)))
    );
}
function Y(e, t, n) {
    let i = p.A.getGuild(e.getGuildId());
    return (null != i ? i.application_id : e.getApplicationId()) === t || n.indexOf(r.F.MESSAGES_READ) > -1;
}
function W(e) {
    switch (e) {
        case L.S7L.RTC_CONNECTED:
        case L.S7L.RTC_CONNECTING:
        case L.S7L.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, "VOICE_");
        default:
            return e;
    }
}
function q(e, t, n) {
    return e === L.xL.JOIN && null != t && null != t.id && null != n.join;
}
function z(e) {
    return a.Bo.get({ url: L.Rsh.APPLICATION_RPC(e), oldFormErrors: !0, retries: 3, rejectWithError: !0 }).then(
        (e) => {
            let { body: t } = e;
            return t;
        },
        () => {
            throw new v.A({ closeCode: L.YI$.INVALID_CLIENTID }, "Invalid Client ID");
        },
    );
}
async function K(e, t, n) {
    let i = d.A.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === y.z4.POST_MESSAGE) {
            let e = (0, o.Ay)(t);
            if (null == e || !U(n, [e])) throw new v.A({ closeCode: L.YI$.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await z(t);
            if (((i = A.Ay.createFromServer(e)), !U(n, e.rpc_origins)))
                throw new v.A({ closeCode: L.YI$.INVALID_ORIGIN }, "Invalid Origin");
        }
    null == i && (i = A.Ay.createFromServer(await z(t)));
    let { id: r, name: a, icon: l, coverImage: s, flags: c } = i;
    e.application = { id: r, name: a, icon: l, coverImage: s, flags: c };
}
async function $(e, t, n) {
    let i = D[e];
    null == i && ((i = new l.A(t ? 2 : 60, j)), (D[e] = i));
    try {
        await i.process(n);
    } catch (e) {
        throw new v.A({ closeCode: L.YI$.CLOSE_ABNORMAL }, "Socket closed during throttle");
    }
}
function Q(e, t) {
    null == t && (e.authorization.scopes = [y.hj]);
}
function X(e) {
    let t = g.Ay.getSettings(),
        n = (e) =>
            Object.values(e)
                .sort((e, t) => e.index - t.index)
                .map((e) => ({ id: e.id, name: e.name })),
        i = e(t);
    return {
        input: { available_devices: n(g.Ay.getInputDevices()), device_id: t.inputDeviceId, volume: t.inputVolume },
        output: { available_devices: n(g.Ay.getOutputDevices()), device_id: t.outputDeviceId, volume: t.outputVolume },
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
function Z(e, t) {
    let n = g.Ay.getSettings(e),
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
    if (e !== y.z4.POST_MESSAGE)
        throw new v.A({ errorCode: L.Lw6.INVALID_COMMAND }, `command not available from "${e} transport`);
}
function ee(e) {
    if (null == e.id) throw new v.A({ errorCode: L.Lw6.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
