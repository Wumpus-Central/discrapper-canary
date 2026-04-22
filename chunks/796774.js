"use strict";
n.d(t, {
    CX: () => w,
    E7: () => T,
    Rp: () => O,
    dZ: () => b,
    eS: () => R,
    g0: () => D,
    iy: () => L,
    lT: () => S,
    nh: () => v,
    qP: () => C,
    ty: () => N,
    xV: () => y,
}),
    n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(562465),
    a = n(73153),
    o = n(157559),
    l = n(181658),
    u = n(594061),
    d = n(954571),
    c = n(449054),
    _ = n(209932),
    f = n(807348),
    E = n(933204);
n(980504);
var h = n(652215),
    p = n(355097),
    m = n(985018);
let g = !1,
    A = async () => {
        try {
            let e = (await s.Bo.get({ url: h.Rsh.SOUNDBOARD_DEFAULT_SOUNDS, rejectWithError: !1 })).body.map((e) =>
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
            r = !g && !n;
        r && (g = !0);
        let i = await Promise.all([
            (() => {
                if (!_.A.shouldFetchDefaultSounds()) return Promise.resolve();
                a.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
                let e = I("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
                return A(), e;
            })(),
            (() => {
                let e = (0, E.I)();
                if (0 === e.length) return Promise.resolve();
                let t = I("SOUNDBOARD_SOUNDS_RECEIVED");
                return (
                    a.h.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
                    a.h.dispatch({ type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: e }),
                    t
                );
            })(),
        ]);
        if (r) {
            let e = performance.now();
            d.default.track(h.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: e - t });
        }
        return i;
    };
async function S(e) {
    let { guildId: t, name: n, sound: r, volume: i, emojiId: a, emojiName: o } = e,
        l = await s.Bo.post({
            url: h.Rsh.GUILD_SOUNDBOARD_SOUNDS(t),
            body: { name: n, sound: r, volume: i, emoji_id: a, emoji_name: o },
            rejectWithError: !1,
        });
    return (0, f.N0)(l.body, t);
}
async function y(e) {
    let { guildId: t, soundId: n, name: r, volume: i, emojiId: a, emojiName: o } = e,
        l = await s.Bo.patch({
            url: h.Rsh.GUILD_SOUNDBOARD_SOUND(t, n),
            body: { name: r, volume: i, emoji_id: a, emoji_name: o },
            rejectWithError: !1,
        });
    return (0, f.N0)(l.body, t);
}
async function N(e, t) {
    await s.Bo.del({ url: h.Rsh.GUILD_SOUNDBOARD_SOUND(e, t), oldFormErrors: !0, rejectWithError: !1 });
}
function O(e) {
    u.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            i().size(t.soundIds) >= 250
                ? (o.A.show({
                      title: m.intl.string(m.t["+XYXtZ"]),
                      body: m.intl.formatToPlainString(m.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function R(e) {
    u.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
async function v(e, t) {
    try {
        let n = await s.Bo.get({ url: h.Rsh.SOUNDBOARD_SOUND_GUILD_DATA(e, t), rejectWithError: !1 });
        return null != n.body ? (0, c.jE)(n.body) : null;
    } catch (e) {
        throw new l.A(e);
    }
}
function C(e, t, n) {
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
