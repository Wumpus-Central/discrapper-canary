"use strict";
n.d(t, {
    CX: () => w,
    E7: () => T,
    Rp: () => C,
    dZ: () => b,
    eS: () => v,
    g0: () => D,
    iy: () => L,
    lT: () => S,
    nh: () => O,
    qP: () => R,
    ty: () => y,
    xV: () => N,
}),
    n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(157559),
    l = n(181658),
    u = n(594061),
    c = n(174459),
    d = n(449054),
    _ = n(209932),
    f = n(807348),
    h = n(933204);
n(980504);
var p = n(652215),
    E = n(355097),
    m = n(375708);
let g = !1,
    A = async () => {
        try {
            let e = (await s.Bo.get({ url: p.Rsh.SOUNDBOARD_DEFAULT_SOUNDS, rejectWithError: !1 })).body.map((e) =>
                (0, f.N0)(e, "0"),
            );
            a.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds: e });
        } catch (e) {
            throw (a.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" }), new l.A(e));
        }
    },
    I = (e) =>
        new Promise((t) => {
            let n = () => {
                a.h.unsubscribe(e, n), setTimeout(t, 0);
            };
            a.h.subscribe(e, n);
        }),
    T = async (e) => {
        if (__OVERLAY__) return a.h.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]);
        let t = performance.now(),
            n = e?.disableAnalytics ?? !1,
            i = !g && !n;
        i && (g = !0);
        let r = await Promise.all([
            (() => {
                if (!_.A.shouldFetchDefaultSounds()) return Promise.resolve();
                a.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
                let e = I("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
                return A(), e;
            })(),
            (() => {
                let e = (0, h.I)();
                if (0 === e.length) return Promise.resolve();
                let t = I("SOUNDBOARD_SOUNDS_RECEIVED");
                return (
                    a.h.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
                    a.h.dispatch({ type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: e }),
                    t
                );
            })(),
        ]);
        if (i) {
            let e = performance.now();
            c.default.track(p.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: e - t });
        }
        return r;
    };
async function S(e) {
    let { guildId: t, name: n, sound: i, volume: r, emojiId: a, emojiName: o } = e,
        l = await s.Bo.post({
            url: p.Rsh.GUILD_SOUNDBOARD_SOUNDS(t),
            body: { name: n, sound: i, volume: r, emoji_id: a, emoji_name: o },
            rejectWithError: !1,
        });
    return (0, f.N0)(l.body, t);
}
async function N(e) {
    let { guildId: t, soundId: n, name: i, volume: r, emojiId: a, emojiName: o } = e,
        l = await s.Bo.patch({
            url: p.Rsh.GUILD_SOUNDBOARD_SOUND(t, n),
            body: { name: i, volume: r, emoji_id: a, emoji_name: o },
            rejectWithError: !1,
        });
    return (0, f.N0)(l.body, t);
}
async function y(e, t) {
    await s.Bo.del({ url: p.Rsh.GUILD_SOUNDBOARD_SOUND(e, t), oldFormErrors: !0, rejectWithError: !1 });
}
function C(e) {
    u.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            r().size(t.soundIds) >= 250
                ? (o.A.show({
                      title: m.intl.string(m.t["+XYXtZ"]),
                      body: m.intl.formatToPlainString(m.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        E.Sb.INFREQUENT_USER_ACTION,
    );
}
function v(e) {
    u.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        E.Sb.INFREQUENT_USER_ACTION,
    );
}
async function O(e, t) {
    try {
        let n = await s.Bo.get({ url: p.Rsh.SOUNDBOARD_SOUND_GUILD_DATA(e, t), rejectWithError: !1 });
        return null != n.body ? (0, d.jE)(n.body) : null;
    } catch (e) {
        throw new l.A(e);
    }
}
function R(e, t, n) {
    a.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound: t, channelId: e, trigger: n });
}
function b(e, t) {
    a.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId: e, userId: t });
}
function D(e, t) {
    a.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId: e, userId: t });
}
function L(e, t) {
    a.h.dispatch({ type: "USER_SOUNDBOARD_SET_VOLUME", volume: e, location: t });
}
function w(e) {
    a.h.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: e });
}
