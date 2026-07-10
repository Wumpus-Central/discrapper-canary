n.d(t, { A: () => d });
var u = n(64700),
    l = n(512750),
    r = n(17928);
n(557193);
var i = n(71393),
    o = n(576705),
    s = n(488803),
    A = n(383272),
    _ = n(414133),
    E = n(568065),
    a = n(652215);
function d(e, t) {
    let n = (0, s.C$)(e, "useGuildPowerupNewPerkMarketingVersion"),
        d = (0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(a.GuildFeatures.GAME_SERVERS)),
        G = (0, A.DD)(e, "useGuildPowerupNewPerkMarketingVersion"),
        R = (0, _.OS)("useGuildPowerupNewPerkMarketingVersion"),
        S = G && R,
        P = (0, r.bG)([o.A, i.A], () => o.A.can(a.xBc.MANAGE_GUILD, i.A.getGuild(e)));
    return u.useMemo(() => {
        t?.allPowerups?.[l.SL], t?.unlockedPowerups?.[l.SL];
        let e = t?.allPowerups?.[l.d0] != null,
            u = t?.unlockedPowerups?.[l.d0] != null;
        if (S && e && !u) return E.QS.GUILD_THEME;
        let r = t?.allPowerups?.[l.zY] != null,
            i = t?.unlockedPowerups?.[l.zY] != null;
        return r && !i
            ? E.QS.FILE_UPLOAD_250_MB
            : Array.from(E.Q0[E.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some((e) => t?.unlockedPowerups?.[e] != null)
              ? n && !d
                  ? E.QS.GAME_SERVER_HOSTING
                  : Array.from(E.Q0[E.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => t?.unlockedPowerups?.[e] != null)
                    ? 0
                    : E.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE
              : E.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }, [t, n, d, S, e, P]);
}
