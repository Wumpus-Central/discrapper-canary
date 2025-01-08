n.d(t, {
    FJ: function () {
        return $;
    },
    RE: function () {
        return k;
    },
    S5: function () {
        return Y;
    },
    T5: function () {
        return G;
    },
    Xb: function () {
        return B;
    },
    YK: function () {
        return Q;
    },
    _f: function () {
        return et;
    },
    aE: function () {
        return V;
    },
    bu: function () {
        return ee;
    },
    cD: function () {
        return H;
    },
    fy: function () {
        return q;
    },
    s9: function () {
        return F;
    },
    t9: function () {
        return K;
    },
    tr: function () {
        return J;
    },
    vv: function () {
        return X;
    },
    zM: function () {
        return z;
    },
    zy: function () {
        return W;
    }
}),
    n(47120),
    n(653041),
    n(411104),
    n(757143),
    n(392711);
var i,
    r,
    l = n(729594),
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
    f = n(598077),
    _ = n(592125),
    E = n(430824),
    I = n(131951),
    C = n(375954),
    N = n(158776),
    v = n(594174),
    S = n(979651),
    T = n(70956),
    b = n(5192),
    A = n(226951),
    Z = n(591759),
    x = n(996106),
    L = n(863141),
    P = n(186901),
    O = n(981631);
let y = null !== (r = null === (i = Z.Z.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)) || void 0 === i ? void 0 : i.host) && void 0 !== r ? r : 'localhost',
    R = (function () {
        let e = y.split(':')[0];
        if (!e.includes('.')) return e;
        let t = e.split('.'),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join('.');
    })(),
    j = new RegExp('^'.concat(A.Z.escape('https://'), '(?:[a-z]+\\.)?(').concat(A.Z.escape(R), '|discordapp.com|discord.com)$')),
    D = 1 * T.Z.Millis.MINUTE,
    M = {};
function w(e) {
    return 'customEmoji' === e.type && (e.type = 'emoji'), 'emoji' === e.type && e.src && (e.src = k(e.src)), Array.isArray(e.content) && (e.content = e.content.map(w)), e;
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
        ![O.d4z.GUILD_CATEGORY, ...g.tx].includes(e.type) &&
            n.push(
                new Promise((t) => {
                    C.Z.whenReady(e.id, () => t()),
                        d.Z.fetchMessages({
                            channelId: e.id,
                            limit: O.AQB
                        });
                })
            ),
        Promise.all(n).then(() => {
            var n;
            let r = (!e.isNSFW() || (null === (n = v.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0) && t ? C.Z.getMessages(e.id).toArray().map(B) : [],
                l = Object.values(S.Z.getVoiceStatesForChannel(e.id)).map((t) => V(i, e.id, t));
            return {
                id: e.id,
                name: e.name,
                type: e.type,
                topic: e.topic,
                bitrate: e.bitrate,
                user_limit: e.userLimit,
                guild_id: i,
                position: e.position,
                messages: r,
                voice_states: l
            };
        })
    );
}
function B(e) {
    let t = h.Z.parseToAST(e.content, !0, { channelId: e.channel_id }).map(w),
        n = _.Z.getChannel(e.channel_id),
        i = null != e.author ? new f.Z(e.author) : void 0,
        r = null != e.author ? (0, m.ij)(i, n) : void 0;
    return {
        id: e.id,
        blocked: e.blocked,
        bot: e.bot,
        content: e.content,
        content_parsed: t.length ? t : void 0,
        nick: null == r ? void 0 : r.nick,
        author_color: null == r ? void 0 : r.colorString,
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
    let { mute: i, deaf: r, selfMute: l, selfDeaf: a, suppress: s, userId: o } = n,
        c = v.default.getUser(o);
    if (null == c) throw Error('Invalid user id: '.concat(o));
    return {
        nick: b.ZP.getName(e, t, c),
        mute: I.Z.isLocalMute(c.id),
        volume: I.Z.getLocalVolume(c.id),
        pan: I.Z.getLocalPan(c.id),
        voice_state: {
            mute: i,
            deaf: r,
            self_mute: l,
            self_deaf: a,
            suppress: s
        },
        user: (0, L.Z)(c)
    };
}
function H(e, t, n) {
    let { isSpamRequest: i, applicationId: r, userIgnored: l } = null != n ? n : {},
        a = v.default.getUser(t);
    return {
        type: e,
        user: null != a ? (0, L.Z)(a) : null,
        presence: {
            status: N.Z.getStatus(t),
            activity: null != r ? N.Z.getApplicationActivity(t, r) : N.Z.getPrimaryActivity(t)
        },
        isSpamRequest: i,
        userIgnored: l
    };
}
function F(e) {
    let t;
    if (null == e) return !1;
    let n = window.location.origin;
    if (e === n) return !0;
    try {
        t = l.parse(e).hostname;
    } catch (e) {
        return !1;
    }
    return (window.location.hostname === t && 'localhost' === t) || (null == e.match('staging') && (!!(j.test(e) && j.test(n)) || !1));
}
function z(e, t, n) {
    let i = E.Z.getGuild(e.getGuildId());
    return (null != i ? i.getApplicationId() : e.getApplicationId()) === t || n.indexOf(a.x.MESSAGES_READ) > -1;
}
function W(e) {
    switch (e) {
        case O.hes.RTC_CONNECTED:
        case O.hes.RTC_CONNECTING:
        case O.hes.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, 'VOICE_');
        default:
            return e;
    }
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: i, party: r } = e,
        l = 0;
    return (n && (l |= O.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (l |= O.xjy.JOIN), t) ? ((l |= O.xjy.EMBEDDED), (l |= O.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) : (((null == r ? void 0 : r.privacy) === O.RYY.PUBLIC || c.K.get('ACTIVITIES_FORCE_PUBLIC')) && (p.cP.getSetting() && (l |= O.xjy.PARTY_PRIVACY_FRIENDS), p.Ou.getSetting() && (l |= O.xjy.PARTY_PRIVACY_VOICE_CHANNEL)), l);
}
function K(e, t, n) {
    if (e === O.mFx.JOIN) return null != t && null != t.id && null != n.join;
    return !1;
}
function q(e, t, n) {
    return s.tn
        .get({
            url: O.ANM.APPLICATION_RPC(t),
            oldFormErrors: !0,
            retries: 3,
            rejectWithError: !0
        })
        .then(
            (i) => {
                let {
                    body: { rpc_origins: r, id: l, name: a, icon: s, cover_image: o, flags: c }
                } = i;
                if ('string' == typeof n) {
                    if (e.transport === P.He.POST_MESSAGE) {
                        let e = (0, u.Z)(t);
                        if (null == e || !U(n, [e])) throw new x.Z({ closeCode: O.$VG.INVALID_ORIGIN }, 'Invalid Origin');
                    } else if (!U(n, r)) throw new x.Z({ closeCode: O.$VG.INVALID_ORIGIN }, 'Invalid Origin');
                }
                e.application = {
                    id: l,
                    name: a,
                    icon: s,
                    coverImage: o,
                    flags: c
                };
            },
            () => {
                throw new x.Z({ closeCode: O.$VG.INVALID_CLIENTID }, 'Invalid Client ID');
            }
        );
}
async function X(e, t) {
    let n = M[e];
    null == n && ((n = new o.Z(t ? 2 : 60, D)), (M[e] = n)), await n.process();
}
function Q(e, t) {
    null == t && (e.authorization.scopes = [P.lH]);
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
    if (e !== P.He.POST_MESSAGE) throw new x.Z({ errorCode: O.lTL.INVALID_COMMAND }, 'command not available from "'.concat(e, ' transport'));
}
function et(e) {
    if (null == e.id) throw new x.Z({ errorCode: O.lTL.INVALID_COMMAND }, 'Invalid application');
    return e.id;
}
