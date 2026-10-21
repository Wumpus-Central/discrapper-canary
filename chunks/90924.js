(n.d(t, {
    BB: () => H,
    B_: () => j,
    D2: () => W,
    Gc: () => V,
    IR: () => U,
    LP: () => x,
    Nr: () => M,
    SK: () => q,
    SN: () => P,
    Ub: () => K,
    e2: () => z,
    hG: () => k,
    lG: () => Q,
    px: () => $,
    qG: () => G,
    sq: () => Y,
    uM: () => F,
}),
    n(938796),
    n(321073),
    n(435558));
var i = n(567243),
    o = n(179771),
    r = n(636537),
    a = n(898467),
    l = n(148494),
    s = n(956518),
    c = n(587895),
    u = n(395671),
    d = n(95701),
    p = n(71393),
    _ = n(360906),
    m = n(232835),
    h = n(290863),
    y = n(287809),
    f = n(977997),
    g = n(927813),
    I = n(562153),
    A = n(257120),
    v = n(998218),
    E = n(636401),
    C = n(448875),
    w = n(639621),
    S = n(613057),
    O = n(652215);
let T = v.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)?.host ?? "localhost",
    b = (function () {
        let e = T.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    L = RegExp(`^${A.A.escape("https://")}(?:[a-z]+\\.)?(${A.A.escape(b)}|discordapp.com|discord.com)$`),
    N = +g.A.Millis.MINUTE,
    R = {};
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function k(e) {
    return "bigint" == typeof e ? e : e.toString();
}
function M(e) {
    return {
        id: e.id,
        name: e.name,
        color: e.color,
        colors: e.colors ?? { primary_color: e.color, secondary_color: null, tertiary_color: null },
        hoist: e.hoist,
        position: e.position,
        permissions: k(e.permissions),
        managed: e.managed,
        mentionable: e.mentionable,
        icon: e.icon,
        unicode_emoji: e.unicodeEmoji,
        tags: e.tags,
        flags: e.flags,
    };
}
function P(e, t) {
    let n = [],
        i = e.getGuildId();
    return (
        [O.rbe.GUILD_CATEGORY, ...d.OU].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    (m.A.whenReady(e.id, () => t()), l.A.fetchMessages({ channelId: e.id, limit: O.EMb }));
                }),
            ),
        Promise.all(n).then(() => {
            let n =
                    (!e.isNSFW() || y.default.getCurrentUser()?.nsfwAllowed === !0) && t
                        ? m.A.getMessages(e.id).toArray().map(C.Z)
                        : [],
                o = Object.values(f.A.getVoiceStatesForChannel(e.id)).map((t) => G(i, e.id, t));
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
function G(e, t, n) {
    let { mute: i, deaf: o, selfMute: r, selfDeaf: a, suppress: l, userId: s } = n,
        c = y.default.getUser(s);
    if (null == c) throw Error(`Invalid user id: ${s}`);
    return {
        nick: I.Ay.getName(e, t, c),
        mute: _.Ay.isLocalMute(c.id),
        volume: _.Ay.getLocalVolume(c.id),
        pan: _.Ay.getLocalPan(c.id),
        voice_state: { mute: i, deaf: o, self_mute: r, self_deaf: a, suppress: l },
        user: (0, w.A)(c),
    };
}
function V(e, t) {
    return { type: e, user: (0, w.A)(t), presence: { status: h.A.getStatus(t.id, null), activity: null } };
}
function x(e, t) {
    return null == t
        ? e
        : { ...e, presence: { ...e.presence, activity: h.A.getApplicationActivity(e.user.id, t) ?? null } };
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
        (null == e.match("staging") && !!(L.test(e) && L.test(n)))
    );
}
function j(e, t, n) {
    let i = p.A.getGuild(e.getGuildId());
    return (null != i ? i.application_id : e.getApplicationId()) === t || n.has(o.F.MESSAGES_READ);
}
function q(e) {
    switch (e) {
        case O.S7L.RTC_CONNECTED:
        case O.S7L.RTC_CONNECTING:
        case O.S7L.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, "VOICE_");
        default:
            return e;
    }
}
function $(e, t, n) {
    return e === O.xL.JOIN && null != t && null != t.id && null != n.join;
}
function B(e) {
    return r.Bo.get({ url: O.Rsh.APPLICATION_RPC(e), oldFormErrors: !0, retries: 3, rejectWithError: !0 }).then(
        (e) => {
            let { body: t } = e;
            return t;
        },
        () => {
            throw new E.A({ closeCode: O.YI$.INVALID_CLIENTID }, "Invalid Client ID");
        },
    );
}
async function F(e, t, n) {
    let i = c.A.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === S.z4.POST_MESSAGE) {
            let e = (0, s.Ay)(t);
            if (null == e || !D(n, [e])) throw new E.A({ closeCode: O.YI$.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await B(t);
            if (((i = u.Ay.createFromServer(e)), !D(n, e.rpc_origins)))
                throw new E.A({ closeCode: O.YI$.INVALID_ORIGIN }, "Invalid Origin");
        }
    let o = e.transport === S.z4.POST_MESSAGE && !c.A.isHydrated(t);
    (null == i || o) && (i = u.Ay.createFromServer(await B(t)));
    let { id: r, name: a, icon: l, coverImage: d, flags: p, parentId: _, bot: m, embeddedSurfaces: h } = i;
    e.application = { id: r, parentId: _, name: a, icon: l, coverImage: d, flags: p, bot: m, embeddedSurfaces: h };
}
async function z(e, t, n) {
    let i = R[e];
    null == i && ((i = new a.A(t ? 2 : 60, N)), (R[e] = i));
    try {
        await i.process(n);
    } catch (e) {
        throw new E.A({ closeCode: O.YI$.CLOSE_ABNORMAL }, "Socket closed during throttle");
    }
}
function Y(e, t) {
    null == t && (e.authorization.scopes = new Set([S.hj]));
}
function H(e) {
    let t = _.Ay.getSettings();
    function n(e) {
        return Object.values(e)
            .sort((e, t) => e.index - t.index)
            .map((e) => ({ id: e.id, name: e.name }));
    }
    let i = e(t);
    return {
        input: { available_devices: n(_.Ay.getInputDevices()), device_id: t.inputDeviceId, volume: t.inputVolume },
        output: { available_devices: n(_.Ay.getOutputDevices()), device_id: t.outputDeviceId, volume: t.outputVolume },
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
function K(e, t) {
    let n = _.Ay.getSettings(e),
        i = t(n);
    return {
        input_mode: { type: n.mode, shortcut: i },
        local_mutes: Object.keys(n.localMutes),
        local_volumes: n.localVolumes,
        self_mute: n.mute,
        self_deaf: n.deaf,
    };
}
function Q(e) {
    if (e !== S.z4.POST_MESSAGE)
        throw new E.A({ errorCode: O.Lw6.INVALID_COMMAND }, `command not available from "${e} transport`);
}
function W(e) {
    if (null == e.id) throw new E.A({ errorCode: O.Lw6.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
