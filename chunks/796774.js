n.d(t, {
    CX: () => U,
    E7: () => p,
    Rp: () => R,
    dZ: () => b,
    eS: () => g,
    g0: () => M,
    iy: () => P,
    lT: () => m,
    nh: () => L,
    qP: () => D,
    ty: () => C,
    xV: () => O,
}),
    n(321073);
var i = n(735438),
    a = n.n(i),
    r = n(636537),
    s = n(228366),
    l = n(157559),
    o = n(181658),
    d = n(594061),
    c = n(954571),
    _ = n(449054),
    E = n(209932),
    u = n(807348),
    A = n(933204);
n(980504);
var I = n(652215),
    T = n(355097),
    h = n(985018);
let S = !1,
    N = async () => {
        try {
            let e = (await r.Bo.get({ url: I.Rsh.SOUNDBOARD_DEFAULT_SOUNDS, rejectWithError: !1 })).body.map((e) =>
                (0, u.N0)(e, "0"),
            );
            s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds: e });
        } catch (e) {
            throw (s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" }), new o.A(e));
        }
    },
    f = (e) =>
        new Promise((t) => {
            let n = () => {
                s.h.unsubscribe(e, n), setTimeout(t, 0);
            };
            s.h.subscribe(e, n);
        }),
    p = async (e) => {
        if (__OVERLAY__) return s.h.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]);
        let t = performance.now(),
            n = e?.disableAnalytics ?? !1,
            i = !S && !n;
        i && (S = !0);
        let a = await Promise.all([
            (() => {
                if (!E.A.shouldFetchDefaultSounds()) return Promise.resolve();
                s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
                let e = f("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
                return N(), e;
            })(),
            (() => {
                let e = (0, A.I)();
                if (0 === e.length) return Promise.resolve();
                let t = f("SOUNDBOARD_SOUNDS_RECEIVED");
                return (
                    s.h.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
                    s.h.dispatch({ type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: e }),
                    t
                );
            })(),
        ]);
        if (i) {
            let e = performance.now();
            c.default.track(I.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: e - t });
        }
        return a;
    };
async function m(e) {
    let { guildId: t, name: n, sound: i, volume: a, emojiId: s, emojiName: l } = e,
        o = await r.Bo.post({
            url: I.Rsh.GUILD_SOUNDBOARD_SOUNDS(t),
            body: { name: n, sound: i, volume: a, emoji_id: s, emoji_name: l },
            rejectWithError: !1,
        });
    return (0, u.N0)(o.body, t);
}
async function O(e) {
    let { guildId: t, soundId: n, name: i, volume: a, emojiId: s, emojiName: l } = e,
        o = await r.Bo.patch({
            url: I.Rsh.GUILD_SOUNDBOARD_SOUND(t, n),
            body: { name: i, volume: a, emoji_id: s, emoji_name: l },
            rejectWithError: !1,
        });
    return (0, u.N0)(o.body, t);
}
async function C(e, t) {
    await r.Bo.del({ url: I.Rsh.GUILD_SOUNDBOARD_SOUND(e, t), oldFormErrors: !0, rejectWithError: !1 });
}
function R(e) {
    d.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            a().size(t.soundIds) >= 250
                ? (l.A.show({
                      title: h.intl.string(h.t["+XYXtZ"]),
                      body: h.intl.formatToPlainString(h.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function g(e) {
    d.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
async function L(e, t) {
    try {
        let n = await r.Bo.get({ url: I.Rsh.SOUNDBOARD_SOUND_GUILD_DATA(e, t), rejectWithError: !1 });
        return null != n.body ? (0, _.jE)(n.body) : null;
    } catch (e) {
        throw new o.A(e);
    }
}
function D(e, t, n) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound: t, channelId: e, trigger: n });
}
function b(e, t) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId: e, userId: t });
}
function M(e, t) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId: e, userId: t });
}
function P(e, t) {
    s.h.dispatch({ type: "USER_SOUNDBOARD_SET_VOLUME", volume: e, location: t });
}
function U(e) {
    s.h.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: e });
}
