n.d(t, {
    FA: () => N,
    If: () => I,
    Nc: () => p,
    Q8: () => f,
    XI: () => O,
    kb: () => T,
    mf: () => A,
    ps: () => m,
    wD: () => C,
});
var i = n(468311),
    r = n(706121),
    a = n(329605),
    s = n(985747),
    l = n(67915),
    o = n(839492),
    d = n(118531),
    c = n(127639),
    u = n(377529),
    _ = n(218546),
    E = n(32623);
function A(e, t) {
    let n = (function (e, t) {
        if (null == t) return null;
        switch (e) {
            case c.V.FACE:
                return t.voice?.totalVoiceMinutesPercentile ?? null;
            case c.V.OUTFIT:
                return t.messages?.numMessagesSentPercentile ?? null;
            case c.V.HAT:
                return t.guilds?.guilds[0]?.numDaysInteractedPercentile ?? null;
            case c.V.SHOES:
                return t.emojis?.numEmojisSentPercentile ?? null;
            case c.V.WEARABLE:
                return t.games?.totalGamesPlayedPercentile ?? null;
            case c.V.AURA:
                return t.games?.totalDaysPlayedPercentile ?? null;
            case c.V.BASE:
                return null;
        }
    })(e, t);
    return new Set(
        Object.values(_.K).filter((e) => {
            if (e === _.K.DEFAULT || e === _.K.NITRO) return !0;
            let t = u.og[e];
            return null != t && null != n && n >= t;
        }),
    );
}
function h(e) {
    return Object.values(e).filter((e) => "number" == typeof e);
}
let f = {
        [c.V.FACE]: u.fx,
        [c.V.OUTFIT]: u.Vb,
        [c.V.HAT]: u.$P,
        [c.V.SHOES]: u.O5,
        [c.V.WEARABLE]: u.He,
        [c.V.AURA]: u.r6,
        [c.V.BASE]: u.dW,
    },
    I = {
        [c.V.FACE]: E.FI,
        [c.V.OUTFIT]: E.zk,
        [c.V.HAT]: E.Bb,
        [c.V.SHOES]: E.Ck,
        [c.V.WEARABLE]: E.bO,
        [c.V.AURA]: E.PE,
        [c.V.BASE]: E.np,
    },
    p = {
        [c.V.FACE]: h(a.D),
        [c.V.OUTFIT]: h(l.r),
        [c.V.HAT]: h(s.N),
        [c.V.SHOES]: h(o._),
        [c.V.WEARABLE]: h(d.Z),
        [c.V.AURA]: h(i.X),
        [c.V.BASE]: h(r.R),
    },
    T = {
        [c.V.OUTFIT]: l.r.NONE,
        [c.V.HAT]: s.N.NONE,
        [c.V.SHOES]: o._.NONE,
        [c.V.WEARABLE]: d.Z.NONE,
        [c.V.AURA]: i.X.NONE,
    },
    m = [
        l.r.NONE,
        l.r.BADDIE_DEFAULT,
        l.r.TRAVELER_DEFAULT,
        l.r.STREAMER_DEFAULT,
        l.r.CAMPER_DEFAULT,
        l.r.ATHLETE_DEFAULT,
        l.r.COWPOKE_DEFAULT,
        l.r.GOTH_DEFAULT,
        l.r.ASTRONAUT_DEFAULT,
        l.r.JESTER_DEFAULT,
        l.r.TRASH_CAN_DEFAULT,
        l.r.MAGE_DEFAULT,
        l.r.MECH_DEFAULT,
        l.r.KNIGHT_DEFAULT,
        l.r.MAGICAL_DEFAULT,
    ],
    g = {
        [l.r.NONE]: l.r.NONE,
        [l.r.BADDIE_DEFAULT]: l.r.BADDIE_DEFAULT,
        [l.r.TRAVELER_DEFAULT]: l.r.TRAVELER_DEFAULT,
        [l.r.STREAMER_DEFAULT]: l.r.STREAMER_DEFAULT,
        [l.r.CAMPER_DEFAULT]: l.r.CAMPER_DEFAULT,
        [l.r.ATHLETE_DEFAULT]: l.r.ATHLETE_DEFAULT,
        [l.r.COWPOKE_DEFAULT]: l.r.COWPOKE_DEFAULT,
        [l.r.GOTH_DEFAULT]: l.r.GOTH_DEFAULT,
        [l.r.ASTRONAUT_DEFAULT]: l.r.ASTRONAUT_DEFAULT,
        [l.r.JESTER_DEFAULT]: l.r.JESTER_DEFAULT,
        [l.r.TRASH_CAN_DEFAULT]: l.r.TRASH_CAN_DEFAULT,
        [l.r.MAGE_DEFAULT]: l.r.MAGE_DEFAULT,
        [l.r.MECH_DEFAULT]: l.r.MECH_DEFAULT,
        [l.r.KNIGHT_DEFAULT]: l.r.KNIGHT_DEFAULT,
        [l.r.MAGICAL_DEFAULT]: l.r.MAGICAL_DEFAULT,
        [l.r.BADDIE_MONOCHROME]: l.r.BADDIE_DEFAULT,
        [l.r.BADDIE_VIOLET]: l.r.BADDIE_DEFAULT,
        [l.r.BADDIE_PASTEL]: l.r.BADDIE_DEFAULT,
        [l.r.BADDIE_SUNSET]: l.r.BADDIE_DEFAULT,
        [l.r.TRAVELER_HAZE]: l.r.TRAVELER_DEFAULT,
        [l.r.TRAVELER_MOSS]: l.r.TRAVELER_DEFAULT,
        [l.r.TRAVELER_CHRONO]: l.r.TRAVELER_DEFAULT,
        [l.r.TRAVELER_UMBER]: l.r.TRAVELER_DEFAULT,
        [l.r.STREAMER_FLAMES]: l.r.STREAMER_DEFAULT,
        [l.r.STREAMER_STRIPES]: l.r.STREAMER_DEFAULT,
        [l.r.STREAMER_SMILEY]: l.r.STREAMER_DEFAULT,
        [l.r.STREAMER_VINTAGE]: l.r.STREAMER_DEFAULT,
        [l.r.CAMPER_PLAID]: l.r.CAMPER_DEFAULT,
        [l.r.CAMPER_SWAMP]: l.r.CAMPER_DEFAULT,
        [l.r.CAMPER_GLAMP]: l.r.CAMPER_DEFAULT,
        [l.r.CAMPER_AMBER]: l.r.CAMPER_DEFAULT,
        [l.r.ATHLETE_BLOCKED]: l.r.ATHLETE_DEFAULT,
        [l.r.ATHLETE_FADED]: l.r.ATHLETE_DEFAULT,
        [l.r.ATHLETE_CHECKERED]: l.r.ATHLETE_DEFAULT,
        [l.r.ATHLETE_LINED]: l.r.ATHLETE_DEFAULT,
        [l.r.COWPOKE_ONYX]: l.r.COWPOKE_DEFAULT,
        [l.r.COWPOKE_STEEL]: l.r.COWPOKE_DEFAULT,
        [l.r.COWPOKE_DENIM]: l.r.COWPOKE_DEFAULT,
        [l.r.COWPOKE_BLUSH]: l.r.COWPOKE_DEFAULT,
        [l.r.GOTH_SIREN]: l.r.GOTH_DEFAULT,
        [l.r.GOTH_SERPENT]: l.r.GOTH_DEFAULT,
        [l.r.GOTH_RAVEN]: l.r.GOTH_DEFAULT,
        [l.r.GOTH_VAMP]: l.r.GOTH_DEFAULT,
        [l.r.ASTRONAUT_STARDUST]: l.r.ASTRONAUT_DEFAULT,
        [l.r.ASTRONAUT_MARTIAN]: l.r.ASTRONAUT_DEFAULT,
        [l.r.ASTRONAUT_SOLAR]: l.r.ASTRONAUT_DEFAULT,
        [l.r.ASTRONAUT_COSMIC]: l.r.ASTRONAUT_DEFAULT,
        [l.r.JESTER_CONFETTI]: l.r.JESTER_DEFAULT,
        [l.r.JESTER_CARNIVAL]: l.r.JESTER_DEFAULT,
        [l.r.JESTER_SUNRISE]: l.r.JESTER_DEFAULT,
        [l.r.JESTER_NIGHTFALL]: l.r.JESTER_DEFAULT,
        [l.r.TRASH_CAN_BLACKOUT]: l.r.TRASH_CAN_DEFAULT,
        [l.r.TRASH_CAN_CAUTION]: l.r.TRASH_CAN_DEFAULT,
        [l.r.TRASH_CAN_BUBBLEGUM]: l.r.TRASH_CAN_DEFAULT,
        [l.r.TRASH_CAN_TOXIC]: l.r.TRASH_CAN_DEFAULT,
        [l.r.MAGE_SHADOW]: l.r.MAGE_DEFAULT,
        [l.r.MAGE_DUSK]: l.r.MAGE_DEFAULT,
        [l.r.MAGE_WILDWOOD]: l.r.MAGE_DEFAULT,
        [l.r.MAGE_WINTER]: l.r.MAGE_DEFAULT,
        [l.r.MECH_AERO]: l.r.MECH_DEFAULT,
        [l.r.MECH_VIPER]: l.r.MECH_DEFAULT,
        [l.r.MECH_ULTRAVIOLET]: l.r.MECH_DEFAULT,
        [l.r.MECH_SANDSTORM]: l.r.MECH_DEFAULT,
        [l.r.KNIGHT_IRON]: l.r.KNIGHT_DEFAULT,
        [l.r.KNIGHT_RUST]: l.r.KNIGHT_DEFAULT,
        [l.r.KNIGHT_PETAL]: l.r.KNIGHT_DEFAULT,
        [l.r.KNIGHT_GLACIER]: l.r.KNIGHT_DEFAULT,
        [l.r.MAGICAL_SAPPHIRE]: l.r.MAGICAL_DEFAULT,
        [l.r.MAGICAL_AMETHYST]: l.r.MAGICAL_DEFAULT,
        [l.r.MAGICAL_FROST]: l.r.MAGICAL_DEFAULT,
        [l.r.MAGICAL_CITRINE]: l.r.MAGICAL_DEFAULT,
    },
    S = Object.entries(g).reduce((e, t) => {
        let [n, i] = t;
        return { ...e, [i]: [...(e[i] ?? []), Number(n)] };
    }, {});
function N(e) {
    return g[e];
}
function C(e) {
    let t = g[e];
    return null != t ? S[t] : [];
}
function O(e) {
    return {
        base: e[c.V.BASE] ?? r.R.ICY,
        shoes: e[c.V.SHOES] ?? o._.NONE,
        outfit: e[c.V.OUTFIT] ?? l.r.NONE,
        face: e[c.V.FACE] ?? a.D.CHILL,
        hat: e[c.V.HAT] ?? s.N.NONE,
        wearable: e[c.V.WEARABLE] ?? d.Z.NONE,
        aura: e[c.V.AURA] ?? i.X.NONE,
    };
}
