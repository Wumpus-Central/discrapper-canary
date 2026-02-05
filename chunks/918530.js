"use strict";
n.d(t, { Ay: () => C, Ip: () => b }), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(931991),
    s = n(594061),
    o = n(71393),
    l = n(576705),
    u = n(287809),
    c = n(473145),
    d = n(927578),
    _ = n(477851),
    f = n(163956),
    p = n(209932),
    h = n(807348),
    m = n(805143),
    g = n(194567),
    E = n(980504),
    A = n(788868);
function I(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: h.uq.SOUND, sound: e, index: t }));
}
function T(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: a, sortSoundsFn: s } = e,
        o = {};
    for (let e of [...n, "0"])
        for (let t of r.get(e) ?? []) null != i.find((e) => e === t.soundId) && (o[t.soundId] = t);
    let l = [];
    for (let e of i) {
        let t = o[e];
        null != t && l.push(t);
    }
    let u = I(l, s);
    u.length > 0 && t.push({ key: a, categoryInfo: { type: a }, items: u });
}
function y(e) {
    let { sections: t, guilds: n, currentGuildId: r, allSounds: i, hasNitro: a, sortSoundsFn: s } = e;
    for (let e of n) {
        if (e.id === r) continue;
        let n = I(i.get(e.id) ?? [], s);
        n.length > 0 &&
            t.push({ categoryInfo: { type: h.Cx.GUILD, guild: e, isNitroLocked: !a }, key: e.id, items: n });
    }
}
function S(e, t, n) {
    let { currentGuildHasAddPermissions: r, allSounds: i, filterOutEmptyCurrentGuild: a, sortSoundsFn: s } = n,
        o = i.get(t.id) ?? [],
        l = I(o, s),
        u = o.length < (0, c.fA)(t) && r,
        d = 0 === l.length;
    (u || d) && !a && l.push({ type: h.uq.ADD_SOUND, guild: t }),
        (a && d) || e.push({ categoryInfo: { type: h.Cx.GUILD, guild: t, isNitroLocked: !1 }, key: t.id, items: l });
}
function v(e, t) {
    let n = t.get("0") ?? E.pD;
    e.push({ key: h.Cx.DEFAULTS, categoryInfo: { type: h.Cx.DEFAULTS }, items: I(n, g.U) });
}
function C(e) {
    let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        I = d.Ay.isPremium(c, A.PremiumTypes.TIER_2),
        [C, b, R] = (0, i.yK)([p.A], () => [p.A.getSounds(), p.A.getFavorites(), p.A.isFetching()]),
        O = (0, g.I)(),
        D = (0, m.Y)(e, !1),
        L = (0, i.yK)([o.A], () => {
            let e = [];
            return (
                D.forEach((t) => {
                    let n = o.A.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        w = d.Ay.canUseSoundboardEverywhere(c),
        x = (0, i.bG)([o.A], () => o.A.getGuild(e?.guild_id)),
        P = (0, i.bG)([l.A], () => {
            let { canCreateExpressions: e } = (0, a.ie)(x);
            return e;
        }, [x]),
        { canSeeRecentlyHeard: M, canSeeFrequentlyPlayed: k } = (0, _.d)({
            location: "soundboard-useSoundGrid",
            autoTrackExposure: !0,
        }),
        U = N(),
        G = (0, i.yK)([f.A], () => f.A.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        return s
            ? (v(i, C),
              {
                  categories: i,
                  availableSounds: C.get("0") ?? E.pD,
                  isFetching: R,
                  soundCounts: { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 },
              })
            : (T({
                  sections: i,
                  guildIds: D,
                  allSounds: C,
                  potentialSoundIdsForSection: Array.from(b),
                  sectionType: h.Cx.FAVORITES,
                  sortSoundsFn: g.U,
              }),
              M &&
                  T({
                      sections: i,
                      guildIds: D,
                      allSounds: C,
                      potentialSoundIdsForSection: G,
                      sectionType: h.Cx.RECENTLY_HEARD,
                  }),
              k &&
                  T({
                      sections: i,
                      guildIds: D,
                      allSounds: C,
                      potentialSoundIdsForSection: U.map((e) => e.soundId),
                      sectionType: h.Cx.FREQUENTLY_USED,
                  }),
              void 0 !== x &&
                  S(i, x, {
                      currentGuildHasAddPermissions: P,
                      allSounds: C,
                      filterOutEmptyCurrentGuild: t,
                      sortSoundsFn: O,
                  }),
              n || w || v(i, C),
              y({ sections: i, guilds: L, currentGuildId: x?.id, allSounds: C, hasNitro: I, sortSoundsFn: O }),
              (n || w) && v(i, C),
              i.forEach((t) => {
                  t.categoryInfo.type === h.Cx.GUILD &&
                      (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: i,
                  availableSounds: Array.from(C.values()).flat(),
                  isFetching: R,
                  soundCounts: { favoriteSoundCount: b.size, unlockedCustomSoundCount: e, lockedCustomSoundCount: r },
              });
    }, [D, C, b, G, U, k, M, x, P, t, n, w, L, s, R, I, O]);
}
function b(e, t, n) {
    return r.useMemo(
        () => (n.length > 0 ? [{ key: h.Cx.SEARCH, categoryInfo: { type: h.Cx.SEARCH }, items: I(t) }] : e),
        [e, n.length, t],
    );
}
function N() {
    return (
        r.useEffect(() => {
            s.bW.loadIfNecessary();
        }, []),
        (0, i.bG)([f.A], () => f.A.frecentlyPlayedSounds)
    );
}
