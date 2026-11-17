a.d(t, { SK: () => h, bL: () => l, $_: () => f, p5: () => u, E1: () => o });
var i = a(201779),
    r = a(407905);
let n = [
        i.gr.HOME,
        i.gr.CHARACTER_UNAVAILABLE,
        i.gr.INTRODUCTION,
        i.gr.VOICE_GENERAL,
        i.gr.VOICE_FACE,
        i.gr.MESSAGES_GENERAL,
        i.gr.MESSAGES_OUTFIT,
        i.gr.SERVERS_GENERAL,
        i.gr.SERVERS_HEADWEAR,
        i.gr.EMOJI_GENERAL,
        i.gr.EMOJI_SHOES,
        i.gr.GAMES_GENERAL,
        i.gr.GAMES_WEARABLE,
        i.gr.GAME_TIME_GENERAL,
        i.gr.GAME_TIME_AURA,
        i.gr.FINALIZE_CHARACTER,
        i.gr.SUMMARY,
        i.gr.SHARE,
    ],
    s = [
        i.gr.HOME,
        i.gr.CHARACTER_UNAVAILABLE,
        i.gr.INTRODUCTION,
        i.gr.VOICE_INTRO,
        i.gr.VOICE_STATS,
        i.gr.VOICE_FACE,
        i.gr.MESSAGES_INTRO,
        i.gr.MESSAGES_STATS,
        i.gr.MESSAGES_OUTFIT,
        i.gr.SERVERS_INTRO,
        i.gr.SERVERS_STATS,
        i.gr.TOP_SERVER_STATS,
        i.gr.SERVERS_HEADWEAR,
        i.gr.EMOJI_INTRO,
        i.gr.EMOJI_STATS,
        i.gr.EMOJI_SHOES,
        i.gr.GAMES_INTRO,
        i.gr.GAMES_STATS,
        i.gr.GAMES_WEARABLE,
        i.gr.GAME_TIME_STATS,
        i.gr.GAME_TIME_AURA,
        i.gr.SQUAD_TRANSITION,
        i.gr.SQUAD,
        i.gr.SIDEKICK,
        i.gr.SIDEKICK_LEAVE,
        i.gr.FINALIZE_CHARACTER,
        i.gr.SUMMARY,
        i.gr.SHARE,
    ],
    c = {
        [i.gr.VOICE_INTRO]: (e) => !(0, r.Kr)(e),
        [i.gr.MESSAGES_INTRO]: (e) => !(0, r.nb)(e),
        [i.gr.SERVERS_INTRO]: (e) => !(0, r.jr)(e),
        [i.gr.EMOJI_INTRO]: (e) => !(0, r.y7)(e),
        [i.gr.GAMES_INTRO]: (e) => !(0, r.IH)(e),
    },
    d = {
        [i.gr.TOP_SERVER_STATS]: r.jr,
        [i.gr.SQUAD_TRANSITION]: r.$p,
        [i.gr.SQUAD]: r.$p,
        [i.gr.SIDEKICK]: r.oL,
        [i.gr.SIDEKICK_LEAVE]: r.oL,
    };
function l(e) {
    return e ? i.Np.SHARED_DATA : i.Np.NO_SHARED_DATA;
}
function o(e) {
    let { stats: t, character: a, isCharacterCreatorEnabled: i = !0 } = e;
    return i || null != a || null !== t;
}
function u(e) {
    let { flow: t, stats: a, character: r, isCharacterCreatorEnabled: l = !0 } = e;
    return (t === i.Np.SHARED_DATA ? s : n).filter((e) => {
        if (e === i.gr.CHARACTER_UNAVAILABLE) return !l;
        if (!l && (e === i.gr.INTRODUCTION || (0, i.Rq)(e))) return !1;
        if (e === i.gr.SUMMARY) return o({ stats: a, character: r, isCharacterCreatorEnabled: l });
        let t = c[e];
        if (null != t) return null != a && t(a);
        let n = d[e];
        return null == n || void 0 === a || n(a);
    });
}
function h(e) {
    let { currentRoute: t, direction: a, ...i } = e,
        r = u(i),
        n = r.indexOf(t);
    return -1 === n ? (r[0] ?? null) : (r[n + a] ?? null);
}
function f(e) {
    return (e.isCharacterCreatorEnabled ?? !0)
        ? (h({ ...e, currentRoute: i.gr.INTRODUCTION, direction: 1 }) ?? i.gr.INTRODUCTION)
        : i.gr.CHARACTER_UNAVAILABLE;
}
