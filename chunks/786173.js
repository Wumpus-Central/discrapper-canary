n.d(t, { A: () => a });
var u = n(64700),
    l = n(512750),
    r = n(17928),
    i = n(71393),
    o = n(488803),
    s = n(383272),
    A = n(414133),
    _ = n(568065),
    E = n(652215);
function a(e, t) {
    let n = (0, o.C$)(e, "useGuildPowerupNewPerkMarketingVersion"),
        a = (0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(E.GuildFeatures.GAME_SERVERS)),
        d = (0, s.DD)(e, "useGuildPowerupNewPerkMarketingVersion"),
        G = (0, A.OS)("useGuildPowerupNewPerkMarketingVersion"),
        R = d && G;
    return u.useMemo(() => {
        let e = t?.allPowerups?.[l.d0] != null,
            u = t?.unlockedPowerups?.[l.d0] != null;
        if (R && e && !u) return _.QS.GUILD_THEME;
        let r = t?.allPowerups?.[l.zY] != null,
            i = t?.unlockedPowerups?.[l.zY] != null;
        return r && !i
            ? _.QS.FILE_UPLOAD_250_MB
            : Array.from(_.Q0[_.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some((e) => t?.unlockedPowerups?.[e] != null)
              ? n && !a
                  ? _.QS.GAME_SERVER_HOSTING
                  : Array.from(_.Q0[_.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => t?.unlockedPowerups?.[e] != null)
                    ? 0
                    : _.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE
              : _.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }, [t, n, a, R]);
}
