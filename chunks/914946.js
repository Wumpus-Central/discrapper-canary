n.d(t, {
    FJ: () => el,
    RE: () => V,
    S5: () => J,
    T5: () => H,
    Xb: () => F,
    YK: () => er,
    YS: () => et,
    _J: () => Y,
    _f: () => eo,
    aE: () => z,
    bu: () => ea,
    kb: () => K,
    s9: () => q,
    t9: () => $,
    tr: () => ei,
    vv: () => en,
    zM: () => Q,
    zy: () => X
}),
    n(301563),
    n(474991),
    n(398202),
    n(47120),
    n(653041),
    n(411104),
    n(757143),
    n(789020),
    n(230036),
    n(392711);
var r,
    i,
    l = n(729594),
    a = n(243814),
    o = n(544891),
    s = n(63023),
    c = n(433517),
    u = n(904245),
    d = n(155268),
    p = n(812206),
    h = n(454585),
    f = n(739566),
    g = n(695346),
    m = n(973616),
    b = n(131704),
    _ = n(598077),
    E = n(592125),
    O = n(430824),
    N = n(131951),
    y = n(375954),
    I = n(158776),
    v = n(594174),
    C = n(979651),
    S = n(70956),
    T = n(5192),
    P = n(226951),
    j = n(591759),
    A = n(996106),
    Z = n(863141),
    x = n(186901),
    L = n(981631);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = null != (i = null == (r = j.Z.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)) ? void 0 : r.host) ? i : 'localhost',
    k = (function () {
        let e = D.split(':')[0];
        if (!e.includes('.')) return e;
        let t = e.split('.'),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join('.');
    })(),
    M = new RegExp('^'.concat(P.Z.escape('https://'), '(?:[a-z]+\\.)?(').concat(P.Z.escape(k), '|discordapp.com|discord.com)$')),
    U = +S.Z.Millis.MINUTE,
    G = {};
function W(e) {
    return 'customEmoji' === e.type && (e.type = 'emoji'), 'emoji' === e.type && e.src && (e.src = V(e.src)), Array.isArray(e.content) && (e.content = e.content.map(W)), e;
}
function V(e) {
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
function H(e, t) {
    let n = [],
        r = e.getGuildId();
    return (
        [L.d4z.GUILD_CATEGORY, ...b.tx].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    y.Z.whenReady(e.id, () => t()),
                        u.Z.fetchMessages({
                            channelId: e.id,
                            limit: L.AQB
                        });
                })
            ),
        Promise.all(n).then(() => {
            var n;
            let i = (!e.isNSFW() || (null == (n = v.default.getCurrentUser()) ? void 0 : n.nsfwAllowed) === !0) && t ? y.Z.getMessages(e.id).toArray().map(F) : [],
                l = Object.values(C.Z.getVoiceStatesForChannel(e.id)).map((t) => z(r, e.id, t));
            return {
                id: e.id,
                name: e.name,
                type: e.type,
                topic: e.topic,
                bitrate: e.bitrate,
                user_limit: e.userLimit,
                guild_id: r,
                position: e.position,
                messages: i,
                voice_states: l
            };
        })
    );
}
function F(e) {
    let t = h.Z.parseToAST(e.content, !0, { channelId: e.channel_id }).map(W),
        n = E.Z.getChannel(e.channel_id),
        r = null != e.author ? new _.Z(e.author) : void 0,
        i = null != e.author ? (0, f.ij)(r, n) : void 0;
    return {
        id: e.id,
        blocked: e.blocked,
        bot: e.bot,
        content: e.content,
        content_parsed: t.length ? t : void 0,
        nick: null == i ? void 0 : i.nick,
        author_color: null == i ? void 0 : i.colorString,
        edited_timestamp: e.edited_timestamp || e.editedTimestamp,
        timestamp: e.timestamp,
        tts: e.tts,
        mentions: e.mentions,
        mention_everyone: e.mention_everyone || e.mentionEveryone,
        mention_roles: e.mention_roles || e.mentionRoles,
        embeds: e.embeds,
        attachments: e.attachments,
        author: null != r ? (0, Z.Z)(r) : void 0,
        pinned: e.pinned,
        type: e.type
    };
}
function z(e, t, n) {
    let { mute: r, deaf: i, selfMute: l, selfDeaf: a, suppress: o, userId: s } = n,
        c = v.default.getUser(s);
    if (null == c) throw Error('Invalid user id: '.concat(s));
    return {
        nick: T.ZP.getName(e, t, c),
        mute: N.Z.isLocalMute(c.id),
        volume: N.Z.getLocalVolume(c.id),
        pan: N.Z.getLocalPan(c.id),
        voice_state: {
            mute: r,
            deaf: i,
            self_mute: l,
            self_deaf: a,
            suppress: o
        },
        user: (0, Z.Z)(c)
    };
}
function Y(e, t) {
    return {
        type: e,
        user: (0, Z.Z)(t),
        presence: {
            status: I.Z.getStatus(t.id, null),
            activity: null
        }
    };
}
function K(e, t) {
    var n;
    return null == t ? e : R(w({}, e), { presence: R(w({}, e.presence), { activity: null != (n = I.Z.getApplicationActivity(e.user.id, t)) ? n : null }) });
}
function q(e) {
    let t;
    if (null == e) return !1;
    let n = window.location.origin;
    if (e === n) return !0;
    try {
        t = l.parse(e).hostname;
    } catch (e) {
        return !1;
    }
    return (window.location.hostname === t && 'localhost' === t) || (null == e.match('staging') && !!(M.test(e) && M.test(n)));
}
function Q(e, t, n) {
    let r = O.Z.getGuild(e.getGuildId());
    return (null != r ? r.getApplicationId() : e.getApplicationId()) === t || n.indexOf(a.x.MESSAGES_READ) > -1;
}
function X(e) {
    switch (e) {
        case L.hes.RTC_CONNECTED:
        case L.hes.RTC_CONNECTING:
        case L.hes.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, 'VOICE_');
        default:
            return e;
    }
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: r, party: i } = e,
        l = 0;
    n && (l |= L.xjy.INSTANCE), (null == r ? void 0 : r.join) != null && (l |= L.xjy.JOIN);
    let a = g.cP.getSetting(),
        o = g.Ou.getSetting();
    return t ? ((l |= L.xjy.EMBEDDED), a && (l |= L.xjy.PARTY_PRIVACY_FRIENDS), o && (l |= L.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) : ((null == i ? void 0 : i.privacy) === L.RYY.PUBLIC || c.K.get('ACTIVITIES_FORCE_PUBLIC')) && (a && (l |= L.xjy.PARTY_PRIVACY_FRIENDS), o && (l |= L.xjy.PARTY_PRIVACY_VOICE_CHANNEL)), l;
}
function $(e, t, n) {
    return e === L.mFx.JOIN && null != t && null != t.id && null != n.join;
}
function ee(e) {
    return o.tn
        .get({
            url: L.ANM.APPLICATION_RPC(e),
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
                throw new A.Z({ closeCode: L.$VG.INVALID_CLIENTID }, 'Invalid Client ID');
            }
        );
}
async function et(e, t, n) {
    let r = p.Z.getApplication(t);
    if ('string' == typeof n)
        if (e.transport === x.He.POST_MESSAGE) {
            let e = (0, d.ZP)(t);
            if (null == e || !B(n, [e])) throw new A.Z({ closeCode: L.$VG.INVALID_ORIGIN }, 'Invalid Origin');
        } else {
            let e = await ee(t);
            if (((r = m.ZP.createFromServer(e)), !B(n, e.rpc_origins))) throw new A.Z({ closeCode: L.$VG.INVALID_ORIGIN }, 'Invalid Origin');
        }
    null == r && (r = m.ZP.createFromServer(await ee(t)));
    let { id: i, name: l, icon: a, coverImage: o, flags: s } = r;
    e.application = {
        id: i,
        name: l,
        icon: a,
        coverImage: o,
        flags: s
    };
}
async function en(e, t) {
    let n = G[e];
    null == n && ((n = new s.Z(t ? 2 : 60, U)), (G[e] = n)), await n.process();
}
function er(e, t) {
    null == t && (e.authorization.scopes = [x.lH]);
}
function ei(e) {
    let t = N.Z.getSettings(),
        n = (e) =>
            Object.values(e)
                .sort((e, t) => e.index - t.index)
                .map((e) => ({
                    id: e.id,
                    name: e.name
                })),
        r = e(t);
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
            shortcut: r,
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
function el(e, t) {
    let n = N.Z.getSettings(e),
        r = t(n);
    return {
        input_mode: {
            type: n.mode,
            shortcut: r
        },
        local_mutes: Object.keys(n.localMutes),
        local_volumes: n.localVolumes,
        self_mute: n.mute,
        self_deaf: n.deaf
    };
}
function ea(e) {
    if (e !== x.He.POST_MESSAGE) throw new A.Z({ errorCode: L.lTL.INVALID_COMMAND }, 'command not available from "'.concat(e, ' transport'));
}
function eo(e) {
    if (null == e.id) throw new A.Z({ errorCode: L.lTL.INVALID_COMMAND }, 'Invalid application');
    return e.id;
}
