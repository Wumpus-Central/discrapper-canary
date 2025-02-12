n.d(t, {
    FJ: () => ei,
    RE: () => G,
    S5: () => X,
    T5: () => V,
    Xb: () => H,
    YK: () => et,
    YS: () => $,
    _J: () => z,
    _f: () => er,
    aE: () => F,
    bu: () => el,
    kb: () => W,
    s9: () => Y,
    t9: () => Q,
    tr: () => en,
    vv: () => ee,
    zM: () => K,
    zy: () => q
}),
    n(47120),
    n(653041),
    n(411104),
    n(757143),
    n(789020),
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
    h = n(812206),
    m = n(454585),
    p = n(739566),
    g = n(695346),
    _ = n(973616),
    f = n(131704),
    E = n(598077),
    I = n(592125),
    C = n(430824),
    N = n(131951),
    v = n(375954),
    T = n(158776),
    S = n(594174),
    A = n(979651),
    b = n(70956),
    Z = n(5192),
    x = n(226951),
    L = n(591759),
    y = n(996106),
    P = n(863141),
    O = n(186901),
    R = n(981631);
let j = null !== (l = null === (i = L.Z.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)) || void 0 === i ? void 0 : i.host) && void 0 !== l ? l : 'localhost',
    D = (function () {
        let e = j.split(':')[0];
        if (!e.includes('.')) return e;
        let t = e.split('.'),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join('.');
    })(),
    w = new RegExp('^'.concat(x.Z.escape('https://'), '(?:[a-z]+\\.)?(').concat(x.Z.escape(D), '|discordapp.com|discord.com)$')),
    k = 1 * b.Z.Millis.MINUTE,
    M = {};
function U(e) {
    return 'customEmoji' === e.type && (e.type = 'emoji'), 'emoji' === e.type && e.src && (e.src = G(e.src)), Array.isArray(e.content) && (e.content = e.content.map(U)), e;
}
function G(e) {
    return /^http/.test(e)
        ? e
        : ''
              .concat(location.protocol, '//')
              .concat(location.host)
              .concat('/' === e.charAt(0) ? '' : '/')
              .concat(e);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.indexOf(e) > -1;
}
function V(e, t) {
    let n = [],
        i = e.getGuildId();
    return (
        [R.d4z.GUILD_CATEGORY, ...f.tx].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    v.Z.whenReady(e.id, () => t()),
                        d.Z.fetchMessages({
                            channelId: e.id,
                            limit: R.AQB
                        });
                })
            ),
        Promise.all(n).then(() => {
            var n;
            let l = (!e.isNSFW() || (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0) && t ? v.Z.getMessages(e.id).toArray().map(H) : [],
                r = Object.values(A.Z.getVoiceStatesForChannel(e.id)).map((t) => F(i, e.id, t));
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
function H(e) {
    let t = m.Z.parseToAST(e.content, !0, { channelId: e.channel_id }).map(U),
        n = I.Z.getChannel(e.channel_id),
        i = null != e.author ? new E.Z(e.author) : void 0,
        l = null != e.author ? (0, p.ij)(i, n) : void 0;
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
        author: null != i ? (0, P.Z)(i) : void 0,
        pinned: e.pinned,
        type: e.type
    };
}
function F(e, t, n) {
    let { mute: i, deaf: l, selfMute: r, selfDeaf: a, suppress: s, userId: o } = n,
        c = S.default.getUser(o);
    if (null == c) throw Error('Invalid user id: '.concat(o));
    return {
        nick: Z.ZP.getName(e, t, c),
        mute: N.Z.isLocalMute(c.id),
        volume: N.Z.getLocalVolume(c.id),
        pan: N.Z.getLocalPan(c.id),
        voice_state: {
            mute: i,
            deaf: l,
            self_mute: r,
            self_deaf: a,
            suppress: s
        },
        user: (0, P.Z)(c)
    };
}
function z(e, t) {
    return {
        type: e,
        user: (0, P.Z)(t),
        presence: {
            status: T.Z.getStatus(t.id, null),
            activity: null
        }
    };
}
function W(e, t) {
    var n;
    return null == t
        ? e
        : {
              ...e,
              presence: {
                  ...e.presence,
                  activity: null !== (n = T.Z.getApplicationActivity(e.user.id, t)) && void 0 !== n ? n : null
              }
          };
}
function Y(e) {
    let t;
    if (null == e) return !1;
    let n = window.location.origin;
    if (e === n) return !0;
    try {
        t = r.parse(e).hostname;
    } catch (e) {
        return !1;
    }
    return (window.location.hostname === t && 'localhost' === t) || (null == e.match('staging') && !!(w.test(e) && w.test(n)));
}
function K(e, t, n) {
    let i = C.Z.getGuild(e.getGuildId());
    return (null != i ? i.getApplicationId() : e.getApplicationId()) === t || n.indexOf(a.x.MESSAGES_READ) > -1;
}
function q(e) {
    switch (e) {
        case R.hes.RTC_CONNECTED:
        case R.hes.RTC_CONNECTING:
        case R.hes.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, 'VOICE_');
        default:
            return e;
    }
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: i, party: l } = e,
        r = 0;
    n && (r |= R.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (r |= R.xjy.JOIN);
    let a = g.cP.getSetting(),
        s = g.Ou.getSetting();
    return t ? ((r |= R.xjy.EMBEDDED), a && (r |= R.xjy.PARTY_PRIVACY_FRIENDS), s && (r |= R.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) : ((null == l ? void 0 : l.privacy) === R.RYY.PUBLIC || c.K.get('ACTIVITIES_FORCE_PUBLIC')) && (a && (r |= R.xjy.PARTY_PRIVACY_FRIENDS), s && (r |= R.xjy.PARTY_PRIVACY_VOICE_CHANNEL)), r;
}
function Q(e, t, n) {
    return e === R.mFx.JOIN && null != t && null != t.id && null != n.join;
}
function J(e) {
    return s.tn
        .get({
            url: R.ANM.APPLICATION_RPC(e),
            oldFormErrors: !0,
            retries: 3,
            rejectWithError: !0
        })
        .then(
            (e) => {
                let { body: t } = e;
                return t;
            },
            () => {
                throw new y.Z({ closeCode: R.$VG.INVALID_CLIENTID }, 'Invalid Client ID');
            }
        );
}
async function $(e, t, n) {
    let i = h.Z.getApplication(t);
    if ('string' == typeof n) {
        if (e.transport === O.He.POST_MESSAGE) {
            let e = (0, u.Z)(t);
            if (null == e || !B(n, [e])) throw new y.Z({ closeCode: R.$VG.INVALID_ORIGIN }, 'Invalid Origin');
        } else {
            let e = await J(t);
            if (((i = _.ZP.createFromServer(e)), !B(n, e.rpc_origins))) throw new y.Z({ closeCode: R.$VG.INVALID_ORIGIN }, 'Invalid Origin');
        }
    }
    null == i && (i = _.ZP.createFromServer(await J(t)));
    let { id: l, name: r, icon: a, coverImage: s, flags: o } = i;
    e.application = {
        id: l,
        name: r,
        icon: a,
        coverImage: s,
        flags: o
    };
}
async function ee(e, t) {
    let n = M[e];
    null == n && ((n = new o.Z(t ? 2 : 60, k)), (M[e] = n)), await n.process();
}
function et(e, t) {
    null == t && (e.authorization.scopes = [O.lH]);
}
function en(e) {
    let t = N.Z.getSettings(),
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
            available_devices: n(N.Z.getInputDevices()),
            device_id: t.inputDeviceId,
            volume: t.inputVolume
        },
        output: {
            available_devices: n(N.Z.getOutputDevices()),
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
function ei(e, t) {
    let n = N.Z.getSettings(e),
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
function el(e) {
    if (e !== O.He.POST_MESSAGE) throw new y.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'command not available from "'.concat(e, ' transport'));
}
function er(e) {
    if (null == e.id) throw new y.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'Invalid application');
    return e.id;
}
