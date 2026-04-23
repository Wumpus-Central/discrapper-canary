n.d(t, {
    CX: () => M,
    E7: () => f,
    Rp: () => L,
    dZ: () => b,
    eS: () => D,
    g0: () => U,
    iy: () => P,
    lT: () => C,
    nh: () => h,
    qP: () => g,
    ty: () => m,
    xV: () => p,
}),
    n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    _ = n(157559),
    l = n(181658),
    o = n(594061),
    E = n(954571),
    d = n(449054),
    c = n(209932),
    u = n(807348),
    I = n(933204);
n(980504);
var A = n(652215),
    T = n(355097),
    S = n(985018);
let N = !1,
    O = async () => {
        try {
            let e = (await a.Bo.get({ url: A.Rsh.SOUNDBOARD_DEFAULT_SOUNDS, rejectWithError: !1 })).body.map((e) =>
                (0, u.N0)(e, "0"),
            );
            s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds: e });
        } catch (e) {
            throw (s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" }), new l.A(e));
        }
    },
    R = (e) =>
        new Promise((t) => {
            let n = () => {
                s.h.unsubscribe(e, n), setTimeout(t, 0);
            };
            s.h.subscribe(e, n);
        }),
    f = async (e) => {
        if (__OVERLAY__) return s.h.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]);
        let t = performance.now(),
            n = e?.disableAnalytics ?? !1,
            i = !N && !n;
        i && (N = !0);
        let r = await Promise.all([
            (() => {
                if (!c.A.shouldFetchDefaultSounds()) return Promise.resolve();
                s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
                let e = R("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
                return O(), e;
            })(),
            (() => {
                let e = (0, I.I)();
                if (0 === e.length) return Promise.resolve();
                let t = R("SOUNDBOARD_SOUNDS_RECEIVED");
                return (
                    s.h.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
                    s.h.dispatch({ type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: e }),
                    t
                );
            })(),
        ]);
        if (i) {
            let e = performance.now();
            E.default.track(A.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: e - t });
        }
        return r;
    };
async function C(e) {
    let { guildId: t, name: n, sound: i, volume: r, emojiId: s, emojiName: _ } = e,
        l = await a.Bo.post({
            url: A.Rsh.GUILD_SOUNDBOARD_SOUNDS(t),
            body: { name: n, sound: i, volume: r, emoji_id: s, emoji_name: _ },
            rejectWithError: !1,
        });
    return (0, u.N0)(l.body, t);
}
async function p(e) {
    let { guildId: t, soundId: n, name: i, volume: r, emojiId: s, emojiName: _ } = e,
        l = await a.Bo.patch({
            url: A.Rsh.GUILD_SOUNDBOARD_SOUND(t, n),
            body: { name: i, volume: r, emoji_id: s, emoji_name: _ },
            rejectWithError: !1,
        });
    return (0, u.N0)(l.body, t);
}
async function m(e, t) {
    await a.Bo.del({ url: A.Rsh.GUILD_SOUNDBOARD_SOUND(e, t), oldFormErrors: !0, rejectWithError: !1 });
}
function L(e) {
    o.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            r().size(t.soundIds) >= 250
                ? (_.A.show({
                      title: S.intl.string(S.t["+XYXtZ"]),
                      body: S.intl.formatToPlainString(S.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function D(e) {
    o.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
async function h(e, t) {
    try {
        let n = await a.Bo.get({ url: A.Rsh.SOUNDBOARD_SOUND_GUILD_DATA(e, t), rejectWithError: !1 });
        return null != n.body ? (0, d.jE)(n.body) : null;
    } catch (e) {
        throw new l.A(e);
    }
}
function g(e, t, n) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound: t, channelId: e, trigger: n });
}
function b(e, t) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId: e, userId: t });
}
function U(e, t) {
    s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId: e, userId: t });
}
function P(e, t) {
    s.h.dispatch({ type: "USER_SOUNDBOARD_SET_VOLUME", volume: e, location: t });
}
function M(e) {
    s.h.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: e });
}
