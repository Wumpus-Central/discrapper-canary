n.d(t, { A: () => d });
var u = n(582128),
    l = n(512750),
    r = n(17928),
    i = n(831617);
n(557193);
var o = n(71393),
    s = n(576705),
    A = n(383272),
    E = n(414133),
    _ = n(568065),
    a = n(652215);
function d(e, t) {
    let n = (0, i.C$)(e, "useGuildPowerupNewPerkMarketingVersion"),
        d = (0, r.bG)([o.A], () => o.A.getGuild(e)?.features.has(a.GuildFeatures.GAME_SERVERS)),
        G = (0, A.DD)(e, "useGuildPowerupNewPerkMarketingVersion"),
        R = (0, E.OS)("useGuildPowerupNewPerkMarketingVersion"),
        P = (0, A.lY)(e, "useGuildPowerupNewPerkMarketingVersion"),
        S = G && R && !P,
        I = (0, r.bG)([s.A, o.A], () => s.A.can(a.xBc.MANAGE_GUILD, o.A.getGuild(e)));
    return u.useMemo(() => {
        (t?.allPowerups?.[l.SL], t?.unlockedPowerups?.[l.SL]);
        let e = t?.allPowerups?.[l.d0] != null,
            u = t?.unlockedPowerups?.[l.d0] != null;
        if (S && e && !u) return _.QS.GUILD_THEME;
        let r = t?.allPowerups?.[l.zY] != null,
            i = t?.unlockedPowerups?.[l.zY] != null;
        return r && !i
            ? _.QS.FILE_UPLOAD_250_MB
            : Array.from(_.Q0[_.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some((e) => t?.unlockedPowerups?.[e] != null)
              ? n && !d
                  ? _.QS.GAME_SERVER_HOSTING
                  : Array.from(_.Q0[_.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => t?.unlockedPowerups?.[e] != null)
                    ? 0
                    : _.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE
              : _.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }, [t, n, d, S, e, I]);
}
