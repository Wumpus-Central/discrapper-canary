n.d(t, {
    BB: () => K,
    B_: () => B,
    D2: () => ee,
    Gc: () => U,
    IR: () => Y,
    LP: () => x,
    SK: () => z,
    SN: () => G,
    Ub: () => X,
    Yj: () => j,
    e2: () => J,
    hk: () => M,
    lG: () => Z,
    px: () => F,
    qG: () => q,
    sq: () => Q,
    uM: () => W,
}),
    n(321073),
    n(938796),
    n(435558);
var o = n(567243),
    i = n(179771),
    r = n(636537),
    s = n(898467),
    l = n(148494),
    c = n(956518),
    a = n(587895),
    u = n(46054),
    d = n(763754),
    h = n(395671),
    p = n(95701),
    _ = n(889227),
    A = n(734057),
    m = n(71393),
    f = n(453028),
    g = n(232835),
    I = n(290863),
    v = n(287809),
    E = n(977997),
    y = n(927813),
    C = n(562153),
    O = n(257120),
    w = n(998218),
    S = n(636401),
    N = n(639621),
    k = n(613057),
    T = n(652215);
let L = w.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)?.host ?? "localhost",
    R = (function () {
        let e = L.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    b = RegExp(`^${O.A.escape("https://")}(?:[a-z]+\\.)?(${O.A.escape(R)}|discordapp.com|discord.com)$`),
    D = +y.A.Millis.MINUTE,
    P = {};
function $(e) {
    return (
        "customEmoji" === e.type && (e.type = "emoji"),
        "emoji" === e.type && e.src && (e.src = M(e.src)),
        Array.isArray(e.content) && (e.content = e.content.map($)),
        e
    );
}
function M(e) {
    return /^http/.test(e) ? e : `${location.protocol}//${location.host}${"/" === e.charAt(0) ? "" : "/"}${e}`;
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function G(e, t) {
    let n = [],
        o = e.getGuildId();
    return (
        [T.rbe.GUILD_CATEGORY, ...p.OU].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    g.A.whenReady(e.id, () => t()), l.A.fetchMessages({ channelId: e.id, limit: T.EMb });
                }),
            ),
        Promise.all(n).then(() => {
            let n =
                    (!e.isNSFW() || v.default.getCurrentUser()?.nsfwAllowed === !0) && t
                        ? g.A.getMessages(e.id).toArray().map(j)
                        : [],
                i = Object.values(E.A.getVoiceStatesForChannel(e.id)).map((t) => q(o, e.id, t));
            return {
                id: e.id,
                name: e.name,
                type: e.type,
                topic: e.topic,
                bitrate: e.bitrate,
                user_limit: e.userLimit,
                guild_id: o,
                position: e.position,
                messages: n,
                voice_states: i,
            };
        })
    );
}
function j(e) {
    let t = u.A.parseToAST(e.content, !0, { channelId: e.channel_id }).map($),
        n = A.A.getChannel(e.channel_id),
        o = null != e.author ? new _.A(e.author) : void 0,
        i = null != e.author ? (0, d.FT)(o, n) : void 0;
    return {
        id: e.id,
        blocked: e.blocked,
        bot: e.bot,
        content: e.content,
        content_parsed: t.length ? t : void 0,
        nick: i?.nick,
        author_color: i?.colorString,
        edited_timestamp: e.edited_timestamp || e.editedTimestamp,
        timestamp: e.timestamp,
        tts: e.tts,
        mentions: e.mentions,
        mention_everyone: e.mention_everyone || e.mentionEveryone,
        mention_roles: e.mention_roles || e.mentionRoles,
        embeds: e.embeds,
        attachments: e.attachments,
        author: null != o ? (0, N.A)(o) : void 0,
        pinned: e.pinned,
        type: e.type,
    };
}
function q(e, t, n) {
    let { mute: o, deaf: i, selfMute: r, selfDeaf: s, suppress: l, userId: c } = n,
        a = v.default.getUser(c);
    if (null == a) throw Error(`Invalid user id: ${c}`);
    return {
        nick: C.Ay.getName(e, t, a),
        mute: f.Ay.isLocalMute(a.id),
        volume: f.Ay.getLocalVolume(a.id),
        pan: f.Ay.getLocalPan(a.id),
        voice_state: { mute: o, deaf: i, self_mute: r, self_deaf: s, suppress: l },
        user: (0, N.A)(a),
    };
}
function U(e, t) {
    return { type: e, user: (0, N.A)(t), presence: { status: I.A.getStatus(t.id, null), activity: null } };
}
function x(e, t) {
    return null == t
        ? e
        : { ...e, presence: { ...e.presence, activity: I.A.getApplicationActivity(e.user.id, t) ?? null } };
}
function Y(e) {
    let t;
    if (null == e) return !1;
    let n = window.location.origin;
    if (e === n) return !0;
    try {
        t = o.parse(e).hostname;
    } catch (e) {
        return !1;
    }
    return (
        (window.location.hostname === t && "localhost" === t) ||
        (null == e.match("staging") && !!(b.test(e) && b.test(n)))
    );
}
function B(e, t, n) {
    let o = m.A.getGuild(e.getGuildId());
    return (null != o ? o.application_id : e.getApplicationId()) === t || n.indexOf(i.F.MESSAGES_READ) > -1;
}
function z(e) {
    switch (e) {
        case T.S7L.RTC_CONNECTED:
        case T.S7L.RTC_CONNECTING:
        case T.S7L.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, "VOICE_");
        default:
            return e;
    }
}
function F(e, t, n) {
    return e === T.xL.JOIN && null != t && null != t.id && null != n.join;
}
function H(e) {
    return r.Bo.get({ url: T.Rsh.APPLICATION_RPC(e), oldFormErrors: !0, retries: 3, rejectWithError: !0 }).then(
        (e) => {
            let { body: t } = e;
            return t;
        },
        () => {
            throw new S.A({ closeCode: T.YI$.INVALID_CLIENTID }, "Invalid Client ID");
        },
    );
}
async function W(e, t, n) {
    let o = a.A.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === k.z4.POST_MESSAGE) {
            let e = (0, c.Ay)(t);
            if (null == e || !V(n, [e])) throw new S.A({ closeCode: T.YI$.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await H(t);
            if (((o = h.Ay.createFromServer(e)), !V(n, e.rpc_origins)))
                throw new S.A({ closeCode: T.YI$.INVALID_ORIGIN }, "Invalid Origin");
        }
    null == o && (o = h.Ay.createFromServer(await H(t)));
    let { id: i, name: r, icon: s, coverImage: l, flags: u, parentId: d } = o;
    e.application = { id: i, parentId: d, name: r, icon: s, coverImage: l, flags: u };
}
async function J(e, t, n) {
    let o = P[e];
    null == o && ((o = new s.A(t ? 2 : 60, D)), (P[e] = o));
    try {
        await o.process(n);
    } catch (e) {
        throw new S.A({ closeCode: T.YI$.CLOSE_ABNORMAL }, "Socket closed during throttle");
    }
}
function Q(e, t) {
    null == t && (e.authorization.scopes = [k.hj]);
}
function K(e) {
    let t = f.Ay.getSettings();
    function n(e) {
        return Object.values(e)
            .sort((e, t) => e.index - t.index)
            .map((e) => ({ id: e.id, name: e.name }));
    }
    let o = e(t);
    return {
        input: { available_devices: n(f.Ay.getInputDevices()), device_id: t.inputDeviceId, volume: t.inputVolume },
        output: { available_devices: n(f.Ay.getOutputDevices()), device_id: t.outputDeviceId, volume: t.outputVolume },
        mode: {
            type: t.mode,
            auto_threshold: t.modeOptions.autoThreshold,
            threshold: t.modeOptions.threshold,
            shortcut: o,
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
        o = t(n);
    return {
        input_mode: { type: n.mode, shortcut: o },
        local_mutes: Object.keys(n.localMutes),
        local_volumes: n.localVolumes,
        self_mute: n.mute,
        self_deaf: n.deaf,
    };
}
function Z(e) {
    if (e !== k.z4.POST_MESSAGE)
        throw new S.A({ errorCode: T.Lw6.INVALID_COMMAND }, `command not available from "${e} transport`);
}
function ee(e) {
    if (null == e.id) throw new S.A({ errorCode: T.Lw6.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
