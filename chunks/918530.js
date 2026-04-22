"use strict";
n.d(t, { A: () => A, I: () => C }), n(321073);
var i = n(64700),
    l = n(311907),
    s = n(931991),
    r = n(71393),
    a = n(576705),
    o = n(287809),
    c = n(473145),
    u = n(927578),
    d = n(209932),
    h = n(807348),
    m = n(805143),
    p = n(194567),
    f = n(980504),
    g = n(788868);
function _(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: h.uq.SOUND, sound: e, index: t }));
}
function x(e, t) {
    let n = t.get("0") ?? f.pD;
    e.push({ key: h.Cx.DEFAULTS, categoryInfo: { type: h.Cx.DEFAULTS }, items: _(n, p.U) });
}
function A(e) {
    let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        A = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        C = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        E = u.Ay.isPremium(C, g.PremiumTypes.TIER_2),
        [I, v, y] = (0, l.yK)([d.A], () => [d.A.getSounds(), d.A.getFavorites(), d.A.isFetching()]),
        S = (0, p.I)(),
        b = (0, m.Y)(e, !1),
        N = (0, l.yK)([r.A], () => {
            let e = [];
            return (
                b.forEach((t) => {
                    let n = r.A.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        T = u.Ay.canUseSoundboardEverywhere(C),
        j = (0, l.bG)([r.A], () => r.A.getGuild(e?.guild_id)),
        R = (0, l.bG)([a.A], () => {
            let { canCreateExpressions: e } = (0, s.ie)(j);
            return e;
        }, [j]);
    return i.useMemo(() => {
        let e = 0,
            i = 0,
            l = [];
        return A
            ? (x(l, I),
              {
                  categories: l,
                  availableSounds: I.get("0") ?? f.pD,
                  isFetching: y,
                  soundCounts: { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 },
              })
            : (!(function (e) {
                  let {
                          sections: t,
                          guildIds: n,
                          allSounds: i,
                          potentialSoundIdsForSection: l,
                          sectionType: s,
                          sortSoundsFn: r,
                      } = e,
                      a = {};
                  for (let e of [...n, "0"])
                      for (let t of i.get(e) ?? []) null != l.find((e) => e === t.soundId) && (a[t.soundId] = t);
                  let o = [];
                  for (let e of l) {
                      let t = a[e];
                      null != t && o.push(t);
                  }
                  let c = _(o, r);
                  c.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: c });
              })({
                  sections: l,
                  guildIds: b,
                  allSounds: I,
                  potentialSoundIdsForSection: Array.from(v),
                  sectionType: h.Cx.FAVORITES,
                  sortSoundsFn: p.U,
              }),
              void 0 !== j &&
                  (function (e, t, n) {
                      let {
                              currentGuildHasAddPermissions: i,
                              allSounds: l,
                              filterOutEmptyCurrentGuild: s,
                              sortSoundsFn: r,
                          } = n,
                          a = l.get(t.id) ?? [],
                          o = _(a, r),
                          u = a.length < (0, c.fA)(t) && i,
                          d = 0 === o.length;
                      (u || d) && !s && o.push({ type: h.uq.ADD_SOUND, guild: t }),
                          (s && d) ||
                              e.push({
                                  categoryInfo: { type: h.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                  key: t.id,
                                  items: o,
                              });
                  })(l, j, {
                      currentGuildHasAddPermissions: R,
                      allSounds: I,
                      filterOutEmptyCurrentGuild: t,
                      sortSoundsFn: S,
                  }),
              n || T || x(l, I),
              !(function (e) {
                  let { sections: t, guilds: n, currentGuildId: i, allSounds: l, hasNitro: s, sortSoundsFn: r } = e;
                  for (let e of n) {
                      if (e.id === i) continue;
                      let n = _(l.get(e.id) ?? [], r);
                      n.length > 0 &&
                          t.push({
                              categoryInfo: { type: h.Cx.GUILD, guild: e, isNitroLocked: !s },
                              key: e.id,
                              items: n,
                          });
                  }
              })({ sections: l, guilds: N, currentGuildId: j?.id, allSounds: I, hasNitro: E, sortSoundsFn: S }),
              (n || T) && x(l, I),
              l.forEach((t) => {
                  t.categoryInfo.type === h.Cx.GUILD &&
                      (t.categoryInfo.isNitroLocked ? (i += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: l,
                  availableSounds: Array.from(I.values()).flat(),
                  isFetching: y,
                  soundCounts: { favoriteSoundCount: v.size, unlockedCustomSoundCount: e, lockedCustomSoundCount: i },
              });
    }, [b, I, v, j, R, t, n, T, N, A, y, E, S]);
}
function C(e, t, n) {
    return i.useMemo(
        () => (n.length > 0 ? [{ key: h.Cx.SEARCH, categoryInfo: { type: h.Cx.SEARCH }, items: _(t) }] : e),
        [e, n.length, t],
    );
}
