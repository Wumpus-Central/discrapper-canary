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
    wH: () => j,
}),
    n(321073);
var r = n(702841),
    s = n(554146),
    a = n(228366),
    o = n(95561),
    l = n(693806),
    u = n(885386),
    d = n(594061),
    c = n(617617),
    _ = n(173660),
    h = n(735438),
    f = n(636537),
    E = n(793574),
    p = n(159273),
    m = n(807348),
    g = n(952818),
    A = n(734057),
    I = n(763827),
    T = n(309010),
    S = n(174459);
n(980504);
var N = n(652215),
    C = n(202541);
function y(e, t, n, i, r) {
    let s = A.A.getChannel(T.A.getVoiceChannelId()),
        a = s?.getGuildId(),
        o = I.A.getMediaSessionId(),
        l = I.A.getRTCConnectionId(),
        u = g.Ay.getCurrentGameForAnalytics()?.name,
        d = a !== n.guildId && "0" !== n.guildId,
        c = "0" === n.guildId ? "default" : d ? "custom-external" : "custom";
    S.default.track(N.HAw.PREMIUM_FEATURE_USAGE, {
        feature_name: C.Ae.SOUNDBOARD_PLAY,
        feature_tier: d ? C.tz.PREMIUM_STANDARD : C.tz.FREE,
        guild_id: a,
        home_guild_id: n.guildId,
        location_stack: e,
        rtc_connection_id: l,
        media_session_id: o,
        in_overlay: t,
        application_name: u,
        emoji_count: +(null != n.emojiId || null != n.emojiName),
        feature_selection: c,
        feature_selection_id: n.soundId,
        sound_type: i,
        sequence_number: null != r ? r + 1 : null,
    });
}
var v = n(17928),
    R = n(194486);
class O extends v.Ay.PersistedStore {
    static displayName = "VoiceChannelEffectsPersistedStore";
    static persistKey = "VoiceChannelEffectsPersistedStore";
    initialize(e) {
        i = e?.animationType ?? R.B.PREMIUM;
    }
    getState() {
        return { animationType: i };
    }
}
let b = new O(a.h, {
    VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function () {
        i = i === R.B.BASIC ? R.B.PREMIUM : R.B.BASIC;
    },
});
var L = n(104142);
function D(e) {
    let t = new AbortController(),
        n = (0, h.throttle)((n) => {
            T.A.getVoiceChannelId() !== e && t.abort();
        }, 1e3);
    return { abortController: t, onRequestProgress: n };
}
var P = n(95701),
    w = n(576705),
    M = n(287809),
    x = n(428262),
    U = n(427262),
    k = n(796774),
    G = n(209932),
    V = n(123973),
    F = n(984813),
    B = n(698279);
function j() {
    let e = u.dG.getSetting();
    return e?.volume ?? 100;
}
function H(e, t) {
    return (
        t?.guild_id == null || w.A.can(N.xBc.USE_EXTERNAL_SOUNDS, t) || "0" === e.guildId || e.guildId === t?.guild_id
    );
}
function W(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (x.Ay.canUseSoundboardEverywhere(e) || t.guildId === n?.guild_id || "0" === t.guildId) &&
        H(t, n) &&
        (!i || t.available)
    );
}
function Y(e) {
    let { mute: t, suppress: n } = (0, _.k)({ channel: e });
    return !t && !n;
}
function K(e, t, n, i) {
    (0, k.qP)(t, e, m.Zm.SOUNDBOARD),
        (function (e, t, n, i, r) {
            let s = null != t.emojiId ? p.Ay.getCustomEmojiById(t.emojiId) : null,
                { abortController: a, onRequestProgress: o } = D(e),
                l = { sound_id: t.soundId, emoji_id: t.emojiId, emoji_name: t.emojiName ?? s?.name };
            "0" !== t.guildId && (l.source_guild_id = t.guildId),
                f.Bo.post({
                    url: N.Rsh.SEND_SOUNDBOARD_SOUND(e),
                    body: l,
                    signal: a.signal,
                    onRequestProgress: o,
                    rejectWithError: !0,
                }).then(N.FXj, () => {
                    if (a.signal.aborted) return;
                }),
                y(i ?? [], n, t, m.ib.DEFAULT, r);
        })(t, e, __OVERLAY__, n, i),
        a.h.dispatch({ type: "SOUNDBOARD_TRACK_USAGE", soundId: e.soundId });
}
async function $(e) {
    let t = M.default.getCurrentUser(),
        n = (0, l.A)(),
        i = (0, F.z0)(e);
    if (null == n || P.Do.has(n.type) || null == i || !x.Ay.canUseCustomCallSounds(t) || !(0, V.lI)()) return;
    await (0, k.E7)();
    let r = "0" === i.guildId ? "0" : i.guildId,
        s = G.A.getSound(r, i.soundId);
    if (null != s) {
        var a;
        if (!H(s, n) || !W(t, s, n, !0) || !Y(n)) return null;
        (a = n.id),
            (0, k.qP)(a, s, m.Zm.JOINED_VOICE_CHANNEL),
            (function (e, t, n) {
                let { abortController: i, onRequestProgress: r } = D(e),
                    s = b.getState().animationType ?? R.B.BASIC,
                    a = { animation_type: s, animation_id: (0, L.oS)(s, L.m4) };
                f.Bo.post({
                    url: N.Rsh.CUSTOM_CALL_SOUNDS(e),
                    body: a,
                    signal: i.signal,
                    onRequestProgress: r,
                    rejectWithError: !0,
                }).then(N.FXj, () => {
                    if (i.signal.aborted) return;
                }),
                    y([E.A.CHANNEL_CALL], n, t, m.ib.ENTRY);
            })(a, s, __OVERLAY__);
    }
}
function z(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, r.bG)([M.default], () => M.default.getCurrentUser()),
        i = [];
    if (!t && !Object.values(c.A.settings.guilds?.guilds ?? {}).some((e) => null != e.joinSound)) {
        let e = (0, U.G2)(n);
        (x.Ay.canUseCustomCallSounds(n) || e) && i.push(s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return i;
}
function q(e, t) {
    (0, d.TG)(
        e,
        (n) => {
            (n.joinSound = void 0), X({ guildId: e, changeType: m.Vr.REMOVED, soundType: m.ib.ENTRY, location: t });
        },
        d.Sb.INFREQUENT_USER_ACTION,
    );
}
function Z(e, t, n) {
    (0, d.TG)(
        e,
        (i) => {
            let r = "0" === t.guildId,
                s = r ? m.FH.DEFAULT : m.FH.CUSTOM,
                a = null != i.joinSound ? m.Vr.UPDATED : m.Vr.ADDED;
            (i.joinSound = { soundId: t.soundId, guildId: r ? "0" : t.guildId }),
                X({ guildId: e, changeType: a, soundSource: s, soundType: m.ib.ENTRY, location: n });
        },
        d.Sb.INFREQUENT_USER_ACTION,
    );
}
function X(e) {
    let { guildId: t, changeType: n, soundType: i, soundSource: r, location: s } = e;
    S.default.track(N.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: s,
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
    o.Ay.trackWithMetadata(N.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: B.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
