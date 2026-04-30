n.d(t, {
    BB: () => z,
    B_: () => Y,
    D2: () => ee,
    Gc: () => k,
    IR: () => j,
    LP: () => H,
    SK: () => W,
    SN: () => V,
    Ub: () => X,
    Yj: () => B,
    e2: () => q,
    hk: () => w,
    lG: () => J,
    px: () => K,
    qG: () => F,
    sq: () => Q,
    uM: () => Z,
}),
    n(321073),
    n(938796),
    n(735438);
var i = n(567243),
    a = n(179771),
    r = n(636537),
    s = n(898467),
    l = n(720149),
    o = n(956518),
    d = n(587895),
    c = n(46054),
    _ = n(763754),
    E = n(395671),
    u = n(95701),
    A = n(889227),
    I = n(734057),
    T = n(71393),
    h = n(51760),
    S = n(232835),
    N = n(290863),
    f = n(287809),
    p = n(977997),
    m = n(927813),
    O = n(562153),
    C = n(257120),
    R = n(998218),
    g = n(636401),
    L = n(639621),
    D = n(613057),
    b = n(652215);
let M = R.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)?.host ?? "localhost",
    P = (function () {
        let e = M.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    U = RegExp(`^${C.A.escape("https://")}(?:[a-z]+\\.)?(${C.A.escape(P)}|discordapp.com|discord.com)$`),
    v = +m.A.Millis.MINUTE,
    y = {};
function G(e) {
    return (
        "customEmoji" === e.type && (e.type = "emoji"),
        "emoji" === e.type && e.src && (e.src = w(e.src)),
        Array.isArray(e.content) && (e.content = e.content.map(G)),
        e
    );
}
function w(e) {
    return /^http/.test(e) ? e : `${location.protocol}//${location.host}${"/" === e.charAt(0) ? "" : "/"}${e}`;
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function V(e, t) {
    let n = [],
        i = e.getGuildId();
    return (
        [b.rbe.GUILD_CATEGORY, ...u.OU].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    S.A.whenReady(e.id, () => t()), l.A.fetchMessages({ channelId: e.id, limit: b.EMb });
                }),
            ),
        Promise.all(n).then(() => {
            let n =
                    (!e.isNSFW() || f.default.getCurrentUser()?.nsfwAllowed === !0) && t
                        ? S.A.getMessages(e.id).toArray().map(B)
                        : [],
                a = Object.values(p.A.getVoiceStatesForChannel(e.id)).map((t) => F(i, e.id, t));
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
                voice_states: a,
            };
        })
    );
}
function B(e) {
    let t = c.A.parseToAST(e.content, !0, { channelId: e.channel_id }).map(G),
        n = I.A.getChannel(e.channel_id),
        i = null != e.author ? new A.A(e.author) : void 0,
        a = null != e.author ? (0, _.FT)(i, n) : void 0;
    return {
        id: e.id,
        blocked: e.blocked,
        bot: e.bot,
        content: e.content,
        content_parsed: t.length ? t : void 0,
        nick: a?.nick,
        author_color: a?.colorString,
        edited_timestamp: e.edited_timestamp || e.editedTimestamp,
        timestamp: e.timestamp,
        tts: e.tts,
        mentions: e.mentions,
        mention_everyone: e.mention_everyone || e.mentionEveryone,
        mention_roles: e.mention_roles || e.mentionRoles,
        embeds: e.embeds,
        attachments: e.attachments,
        author: null != i ? (0, L.A)(i) : void 0,
        pinned: e.pinned,
        type: e.type,
    };
}
function F(e, t, n) {
    let { mute: i, deaf: a, selfMute: r, selfDeaf: s, suppress: l, userId: o } = n,
        d = f.default.getUser(o);
    if (null == d) throw Error(`Invalid user id: ${o}`);
    return {
        nick: O.Ay.getName(e, t, d),
        mute: h.Ay.isLocalMute(d.id),
        volume: h.Ay.getLocalVolume(d.id),
        pan: h.Ay.getLocalPan(d.id),
        voice_state: { mute: i, deaf: a, self_mute: r, self_deaf: s, suppress: l },
        user: (0, L.A)(d),
    };
}
function k(e, t) {
    return { type: e, user: (0, L.A)(t), presence: { status: N.A.getStatus(t.id, null), activity: null } };
}
function H(e, t) {
    return null == t
        ? e
        : { ...e, presence: { ...e.presence, activity: N.A.getApplicationActivity(e.user.id, t) ?? null } };
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
        (null == e.match("staging") && !!(U.test(e) && U.test(n)))
    );
}
function Y(e, t, n) {
    let i = T.A.getGuild(e.getGuildId());
    return (null != i ? i.application_id : e.getApplicationId()) === t || n.indexOf(a.F.MESSAGES_READ) > -1;
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
function $(e) {
    return r.Bo.get({ url: b.Rsh.APPLICATION_RPC(e), oldFormErrors: !0, retries: 3, rejectWithError: !0 }).then(
        (e) => {
            let { body: t } = e;
            return t;
        },
        () => {
            throw new g.A({ closeCode: b.YI$.INVALID_CLIENTID }, "Invalid Client ID");
        },
    );
}
async function Z(e, t, n) {
    let i = d.A.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === D.z4.POST_MESSAGE) {
            let e = (0, o.Ay)(t);
            if (null == e || !x(n, [e])) throw new g.A({ closeCode: b.YI$.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await $(t);
            if (((i = E.Ay.createFromServer(e)), !x(n, e.rpc_origins)))
                throw new g.A({ closeCode: b.YI$.INVALID_ORIGIN }, "Invalid Origin");
        }
    null == i && (i = E.Ay.createFromServer(await $(t)));
    let { id: a, name: r, icon: s, coverImage: l, flags: c, parentId: _ } = i;
    e.application = { id: a, parentId: _, name: r, icon: s, coverImage: l, flags: c };
}
async function q(e, t, n) {
    let i = y[e];
    null == i && ((i = new s.A(t ? 2 : 60, v)), (y[e] = i));
    try {
        await i.process(n);
    } catch (e) {
        throw new g.A({ closeCode: b.YI$.CLOSE_ABNORMAL }, "Socket closed during throttle");
    }
}
function Q(e, t) {
    null == t && (e.authorization.scopes = [D.hj]);
}
function z(e) {
    let t = h.Ay.getSettings(),
        n = (e) =>
            Object.values(e)
                .sort((e, t) => e.index - t.index)
                .map((e) => ({ id: e.id, name: e.name })),
        i = e(t);
    return {
        input: { available_devices: n(h.Ay.getInputDevices()), device_id: t.inputDeviceId, volume: t.inputVolume },
        output: { available_devices: n(h.Ay.getOutputDevices()), device_id: t.outputDeviceId, volume: t.outputVolume },
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
    let n = h.Ay.getSettings(e),
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
    if (e !== D.z4.POST_MESSAGE)
        throw new g.A({ errorCode: b.Lw6.INVALID_COMMAND }, `command not available from "${e} transport`);
}
function ee(e) {
    if (null == e.id) throw new g.A({ errorCode: b.Lw6.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
