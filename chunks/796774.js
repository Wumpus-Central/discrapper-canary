"use strict";
n.d(t, {
    CX: () => P,
    E7: () => S,
    Rp: () => O,
    dZ: () => v,
    eS: () => L,
    g0: () => b,
    iy: () => M,
    lT: () => N,
    nh: () => D,
    qP: () => y,
    ty: () => R,
    xV: () => C,
}),
    n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(157559),
    o = n(181658),
    d = n(39418),
    c = n(594061),
    u = n(174459),
    _ = n(385648),
    E = n(209932),
    A = n(807348),
    h = n(933204);
n(980504);
var I = n(652215),
    f = n(355097),
    p = n(375708);
let T = !1;
async function m() {
    try {
        let e = (await a.Bo.get({ url: I.Rsh.SOUNDBOARD_DEFAULT_SOUNDS, rejectWithError: !1 })).body.map((e) =>
            (0, A.N0)(e, "0"),
        );
        s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds: e });
    } catch (e) {
        s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" }), (0, d.o)(new o.A(e));
    }
}
function g(e) {
    return new Promise((t) => {
        s.h.subscribe(e, function n() {
            s.h.unsubscribe(e, n), setTimeout(t, 0);
        });
    });
}
async function S(e) {
    if (__OVERLAY__) return s.h.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]);
    let t = performance.now(),
        n = e?.disableAnalytics ?? !1,
        i = !T && !n;
    i && (T = !0);
    let r = await Promise.all([
        (function () {
            if (!E.A.shouldFetchDefaultSounds()) return Promise.resolve();
            s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
            let e = g("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
            return m(), e;
        })(),
        (function () {
            let e = (0, h.I)();
            if (0 === e.length) return Promise.resolve();
            let t = g("SOUNDBOARD_SOUNDS_RECEIVED");
            return (
                s.h.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
                s.h.dispatch({ type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: e }),
                t
            );
        })(),
    ]);
    if (i) {
        let e = performance.now();
        u.default.track(I.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: e - t });
    }
    return r;
}
async function N(e) {
    let { guildId: t, name: n, sound: i, volume: r, emojiId: s, emojiName: l } = e,
        o = await a.Bo.post({
            url: I.Rsh.GUILD_SOUNDBOARD_SOUNDS(t),
            body: { name: n, sound: i, volume: r, emoji_id: s, emoji_name: l },
            rejectWithError: !1,
        });
    return (0, A.N0)(o.body, t);
}
async function C(e) {
    let { guildId: t, soundId: n, name: i, volume: r, emojiId: s, emojiName: l } = e,
        o = await a.Bo.patch({
            url: I.Rsh.GUILD_SOUNDBOARD_SOUND(t, n),
            body: { name: i, volume: r, emoji_id: s, emoji_name: l },
            rejectWithError: !1,
        });
    return (0, A.N0)(o.body, t);
}
async function R(e, t) {
    await a.Bo.del({ url: I.Rsh.GUILD_SOUNDBOARD_SOUND(e, t), oldFormErrors: !0, rejectWithError: !1 });
}
function O(e) {
    c.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            r().size(t.soundIds) >= 250
                ? (l.A.show({
                      title: p.intl.string(p.t["+XYXtZ"]),
                      body: p.intl.formatToPlainString(p.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        f.Sb.INFREQUENT_USER_ACTION,
    );
}
function L(e) {
    c.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        f.Sb.INFREQUENT_USER_ACTION,
    );
}
async function D(e, t) {
    try {
        let n = await a.Bo.get({ url: I.Rsh.SOUNDBOARD_SOUND_GUILD_DATA(e, t), rejectWithError: !1 });
        return null != n.body ? (0, _.jE)(n.body) : null;
    } catch (e) {
        throw new o.A(e);
    }
}
function y(e, t, n) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound: t, channelId: e, trigger: n });
}
function v(e, t) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId: e, userId: t });
}
function b(e, t) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId: e, userId: t });
}
function M(e, t) {
    s.h.dispatch({ type: "USER_SOUNDBOARD_SET_VOLUME", volume: e, location: t });
}
function P(e) {
    s.h.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: e });
}
