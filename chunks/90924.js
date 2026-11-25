(n(938796), n(321073), n(435558));
var i = n(567243),
    o = n(179771),
    r = n(620632),
    l = n(898467),
    a = n(138399),
    s = n(956518),
    c = n(587895),
    u = n(327891),
    d = n(95701),
    p = n(71393),
    _ = n(988468),
    m = n(596344),
    h = n(290863),
    y = n(287809),
    f = n(977997),
    g = n(927813),
    I = n(562153),
    A = n(257120),
    v = n(998218),
    E = n(636401),
    C = n(574165),
    w = n(448875),
    S = n(639621),
    b = n(613057),
    O = n(652215);
let T = v.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)?.host ?? "localhost",
    N = (function () {
        let e = T.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    L = RegExp(`^${A.A.escape("https://")}(?:[a-z]+\\.)?(${A.A.escape(N)}|discordapp.com|discord.com)$`),
    R = +g.A.Millis.MINUTE,
    D = {};
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function M(e) {
    return "bigint" == typeof e ? e : e.toString();
}
function P(e, t, n) {
    let { mute: i, deaf: o, selfMute: r, selfDeaf: l, suppress: a, userId: s } = n,
        c = y.default.getUser(s);
    if (null == c) throw Error(`Invalid user id: ${s}`);
    return {
        nick: I.Ay.getName(e, t, c),
        mute: _.Ay.isLocalMute(c.id),
        volume: _.Ay.getLocalVolume(c.id),
        pan: _.Ay.getLocalPan(c.id),
        voice_state: { mute: i, deaf: o, self_mute: r, self_deaf: l, suppress: a },
        user: (0, S.A)(c),
    };
}
function j(e) {
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
n.d(
    t,
    {},
    {
        BB: function (e) {
            let t = _.Ay.getSettings();
            function n(e) {
                return Object.values(e)
                    .sort((e, t) => e.index - t.index)
                    .map((e) => ({ id: e.id, name: e.name }));
            }
            let i = e(t);
            return {
                input: {
                    available_devices: n(_.Ay.getInputDevices()),
                    device_id: t.inputDeviceId,
                    volume: t.inputVolume,
                },
                output: {
                    available_devices: n(_.Ay.getOutputDevices()),
                    device_id: t.outputDeviceId,
                    volume: t.outputVolume,
                },
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
        },
        B_: function (e, t, n) {
            let i = p.A.getGuild(e.getGuildId());
            return (null != i ? i.application_id : e.getApplicationId()) === t || n.has(o.F.MESSAGES_READ);
        },
        D2: function (e) {
            if (null == e.id) throw new E.A({ errorCode: O.Lw6.INVALID_COMMAND }, "Invalid application");
            return e.id;
        },
        Gc: function (e, t) {
            return { type: e, user: (0, S.A)(t), presence: { status: h.A.getStatus(t.id, null), activity: null } };
        },
        IR: function (e) {
            let t;
            if (null == e) return !1;
            let n = window.location.origin;
            if (e === n) return !0;
            try {
                t = i.qg(e).hostname;
            } catch (e) {
                return !1;
            }
            return (
                (window.location.hostname === t && "localhost" === t) ||
                (null == e.match("staging") && !!(L.test(e) && L.test(n)))
            );
        },
        LP: function (e, t) {
            return null == t
                ? e
                : { ...e, presence: { ...e.presence, activity: h.A.getApplicationActivity(e.user.id, t) ?? null } };
        },
        Nr: function (e) {
            return {
                id: e.id,
                name: e.name,
                color: e.color,
                colors: e.colors ?? { primary_color: e.color, secondary_color: null, tertiary_color: null },
                hoist: e.hoist,
                position: e.position,
                permissions: M(e.permissions),
                managed: e.managed,
                mentionable: e.mentionable,
                icon: e.icon,
                unicode_emoji: e.unicodeEmoji,
                tags: e.tags,
                flags: e.flags,
            };
        },
        QX: function (e) {
            return {
                user_id: e.userId,
                guild_id: e.guildId,
                nick: e.nick ?? null,
                avatar: e.avatar ?? null,
                avatar_decoration_data: (0, C.A)(e.avatarDecoration),
                banner: e.banner ?? null,
                roles: e.roles,
                joined_at: e.joinedAt ?? null,
                premium_since: e.premiumSince ?? null,
                communication_disabled_until: e.communicationDisabledUntil ?? null,
                pending: e.isPending ?? !1,
                flags: e.flags ?? 0,
                color_string: e.colorString,
            };
        },
        SK: function (e) {
            switch (e) {
                case O.S7L.RTC_CONNECTED:
                case O.S7L.RTC_CONNECTING:
                case O.S7L.RTC_DISCONNECTED:
                    return e.replace(/^RTC_/, "VOICE_");
                default:
                    return e;
            }
        },
        SN: function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = [],
                o = e.getGuildId();
            return (
                n &&
                    ![O.rbe.GUILD_CATEGORY, ...d.OU].includes(e.type) &&
                    i.push(
                        new Promise((t) => {
                            (m.A.whenReady(e.id, () => t()), a.A.fetchMessages({ channelId: e.id, limit: 30 }));
                        }),
                    ),
                Promise.all(i).then(() => {
                    let n =
                            (!e.isNSFW() || y.default.getCurrentUser()?.nsfwAllowed === !0) && t
                                ? m.A.getMessages(e.id).toArray().map(w.Z)
                                : [],
                        i = Object.values(f.A.getVoiceStatesForChannel(e.id)).map((t) => P(o, e.id, t));
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
        },
        Ub: function (e, t) {
            let n = _.Ay.getSettings(e),
                i = t(n);
            return {
                input_mode: { type: n.mode, shortcut: i },
                local_mutes: Object.keys(n.localMutes),
                local_volumes: n.localVolumes,
                self_mute: n.mute,
                self_deaf: n.deaf,
            };
        },
        e2: async function (e, t, n) {
            let i = D[e];
            null == i && ((i = new l.A(t ? 2 : 60, R)), (D[e] = i));
            try {
                await i.process(n);
            } catch (e) {
                throw new E.A({ closeCode: O.YI$.CLOSE_ABNORMAL }, "Socket closed during throttle");
            }
        },
        hG: M,
        lG: function (e) {
            if (e !== b.z4.POST_MESSAGE)
                throw new E.A({ errorCode: O.Lw6.INVALID_COMMAND }, `command not available from "${e} transport`);
        },
        px: function (e, t, n) {
            return e === O.xL.JOIN && null != t && null != t.id && null != n.join;
        },
        qG: P,
        sq: function (e, t) {
            null == t && (e.authorization.scopes = new Set([b.hj]));
        },
        uM: async function (e, t, n) {
            let i = c.A.getApplication(t);
            if ("string" == typeof n)
                if (e.transport === b.z4.POST_MESSAGE) {
                    let e = v.A.toOriginSafe((0, s.Ay)(t)),
                        i = v.A.toOriginSafe(n);
                    if (null == e || null == i || !k(i, [e]))
                        throw new E.A({ closeCode: O.YI$.INVALID_ORIGIN }, "Invalid Origin");
                } else {
                    let e = await j(t);
                    if (((i = u.Ay.createFromServer(e)), !k(n, e.rpc_origins)))
                        throw new E.A({ closeCode: O.YI$.INVALID_ORIGIN }, "Invalid Origin");
                }
            let o = e.transport === b.z4.POST_MESSAGE && !c.A.isHydrated(t);
            (null == i || o) && (i = u.Ay.createFromServer(await j(t)));
            let { id: r, name: l, icon: a, coverImage: d, flags: p, parentId: _, bot: m, embeddedSurfaces: h } = i;
            e.application = {
                id: r,
                parentId: _,
                name: l,
                icon: a,
                coverImage: d,
                flags: p,
                bot: m,
                embeddedSurfaces: h,
            };
        },
    },
);
