n.d(t, {
    BB: () => et,
    B_: () => q,
    D2: () => ei,
    Gc: () => K,
    IR: () => W,
    LP: () => z,
    SK: () => Q,
    SN: () => H,
    Ub: () => en,
    Yj: () => F,
    e2: () => $,
    hk: () => V,
    lG: () => er,
    px: () => X,
    qG: () => Y,
    sq: () => ee,
    uM: () => J,
}),
    n(747238),
    n(591487),
    n(727858),
    n(896048),
    n(321073),
    n(65821),
    n(812715),
    n(938796),
    n(638769),
    n(735438);
var r,
    i,
    l = n(567243),
    a = n(179771),
    s = n(562465),
    o = n(898467),
    c = n(843472),
    u = n(956518),
    d = n(587895),
    p = n(46054),
    f = n(763754),
    h = n(611010),
    A = n(95701),
    g = n(427157),
    m = n(734057),
    b = n(71393),
    _ = n(430452),
    E = n(320501),
    O = n(290863),
    y = n(287809),
    I = n(977997),
    v = n(927813),
    S = n(562153),
    C = n(257120),
    N = n(998218),
    T = n(636401),
    j = n(639621),
    x = n(613057),
    P = n(652215);
function w(e) {
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
function L(e, t) {
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
let R = null != (r = null == (i = N.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)) ? void 0 : i.host) ? r : "localhost",
    D = (function () {
        let e = R.split(":")[0];
        if (!e.includes(".")) return e;
        let t = e.split("."),
            n = t[t.length - 1];
        return /^\d+$/.test(n) ? e : t.slice(-2).join(".");
    })(),
    M = new RegExp(
        "^".concat(C.A.escape("https://"), "(?:[a-z]+\\.)?(").concat(C.A.escape(D), "|discordapp.com|discord.com)$"),
    ),
    k = +v.A.Millis.MINUTE,
    U = {};
function G(e) {
    return (
        "customEmoji" === e.type && (e.type = "emoji"),
        "emoji" === e.type && e.src && (e.src = V(e.src)),
        Array.isArray(e.content) && (e.content = e.content.map(G)),
        e
    );
}
function V(e) {
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
        [P.rbe.GUILD_CATEGORY, ...A.OU].includes(e.type) ||
            n.push(
                new Promise((t) => {
                    E.A.whenReady(e.id, () => t()),
                        c.A.fetchMessages({
                            channelId: e.id,
                            limit: P.EMb,
                        });
                }),
            ),
        Promise.all(n).then(() => {
            var n;
            let i =
                    (!e.isNSFW() || (null == (n = y.default.getCurrentUser()) ? void 0 : n.nsfwAllowed) === !0) && t
                        ? E.A.getMessages(e.id).toArray().map(F)
                        : [],
                l = Object.values(I.A.getVoiceStatesForChannel(e.id)).map((t) => Y(r, e.id, t));
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
function F(e) {
    let t = p.A.parseToAST(e.content, !0, { channelId: e.channel_id }).map(G),
        n = m.A.getChannel(e.channel_id),
        r = null != e.author ? new g.A(e.author) : void 0,
        i = null != e.author ? (0, f.FT)(r, n) : void 0;
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
        author: null != r ? (0, j.A)(r) : void 0,
        pinned: e.pinned,
        type: e.type,
    };
}
function Y(e, t, n) {
    let { mute: r, deaf: i, selfMute: l, selfDeaf: a, suppress: s, userId: o } = n,
        c = y.default.getUser(o);
    if (null == c) throw Error("Invalid user id: ".concat(o));
    return {
        nick: S.Ay.getName(e, t, c),
        mute: _.A.isLocalMute(c.id),
        volume: _.A.getLocalVolume(c.id),
        pan: _.A.getLocalPan(c.id),
        voice_state: {
            mute: r,
            deaf: i,
            self_mute: l,
            self_deaf: a,
            suppress: s,
        },
        user: (0, j.A)(c),
    };
}
function K(e, t) {
    return {
        type: e,
        user: (0, j.A)(t),
        presence: {
            status: O.A.getStatus(t.id, null),
            activity: null,
        },
    };
}
function z(e, t) {
    var n;
    return null == t
        ? e
        : L(w({}, e), {
              presence: L(w({}, e.presence), {
                  activity: null != (n = O.A.getApplicationActivity(e.user.id, t)) ? n : null,
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
        (null == e.match("staging") && !!(M.test(e) && M.test(n)))
    );
}
function q(e, t, n) {
    let r = b.A.getGuild(e.getGuildId());
    return (null != r ? r.application_id : e.getApplicationId()) === t || n.indexOf(a.F.MESSAGES_READ) > -1;
}
function Q(e) {
    switch (e) {
        case P.S7L.RTC_CONNECTED:
        case P.S7L.RTC_CONNECTING:
        case P.S7L.RTC_DISCONNECTED:
            return e.replace(/^RTC_/, "VOICE_");
        default:
            return e;
    }
}
function X(e, t, n) {
    return e === P.xL.JOIN && null != t && null != t.id && null != n.join;
}
function Z(e) {
    return s.Bo.get({
        url: P.Rsh.APPLICATION_RPC(e),
        oldFormErrors: !0,
        retries: 3,
        rejectWithError: !0,
    }).then(
        (e) => {
            let { body: t } = e;
            return t;
        },
        () => {
            throw new T.A({ closeCode: P.YI$.INVALID_CLIENTID }, "Invalid Client ID");
        },
    );
}
async function J(e, t, n) {
    let r = d.A.getApplication(t);
    if ("string" == typeof n)
        if (e.transport === x.z4.POST_MESSAGE) {
            let e = (0, u.Ay)(t);
            if (null == e || !B(n, [e])) throw new T.A({ closeCode: P.YI$.INVALID_ORIGIN }, "Invalid Origin");
        } else {
            let e = await Z(t);
            if (((r = h.Ay.createFromServer(e)), !B(n, e.rpc_origins)))
                throw new T.A({ closeCode: P.YI$.INVALID_ORIGIN }, "Invalid Origin");
        }
    null == r && (r = h.Ay.createFromServer(await Z(t)));
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
    let n = U[e];
    null == n && ((n = new o.A(t ? 2 : 60, k)), (U[e] = n)), await n.process();
}
function ee(e, t) {
    null == t && (e.authorization.scopes = [x.hj]);
}
function et(e) {
    let t = _.A.getSettings(),
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
            available_devices: n(_.A.getInputDevices()),
            device_id: t.inputDeviceId,
            volume: t.inputVolume,
        },
        output: {
            available_devices: n(_.A.getOutputDevices()),
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
    let n = _.A.getSettings(e),
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
    if (e !== x.z4.POST_MESSAGE)
        throw new T.A({ errorCode: P.Lw6.INVALID_COMMAND }, 'command not available from "'.concat(e, " transport"));
}
function ei(e) {
    if (null == e.id) throw new T.A({ errorCode: P.Lw6.INVALID_COMMAND }, "Invalid application");
    return e.id;
}
