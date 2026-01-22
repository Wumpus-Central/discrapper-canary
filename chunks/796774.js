n.d(t, {
    CX: () => G,
    E7: () => N,
    Rp: () => D,
    dZ: () => M,
    eS: () => x,
    g0: () => k,
    iy: () => U,
    lT: () => R,
    nh: () => L,
    qP: () => j,
    ty: () => P,
    xV: () => w,
}),
    n(896048),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(157559),
    l = n(181658),
    c = n(594061),
    u = n(954571),
    d = n(449054),
    f = n(209932),
    p = n(807348),
    _ = n(766864),
    h = n(933204),
    m = n(980504),
    g = n(652215),
    E = n(355097),
    b = n(985018);
let y = !1,
    O = async () => {
        try {
            let e = (
                await a.Bo.get({
                    url: g.Rsh.SOUNDBOARD_DEFAULT_SOUNDS,
                    rejectWithError: !1,
                })
            ).body.map((e) => (0, p.N0)(e, m.mV));
            s.h.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                soundboardSounds: e,
            });
        } catch (e) {
            throw (s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" }), new l.A(e));
        }
    },
    A = async () => {
        let e = new Map();
        try {
            let t = (
                await a.Bo.get({
                    url: g.Rsh.TOP_SOUNDS_FOR_GUILDS,
                    rejectWithError: !1,
                    timeout: 1000,
                })
            ).body;
            Object.entries(t.top_sounds_by_guild).forEach((t) => {
                let [n, r] = t;
                e.set(n, r.map(p.pJ));
            }),
                s.h.dispatch({
                    type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS",
                    topSoundsForGuilds: e,
                });
        } catch (e) {
            s.h.dispatch({ type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE" });
        }
    },
    v = (e) =>
        new Promise((t) => {
            let n = () => {
                s.h.unsubscribe(e, n), setTimeout(t, 0);
            };
            s.h.subscribe(e, n);
        }),
    S = (e) =>
        new Promise((t) => {
            let n = new Map();
            e.forEach((r) => {
                let i = () => {
                    e.forEach((e) => {
                        let t = n.get(e);
                        null != t && s.h.unsubscribe(e, t);
                    }),
                        setTimeout(t, 0);
                };
                n.set(r, i), s.h.subscribe(r, i);
            });
        }),
    I = () => {
        if (!f.A.shouldFetchDefaultSounds()) return Promise.resolve();
        s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
        let e = v("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
        return (0, _.aY)("maybeFetchDefaultSounds") && A(), O(), e;
    },
    T = () => {
        let e = (0, h.I)();
        if (0 === e.length) return Promise.resolve();
        let t = v("SOUNDBOARD_SOUNDS_RECEIVED");
        return (
            s.h.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
            s.h.dispatch({
                type: "REQUEST_SOUNDBOARD_SOUNDS",
                guildIds: e,
            }),
            t
        );
    },
    C = () => {
        if (!f.A.shouldFetchTopSoundsForGuilds()) return Promise.resolve();
        s.h.dispatch({ type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH" });
        let e = S(["SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS", "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE"]);
        return A(), e;
    },
    N = async () => {
        if (__OVERLAY__) return s.h.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]);
        let e = performance.now(),
            t = !y;
        y = !0;
        let n = await Promise.all([I(), T(), C()]);
        if (t) {
            let t = performance.now() - e;
            u.default.track(g.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: t });
        }
        return n;
    };
async function R(e) {
    let { guildId: t, name: n, sound: r, volume: i, emojiId: s, emojiName: o } = e,
        l = await a.Bo.post({
            url: g.Rsh.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: r,
                volume: i,
                emoji_id: s,
                emoji_name: o,
            },
            rejectWithError: !1,
        });
    return (0, p.N0)(l.body, t);
}
async function w(e) {
    let { guildId: t, soundId: n, name: r, volume: i, emojiId: s, emojiName: o } = e,
        l = await a.Bo.patch({
            url: g.Rsh.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: r,
                volume: i,
                emoji_id: s,
                emoji_name: o,
            },
            rejectWithError: !1,
        });
    return (0, p.N0)(l.body, t);
}
async function P(e, t) {
    await a.Bo.del({
        url: g.Rsh.GUILD_SOUNDBOARD_SOUND(e, t),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
function D(e) {
    c.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            i().size(t.soundIds) >= 250
                ? (o.A.show({
                      title: b.intl.string(b.t["+XYXtZ"]),
                      body: b.intl.formatToPlainString(b.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        E.Sb.INFREQUENT_USER_ACTION,
    );
}
function x(e) {
    c.bW.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        E.Sb.INFREQUENT_USER_ACTION,
    );
}
async function L(e, t) {
    try {
        let n = await a.Bo.get({
            url: g.Rsh.SOUNDBOARD_SOUND_GUILD_DATA(e, t),
            rejectWithError: !1,
        });
        return null != n.body ? (0, d.jE)(n.body) : null;
    } catch (e) {
        throw new l.A(e);
    }
}
function j(e, t, n) {
    s.h.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
        sound: t,
        channelId: e,
        trigger: n,
    });
}
function M(e, t) {
    s.h.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
        soundId: e,
        userId: t,
    });
}
function k(e, t) {
    s.h.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
        soundId: e,
        userId: t,
    });
}
function U(e, t) {
    s.h.dispatch({
        type: "USER_SOUNDBOARD_SET_VOLUME",
        volume: e,
        location: t,
    });
}
function G(e) {
    s.h.dispatch({
        type: "SOUNDBOARD_MUTE_JOIN_SOUND",
        channelId: e,
    });
}
