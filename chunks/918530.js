"use strict";
n.d(t, { A: () => S, I: () => v }), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(931991),
    s = n(71393),
    o = n(576705),
    l = n(287809),
    u = n(473145),
    c = n(927578),
    d = n(209932),
    _ = n(807348),
    f = n(805143),
    h = n(194567),
    p = n(980504),
    g = n(788868);
function E(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: _.uq.SOUND, sound: e, index: t }));
}
function A(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: a, sortSoundsFn: s } = e,
        o = {};
    for (let e of [...n, "0"])
        for (let t of r.get(e) ?? []) null != i.find((e) => e === t.soundId) && (o[t.soundId] = t);
    let l = [];
    for (let e of i) {
        let t = o[e];
        null != t && l.push(t);
    }
    let u = E(l, s);
    u.length > 0 && t.push({ key: a, categoryInfo: { type: a }, items: u });
}
function I(e) {
    let { sections: t, guilds: n, currentGuildId: r, allSounds: i, hasNitro: a, sortSoundsFn: s } = e;
    for (let e of n) {
        if (e.id === r) continue;
        let n = E(i.get(e.id) ?? [], s);
        n.length > 0 &&
            t.push({ categoryInfo: { type: _.Cx.GUILD, guild: e, isNitroLocked: !a }, key: e.id, items: n });
    }
}
function T(e, t, n) {
    let { currentGuildHasAddPermissions: r, allSounds: i, filterOutEmptyCurrentGuild: a, sortSoundsFn: s } = n,
        o = i.get(t.id) ?? [],
        l = E(o, s),
        c = o.length < (0, u.fA)(t) && r,
        d = 0 === l.length;
    (c || d) && !a && l.push({ type: _.uq.ADD_SOUND, guild: t }),
        (a && d) || e.push({ categoryInfo: { type: _.Cx.GUILD, guild: t, isNitroLocked: !1 }, key: t.id, items: l });
}
function y(e, t) {
    let n = t.get("0") ?? p.pD;
    e.push({ key: _.Cx.DEFAULTS, categoryInfo: { type: _.Cx.DEFAULTS }, items: E(n, h.U) });
}
function S(e) {
    let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        E = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        S = c.Ay.isPremium(E, g.PremiumTypes.TIER_2),
        [v, C, b] = (0, i.yK)([d.A], () => [d.A.getSounds(), d.A.getFavorites(), d.A.isFetching()]),
        N = (0, h.I)(),
        R = (0, f.Y)(e, !1),
        O = (0, i.yK)([s.A], () => {
            let e = [];
            return (
                R.forEach((t) => {
                    let n = s.A.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        D = c.Ay.canUseSoundboardEverywhere(E),
        L = (0, i.bG)([s.A], () => s.A.getGuild(e?.guild_id)),
        w = (0, i.bG)([o.A], () => {
            let { canCreateExpressions: e } = (0, a.ie)(L);
            return e;
        }, [L]);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        return u
            ? (y(i, v),
              {
                  categories: i,
                  availableSounds: v.get("0") ?? p.pD,
                  isFetching: b,
                  soundCounts: { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 },
              })
            : (A({
                  sections: i,
                  guildIds: R,
                  allSounds: v,
                  potentialSoundIdsForSection: Array.from(C),
                  sectionType: _.Cx.FAVORITES,
                  sortSoundsFn: h.U,
              }),
              void 0 !== L &&
                  T(i, L, {
                      currentGuildHasAddPermissions: w,
                      allSounds: v,
                      filterOutEmptyCurrentGuild: t,
                      sortSoundsFn: N,
                  }),
              n || D || y(i, v),
              I({ sections: i, guilds: O, currentGuildId: L?.id, allSounds: v, hasNitro: S, sortSoundsFn: N }),
              (n || D) && y(i, v),
              i.forEach((t) => {
                  t.categoryInfo.type === _.Cx.GUILD &&
                      (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: i,
                  availableSounds: Array.from(v.values()).flat(),
                  isFetching: b,
                  soundCounts: { favoriteSoundCount: C.size, unlockedCustomSoundCount: e, lockedCustomSoundCount: r },
              });
    }, [R, v, C, L, w, t, n, D, O, u, b, S, N]);
}
function v(e, t, n) {
    return r.useMemo(
        () => (n.length > 0 ? [{ key: _.Cx.SEARCH, categoryInfo: { type: _.Cx.SEARCH }, items: E(t) }] : e),
        [e, n.length, t],
    );
}
