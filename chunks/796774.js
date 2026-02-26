"use strict";
n.d(t, {
    CX: () => M,
    E7: () => y,
    Rp: () => b,
    dZ: () => L,
    eS: () => R,
    g0: () => w,
    iy: () => x,
    lT: () => v,
    nh: () => O,
    qP: () => D,
    ty: () => C,
    xV: () => N,
}),
    n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(562465),
    a = n(73153),
    o = n(157559),
    l = n(181658),
    u = n(594061),
    c = n(954571),
    d = n(449054),
    _ = n(209932),
    f = n(807348),
    p = n(933204);
n(980504);
var h = n(652215),
    m = n(355097),
    E = n(985018);
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
    T = () => {
        if (!_.A.shouldFetchDefaultSounds()) return Promise.resolve();
        a.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
        let e = I("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
        return A(), e;
    },
    S = () => {
        let e = (0, p.I)();
        if (0 === e.length) return Promise.resolve();
        let t = I("SOUNDBOARD_SOUNDS_RECEIVED");
        return (
            a.h.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
            a.h.dispatch({ type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: e }),
            t
        );
    },
    y = async (e) => {
        if (__OVERLAY__) return a.h.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]);
        let t = performance.now(),
            n = e?.disableAnalytics ?? !1,
            r = !g && !n;
        r && (g = !0);
        let i = await Promise.all([T(), S()]);
        if (r) {
            let e = performance.now() - t;
            c.default.track(h.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: e });
        }
        return i;
    };
async function v(e) {
    let { guildId: t, name: n, sound: r, volume: i, emojiId: a, emojiName: o } = e,
        l = await s.Bo.post({
            url: h.Rsh.GUILD_SOUNDBOARD_SOUNDS(t),
            body: { name: n, sound: r, volume: i, emoji_id: a, emoji_name: o },
            rejectWithError: !1,
        });
    return (0, f.N0)(l.body, t);
}
async function N(e) {
    let { guildId: t, soundId: n, name: r, volume: i, emojiId: a, emojiName: o } = e,
        l = await s.Bo.patch({
            url: h.Rsh.GUILD_SOUNDBOARD_SOUND(t, n),
            body: { name: r, volume: i, emoji_id: a, emoji_name: o },
            rejectWithError: !1,
        });
    return (0, f.N0)(l.body, t);
}
async function C(e, t) {
    await s.Bo.del({ url: h.Rsh.GUILD_SOUNDBOARD_SOUND(e, t), oldFormErrors: !0, rejectWithError: !1 });
}
function b(e) {
    u.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            i().size(t.soundIds) >= 250
                ? (o.A.show({
                      title: E.intl.string(E.t["+XYXtZ"]),
                      body: E.intl.formatToPlainString(E.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
function R(e) {
    u.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
async function O(e, t) {
    try {
        let n = await s.Bo.get({ url: h.Rsh.SOUNDBOARD_SOUND_GUILD_DATA(e, t), rejectWithError: !1 });
        return null != n.body ? (0, d.jE)(n.body) : null;
    } catch (e) {
        throw new l.A(e);
    }
}
function D(e, t, n) {
    a.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound: t, channelId: e, trigger: n });
}
function L(e, t) {
    a.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId: e, userId: t });
}
function w(e, t) {
    a.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId: e, userId: t });
}
function x(e, t) {
    a.h.dispatch({ type: "USER_SOUNDBOARD_SET_VOLUME", volume: e, location: t });
}
function M(e) {
    a.h.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: e });
}
