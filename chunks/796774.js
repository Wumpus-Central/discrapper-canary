n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(620632),
    s = n(73153),
    l = n(157559),
    o = n(181658),
    d = n(39418),
    c = n(594061),
    u = n(129230),
    _ = n(449054),
    E = n(209932),
    A = n(807348),
    h = n(933204);
n(980504);
var f = n(652215),
    I = n(355097),
    p = n(792996);
let m = !1;
function g(e) {
    return new Promise((t) => {
        s.h.subscribe(e, function n() {
            (s.h.unsubscribe(e, n), setTimeout(t, 0));
        });
    });
}
n.d(
    t,
    {},
    {
        E7: async function (e) {
            if (__OVERLAY__)
                return (s.h.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]));
            let t = performance.now(),
                n = e?.disableAnalytics ?? !1,
                i = !m && !n;
            i && (m = !0);
            let r = await Promise.all([
                (function () {
                    if (!E.A.shouldFetchDefaultSounds()) return Promise.resolve();
                    s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
                    let e = g("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
                    return (
                        !(async function () {
                            try {
                                let e = (
                                    await a.Bo.get({
                                        url: f.Rsh.SOUNDBOARD_DEFAULT_SOUNDS,
                                        rejectWithError: (0, a.fT)(),
                                    })
                                ).body.map((e) => (0, A.N0)(e, "0"));
                                s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds: e });
                            } catch (e) {
                                (s.h.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" }),
                                    (0, d.o)(new o.A(e)));
                            }
                        })(),
                        e
                    );
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
                u.default.track(f.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: e - t });
            }
            return r;
        },
        Rp: function (e) {
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
                I.Sb.INFREQUENT_USER_ACTION,
            );
        },
        dZ: function (e, t) {
            s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId: e, userId: t });
        },
        eS: function (e) {
            c.bW.updateAsync(
                "favoriteSoundboardSounds",
                (t) => {
                    ((t.soundIds = t.soundIds.filter((t) => t !== e)),
                        (t.orderedSoundIds = t.orderedSoundIds.filter((t) => t !== e)));
                },
                I.Sb.INFREQUENT_USER_ACTION,
            );
        },
        g0: function (e, t) {
            s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId: e, userId: t });
        },
        iy: function (e, t) {
            s.h.dispatch({ type: "USER_SOUNDBOARD_SET_VOLUME", volume: e, location: t });
        },
        lT: async function (e) {
            let { guildId: t, name: n, sound: i, volume: r, emojiId: s, emojiName: l } = e,
                o = await a.Bo.post({
                    url: f.Rsh.GUILD_SOUNDBOARD_SOUNDS(t),
                    body: { name: n, sound: i, volume: r, emoji_id: s, emoji_name: l },
                    rejectWithError: (0, a.fT)(),
                });
            return (0, A.N0)(o.body, t);
        },
        nh: async function (e, t) {
            try {
                let n = await a.Bo.get({ url: f.Rsh.SOUNDBOARD_SOUND_GUILD_DATA(e, t), rejectWithError: (0, a.fT)() });
                return null != n.body ? (0, _.jE)(n.body) : null;
            } catch (e) {
                throw new o.A(e);
            }
        },
        qP: function (e, t) {
            s.h.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound: t, channelId: e });
        },
        ty: async function (e, t) {
            await a.Bo.del({
                url: f.Rsh.GUILD_SOUNDBOARD_SOUND(e, t),
                oldFormErrors: !0,
                rejectWithError: (0, a.fT)(),
            });
        },
        xV: async function (e) {
            let { guildId: t, soundId: n, name: i, volume: r, emojiId: s, emojiName: l } = e,
                o = await a.Bo.patch({
                    url: f.Rsh.GUILD_SOUNDBOARD_SOUND(t, n),
                    body: { name: i, volume: r, emoji_id: s, emoji_name: l },
                    rejectWithError: (0, a.fT)(),
                });
            return (0, A.N0)(o.body, t);
        },
    },
);
