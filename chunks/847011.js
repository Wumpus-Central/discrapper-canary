a.d(t, { SK: () => h, bL: () => l, $_: () => f, p5: () => u, E1: () => o });
var r = a(201779),
    i = a(407905);
let s = [
        r.gr.HOME,
        r.gr.CHARACTER_UNAVAILABLE,
        r.gr.INTRODUCTION,
        r.gr.VOICE_GENERAL,
        r.gr.VOICE_FACE,
        r.gr.MESSAGES_GENERAL,
        r.gr.MESSAGES_OUTFIT,
        r.gr.SERVERS_GENERAL,
        r.gr.SERVERS_HEADWEAR,
        r.gr.EMOJI_GENERAL,
        r.gr.EMOJI_SHOES,
        r.gr.GAMES_GENERAL,
        r.gr.GAMES_WEARABLE,
        r.gr.GAME_TIME_GENERAL,
        r.gr.GAME_TIME_AURA,
        r.gr.FINALIZE_CHARACTER,
        r.gr.SUMMARY,
        r.gr.SHARE,
    ],
    n = [
        r.gr.HOME,
        r.gr.CHARACTER_UNAVAILABLE,
        r.gr.INTRODUCTION,
        r.gr.VOICE_INTRO,
        r.gr.VOICE_STATS,
        r.gr.VOICE_FACE,
        r.gr.MESSAGES_INTRO,
        r.gr.MESSAGES_STATS,
        r.gr.MESSAGES_OUTFIT,
        r.gr.SERVERS_INTRO,
        r.gr.SERVERS_STATS,
        r.gr.TOP_SERVER_STATS,
        r.gr.SERVERS_HEADWEAR,
        r.gr.EMOJI_INTRO,
        r.gr.EMOJI_STATS,
        r.gr.EMOJI_SHOES,
        r.gr.GAMES_INTRO,
        r.gr.GAMES_STATS,
        r.gr.GAMES_WEARABLE,
        r.gr.GAME_TIME_STATS,
        r.gr.GAME_TIME_AURA,
        r.gr.SQUAD_TRANSITION,
        r.gr.SQUAD,
        r.gr.SIDEKICK,
        r.gr.SIDEKICK_LEAVE,
        r.gr.FINALIZE_CHARACTER,
        r.gr.SUMMARY,
        r.gr.SHARE,
    ],
    c = {
        [r.gr.VOICE_INTRO]: (e) => !(0, i.Kr)(e),
        [r.gr.MESSAGES_INTRO]: (e) => !(0, i.nb)(e),
        [r.gr.SERVERS_INTRO]: (e) => !(0, i.jr)(e),
        [r.gr.EMOJI_INTRO]: (e) => !(0, i.y7)(e),
        [r.gr.GAMES_INTRO]: (e) => !(0, i.IH)(e),
    },
    d = {
        [r.gr.TOP_SERVER_STATS]: i.jr,
        [r.gr.SQUAD_TRANSITION]: i.$p,
        [r.gr.SQUAD]: i.$p,
        [r.gr.SIDEKICK]: i.oL,
        [r.gr.SIDEKICK_LEAVE]: i.oL,
    };
function l(e) {
    return e ? r.Np.SHARED_DATA : r.Np.NO_SHARED_DATA;
}
function o(e) {
    let { stats: t, character: a, isCharacterCreatorEnabled: r = !0 } = e;
    return r || null != a || null !== t;
}
function u(e) {
    let { flow: t, stats: a, character: i, isCharacterCreatorEnabled: l = !0 } = e;
    return (t === r.Np.SHARED_DATA ? n : s).filter((e) => {
        if (e === r.gr.CHARACTER_UNAVAILABLE) return !l;
        if (!l && (e === r.gr.INTRODUCTION || (0, r.Rq)(e))) return !1;
        if (e === r.gr.SUMMARY) return o({ stats: a, character: i, isCharacterCreatorEnabled: l });
        let t = c[e];
        if (null != t) return null != a && t(a);
        let s = d[e];
        return null == s || void 0 === a || s(a);
    });
}
function h(e) {
    let { currentRoute: t, direction: a, ...r } = e,
        i = u(r),
        s = i.indexOf(t);
    return -1 === s ? (i[0] ?? null) : (i[s + a] ?? null);
}
function f(e) {
    return (e.isCharacterCreatorEnabled ?? !0)
        ? (h({ ...e, currentRoute: r.gr.INTRODUCTION, direction: 1 }) ?? r.gr.INTRODUCTION)
        : r.gr.CHARACTER_UNAVAILABLE;
}
