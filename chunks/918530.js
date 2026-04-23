"use strict";
n.d(t, { A: () => A, I: () => I }), n(321073);
var r = n(64700),
    i = n(311907),
    s = n(931991),
    a = n(71393),
    o = n(576705),
    l = n(287809),
    u = n(473145),
    c = n(927578),
    d = n(209932),
    _ = n(807348),
    f = n(805143),
    p = n(194567),
    h = n(980504),
    E = n(788868);
function m(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: _.uq.SOUND, sound: e, index: t }));
}
function g(e, t) {
    let n = t.get("0") ?? h.pD;
    e.push({ key: _.Cx.DEFAULTS, categoryInfo: { type: _.Cx.DEFAULTS }, items: m(n, p.U) });
}
function A(e) {
    let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        A = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        I = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        T = c.Ay.isPremium(I, E.PremiumTypes.TIER_2),
        [S, y, N] = (0, i.yK)([d.A], () => [d.A.getSounds(), d.A.getFavorites(), d.A.isFetching()]),
        v = (0, p.I)(),
        C = (0, f.Y)(e, !1),
        O = (0, i.yK)([a.A], () => {
            let e = [];
            return (
                C.forEach((t) => {
                    let n = a.A.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        R = c.Ay.canUseSoundboardEverywhere(I),
        b = (0, i.bG)([a.A], () => a.A.getGuild(e?.guild_id)),
        D = (0, i.bG)([o.A], () => {
            let { canCreateExpressions: e } = (0, s.ie)(b);
            return e;
        }, [b]);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        return A
            ? (g(i, S),
              {
                  categories: i,
                  availableSounds: S.get("0") ?? h.pD,
                  isFetching: N,
                  soundCounts: { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 },
              })
            : (!(function (e) {
                  let {
                          sections: t,
                          guildIds: n,
                          allSounds: r,
                          potentialSoundIdsForSection: i,
                          sectionType: s,
                          sortSoundsFn: a,
                      } = e,
                      o = {};
                  for (let e of [...n, "0"])
                      for (let t of r.get(e) ?? []) null != i.find((e) => e === t.soundId) && (o[t.soundId] = t);
                  let l = [];
                  for (let e of i) {
                      let t = o[e];
                      null != t && l.push(t);
                  }
                  let u = m(l, a);
                  u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
              })({
                  sections: i,
                  guildIds: C,
                  allSounds: S,
                  potentialSoundIdsForSection: Array.from(y),
                  sectionType: _.Cx.FAVORITES,
                  sortSoundsFn: p.U,
              }),
              void 0 !== b &&
                  (function (e, t, n) {
                      let {
                              currentGuildHasAddPermissions: r,
                              allSounds: i,
                              filterOutEmptyCurrentGuild: s,
                              sortSoundsFn: a,
                          } = n,
                          o = i.get(t.id) ?? [],
                          l = m(o, a),
                          c = o.length < (0, u.fA)(t) && r,
                          d = 0 === l.length;
                      (c || d) && !s && l.push({ type: _.uq.ADD_SOUND, guild: t }),
                          (s && d) ||
                              e.push({
                                  categoryInfo: { type: _.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                  key: t.id,
                                  items: l,
                              });
                  })(i, b, {
                      currentGuildHasAddPermissions: D,
                      allSounds: S,
                      filterOutEmptyCurrentGuild: t,
                      sortSoundsFn: v,
                  }),
              n || R || g(i, S),
              !(function (e) {
                  let { sections: t, guilds: n, currentGuildId: r, allSounds: i, hasNitro: s, sortSoundsFn: a } = e;
                  for (let e of n) {
                      if (e.id === r) continue;
                      let n = m(i.get(e.id) ?? [], a);
                      n.length > 0 &&
                          t.push({
                              categoryInfo: { type: _.Cx.GUILD, guild: e, isNitroLocked: !s },
                              key: e.id,
                              items: n,
                          });
                  }
              })({ sections: i, guilds: O, currentGuildId: b?.id, allSounds: S, hasNitro: T, sortSoundsFn: v }),
              (n || R) && g(i, S),
              i.forEach((t) => {
                  t.categoryInfo.type === _.Cx.GUILD &&
                      (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: i,
                  availableSounds: Array.from(S.values()).flat(),
                  isFetching: N,
                  soundCounts: { favoriteSoundCount: y.size, unlockedCustomSoundCount: e, lockedCustomSoundCount: r },
              });
    }, [C, S, y, b, D, t, n, R, O, A, N, T, v]);
}
function I(e, t, n) {
    return r.useMemo(
        () => (n.length > 0 ? [{ key: _.Cx.SEARCH, categoryInfo: { type: _.Cx.SEARCH }, items: m(t) }] : e),
        [e, n.length, t],
    );
}
