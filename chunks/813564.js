"use strict";
let i;
n.d(t, {
    VE: () => z,
    ND: () => Q,
    Ni: () => J,
    Au: () => Y,
    Ak: () => K,
    Dv: () => q,
    un: () => Z,
    fh: () => $,
    Ir: () => W,
    wH: () => H,
}),
    n(321073);
var r = n(702841),
    a = n(554146),
    s = n(228366),
    l = n(95561),
    o = n(693806),
    d = n(885386),
    c = n(594061),
    u = n(617617),
    _ = n(173660),
    E = n(435558),
    A = n(636537),
    h = n(793574),
    I = n(159273),
    f = n(807348),
    p = n(952818),
    T = n(734057),
    m = n(763827),
    g = n(309010),
    S = n(174459);
n(980504);
var N = n(652215),
    C = n(202541);
function R(e, t, n, i, r) {
    let a = T.A.getChannel(g.Ay.getVoiceChannelId()),
        s = a?.getGuildId(),
        l = m.A.getMediaSessionId(),
        o = m.A.getRTCConnectionId(),
        d = p.Ay.getCurrentGameForAnalytics()?.name,
        c = s !== n.guildId && "0" !== n.guildId,
        u = "0" === n.guildId ? "default" : c ? "custom-external" : "custom";
    S.default.track(N.HAw.PREMIUM_FEATURE_USAGE, {
        feature_name: C.Ae.SOUNDBOARD_PLAY,
        feature_tier: c ? C.tz.PREMIUM_STANDARD : C.tz.FREE,
        guild_id: s,
        home_guild_id: n.guildId,
        location_stack: e,
        rtc_connection_id: o,
        media_session_id: l,
        in_overlay: t,
        application_name: d,
        emoji_count: +(null != n.emojiId || null != n.emojiName),
        feature_selection: u,
        feature_selection_id: n.soundId,
        sound_type: i,
        sequence_number: null != r ? r + 1 : null,
    });
}
var O = n(17928),
    L = n(194486);
class y extends O.Ay.PersistedStore {
    static displayName = "VoiceChannelEffectsPersistedStore";
    static persistKey = "VoiceChannelEffectsPersistedStore";
    initialize(e) {
        i = e?.animationType ?? L.B.PREMIUM;
    }
    getState() {
        return { animationType: i };
    }
}
let D = new y(s.h, {
    VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function () {
        i = i === L.B.BASIC ? L.B.PREMIUM : L.B.BASIC;
    },
});
var v = n(104142);
function b(e) {
    let t = new AbortController(),
        n = (0, E.throttle)((n) => {
            g.Ay.getVoiceChannelId() !== e && t.abort();
        }, 1e3);
    return { abortController: t, onRequestProgress: n };
}
var M = n(95701),
    P = n(576705),
    U = n(287809),
    w = n(428262),
    G = n(427262),
    x = n(796774),
    k = n(209932),
    F = n(123973),
    V = n(984813),
    B = n(698279);
function H() {
    let e = d.dG.getSetting();
    return e?.volume ?? 100;
}
function j(e, t) {
    return (
        t?.guild_id == null || P.A.can(N.xBc.USE_EXTERNAL_SOUNDS, t) || "0" === e.guildId || e.guildId === t?.guild_id
    );
}
function W(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (w.Ay.canUseSoundboardEverywhere(e) || t.guildId === n?.guild_id || "0" === t.guildId) &&
        j(t, n) &&
        (!i || t.available)
    );
}
function Y(e) {
    let { mute: t, suppress: n } = (0, _.k)({ channel: e });
    return !t && !n;
}
function K(e, t, n, i) {
    (0, x.qP)(t, e, f.Zm.SOUNDBOARD),
        (function (e, t, n, i, r) {
            let a = null != t.emojiId ? I.Ay.getCustomEmojiById(t.emojiId) : null,
                { abortController: s, onRequestProgress: l } = b(e),
                o = { sound_id: t.soundId, emoji_id: t.emojiId, emoji_name: t.emojiName ?? a?.name };
            "0" !== t.guildId && (o.source_guild_id = t.guildId),
                A.Bo.post({
                    url: N.Rsh.SEND_SOUNDBOARD_SOUND(e),
                    body: o,
                    signal: s.signal,
                    onRequestProgress: l,
                    rejectWithError: !0,
                }).then(N.FXj, () => {
                    if (s.signal.aborted) return;
                }),
                R(i ?? [], n, t, f.ib.DEFAULT, r);
        })(t, e, __OVERLAY__, n, i),
        s.h.dispatch({ type: "SOUNDBOARD_TRACK_USAGE", soundId: e.soundId });
}
async function $(e) {
    let t = U.default.getCurrentUser(),
        n = (0, o.A)(),
        i = (0, V.z0)(e);
    if (null == n || M.Do.has(n.type) || null == i || !w.Ay.canUseCustomCallSounds(t) || !(0, F.lI)()) return;
    await (0, x.E7)();
    let r = "0" === i.guildId ? "0" : i.guildId,
        a = k.A.getSound(r, i.soundId);
    if (null != a) {
        var s;
        if (!j(a, n) || !W(t, a, n, !0) || !Y(n)) return null;
        (s = n.id),
            (0, x.qP)(s, a, f.Zm.JOINED_VOICE_CHANNEL),
            (function (e, t, n) {
                let { abortController: i, onRequestProgress: r } = b(e),
                    a = D.getState().animationType ?? L.B.BASIC,
                    s = { animation_type: a, animation_id: (0, v.oS)(a, v.m4) };
                A.Bo.post({
                    url: N.Rsh.CUSTOM_CALL_SOUNDS(e),
                    body: s,
                    signal: i.signal,
                    onRequestProgress: r,
                    rejectWithError: !0,
                }).then(N.FXj, () => {
                    if (i.signal.aborted) return;
                }),
                    R([h.A.CHANNEL_CALL], n, t, f.ib.ENTRY);
            })(s, a, __OVERLAY__);
    }
}
function z(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, r.bG)([U.default], () => U.default.getCurrentUser()),
        i = [];
    if (!t && !Object.values(u.A.settings.guilds?.guilds ?? {}).some((e) => null != e.joinSound)) {
        let e = (0, G.G2)(n);
        (w.Ay.canUseCustomCallSounds(n) || e) && i.push(a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return i;
}
function q(e, t) {
    (0, c.TG)(
        e,
        (n) => {
            (n.joinSound = void 0), X({ guildId: e, changeType: f.Vr.REMOVED, soundType: f.ib.ENTRY, location: t });
        },
        c.Sb.INFREQUENT_USER_ACTION,
    );
}
function Z(e, t, n) {
    (0, c.TG)(
        e,
        (i) => {
            let r = "0" === t.guildId,
                a = r ? f.FH.DEFAULT : f.FH.CUSTOM,
                s = null != i.joinSound ? f.Vr.UPDATED : f.Vr.ADDED;
            (i.joinSound = { soundId: t.soundId, guildId: r ? "0" : t.guildId }),
                X({ guildId: e, changeType: s, soundSource: a, soundType: f.ib.ENTRY, location: n });
        },
        c.Sb.INFREQUENT_USER_ACTION,
    );
}
function X(e) {
    let { guildId: t, changeType: n, soundType: i, soundSource: r, location: a } = e;
    S.default.track(N.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: i,
        sound_source: r,
    });
}
function Q(e) {
    let { location: t } = e;
    S.default.track(N.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
function J(e) {
    let { sound: t, location: n } = e;
    l.Ay.trackWithMetadata(N.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: B.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
