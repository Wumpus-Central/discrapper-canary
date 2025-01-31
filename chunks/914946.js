n.d(t, {
    FJ: () => $,
    RE: () => k,
    S5: () => Y,
    T5: () => G,
    Xb: () => B,
    YK: () => Q,
    _f: () => et,
    aE: () => V,
    bu: () => ee,
    cD: () => H,
    fy: () => q,
    s9: () => F,
    t9: () => K,
    tr: () => J,
    vv: () => X,
    zM: () => z,
    zy: () => W
}),
    n(47120),
    n(653041),
    n(411104),
    n(757143),
    n(392711);
var i,
    l,
    r = n(729594),
    a = n(243814),
    s = n(544891),
    o = n(63023),
    c = n(433517),
    d = n(904245),
    u = n(155268),
    h = n(454585),
    m = n(739566),
    p = n(695346),
    g = n(131704),
    _ = n(598077),
    f = n(592125),
    E = n(430824),
    I = n(131951),
    C = n(375954),
    v = n(158776),
    N = n(594174),
    T = n(979651),
    S = n(70956),
    Z = n(5192),
    x = n(226951),
    A = n(591759),
    b = n(996106),
    L = n(863141),
    y = n(186901),
    P = n(981631);
let O = null !== (l = null === (i = A.Z.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)) || void 0 === i ? void 0 : i.host) && void 0 !== l ? l : 'localhost',
    R = (function () {
        let e = O.split(':')[0];
        if (!e.includes('.')) return e;
        let t = e.split('.'),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join('.');
    })(),
    j = new RegExp('^'.concat(x.Z.escape('https://'), '(?:[a-z]+\\.)?(').concat(x.Z.escape(R), '|discordapp.com|discord.com)$')),
    D = 1 * S.Z.Millis.MINUTE,
    w = {};
function M(e) {
    return 'customEmoji' === e.type && (e.type = 'emoji'), 'emoji' === e.type && e.src && (e.src = k(e.src)), Array.isArray(e.content) && (e.content = e.content.map(M)), e;
}
function k(e) {
    return /^http/.test(e)
        ? e
        : ''
              .concat(location.protocol, '//')
              .concat(location.host)
              .concat('/' === e.charAt(0) ? '' : '/')
              .concat(e);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function G(e, t) {
    let n = [],
        i = e.getGuildId();
    return (
        [P.d4z.GUILD_CATEGORY, ...g.tx].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    C.Z.whenReady(e.id, () => t()),
                        d.Z.fetchMessages({
                            channelId: e.id,
                            limit: P.AQB
                        });
                })
            ),
        Promise.all(n).then(() => {
            var n;
            let l = (!e.isNSFW() || (null === (n = N.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0) && t ? C.Z.getMessages(e.id).toArray().map(B) : [],
                r = Object.values(T.Z.getVoiceStatesForChannel(e.id)).map((t) => V(i, e.id, t));
            return {
                id: e.id,
                name: e.name,
                type: e.type,
                topic: e.topic,
                bitrate: e.bitrate,
                user_limit: e.userLimit,
                guild_id: i,
                position: e.position,
                messages: l,
                voice_states: r
            };
        })
    );
}
function B(e) {
    let t = h.Z.parseToAST(e.content, !0, { channelId: e.channel_id }).map(M),
        n = f.Z.getChannel(e.channel_id),
        i = null != e.author ? new _.Z(e.author) : void 0,
        l = null != e.author ? (0, m.ij)(i, n) : void 0;
    return {
        id: e.id,
        blocked: e.blocked,
        bot: e.bot,
        content: e.content,
        content_parsed: t.length ? t : void 0,
        nick: null == l ? void 0 : l.nick,
        author_color: null == l ? void 0 : l.colorString,
        edited_timestamp: e.edited_timestamp || e.editedTimestamp,
        timestamp: e.timestamp,
        tts: e.tts,
        mentions: e.mentions,
        mention_everyone: e.mention_everyone || e.mentionEveryone,
        mention_roles: e.mention_roles || e.mentionRoles,
        embeds: e.embeds,
        attachments: e.attachments,
        author: null != i ? (0, L.Z)(i) : void 0,
        pinned: e.pinned,
        type: e.type
    };
}
function V(e, t, n) {
    let { mute: i, deaf: l, selfMute: r, selfDeaf: a, suppress: s, userId: o } = n,
        c = N.default.getUser(o);
    if (null == c) throw Error('Invalid user id: '.concat(o));
    return {
        nick: Z.ZP.getName(e, t, c),
        mute: I.Z.isLocalMute(c.id),
        volume: I.Z.getLocalVolume(c.id),
        pan: I.Z.getLocalPan(c.id),
        voice_state: {
            mute: i,
            deaf: l,
            self_mute: r,
            self_deaf: a,
            suppress: s
        },
        user: (0, L.Z)(c)
    };
}
function H(e, t, n) {
    let { isSpamRequest: i, applicationId: l, userIgnored: r, originApplicationId: a } = null != n ? n : {},
        s = N.default.getUser(t);
    return {
        type: e,
        user: null != s ? (0, L.Z)(s) : null,
        presence: {
            status: v.Z.getStatus(t),
            activity: null != l ? v.Z.getApplicationActivity(t, l) : v.Z.getPrimaryActivity(t)
        },
        isSpamRequest: i,
        userIgnored: r,
        originApplicationId: a
    };
}
function F(e) {
    let t;
    if (null == e) return !1;
    let n = window.location.origin;
    if (e === n) return !0;
    try {
        t = r.parse(e).hostname;
    } catch (e) {
        return !1;
    }
    return (window.location.hostname === t && 'localhost' === t) || (null == e.match('staging') && !!(j.test(e) && j.test(n)));
}
function z(e, t, n) {
    let i = E.Z.getGuild(e.getGuildId());
    return (null != i ? i.getApplicationId() : e.getApplicationId()) === t || n.indexOf(a.x.MESSAGES_READ) > -1;
}
function W(e) {
    switch (e) {
        case P.hes.RTC_CONNECTED:
        case P.hes.RTC_CONNECTING:
        case P.hes.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, 'VOICE_');
        default:
            return e;
    }
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: i, party: l } = e,
        r = 0;
    n && (r |= P.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (r |= P.xjy.JOIN);
    let a = p.cP.getSetting(),
        s = p.Ou.getSetting();
    return t ? ((r |= P.xjy.EMBEDDED), a && (r |= P.xjy.PARTY_PRIVACY_FRIENDS), s && (r |= P.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) : ((null == l ? void 0 : l.privacy) === P.RYY.PUBLIC || c.K.get('ACTIVITIES_FORCE_PUBLIC')) && (a && (r |= P.xjy.PARTY_PRIVACY_FRIENDS), s && (r |= P.xjy.PARTY_PRIVACY_VOICE_CHANNEL)), r;
}
function K(e, t, n) {
    return e === P.mFx.JOIN && null != t && null != t.id && null != n.join;
}
function q(e, t, n) {
    return s.tn
        .get({
            url: P.ANM.APPLICATION_RPC(t),
            oldFormErrors: !0,
            retries: 3,
            rejectWithError: !0
        })
        .then(
            (i) => {
                let {
                    body: { rpc_origins: l, id: r, name: a, icon: s, cover_image: o, flags: c }
                } = i;
                if ('string' == typeof n) {
                    if (e.transport === y.He.POST_MESSAGE) {
                        let e = (0, u.Z)(t);
                        if (null == e || !U(n, [e])) throw new b.Z({ closeCode: P.$VG.INVALID_ORIGIN }, 'Invalid Origin');
                    } else if (!U(n, l)) throw new b.Z({ closeCode: P.$VG.INVALID_ORIGIN }, 'Invalid Origin');
                }
                e.application = {
                    id: r,
                    name: a,
                    icon: s,
                    coverImage: o,
                    flags: c
                };
            },
            () => {
                throw new b.Z({ closeCode: P.$VG.INVALID_CLIENTID }, 'Invalid Client ID');
            }
        );
}
async function X(e, t) {
    let n = w[e];
    null == n && ((n = new o.Z(t ? 2 : 60, D)), (w[e] = n)), await n.process();
}
function Q(e, t) {
    null == t && (e.authorization.scopes = [y.lH]);
}
function J(e) {
    let t = I.Z.getSettings(),
        n = (e) =>
            Object.values(e)
                .sort((e, t) => e.index - t.index)
                .map((e) => ({
                    id: e.id,
                    name: e.name
                })),
        i = e(t);
    return {
        input: {
            available_devices: n(I.Z.getInputDevices()),
            device_id: t.inputDeviceId,
            volume: t.inputVolume
        },
        output: {
            available_devices: n(I.Z.getOutputDevices()),
            device_id: t.outputDeviceId,
            volume: t.outputVolume
        },
        mode: {
            type: t.mode,
            auto_threshold: t.modeOptions.autoThreshold,
            threshold: t.modeOptions.threshold,
            shortcut: i,
            delay: t.modeOptions.delay
        },
        automatic_gain_control: t.automaticGainControl,
        echo_cancellation: t.echoCancellation,
        noise_suppression: t.noiseSuppression,
        qos: t.qos,
        silence_warning: t.silenceWarning,
        deaf: t.deaf,
        mute: t.mute
    };
}
function $(e, t) {
    let n = I.Z.getSettings(e),
        i = t(n);
    return {
        input_mode: {
            type: n.mode,
            shortcut: i
        },
        local_mutes: Object.keys(n.localMutes),
        local_volumes: n.localVolumes,
        self_mute: n.mute,
        self_deaf: n.deaf
    };
}
function ee(e) {
    if (e !== y.He.POST_MESSAGE) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'command not available from "'.concat(e, ' transport'));
}
function et(e) {
    if (null == e.id) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'Invalid application');
    return e.id;
}
