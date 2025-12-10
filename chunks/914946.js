n.d(t, {
    FJ: () => en,
    RE: () => G,
    T5: () => H,
    Xb: () => V,
    YK: () => ee,
    YS: () => X,
    _J: () => z,
    _f: () => ei,
    aE: () => F,
    bu: () => er,
    kb: () => Y,
    s9: () => W,
    t9: () => Q,
    tr: () => et,
    vv: () => $,
    zM: () => q,
    zy: () => K,
}),
    n(35282),
    n(413496),
    n(433524),
    n(388685),
    n(539854),
    n(415506),
    n(704826),
    n(997841),
    n(642613),
    n(392711);
var r,
    i,
    l = n(729594),
    a = n(243814),
    s = n(544891),
    o = n(63023),
    c = n(904245),
    u = n(155268),
    d = n(812206),
    p = n(454585),
    f = n(739566),
    g = n(973616),
    h = n(131704),
    m = n(598077),
    _ = n(592125),
    b = n(430824),
    E = n(131951),
    O = n(375954),
    v = n(158776),
    y = n(594174),
    I = n(979651),
    C = n(70956),
    S = n(5192),
    T = n(226951),
    N = n(591759),
    j = n(996106),
    P = n(863141),
    x = n(186901),
    A = n(981631);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
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
let L = null != (i = null == (r = N.Z.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)) ? void 0 : r.host) ? i : "localhost",
    R = (function () {
        let e = L.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    D = new RegExp(
        "^".concat(T.Z.escape("https://"), "(?:[a-z]+\\.)?(").concat(T.Z.escape(R), "|discordapp.com|discord.com)$"),
    ),
    M = +C.Z.Millis.MINUTE,
    k = {};
function U(e) {
    return (
        "customEmoji" === e.type && (e.type = "emoji"),
        "emoji" === e.type && e.src && (e.src = G(e.src)),
        Array.isArray(e.content) && (e.content = e.content.map(U)),
        e
    );
}
function G(e) {
    return /^http/.test(e)
        ? e
        : ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat("/" === e.charAt(0) ? "" : "/")
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
        [A.d4z.GUILD_CATEGORY, ...h.tx].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    O.Z.whenReady(e.id, () => t()),
                        c.Z.fetchMessages({
                            channelId: e.id,
                            limit: A.AQB,
                        });
                }),
            ),
        Promise.all(n).then(() => {
            var n;
            let i =
                    (!e.isNSFW() || (null == (n = y.default.getCurrentUser()) ? void 0 : n.nsfwAllowed) === !0) && t
                        ? O.Z.getMessages(e.id).toArray().map(V)
                        : [],
                l = Object.values(I.Z.getVoiceStatesForChannel(e.id)).map((t) => F(r, e.id, t));
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
                voice_states: l,
            };
        })
    );
}
function V(e) {
    let t = p.Z.parseToAST(e.content, !0, { channelId: e.channel_id }).map(U),
        n = _.Z.getChannel(e.channel_id),
        r = null != e.author ? new m.Z(e.author) : void 0,
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
        author: null != r ? (0, P.Z)(r) : void 0,
        pinned: e.pinned,
        type: e.type,
    };
}
function F(e, t, n) {
    let { mute: r, deaf: i, selfMute: l, selfDeaf: a, suppress: s, userId: o } = n,
        c = y.default.getUser(o);
    if (null == c) throw Error("Invalid user id: ".concat(o));
    return {
        nick: S.ZP.getName(e, t, c),
        mute: E.Z.isLocalMute(c.id),
        volume: E.Z.getLocalVolume(c.id),
        pan: E.Z.getLocalPan(c.id),
        voice_state: {
            mute: r,
            deaf: i,
            self_mute: l,
            self_deaf: a,
            suppress: s,
        },
        user: (0, P.Z)(c),
    };
}
function z(e, t) {
    return {
        type: e,
        user: (0, P.Z)(t),
        presence: {
            status: v.Z.getStatus(t.id, null),
            activity: null,
        },
    };
}
function Y(e, t) {
    var n;
    return null == t
        ? e
        : w(Z({}, e), {
              presence: w(Z({}, e.presence), {
                  activity: null != (n = v.Z.getApplicationActivity(e.user.id, t)) ? n : null,
              }),
          });
}
function W(e) {
    let t;
    if (null == e) return !1;
    let n = window.location.origin;
    if (e === n) return !0;
    try {
        t = l.parse(e).hostname;
    } catch (e) {
        return !1;
    }
    return (
        (window.location.hostname === t && "localhost" === t) ||
        (null == e.match("staging") && !!(D.test(e) && D.test(n)))
    );
}
function q(e, t, n) {
    let r = b.Z.getGuild(e.getGuildId());
    return (null != r ? r.application_id : e.getApplicationId()) === t || n.indexOf(a.x.MESSAGES_READ) > -1;
}
function K(e) {
    switch (e) {
        case A.hes.RTC_CONNECTED:
        case A.hes.RTC_CONNECTING:
        case A.hes.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, "VOICE_");
        default:
            return e;
    }
}
function Q(e, t, n) {
    return e === A.mFx.JOIN && null != t && null != t.id && null != n.join;
}
function J(e) {
    return s.tn
        .get({
            url: A.ANM.APPLICATION_RPC(e),
            oldFormErrors: !0,
            retries: 3,
            rejectWithError: !0,
        })
        .then(
            (e) => {
                let { body: t } = e;
                return t;
            },
            () => {
                throw new j.Z({ closeCode: A.$VG.INVALID_CLIENTID }, "Invalid Client ID");
            },
        );
}
async function X(e, t, n) {
    let r = d.Z.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === x.He.POST_MESSAGE) {
            let e = (0, u.ZP)(t);
            if (null == e || !B(n, [e])) throw new j.Z({ closeCode: A.$VG.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await J(t);
            if (((r = g.ZP.createFromServer(e)), !B(n, e.rpc_origins)))
                throw new j.Z({ closeCode: A.$VG.INVALID_ORIGIN }, "Invalid Origin");
        }
    null == r && (r = g.ZP.createFromServer(await J(t)));
    let { id: i, name: l, icon: a, coverImage: s, flags: o } = r;
    e.application = {
        id: i,
        name: l,
        icon: a,
        coverImage: s,
        flags: o,
    };
}
async function $(e, t) {
    let n = k[e];
    null == n && ((n = new o.Z(t ? 2 : 60, M)), (k[e] = n)), await n.process();
}
function ee(e, t) {
    null == t && (e.authorization.scopes = [x.lH]);
}
function et(e) {
    let t = E.Z.getSettings(),
        n = (e) =>
            Object.values(e)
                .sort((e, t) => e.index - t.index)
                .map((e) => ({
                    id: e.id,
                    name: e.name,
                })),
        r = e(t);
    return {
        input: {
            available_devices: n(E.Z.getInputDevices()),
            device_id: t.inputDeviceId,
            volume: t.inputVolume,
        },
        output: {
            available_devices: n(E.Z.getOutputDevices()),
            device_id: t.outputDeviceId,
            volume: t.outputVolume,
        },
        mode: {
            type: t.mode,
            auto_threshold: t.modeOptions.autoThreshold,
            threshold: t.modeOptions.threshold,
            shortcut: r,
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
function en(e, t) {
    let n = E.Z.getSettings(e),
        r = t(n);
    return {
        input_mode: {
            type: n.mode,
            shortcut: r,
        },
        local_mutes: Object.keys(n.localMutes),
        local_volumes: n.localVolumes,
        self_mute: n.mute,
        self_deaf: n.deaf,
    };
}
function er(e) {
    if (e !== x.He.POST_MESSAGE)
        throw new j.Z({ errorCode: A.lTL.INVALID_COMMAND }, 'command not available from "'.concat(e, " transport"));
}
function ei(e) {
    if (null == e.id) throw new j.Z({ errorCode: A.lTL.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
