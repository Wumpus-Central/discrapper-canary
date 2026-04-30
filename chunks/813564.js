"use strict";
let i;
n.d(t, {
    VE: () => $,
    ND: () => Q,
    Ni: () => J,
    Au: () => W,
    Ak: () => K,
    Dv: () => q,
    un: () => Z,
    fh: () => z,
    Ir: () => Y,
    wH: () => H,
}),
    n(321073);
var r = n(702841),
    s = n(554146),
    a = n(95561),
    o = n(693806),
    l = n(885386),
    u = n(594061),
    c = n(617617),
    d = n(173660),
    _ = n(735438),
    f = n(636537),
    h = n(793574),
    p = n(159273),
    E = n(807348),
    m = n(328153),
    g = n(734057),
    A = n(763827),
    I = n(309010),
    T = n(174459);
n(980504);
var S = n(652215),
    N = n(788868);
function y(e, t, n, i, r) {
    let s = g.A.getChannel(I.A.getVoiceChannelId()),
        a = s?.getGuildId(),
        o = A.A.getMediaSessionId(),
        l = A.A.getRTCConnectionId(),
        u = m.Ay.getCurrentGameForAnalytics()?.name,
        c = a !== n.guildId && "0" !== n.guildId,
        d = "0" === n.guildId ? "default" : c ? "custom-external" : "custom";
    T.default.track(S.HAw.PREMIUM_FEATURE_USAGE, {
        feature_name: N.Ae.SOUNDBOARD_PLAY,
        feature_tier: c ? N.tz.PREMIUM_STANDARD : N.tz.FREE,
        guild_id: a,
        home_guild_id: n.guildId,
        location_stack: e,
        rtc_connection_id: l,
        media_session_id: o,
        in_overlay: t,
        application_name: u,
        emoji_count: +(null != n.emojiId || null != n.emojiName),
        feature_selection: d,
        feature_selection_id: n.soundId,
        sound_type: i,
        sequence_number: null != r ? r + 1 : null,
    });
}
var C = n(17928),
    v = n(228366),
    O = n(194486);
class R extends C.Ay.PersistedStore {
    static displayName = "VoiceChannelEffectsPersistedStore";
    static persistKey = "VoiceChannelEffectsPersistedStore";
    initialize(e) {
        i = e?.animationType ?? O.B.PREMIUM;
    }
    getState() {
        return { animationType: i };
    }
}
let b = new R(v.h, {
    VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
        i = i === O.B.BASIC ? O.B.PREMIUM : O.B.BASIC;
    },
});
var D = n(104142);
function L(e) {
    let t = new AbortController(),
        n = (0, _.throttle)((n) => {
            I.A.getVoiceChannelId() !== e && t.abort();
        }, 1e3);
    return { abortController: t, onRequestProgress: n };
}
var w = n(95701),
    M = n(576705),
    P = n(287809),
    x = n(927578),
    U = n(427262),
    k = n(796774),
    G = n(209932),
    F = n(123973),
    V = n(984813),
    B = n(698279);
function H() {
    let e = l.dG.getSetting();
    return e?.volume ?? 100;
}
function j(e, t) {
    return (
        t?.guild_id == null || M.A.can(S.xBc.USE_EXTERNAL_SOUNDS, t) || "0" === e.guildId || e.guildId === t?.guild_id
    );
}
function Y(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (x.Ay.canUseSoundboardEverywhere(e) || t.guildId === n?.guild_id || "0" === t.guildId) &&
        j(t, n) &&
        (!i || t.available)
    );
}
function W(e) {
    let { mute: t, suppress: n } = (0, d.k)({ channel: e });
    return !t && !n;
}
function K(e, t, n, i) {
    (0, k.qP)(t, e, E.Zm.SOUNDBOARD),
        (function (e, t, n, i, r) {
            let s = null != t.emojiId ? p.Ay.getCustomEmojiById(t.emojiId) : null,
                { abortController: a, onRequestProgress: o } = L(e),
                l = { sound_id: t.soundId, emoji_id: t.emojiId, emoji_name: t.emojiName ?? s?.name };
            "0" !== t.guildId && (l.source_guild_id = t.guildId),
                f.Bo.post({
                    url: S.Rsh.SEND_SOUNDBOARD_SOUND(e),
                    body: l,
                    signal: a.signal,
                    onRequestProgress: o,
                    rejectWithError: !0,
                }).then(S.FXj, () => {
                    if (a.signal.aborted) return;
                }),
                y(i ?? [], n, t, E.ib.DEFAULT, r);
        })(t, e, __OVERLAY__, n, i);
}
async function z(e) {
    let t = P.default.getCurrentUser(),
        n = (0, o.A)(),
        i = (0, V.z0)(e);
    if (null == n || w.Do.has(n.type) || null == i || !x.Ay.canUseCustomCallSounds(t) || !(0, F.lI)()) return;
    await (0, k.E7)();
    let r = "0" === i.guildId ? "0" : i.guildId,
        s = G.A.getSound(r, i.soundId);
    if (null != s) {
        var a;
        if (!j(s, n) || !Y(t, s, n, !0) || !W(n)) return null;
        (a = n.id),
            (0, k.qP)(a, s, E.Zm.JOINED_VOICE_CHANNEL),
            (function (e, t, n) {
                let { abortController: i, onRequestProgress: r } = L(e),
                    s = b.getState().animationType ?? O.B.BASIC,
                    a = { animation_type: s, animation_id: (0, D.oS)(s, D.m4) };
                f.Bo.post({
                    url: S.Rsh.CUSTOM_CALL_SOUNDS(e),
                    body: a,
                    signal: i.signal,
                    onRequestProgress: r,
                    rejectWithError: !0,
                }).then(S.FXj, () => {
                    if (i.signal.aborted) return;
                }),
                    y([h.A.CHANNEL_CALL], n, t, E.ib.ENTRY);
            })(a, s, __OVERLAY__);
    }
}
function $(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, r.bG)([P.default], () => P.default.getCurrentUser()),
        i = [];
    if (!t && !Object.values(c.A.settings.guilds?.guilds ?? {}).some((e) => null != e.joinSound)) {
        let e = (0, U.G2)(n);
        (x.Ay.canUseCustomCallSounds(n) || e) && i.push(s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return i;
}
function q(e, t) {
    (0, u.TG)(
        e,
        (n) => {
            (n.joinSound = void 0), X({ guildId: e, changeType: E.Vr.REMOVED, soundType: E.ib.ENTRY, location: t });
        },
        u.Sb.INFREQUENT_USER_ACTION,
    );
}
function Z(e, t, n) {
    (0, u.TG)(
        e,
        (i) => {
            let r = "0" === t.guildId,
                s = r ? E.FH.DEFAULT : E.FH.CUSTOM,
                a = null != i.joinSound ? E.Vr.UPDATED : E.Vr.ADDED;
            (i.joinSound = { soundId: t.soundId, guildId: r ? "0" : t.guildId }),
                X({ guildId: e, changeType: a, soundSource: s, soundType: E.ib.ENTRY, location: n });
        },
        u.Sb.INFREQUENT_USER_ACTION,
    );
}
function X(e) {
    let { guildId: t, changeType: n, soundType: i, soundSource: r, location: s } = e;
    T.default.track(S.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: s,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: i,
        sound_source: r,
    });
}
function Q(e) {
    let { location: t } = e;
    T.default.track(S.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
function J(e) {
    let { sound: t, location: n } = e;
    a.Ay.trackWithMetadata(S.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: B.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
